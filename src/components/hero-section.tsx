import React from "react";
import { ArrowDown, MapPin, Calendar, Ticket } from "lucide-react";
import { displayEventConfig } from "@/data/event";
import { RegistrationButton } from "./registration-button";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Event Introduction"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090a0f]"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
        {/* Static Poster Fallback for Reduced Motion */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center hidden motion-reduce:block opacity-40"
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
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden opacity-45 scale-105"
        >
          <source src="/videos/hero_background.mp4" type="video/mp4" />
        </video>

        {/* Dark readability overlays */}
        <div className="absolute inset-0 bg-[#090a0f]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/80 via-transparent to-[#090a0f]" />
      </div>

      {/* Foreground Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Location & Status Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#94a3b8] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" aria-hidden="true" />
          <span className="text-white font-medium">Amravati, Maharashtra</span>
          <span className="text-white/20">|</span>
          <span>Student Builder Gathering</span>
        </div>

        {/* Primary Event Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.02] mb-6">
          Reinvent <br className="hidden sm:inline" />
          <span className="text-[#ff9900]">Watch And Build</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl text-base sm:text-xl text-[#94a3b8] font-normal leading-relaxed mb-10">
          Watch curated global keynote releases, dissect real-world cloud architectures, and connect with student developers across Vidarbha.
        </p>

        {/* Registration CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <RegistrationButton
            placement="hero"
            size="lg"
            label="Register on Luma"
            className="w-full sm:w-auto min-w-[220px]"
          />
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider text-[#94a3b8] hover:text-white bg-white/5 border border-white/10 hover:border-white/25 transition-colors w-full sm:w-auto"
          >
            <span>Learn More</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#ff9900]" aria-hidden="true" />
          </a>
        </div>

        {/* Essential Logistics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-2xl text-xs font-mono text-[#94a3b8]">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4 text-[#ff9900]" />
            <span>Date: {displayEventConfig.displayDate}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#ff9900]" />
            <span>Venue: {displayEventConfig.venueCity}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Ticket className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-medium">Entry: ₹0 Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}
