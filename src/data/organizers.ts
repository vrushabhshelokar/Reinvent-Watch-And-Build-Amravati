import { OrganizerMember } from "@/types/event";

export const organizingCommitteeConfig = {
  isRosterFinalized: false,
  rosterNote:
    "Student organizing committee details are being verified with campus authorities and faculty liaisons. Official leads and team roles will be displayed upon formal approval.",
};

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
