import React from "react";
import { ArrowUpRight } from "lucide-react";
import { provisionalAgenda, agendaStatus } from "@/data/agenda";

export function AgendaSection() {
  return (
    <section
      id="agenda"
      aria-label="Event Agenda"
      className="py-20 md:py-28 bg-[#090a0f] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
            Agenda
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Session Outline &amp; Tracks.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94a3b8]">
            {agendaStatus.announcementNote}
          </p>
        </div>

        {/* Minimal Agenda Rows */}
        <div className="border border-white/10 rounded-2xl bg-white/[0.01] divide-y divide-white/10 overflow-hidden">
          {provisionalAgenda.map((session, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs text-[#ff9900] font-bold">
                  0{index + 1}
                </span>
                <p className="font-mono text-xs text-[#64748b] mt-1">
                  {session.timeEstimate} · Timing TBA
                </p>
              </div>

              <div className="md:col-span-7">
                <div className="inline-block px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#94a3b8] uppercase mb-2">
                  {session.type}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {session.blockTitle}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {session.description}
                </p>
              </div>

              <div className="md:col-span-2 md:text-right">
                <span className="inline-block text-[11px] font-mono text-[#64748b]">
                  {session.statusNote}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Student Demo Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-display text-base font-bold text-white">Have a project or build to showcase?</h4>
            <p className="text-xs text-[#94a3b8] mt-0.5">
              The Student Demo Arena gives undergraduate builders 5 minutes to showcase real code and projects.
            </p>
          </div>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Student%20Demo%20Arena%20Proposal"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9900] hover:underline font-semibold shrink-0"
          >
            <span>Submit Demo Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
