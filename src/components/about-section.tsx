import React from "react";
import { Terminal, Users2, Rocket } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About the Event"
      className="py-20 md:py-28 bg-[#0d1117] border-t border-[#242e3d] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
                Local Community Mission
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5f7fa] leading-[1.15]">
                Bridging Student Curiosity to{" "}
                <span className="bg-gradient-to-r from-[#ff9900] to-[#ffa726] bg-clip-text text-transparent">
                  Real Cloud Engineering.
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#9aa7b8] leading-relaxed font-light">
                <strong className="text-white font-medium">Reinvent Watch And Build — Amravati</strong> is a student-focused grassroots initiative created to bring aspiring developers, software engineering students, and tech enthusiasts together in Amravati.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#9aa7b8] leading-relaxed">
                Inspired by the global announcements, developer culture, and architecture breakthroughs of AWS re:Invent, our goal is simple: create an accessible, zero-cost environment where students can move beyond basic tutorials, dissect real-world cloud systems, and connect with fellow builders in our region.
              </p>
            </div>

            {/* Credibility highlights */}
            <div className="mt-10 pt-8 border-t border-[#242e3d] grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#f5f7fa]">₹0</p>
                <p className="text-xs text-[#65758a] mt-1 uppercase font-mono">Planned Fee</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#ff9900]">100%</p>
                <p className="text-xs text-[#65758a] mt-1 uppercase font-mono">Student-Led</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#f5f7fa]">Amravati</p>
                <p className="text-xs text-[#65758a] mt-1 uppercase font-mono">Regional Focus</p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="bg-[#121820] border border-[#242e3d] rounded-2xl p-6 sm:p-8 hover:border-[#ff9900]/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a222d] border border-[#334052] flex items-center justify-center text-[#ff9900]">
                  <Terminal className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f5f7fa]">Hands-On Developer Culture</h3>
                  <p className="text-xs text-[#ff9900] font-mono">Practical Knowledge Over Theory</p>
                </div>
              </div>
              <p className="text-sm text-[#9aa7b8] leading-relaxed">
                We believe the best way to master modern engineering is to build. Our watch &amp; learn sessions unpack how high-scale services operate, from serverless computing to managed AI infrastructure.
              </p>
            </div>

            <div className="bg-[#121820] border border-[#242e3d] rounded-2xl p-6 sm:p-8 hover:border-[#ff9900]/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a222d] border border-[#334052] flex items-center justify-center text-[#ff9900]">
                  <Users2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f5f7fa]">Inclusive Multi-Campus Cohort</h3>
                  <p className="text-xs text-[#ff9900] font-mono">Open Across Colleges</p>
                </div>
              </div>
              <p className="text-sm text-[#9aa7b8] leading-relaxed">
                Breaking down campus silos to build a unified builder community across colleges in Amravati. Form teams for upcoming hackathons, find project collaborators, and learn from peers.
              </p>
            </div>

            <div className="bg-[#121820] border border-[#242e3d] rounded-2xl p-6 sm:p-8 hover:border-[#ff9900]/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a222d] border border-[#334052] flex items-center justify-center text-[#ff9900]">
                  <Rocket className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f5f7fa]">Community Non-Affiliation Notice</h3>
                  <p className="text-xs text-[#9aa7b8] font-mono">Independent Builder Gathering</p>
                </div>
              </div>
              <p className="text-sm text-[#9aa7b8] leading-relaxed">
                Reinvent Watch And Build — Amravati is organized autonomously by local student builders. While inspired by cloud innovations, it is not an official Amazon Web Services conference or commercial summit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
