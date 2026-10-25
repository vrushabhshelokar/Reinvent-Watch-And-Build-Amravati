export interface NavItem {
  label: string;
  href: string;
  targetId: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about", targetId: "about" },
  { label: "Why Attend", href: "#benefits", targetId: "benefits" },
  { label: "Agenda", href: "#agenda", targetId: "agenda" },
  { label: "Community", href: "#communities", targetId: "communities" },
  { label: "FAQ & Venue", href: "#venue-faq", targetId: "venue-faq" },
];
