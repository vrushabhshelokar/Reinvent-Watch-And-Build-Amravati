import { Redis } from "@upstash/redis";

export interface VisitorStats {
  totalVisits: number | null;
  uniqueVisitors: number | null;
  configured: boolean;
  storage: "redis" | "none";
}

const REDIS_TOTAL_KEY = "rwba:total_visits";
const REDIS_UNIQUE_KEY = "rwba:unique_visitors";

// Initial baseline preserved from pre-migration records
const PRE_MIGRATION_BASE = {
  totalVisits: 31,
  uniqueVisitors: [
    "ecc575ce-0762-4b54-af66-600b279feac8",
    "2a4bc990-aca8-4e88-8995-fd6e8d106add",
    "test-concurrent-1792940528598",
    "c77f0e00-8709-431d-b06a-6a283cc2b23d",
    "6de2e7c7-897a-4712-accd-8ea64128da55",
    "e387263a-19df-4d1c-8dd6-360b981fed7e",
    "fadf1c5d-2970-4067-95b9-6033d795fc10",
    "d93d88c0-bc77-4050-948b-37e924bcba8a",
    "0ebeed6e-88f9-41cd-937a-58a2782df568",
    "0cbd5754-3127-4b12-886e-17830b7a5720",
    "5e69403d-acd9-4575-9dae-4b3a1a228144",
    "883537b9-9fcb-4bd7-86c2-8234be7d5a9b",
    "05b45f2a-04a4-4020-b7f6-f315ed84fefd",
    "1af28f94-4b00-4551-9c61-109775e69f3d",
    "36d6110d-5615-44bb-bd0f-4949c22707bf",
  ],
};

let hasAttemptedSeed = false;

/**
 * Resolves an Upstash Redis client using standard Vercel Marketplace
 * environment variables (UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN)
 * or Vercel KV environment variables (KV_REST_API_URL / KV_REST_API_TOKEN).
 */
export function getRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (url && token) {
    try {
      return new Redis({ url, token });
    } catch (err) {
      console.error("[VisitorStore] Error creating Redis instance:", err);
      return null;
    }
  }

  return null;
}

/**
 * Seeds pre-migration baseline data if keys are newly created in Redis.
 * Uses atomic SETNX so existing production values are never overwritten.
 */
async function ensureSeeded(redis: Redis): Promise<void> {
  if (hasAttemptedSeed) return;
  hasAttemptedSeed = true;

  try {
    // setnx only sets if key does not exist
    await redis.setnx(REDIS_TOTAL_KEY, PRE_MIGRATION_BASE.totalVisits);
    if (PRE_MIGRATION_BASE.uniqueVisitors.length > 0) {
      const [first, ...rest] = PRE_MIGRATION_BASE.uniqueVisitors;
      await redis.sadd(REDIS_UNIQUE_KEY, first, ...rest);
    }
  } catch (err) {
    console.warn("[VisitorStore] Pre-migration seed check warning:", err);
  }
}

/**
 * Reads current visitor counts without incrementing (Idempotent / Read-only)
 */
export async function getVisitorCounts(): Promise<VisitorStats> {
  const redis = getRedisClient();

  if (!redis) {
    return {
      totalVisits: null,
      uniqueVisitors: null,
      configured: false,
      storage: "none",
    };
  }

  try {
    await ensureSeeded(redis);

    const pipeline = redis.pipeline();
    pipeline.get(REDIS_TOTAL_KEY);
    pipeline.scard(REDIS_UNIQUE_KEY);
    const [rawTotal, rawUnique] = await pipeline.exec<[unknown, number]>();

    const totalVisits = rawTotal !== null && rawTotal !== undefined ? Number(rawTotal) : 0;
    const uniqueVisitors = rawUnique !== null && rawUnique !== undefined ? Number(rawUnique) : 0;

    return {
      totalVisits,
      uniqueVisitors,
      configured: true,
      storage: "redis",
    };
  } catch (err) {
    console.error("[VisitorStore] Redis read error:", err);
    return {
      totalVisits: null,
      uniqueVisitors: null,
      configured: false,
      storage: "none",
    };
  }
}

/**
 * Records a page visit with atomic total & unique counting in Redis
 *
 * @param visitorId Persistent opaque identifier (from rwba_vid cookie)
 * @param isNewSession Boolean indicating whether this is a fresh visit session (true) or same-session refresh (false)
 */
export async function recordVisitor(
  visitorId: string,
  isNewSession: boolean
): Promise<{ stats: VisitorStats; isNewUnique: boolean; isNewVisit: boolean }> {
  const redis = getRedisClient();

  if (!redis) {
    return {
      stats: {
        totalVisits: null,
        uniqueVisitors: null,
        configured: false,
        storage: "none",
      },
      isNewUnique: false,
      isNewVisit: false,
    };
  }

  try {
    await ensureSeeded(redis);

    const pipeline = redis.pipeline();

    // 1. Atomically add to unique set (returns 1 if new, 0 if already existed)
    pipeline.sadd(REDIS_UNIQUE_KEY, visitorId);

    // 2. Increment total visits only if fresh visit session (prevents refresh inflation)
    if (isNewSession) {
      pipeline.incr(REDIS_TOTAL_KEY);
    } else {
      pipeline.get(REDIS_TOTAL_KEY);
    }

    // 3. Atomically query total unique visitors count
    pipeline.scard(REDIS_UNIQUE_KEY);

    const [saddResult, rawTotal, rawUnique] = await pipeline.exec<[number, unknown, number]>();

    const isNewUnique = Number(saddResult ?? 0) === 1;
    const totalVisits = rawTotal !== null && rawTotal !== undefined ? Number(rawTotal) : 0;
    const uniqueVisitors = rawUnique !== null && rawUnique !== undefined ? Number(rawUnique) : 0;

    return {
      stats: {
        totalVisits,
        uniqueVisitors,
        configured: true,
        storage: "redis",
      },
      isNewUnique,
      isNewVisit: isNewSession,
    };
  } catch (err) {
    console.error("[VisitorStore] Redis record error:", err);
    return {
      stats: {
        totalVisits: null,
        uniqueVisitors: null,
        configured: false,
        storage: "none",
      },
      isNewUnique: false,
      isNewVisit: false,
    };
  }
}
