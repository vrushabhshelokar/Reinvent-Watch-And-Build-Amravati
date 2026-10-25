import { NextRequest, NextResponse } from "next/server";
import { getVisitorCounts, recordVisitor } from "@/lib/visitor-store";

const BOT_USER_AGENT_REGEX =
  /bot|crawler|spider|crawling|lighthouse|headlesschrome|googlebot|bingbot|yandex|duckduckbot|baiduspider|slurp|facebookexternalhit|whatsapp|telegrambot/i;

function isBotOrPrefetch(request: NextRequest): boolean {
  // Check Next.js / browser prefetch headers
  const purpose = request.headers.get("purpose");
  const secPurpose = request.headers.get("sec-purpose");
  const xPurpose = request.headers.get("x-purpose");

  if (
    purpose === "prefetch" ||
    secPurpose === "prefetch" ||
    xPurpose === "preview" ||
    request.headers.get("x-moz") === "prefetch"
  ) {
    return true;
  }

  // Check automated bot user-agents
  const userAgent = request.headers.get("user-agent") || "";
  if (BOT_USER_AGENT_REGEX.test(userAgent)) {
    return true;
  }

  return false;
}

/**
 * GET /api/visitors
 * Read-only endpoint to get current counts. Does not increment.
 */
export async function GET() {
  try {
    const stats = await getVisitorCounts();

    return NextResponse.json(
      {
        success: true,
        totalVisits: stats.totalVisits,
        uniqueVisitors: stats.uniqueVisitors,
        configured: stats.configured,
        storage: stats.storage,
      },
      {
        headers: {
          "Cache-Control": "private, no-cache, no-store, must-revalidate",
        },
      }
    );
  } catch (err) {
    console.error("[API GET /visitors] Error:", err);
    return NextResponse.json(
      {
        success: false,
        totalVisits: null,
        uniqueVisitors: null,
        configured: false,
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/visitors
 * Records a page visit using persistent cookie-based visitor ID & session window.
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Guard against prefetch and automated bot crawls
    if (isBotOrPrefetch(request)) {
      const stats = await getVisitorCounts();
      return NextResponse.json(
        {
          success: true,
          totalVisits: stats.totalVisits,
          uniqueVisitors: stats.uniqueVisitors,
          configured: stats.configured,
          ignored: true,
        },
        {
          headers: {
            "Cache-Control": "private, no-cache, no-store, must-revalidate",
          },
        }
      );
    }

    // 2. Resolve or generate persistent visitor ID (1-year cookie)
    let visitorId = request.cookies.get("rwba_vid")?.value;
    const isFirstTimeVisitor = !visitorId || visitorId.length < 16;

    if (isFirstTimeVisitor) {
      visitorId = crypto.randomUUID();
    }

    // 3. Resolve session ID (30-minute window cookie) to prevent refresh spamming
    const sessionCookie = request.cookies.get("rwba_sid")?.value;
    const isNewSession = !sessionCookie;

    // 4. Record visit atomically in storage
    const { stats, isNewUnique, isNewVisit } = await recordVisitor(
      visitorId as string,
      isNewSession
    );

    const response = NextResponse.json(
      {
        success: true,
        totalVisits: stats.totalVisits,
        uniqueVisitors: stats.uniqueVisitors,
        configured: stats.configured,
        storage: stats.storage,
        isNewUnique,
        isNewVisit,
      },
      {
        headers: {
          "Cache-Control": "private, no-cache, no-store, must-revalidate",
        },
      }
    );

    // 5. Set persistent first-party cookies with secure flags
    const isProd = process.env.NODE_ENV === "production";

    // 1-year persistent visitor cookie
    response.cookies.set("rwba_vid", visitorId as string, {
      httpOnly: true,
      sameSite: "lax",
      secure: isProd,
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 365 days
    });

    // 30-minute session deduplication cookie
    if (isNewSession) {
      const newSessionId = crypto.randomUUID();
      response.cookies.set("rwba_sid", newSessionId, {
        httpOnly: true,
        sameSite: "lax",
        secure: isProd,
        path: "/",
        maxAge: 60 * 30, // 30 minutes
      });
    }

    return response;
  } catch (err) {
    console.error("[API POST /visitors] Error:", err);
    return NextResponse.json(
      {
        success: false,
        totalVisits: null,
        uniqueVisitors: null,
        configured: false,
      },
      { status: 500 }
    );
  }
}
