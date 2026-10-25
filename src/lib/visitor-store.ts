import fs from "fs";
import path from "path";

export interface VisitorStats {
  totalVisits: number | null;
  uniqueVisitors: number | null;
  configured: boolean;
  storage: "redis" | "file" | "none";
}

// In-process lock for file-based atomic transactions
let fileLockPromise = Promise.resolve();

function getRedisConfig(): { url: string; token: string } | null {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    return { url: url.replace(/\/$/, ""), token };
  }
  return null;
}

/**
 * Executes a REST command or pipeline against Upstash / Vercel KV
 */
async function executeRedisPipeline(
  commands: (string | number)[][],
  config: { url: string; token: string }
): Promise<Array<{ result?: unknown; error?: string }>> {
  const response = await fetch(`${config.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Redis pipeline failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * File-backed persistent storage implementation (for local development & testing)
 */
interface FileStorageData {
  totalVisits: number;
  uniqueVisitors: string[];
}

function getLocalDataFilePath(): string {
  const dataDir = path.join(process.cwd(), ".data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return path.join(dataDir, "visitor-stats.json");
}

function readLocalData(): FileStorageData {
  const filePath = getLocalDataFilePath();
  if (!fs.existsSync(filePath)) {
    return { totalVisits: 0, uniqueVisitors: [] };
  }
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      totalVisits: typeof parsed.totalVisits === "number" ? parsed.totalVisits : 0,
      uniqueVisitors: Array.isArray(parsed.uniqueVisitors) ? parsed.uniqueVisitors : [],
    };
  } catch {
    return { totalVisits: 0, uniqueVisitors: [] };
  }
}

function writeLocalData(data: FileStorageData): void {
  const filePath = getLocalDataFilePath();
  const tempPath = `${filePath}.${Date.now()}.${Math.random().toString(36).substring(2, 8)}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tempPath, filePath);
}

/**
 * Reads current visitor counts without incrementing (Idempotent / Read-only)
 */
export async function getVisitorCounts(): Promise<VisitorStats> {
  const redis = getRedisConfig();

  if (redis) {
    try {
      const results = await executeRedisPipeline(
        [
          ["GET", "rwba:total_visits"],
          ["SCARD", "rwba:unique_visitors"],
        ],
        redis
      );

      const rawTotal = results[0]?.result;
      const rawUnique = results[1]?.result;

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
    }
  }

  // Local development / fallback
  if (process.env.NODE_ENV !== "production" || !redis) {
    const data = readLocalData();
    return {
      totalVisits: data.totalVisits,
      uniqueVisitors: data.uniqueVisitors.length,
      configured: true,
      storage: "file",
    };
  }

  return {
    totalVisits: null,
    uniqueVisitors: null,
    configured: false,
    storage: "none",
  };
}

/**
 * Records a page visit with atomic total & unique counting
 *
 * @param visitorId Persistent opaque identifier (from rwba_vid cookie)
 * @param isNewSession Boolean indicating if this is a fresh session (true) or refresh/same session (false)
 */
export async function recordVisitor(
  visitorId: string,
  isNewSession: boolean
): Promise<{ stats: VisitorStats; isNewUnique: boolean; isNewVisit: boolean }> {
  const redis = getRedisConfig();

  if (redis) {
    try {
      const commands: (string | number)[][] = [];

      // 1. Check & Add to unique set (atomic SADD)
      commands.push(["SADD", "rwba:unique_visitors", visitorId]);

      // 2. Increment total visits only if fresh visit session
      if (isNewSession) {
        commands.push(["INCR", "rwba:total_visits"]);
      } else {
        commands.push(["GET", "rwba:total_visits"]);
      }

      // 3. Get total unique count
      commands.push(["SCARD", "rwba:unique_visitors"]);

      const results = await executeRedisPipeline(commands, redis);

      const saddResult = Number(results[0]?.result ?? 0);
      const isNewUnique = saddResult === 1;

      const rawTotal = results[1]?.result;
      const totalVisits = rawTotal !== null && rawTotal !== undefined ? Number(rawTotal) : 0;

      const rawUnique = results[2]?.result;
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
    }
  }

  // Local development / file storage mode with mutex serialization
  return new Promise((resolve) => {
    fileLockPromise = fileLockPromise
      .then(async () => {
        const data = readLocalData();
        const isNewUnique = !data.uniqueVisitors.includes(visitorId);

        if (isNewUnique) {
          data.uniqueVisitors.push(visitorId);
        }

        if (isNewSession) {
          data.totalVisits += 1;
        }

        if (isNewUnique || isNewSession) {
          writeLocalData(data);
        }

        resolve({
          stats: {
            totalVisits: data.totalVisits,
            uniqueVisitors: data.uniqueVisitors.length,
            configured: true,
            storage: "file",
          },
          isNewUnique,
          isNewVisit: isNewSession,
        });
      })
      .catch(() => {
        resolve({
          stats: {
            totalVisits: null,
            uniqueVisitors: null,
            configured: false,
            storage: "none",
          },
          isNewUnique: false,
          isNewVisit: false,
        });
      });
  });
}
