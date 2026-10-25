export interface MinimalBenefit {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const benefitsData: MinimalBenefit[] = [
  {
    id: "free-entry",
    number: "01",
    title: "100% Free Entry",
    description:
      "Zero registration fees. Open to any enrolled college or polytechnic student in Amravati curious about cloud technology.",
  },
  {
    id: "cloud-learning",
    number: "02",
    title: "Practical Cloud Learning",
    description:
      "Watch curated re:Invent keynote announcements and dissect real-world architectures, serverless systems, and cloud fundamentals.",
  },
  {
    id: "aws-swags",
    number: "03",
    title: "AWS Goodies And Swags",
    description:
      "Get AWS goodies that will make you feel like a cloud architect",
  },
  {
    id: "networking-and-discussion",
    number: "04",
    title: "Networking And Discussion",
    description:
      "Meet fellow developers, find hackathon teammates, and connect with student builder groups across regional colleges.",
  },
];
