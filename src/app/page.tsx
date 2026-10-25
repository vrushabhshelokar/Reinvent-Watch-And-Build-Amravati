import React from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { EventInfoStrip } from "@/components/event-info-strip";
import { BenefitsSection } from "@/components/benefits-section";
import { AboutSection } from "@/components/about-section";
import { AgendaSection } from "@/components/agenda-section";
import { CommunitySection } from "@/components/community-section";
import { PastEventsSection } from "@/components/past-events-section";
import { OrganizersSection } from "@/components/organizers-section";
import { VenueFaqSection } from "@/components/venue-faq-section";
import { RegistrationCTA } from "@/components/registration-cta";
import { SiteFooter } from "@/components/site-footer";
import { StickyRegisterBar } from "@/components/sticky-register-bar";
import { DevValidationBadge } from "@/components/dev-validation-badge";

export default function HomePage() {
  return (
    <>
      {/* 1. Navigation Bar */}
      <SiteHeader />

      <main className="min-h-screen">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Event Information Strip */}
        <EventInfoStrip />

        {/* 4. Why Attend? / Benefits */}
        <BenefitsSection />

        {/* 5. About the Event */}
        <AboutSection />

        {/* 6. Event Agenda / Timeline */}
        <AgendaSection />

        {/* 7. Community Collaboration */}
        <CommunitySection />

        {/* 8. Past Events / Community Highlights */}
        <PastEventsSection />

        {/* 9. Organizing Committee */}
        <OrganizersSection />

        {/* 10. Venue and FAQ */}
        <VenueFaqSection />

        {/* 11. Final Registration CTA */}
        <RegistrationCTA />
      </main>

      {/* 12. Footer */}
      <SiteFooter />

      {/* Global Interface Elements */}
      <StickyRegisterBar />
      <DevValidationBadge />
    </>
  );
}
