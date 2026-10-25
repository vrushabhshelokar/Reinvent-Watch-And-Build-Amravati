import React from "react";
import { ArrowDown, Radio, Terminal, Cpu, Users, Layers } from "lucide-react";
import { displayEventConfig } from "@/data/event";
import { RegistrationButton } from "./registration-button";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Event Introduction"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/10 tech-blueprint overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Expressive Editorial Composition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* System Status Coordinate Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-[#0e1017] border border-white/15 text-[11px] font-mono text-[#94a3b8] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff9900] animate-pulse" aria-hidden="true" />
              <span className="text-[#ff9900] font-semibold">AMRAVATI // 20.9374° N, 77.7796° E</span>
              <span className="text-white/20">|</span>
              <span>STUDENT GATHERING</span>
            </div>

            {/* Massive Distinctive Typographic Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-[-0.04em] leading-[0.92] mb-6">
              <span className="block text-[#94a3b8] text-2xl sm:text-3xl lg:text-4xl font-mono font-normal tracking-tight mb-2">
                re<span className="text-[#ff9900]">:</span>Invent 2026
              </span>
              WATCH &amp; BUILD
              <span className="block text-[#ff9900]">AMRAVATI.</span>
            </h1>

            {/* Concise Value Proposition & Tagline */}
            <div className="border-l-2 border-[#ff9900] pl-5 my-2 max-w-xl">
              <p className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Watch. Learn. Build. Connect.
              </p>
              <p className="mt-2 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                An art-directed, student-led technology gathering uniting college builders across Amravati to unpack cloud breakthroughs, dissect real architectures, and collaborate on real projects.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <RegistrationButton
                placement="hero"
                size="lg"
                label="Reserve Your Free Spot"
                className="w-full sm:w-auto"
              />
              <a
                href="#agenda"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider text-[#94a3b8] hover:text-white bg-[#0e1017] border border-white/15 hover:border-white/30 transition-colors"
              >
                <span>View Agenda</span>
                <ArrowDown className="w-4 h-4 text-[#ff9900]" aria-hidden="true" />
              </a>
            </div>

            {/* Live Manifest Meta */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-[#64748b]">
              <div>
                <span className="text-[#94a3b8]">LOCATION:</span> {displayEventConfig.venueCity}
              </div>
              <span className="text-white/20">•</span>
              <div>
                <span className="text-[#94a3b8]">ADMISSION:</span> <span className="text-emerald-400 font-semibold">₹0 // 100% FREE</span>
              </div>
              <span className="text-white/20">•</span>
              <div>
                <span className="text-[#94a3b8]">REGISTRATION:</span> VIA LUMA
              </div>
            </div>
          </div>

          {/* Right Column: Custom Technical Architecture Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#0e1017] border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-3 font-mono text-[10px] text-white/30">+</div>
              <div className="absolute top-2 right-3 font-mono text-[10px] text-white/30">+</div>
              <div className="absolute bottom-2 left-3 font-mono text-[10px] text-white/30">+</div>
              <div className="absolute bottom-2 right-3 font-mono text-[10px] text-white/30">+</div>

              {/* Blueprint Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#ff9900]" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    EVENT_ARCHITECTURE.SYS
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff9900]/10 text-[#ff9900] border border-[#ff9900]/30 font-semibold">
                  STATUS: SCHEDULE TBA
                </span>
              </div>

              {/* 4-Node Blueprint Pipeline */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-[#151822] border border-white/10 hover:border-[#ff9900]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-1">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <Radio className="w-3.5 h-3.5 text-[#ff9900]" />
                      01 // KEYNOTE WATCH
                    </span>
                    <span className="text-[#ff9900]">CURATED STREAMS</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] font-light">
                    Streaming breakthrough cloud &amp; AI announcements from Las Vegas directly to Amravati students.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#151822] border border-white/10 hover:border-[#ff9900]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-1">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <Cpu className="w-3.5 h-3.5 text-[#ff9900]" />
                      02 // DECONSTRUCT ARCHITECTURE
                    </span>
                    <span className="text-blue-400">PRACTICAL LAB</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] font-light">
                    Dissecting serverless primitives, model deployments, and real production engineering patterns.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#151822] border border-white/10 hover:border-[#ff9900]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-1">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <Layers className="w-3.5 h-3.5 text-[#ff9900]" />
                      03 // STUDENT DEMO ARENA
                    </span>
                    <span className="text-emerald-400">PEER SHOWCASE</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] font-light">
                    Live interactive demos from regional undergraduates and local open source projects.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#151822] border border-white/10 hover:border-[#ff9900]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-1">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <Users className="w-3.5 h-3.5 text-[#ff9900]" />
                      04 // BUILDER COHORT
                    </span>
                    <span className="text-purple-400">NETWORK</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] font-light">
                    Uniting students across engineering colleges in Vidarbha to collaborate on future hackathons.
                  </p>
                </div>
              </div>

              {/* Blueprint Footer */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#64748b]">
                <span>CAPACITY: VENUE CAPPED</span>
                <span className="text-[#ff9900]">ORGANIZED FOR STUDENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
