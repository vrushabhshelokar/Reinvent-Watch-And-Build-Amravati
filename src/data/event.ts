import { EventConfig } from "@/types/event";

/**
 * Raw Event Configuration
 * Contains explicit placeholders for unconfirmed fields as defined in Architecture.md and PRD.md.
 * Do not replace these with invented values until organizers supply verified details.
 */
export const rawEventConfig: EventConfig = {
  name: "Reinvent Watch And Build — Amravati",
  shortName: "re:Invent Watch & Build",
  edition: "Amravati Edition",
  locationLabel: "Amravati, Maharashtra",
  tagline: "Watch. Learn. Build. Connect.",
  description:
    "A student-focused gathering to explore cloud technology, learn from re:Invent announcements, and connect with fellow builders in Amravati.",
  entryFee: 0,
  entryFeeLabel: "Free Entry · ₹0",
  date: "[CONFIRM: EVENT_DATE]",
  startTime: "[CONFIRM: EVENT_START_TIME]",
  endTime: "[CONFIRM: EVENT_END_TIME]",
  timeZone: "Asia/Kolkata",
  timeDisplay: "[CONFIRM: EVENT_START_TIME / END_TIME]",
  venueName: "[CONFIRM: VENUE_NAME]",
  venueAddress: "[CONFIRM: FULL_ADDRESS]",
  venueCity: "Amravati, Maharashtra",
  format: "[CONFIRM: IN-PERSON / HYBRID]",
  lumaUrl: "[CONFIRM: LUMA_REGISTRATION_URL]",
  productionUrl: "[CONFIRM: PRODUCTION_DOMAIN]",
  contactEmail: "organizers.amravati@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    discord: "https://discord.com",
  },
};

/**
 * Utility to detect unresolved placeholders
 */
export function isPlaceholder(value: string | undefined): boolean {
  if (!value) return true;
  return value.includes("[CONFIRM:") || value.startsWith("[CONFIRM");
}

/**
 * Display-safe event configuration for presentation
 * Formats unresolved items gracefully for user presentation while maintaining placeholder state
 */
export const displayEventConfig = {
  ...rawEventConfig,
  displayDate: isPlaceholder(rawEventConfig.date)
    ? "Dates to be announced soon"
    : rawEventConfig.date,
  displayTime: isPlaceholder(rawEventConfig.timeDisplay)
    ? "Schedule & timings TBA (IST)"
    : `${rawEventConfig.startTime} – ${rawEventConfig.endTime} IST`,
  displayVenue: isPlaceholder(rawEventConfig.venueName)
    ? "Venue in Amravati to be announced"
    : rawEventConfig.venueName,
  displayAddress: isPlaceholder(rawEventConfig.venueAddress)
    ? "Amravati, Maharashtra (Exact location announced upon registration)"
    : rawEventConfig.venueAddress,
  displayFormat: isPlaceholder(rawEventConfig.format)
    ? "In-Person Community Gathering"
    : rawEventConfig.format,
  isLumaReady: !isPlaceholder(rawEventConfig.lumaUrl),
  safeLumaUrl: isPlaceholder(rawEventConfig.lumaUrl)
    ? "#register"
    : rawEventConfig.lumaUrl,
};
