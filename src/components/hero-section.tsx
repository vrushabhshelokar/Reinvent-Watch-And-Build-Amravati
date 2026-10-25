import React from "react";
import { displayEventConfig } from "@/data/event";
import { RegistrationButton } from "./registration-button";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Event Hero"
      className="relative isolate min-h-screen flex items-center overflow-hidden bg-[#090809] text-[#F5F0EE] pt-24 pb-16"
    >
      {/* Full-bleed Background Video Layer */}
      <div className="absolute inset-0 -z-30 w-full h-full overflow-hidden" aria-hidden="true">
        {/* Reduced motion static fallback */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center hidden motion-reduce:block opacity-35"
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
        />

        {/* Video Element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="h-full w-full object-cover object-center motion-reduce:hidden opacity-40 scale-105"
        >
          <source src="/videos/hero_background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Atmospheric Black-to-Burgundy Overlays */}
      <div className="absolute inset-0 -z-20 bg-black/40" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#090809]/95 via-[#160B10]/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#090809] via-transparent to-[#090809]/50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_75%,rgba(87,29,49,0.35),transparent_55%)]"
        aria-hidden="true"
      />

      {/* Asymmetric Left-Aligned Editorial Composition */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl text-left">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#C2B6BA]/85 mb-6 sm:mb-8">
            AMRAVATI · STUDENT TECHNOLOGY EVENT
          </p>

          {/* Main Headline */}
          <h1 className="text-[clamp(3.2rem,9.5vw,7.8rem)] font-light leading-[0.88] tracking-[-0.065em] text-[#F5F0EE] mb-8">
            Watch. Build.<br />
            <span className="font-normal text-[#F5F0EE]">Reinvent.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-xl text-base sm:text-lg font-light leading-relaxed text-[#C2B6BA] mb-4">
            Explore cloud technology, dissect production architectures, and connect with the student developer community.
          </p>

          {/* Minimal Event Coordinates */}
          <p className="text-xs font-mono tracking-wider text-[#C2B6BA]/60 mb-10">
            {displayEventConfig.displayDate} · Amravati, Maharashtra · Free Entry
          </p>

          {/* Primary Outlined CTA */}
          <div>
            <RegistrationButton
              placement="hero"
              size="lg"
              label="Register Now"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
