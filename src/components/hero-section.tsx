import React from "react";
import { Calendar, MapPin, Sparkles, Clock, ArrowDown } from "lucide-react";
import { displayEventConfig } from "@/data/event";
import { RegistrationButton } from "./registration-button";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Event Introduction"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid radial-glow-accent"
    >
      {/* Decorative ambient background gradients */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff9900]/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 w-[450px] h-[450px] bg-[#8a5cff]/08 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121820] border border-[#ff9900]/30 text-[11px] font-mono uppercase tracking-widest text-[#ff9900] shadow-[0_0_15px_rgba(255,153,0,0.15)] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#ff9900]" aria-hidden="true" />
            <span>REINVENT WATCH AND BUILD · AMRAVATI</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#f5f7fa] leading-[1.08] mb-6">
            Watch. Learn. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#ff9900] via-[#ffa726] to-[#ffd08a] bg-clip-text text-transparent">
              Build. Connect.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-[#9aa7b8] leading-relaxed max-w-2xl font-light mb-8">
            Explore cloud technology, meet fellow student builders, and be part of the developer community in Amravati.
          </p>

          {/* Key Logistics Quick Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#f5f7fa]/80 bg-[#121820]/80 backdrop-blur-sm border border-[#242e3d] rounded-2xl px-5 py-3.5 mb-10 shadow-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#ff9900] shrink-0" aria-hidden="true" />
              <span>{displayEventConfig.displayDate}</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ff9900] shrink-0" aria-hidden="true" />
              <span>{displayEventConfig.displayTime}</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ff9900] shrink-0" aria-hidden="true" />
              <span>{displayEventConfig.displayVenue}</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#ff9900]/15 text-[#ff9900] font-semibold text-xs border border-[#ff9900]/30">
              Free Entry · ₹0
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <RegistrationButton
              placement="hero"
              size="lg"
              label="Reserve Your Free Spot"
              className="w-full sm:w-auto min-w-[220px]"
            />
            <a
              href="#agenda"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#9aa7b8] hover:text-[#f5f7fa] bg-[#121820] hover:bg-[#1a222d] border border-[#242e3d] hover:border-[#334052] transition-all duration-200 w-full sm:w-auto"
            >
              <span>Explore the Agenda</span>
              <ArrowDown className="w-4 h-4 text-[#9aa7b8] group-hover:text-[#ff9900] transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>

          {/* Reassurance text */}
          <p className="mt-4 text-xs text-[#65758a]">
            100% Student-Focused Gathering · No Cloud Experience Required · Registration via Luma
          </p>
        </div>
      </div>
    </section>
  );
}
