export interface AgendaBlock {
  blockTitle: string;
  timeEstimate: string;
  description: string;
  type: "Keynote Watch" | "Technical Talk" | "Builder Demo" | "Networking & Discussion" | "Break";
  statusNote: string;
}

export const agendaStatus = {
  isFinalized: false,
  statusLabel: "Agenda In Final Review",
  announcementNote:
    "The organizing committee is actively finalizing the timetable, keynote stream selections, and speaker lineup. The planned schedule breakdown is outlined below.",
};

export const provisionalAgenda: AgendaBlock[] = [
  {
    blockTitle: "Welcome & Community Check-in",
    timeEstimate: "Session 01",
    description:
      "Attendee check-in, orientation, introduction to the Amravati builder community, and overview of the day's goals.",
    type: "Break",
    statusNote: "Timings TBA upon venue confirmation",
  },
  {
    blockTitle: "Keynote Highlights & Watch Session",
    timeEstimate: "Session 02",
    description:
      "Curated watch party highlighting groundbreaking announcements, generative AI advancements, and compute innovations from re:Invent.",
    type: "Keynote Watch",
    statusNote: "Curated stream selection in progress",
  },
  {
    blockTitle: "Cloud Architecture Deep-Dive",
    timeEstimate: "Session 03",
    description:
      "Student-friendly technical breakdown: dissecting real-world cloud architectures, serverless design patterns, and cost-effective student setups.",
    type: "Technical Talk",
    statusNote: "Speaker session awaiting final sign-off",
  },
  {
    blockTitle: "Builder Showcase & Demo Arena",
    timeEstimate: "Session 04",
    description:
      "Live interactive demonstrations of projects built by student builders and open-source contributors from local colleges.",
    type: "Builder Demo",
    statusNote: "Call for student demos open",
  },
  {
    blockTitle: "Community Networking & Wrap-up",
    timeEstimate: "Session 05",
    description:
      "Open networking, group discussion on upcoming community hackathons, Q&A, and distribution of verified participation perks.",
    type: "Networking & Discussion",
    statusNote: "Closing session",
  },
];
