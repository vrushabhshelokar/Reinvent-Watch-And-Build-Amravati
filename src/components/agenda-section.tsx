import React from "react";
import { provisionalAgenda, agendaStatus } from "@/data/agenda";

export function AgendaSection() {
  return (
    <section
      id="agenda"
      aria-label="Event Agenda"
      className="relative overflow-hidden bg-[#090809] px-6 py-20 text-[#F5F0EE] sm:px-10 sm:py-24 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-3">
            Program Tracks
          </span>
          <h2 className="text-4xl font-light tracking-[-0.06em] sm:text-6xl text-[#F5F0EE]">
            Session <span className="text-[#C24A70]">Outline.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-light text-[#C2B6BA]/80 leading-relaxed">
            {agendaStatus.announcementNote}
          </p>
        </div>

        {/* Minimal Agenda Rows */}
        <div className="border-y border-white/15 divide-y divide-white/10">
          {provisionalAgenda.map((session, index) => (
            <div
              key={index}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
            >
              {/* Session Index & Type */}
              <div className="md:col-span-3">
                <span className="text-xs font-mono tracking-wider text-[#C24A70]">
                  / 0{index + 1}
                </span>
                <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#C2B6BA]/50 mt-1">
                  {session.type}
                </p>
              </div>

              {/* Session Details */}
              <div className="md:col-span-7">
                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#F5F0EE] mb-2 group-hover:text-white transition-colors">
                  {session.blockTitle}
                </h3>
                <p className="text-sm font-light text-[#C2B6BA]/75 leading-relaxed max-w-2xl">
                  {session.description}
                </p>
              </div>

              {/* Status */}
              <div className="md:col-span-2 md:text-right">
                <span className="text-xs font-mono text-[#C2B6BA]/50 tracking-wider">
                  Timing TBA
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Student Demo Callout */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-light text-[#F5F0EE]">Have an undergraduate project to demo?</h4>
            <p className="text-xs text-[#C2B6BA]/70 mt-1 font-light">
              The Student Demo Arena invites collegiate builders to present 5-minute technical walkthroughs.
            </p>
          </div>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Student%20Demo%20Arena%20Proposal"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#F5F0EE] hover:text-[#C24A70] transition-colors shrink-0"
          >
            <span>Submit Demo ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
