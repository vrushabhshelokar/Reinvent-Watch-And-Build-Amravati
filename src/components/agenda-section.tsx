import React from "react";
import { provisionalAgenda, agendaStatus } from "@/data/agenda";

export function AgendaSection() {
  return (
    <section
      id="agenda"
      aria-label="Event Agenda"
      className="relative overflow-hidden bg-[#090809] px-5 py-12 text-[#F5F0EE] sm:px-10 sm:py-24 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 max-w-3xl">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-2 sm:mb-3">
            Program Tracks
          </span>
          <h2 className="text-3xl font-light tracking-[-0.06em] sm:text-6xl text-[#F5F0EE]">
            Session <span className="text-[#C24A70]">Outline.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-lg font-light text-[#C2B6BA]/80 leading-relaxed">
            {agendaStatus.announcementNote}
          </p>
        </div>

        {/* Minimal Agenda Rows */}
        <div className="border-y border-white/15 divide-y divide-white/10">
          {provisionalAgenda.map((session, index) => (
            <div
              key={index}
              className="py-5 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 md:gap-8 items-start group"
            >
              {/* Session Index & Type */}
              <div className="md:col-span-3 flex items-center justify-between md:block">
                <div className="flex items-center gap-2 md:block">
                  <span className="text-xs font-mono tracking-wider text-[#C24A70]">
                    / 0{index + 1}
                  </span>
                  <span className="md:hidden text-[#C2B6BA]/30">·</span>
                  <p className="inline md:block text-[11px] md:text-xs font-mono uppercase tracking-[0.14em] text-[#C2B6BA]/60 md:mt-1">
                    {session.type}
                  </p>
                </div>
                <span className="md:hidden text-[11px] font-mono text-[#C2B6BA]/50 tracking-wider">
                  Timing TBA
                </span>
              </div>

              {/* Session Details */}
              <div className="md:col-span-7 mt-1 sm:mt-0">
                <h3 className="text-lg sm:text-2xl font-light tracking-tight text-[#F5F0EE] mb-1.5 sm:mb-2 group-hover:text-white transition-colors">
                  {session.blockTitle}
                </h3>
                <p className="text-xs sm:text-sm font-light text-[#C2B6BA]/75 leading-relaxed max-w-2xl">
                  {session.description}
                </p>
              </div>

              {/* Status */}
              <div className="hidden md:block md:col-span-2 md:text-right">
                <span className="text-xs font-mono text-[#C2B6BA]/50 tracking-wider">
                  Timing TBA
                </span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
