import { rawEventConfig, isPlaceholder } from "@/data/event";
import { agendaStatus } from "@/data/agenda";
import { organizingCommitteeConfig } from "@/data/organizers";
import { pastEventsConfig } from "@/data/pastEvents";

export interface ValidationItem {
  field: string;
  category: "P0 — Launch Blocker" | "P1 — Important" | "P2 — Optional";
  placeholderPattern: string;
  currentValue: string;
  isResolved: boolean;
  requiredAction: string;
}

export interface LaunchGateReport {
  isLaunchReady: boolean;
  totalChecks: number;
  resolvedChecks: number;
  blockersCount: number;
  items: ValidationItem[];
}

/**
 * Validates the current project configuration against the pre-release content gate
 * defined in Release.md and Architecture.md.
 */
export function validateLaunchConfig(): LaunchGateReport {
  const items: ValidationItem[] = [
    {
      field: "Event Date",
      category: "P0 — Launch Blocker",
      placeholderPattern: "[CONFIRM: EVENT_DATE]",
      currentValue: rawEventConfig.date,
      isResolved: !isPlaceholder(rawEventConfig.date),
      requiredAction: "Organizers must supply confirmed calendar date (e.g. November 2026).",
    },
    {
      field: "Event Start & End Time",
      category: "P0 — Launch Blocker",
      placeholderPattern: "[CONFIRM: EVENT_START_TIME / END_TIME]",
      currentValue: rawEventConfig.timeDisplay,
      isResolved: !isPlaceholder(rawEventConfig.startTime) && !isPlaceholder(rawEventConfig.endTime),
      requiredAction: "Organizers must confirm session start and end times in IST.",
    },
    {
      field: "Venue Name & Full Address",
      category: "P0 — Launch Blocker",
      placeholderPattern: "[CONFIRM: VENUE_NAME / FULL_ADDRESS]",
      currentValue: `${rawEventConfig.venueName}, ${rawEventConfig.venueAddress}`,
      isResolved: !isPlaceholder(rawEventConfig.venueName) && !isPlaceholder(rawEventConfig.venueAddress),
      requiredAction: "Organizers must confirm the college auditorium or venue in Amravati.",
    },
    {
      field: "Luma Registration URL",
      category: "P0 — Launch Blocker",
      placeholderPattern: "[CONFIRM: LUMA_REGISTRATION_URL]",
      currentValue: rawEventConfig.lumaUrl,
      isResolved: !isPlaceholder(rawEventConfig.lumaUrl) && rawEventConfig.lumaUrl.startsWith("https://lu.ma"),
      requiredAction: "Create and publish the official Luma event, then copy the live HTTPS URL.",
    },
    {
      field: "Production Domain",
      category: "P0 — Launch Blocker",
      placeholderPattern: "[CONFIRM: PRODUCTION_DOMAIN]",
      currentValue: rawEventConfig.productionUrl,
      isResolved: !isPlaceholder(rawEventConfig.productionUrl) && rawEventConfig.productionUrl.startsWith("https://"),
      requiredAction: "Configure custom production domain on Vercel and verify DNS.",
    },
    {
      field: "Final Agenda & Speakers",
      category: "P1 — Important",
      placeholderPattern: "[CONFIRM: FINAL_AGENDA_AND_SPEAKERS]",
      currentValue: agendaStatus.isFinalized ? "Finalized" : "Pending Sign-off",
      isResolved: agendaStatus.isFinalized,
      requiredAction: "Confirm student session speakers, watch party timetable, and demo slots.",
    },
    {
      field: "Organizers & Community Roster",
      category: "P1 — Important",
      placeholderPattern: "[CONFIRM: ORGANIZERS_AND_COMMUNITY_GROUPS]",
      currentValue: organizingCommitteeConfig.isRosterFinalized ? "Finalized" : "Pending Approval",
      isResolved: organizingCommitteeConfig.isRosterFinalized,
      requiredAction: "Confirm student lead names, roles, and faculty permissions.",
    },
    {
      field: "Authentic Photo Archives",
      category: "P1 — Important",
      placeholderPattern: "[CONFIRM: AUTHENTIC_COMMUNITY_PHOTOS]",
      currentValue: pastEventsConfig.isAvailable ? "Available" : "Awaiting Photos",
      isResolved: pastEventsConfig.isAvailable,
      requiredAction: "Collect high-resolution photographs from past campus meetups with consent.",
    },
  ];

  const blockers = items.filter((item) => item.category === "P0 — Launch Blocker" && !item.isResolved);
  const resolved = items.filter((item) => item.isResolved);

  return {
    isLaunchReady: blockers.length === 0,
    totalChecks: items.length,
    resolvedChecks: resolved.length,
    blockersCount: blockers.length,
    items,
  };
}
