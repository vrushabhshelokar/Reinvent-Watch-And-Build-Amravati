import { BenefitItem } from "@/types/event";

export const benefitsData: BenefitItem[] = [
  {
    id: "free-entry",
    title: "100% Free Entry",
    description:
      "Zero registration fees. Open to all college students, aspiring cloud engineers, and developer enthusiasts.",
    tag: "Free · ₹0",
    isConfirmed: true,
    iconName: "ticket",
  },
  {
    id: "meet-builders",
    title: "Meet Fellow Builders",
    description:
      "Connect with passionate student developers, cloud architects, and campus leaders across Amravati.",
    tag: "Networking",
    isConfirmed: true,
    iconName: "users",
  },
  {
    id: "cloud-learning",
    title: "Cloud & AI Learnings",
    description:
      "Deep-dive into major architectural takeaways, serverless paradigms, and new cloud technologies inspired by re:Invent.",
    tag: "Knowledge",
    isConfirmed: true,
    iconName: "cloud",
  },
  {
    id: "aws-goodies",
    title: "Community Goodies & Swag",
    description:
      "Exclusive community stickers and swag for active participants and quiz winners.",
    tag: "Subject to Availability",
    isConfirmed: false,
    termsNote: "Allocated based on organizer availability and participation milestones.",
    iconName: "gift",
  },
  {
    id: "certificate",
    title: "Participation Certificate",
    description:
      "Digital certificate of participation acknowledging your active engagement in the community watch & build sessions.",
    tag: "Terms Apply",
    isConfirmed: false,
    termsNote: "Subject to organizer confirmation and active attendance throughout all sessions.",
    iconName: "award",
  },
  {
    id: "builder-demos",
    title: "Live Tech Showcases",
    description:
      "Witness real student projects built on cloud architectures, open source tools, and modern web frameworks.",
    tag: "Interactive",
    isConfirmed: true,
    iconName: "laptop",
  },
];
