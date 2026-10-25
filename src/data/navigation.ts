export interface NavItem {
  label: string;
  href: string;
  targetId: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about", targetId: "about" },
  { label: "Benefits", href: "#benefits", targetId: "benefits" },
  { label: "Agenda", href: "#agenda", targetId: "agenda" },
  { label: "Communities", href: "#communities", targetId: "communities" },
  { label: "Organizers", href: "#organizers", targetId: "organizers" },
  { label: "FAQ & Venue", href: "#venue-faq", targetId: "venue-faq" },
];
