import { CommitteeMember, OrganizerMember } from "@/types/event";

export const organizingCommitteeConfig = {
  isRosterFinalized: false,
  rosterNote:
    "Student organizing committee details are being verified with campus authorities. Official committee roster and student leads will be updated upon formal approval.",
};

/**
 * Committee Members
 * Reusable data structure for committee member cards.
 * Uses clearly identified demo portraits and placeholder values until official details are finalized.
 * Replace items below to update members without modifying layout components.
 */
export const committeeMembers: CommitteeMember[] = [
  {
    id: "lead-organizer",
    name: "[Demo: Lead Organizer]",
    position: "Lead Organizer & Event Director",
    college: "Engineering College, Amravati",
    photo: "/images/organizer-1.jpg",
    isPlaceholder: true,
  },
  {
    id: "tech-lead",
    name: "[Demo: Technical Lead]",
    position: "Cloud Tracks & Architecture Lead",
    college: "Technology Institute, Amravati",
    photo: "/images/organizer-2.jpg",
    isPlaceholder: true,
  },
  {
    id: "outreach-lead",
    name: "[Demo: Community Outreach]",
    position: "Campus Ambassador Coordinator",
    college: "Polytechnic Campus, Amravati",
    photo: "/images/organizer-3.jpg",
    isPlaceholder: true,
  },
  {
    id: "ops-lead",
    name: "[Demo: Operations Lead]",
    position: "Venue & Student Experience",
    college: "University Department, Amravati",
    photo: "/images/organizer-4.jpg",
    isPlaceholder: true,
  },
];

/**
 * Backward-compatible provisional organizers roster
 */
export const provisionalOrganizers: OrganizerMember[] = [
  {
    id: "lead-org",
    name: "Student Community Lead",
    role: "Lead Organizer & Event Director",
    team: "Lead",
    affiliation: "AWS Student Builder Group — Amravati",
    initials: "CL",
    isConfirmed: false,
  },
  {
    id: "tech-lead",
    name: "Technical Architecture Lead",
    role: "Track & Demo Curator",
    team: "Tech",
    affiliation: "Student Developer Network",
    initials: "TL",
    isConfirmed: false,
  },
  {
    id: "outreach-lead",
    name: "Campus Ambassador Lead",
    role: "Community & College Outreach",
    team: "Outreach",
    affiliation: "Amravati Student Builders",
    initials: "OL",
    isConfirmed: false,
  },
  {
    id: "ops-lead",
    name: "Operations & Logistics Lead",
    role: "Venue Coordination & Registrations",
    team: "Operations",
    affiliation: "Student Organizing Council",
    initials: "OL",
    isConfirmed: false,
  },
];
