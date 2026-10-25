import React from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { EventInfoStrip } from "@/components/event-info-strip";
import { AboutSection } from "@/components/about-section";
import { BenefitsSection } from "@/components/benefits-section";
import { AgendaSection } from "@/components/agenda-section";
import { CommunitySection } from "@/components/community-section";
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
        {/* 2. Video-Led Hero Section */}
        <HeroSection />

        {/* 3. Event Information Strip */}
        <EventInfoStrip />

        {/* 4. About the Event */}
        <AboutSection />

        {/* 5. Why Attend / Benefits */}
        <BenefitsSection />

        {/* 6. Event Agenda / Timeline */}
        <AgendaSection />

        {/* 7. Community Collaboration */}
        <CommunitySection />

        {/* 8. Venue and FAQ */}
        <VenueFaqSection />

        {/* 9. Final Registration CTA */}
        <RegistrationCTA />
      </main>

      {/* 10. Minimal Footer */}
      <SiteFooter />

      {/* Global Interface Elements */}
      <StickyRegisterBar />
      <DevValidationBadge />
    </>
  );
}
