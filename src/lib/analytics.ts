/**
 * Analytics utility adhering to SEO-Analytics.md and Architecture.md guidelines:
 * - Privacy conscious: Zero attendee PII (no names, emails, or personal identifiers)
 * - Tracks registration CTA clicks with placement tags
 * - Graceful fallback: Never blocks or delays navigation
 */

export type CtaPlacement =
  | "navbar"
  | "hero"
  | "event_strip"
  | "agenda"
  | "benefits"
  | "venue_faq"
  | "final_cta"
  | "sticky_mobile";

export interface AnalyticsEvent {
  name: "registration_cta_click" | "page_view" | "section_view";
  placement?: CtaPlacement;
  targetUrl?: string;
  timestamp?: number;
}

/**
 * Tracks a registration CTA click safely
 */
export function trackCtaClick(placement: CtaPlacement, targetUrl?: string): void {
  const eventData: AnalyticsEvent = {
    name: "registration_cta_click",
    placement,
    targetUrl: targetUrl || "https://lu.ma",
    timestamp: Date.now(),
  };

  try {
    // 1. Console debugging in development
    if (process.env.NODE_ENV !== "production") {
      console.log("[Analytics Event]:", eventData);
    }

    // 2. Window custom event for any analytics bridge or GTM/Vercel hook
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("event_analytics", { detail: eventData }));

      // 3. Optional Vercel Analytics custom event if window.va is available
      // @ts-expect-error - Vercel analytics attaches to window.va
      if (typeof window.va === "function") {
        // @ts-expect-error - dynamic call
        window.va("event", { name: "registration_cta_click", data: { placement } });
      }
    }
  } catch {
    // Fail silently — never break user navigation or interactions
  }
}

/**
 * Tracks generic page view safely
 */
export function trackPageView(pagePath: string): void {
  try {
    if (process.env.NODE_ENV !== "production") {
      console.log("[Analytics PageView]:", pagePath);
    }
  } catch {
    // Fail silently
  }
}
