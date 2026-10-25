import { PastHighlight } from "@/types/event";

export const pastEventsConfig = {
  isAvailable: false, // Flag indicating whether verified photography has been signed off
  statusMessage:
    "Photo archives and verified session recordings from preceding builder meetups are currently being curated with speaker permissions.",
};

export const verifiedHighlights: PastHighlight[] = [
  {
    id: "momentum-1",
    title: "Regional Student Builder Initiatives",
    category: "Community Growth",
    description:
      "Student developers in Amravati have been actively collaborating through informal hackathons, peer code reviews, and study circles.",
    metric: "100%",
    metricLabel: "Student-Led",
  },
  {
    id: "momentum-2",
    title: "Bridging the Cloud Skill Gap",
    category: "Technical Literacy",
    description:
      "Helping engineering undergraduates get their hands dirty with practical cloud infrastructure, serverless computing, and web APIs.",
    metric: "0 Prior",
    metricLabel: "Cloud Exp Required",
  },
  {
    id: "momentum-3",
    title: "Cross-Campus Builder Collaboration",
    category: "Network",
    description:
      "Fostering connections between engineering colleges across Vidarbha to share knowledge and build open-source solutions.",
    metric: "Multi-Campus",
    metricLabel: "Student Cohort",
  },
];
