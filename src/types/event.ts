export interface EventConfig {
  name: string;
  shortName: string;
  edition: string;
  locationLabel: string;
  tagline: string;
  description: string;
  entryFee: number;
  entryFeeLabel: string;
  date: string;
  startTime: string;
  endTime: string;
  timeZone: string;
  timeDisplay: string;
  venueName: string;
  venueAddress: string;
  venueCity: string;
  format: string;
  lumaUrl: string;
  productionUrl: string;
  contactEmail: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    discord?: string;
  };
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  isConfirmed: boolean;
  termsNote?: string;
  iconName: "ticket" | "users" | "cloud" | "gift" | "award" | "laptop";
}

export interface AgendaSession {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  speaker?: {
    name: string;
    role: string;
    companyOrCollege: string;
    isConfirmed: boolean;
  };
  sessionType: "Keynote Watch" | "Technical Talk" | "Builder Demo" | "Networking & Discussion" | "Break";
  isConfirmed: boolean;
}

export interface CommunityGroup {
  id: string;
  name: string;
  role: "Organizing Group" | "Community Partner" | "Student Tech Club";
  description: string;
  link?: string;
  status: "Confirmed" | "Invited / In Discussion";
}

export interface OrganizerMember {
  id: string;
  name: string;
  role: string;
  team: "Lead" | "Tech" | "Outreach" | "Operations";
  affiliation: string;
  initials: string;
  isConfirmed: boolean;
}

export interface PastHighlight {
  id: string;
  title: string;
  category: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Registration" | "Perks" | "Logistics";
}
