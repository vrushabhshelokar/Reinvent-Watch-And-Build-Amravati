import React from "react";
import { AlertCircle, Clock, ArrowUpRight } from "lucide-react";
import { provisionalAgenda, agendaStatus } from "@/data/agenda";
import { RegistrationButton } from "./registration-button";

export function AgendaSection() {
  return (
    <section
      id="agenda"
      aria-label="Event Agenda and Planned Timeline"
      className="py-20 md:py-28 bg-[#08090d] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900] uppercase tracking-widest mb-2">
              <span>04</span>
              <span className="text-white/20">/</span>
              <span>PROGRAM TIMETABLE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              SESSION FLOW &amp; <span className="text-[#ff9900]">TRACKS.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94a3b8] max-w-xl">
              Chronological structure designed to combine keynote watch sessions with student-level architecture breakdowns.
            </p>
          </div>

          <div className="shrink-0">
            <RegistrationButton placement="agenda" size="md" label="Reserve Your Seat" />
          </div>
        </div>

        {/* Timetable Transparency Status Banner */}
        <div className="mb-10 p-4 rounded-xl bg-[#0e1017] border border-[#ff9900]/30 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#ff9900] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm">
            <span className="font-mono font-bold text-white uppercase tracking-wider">
              {agendaStatus.statusLabel}:{" "}
            </span>
            <span className="text-[#94a3b8]">{agendaStatus.announcementNote}</span>
          </div>
        </div>

        {/* Conference-Grade Timetable Manifest */}
        <div className="border border-white/10 rounded-2xl bg-[#0e1017] divide-y divide-white/10 overflow-hidden">
          {provisionalAgenda.map((session, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/[0.02] transition-colors group"
            >
              {/* Session Index & Time Estimate */}
              <div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-1">
                <span className="font-mono text-xs text-[#ff9900] font-bold">
                  {session.timeEstimate}
                </span>
                <span className="font-mono text-[11px] text-[#64748b]">
                  {session.statusNote}
                </span>
              </div>

              {/* Session Title & Description */}
              <div className="md:col-span-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-mono text-[#94a3b8] uppercase">
                    {session.type}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff9900] transition-colors mb-2">
                  {session.blockTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {session.description}
                </p>
              </div>

              {/* Status & Callout */}
              <div className="md:col-span-3 flex md:justify-end items-center">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#94a3b8] border border-white/10 px-3 py-1.5 rounded-md bg-[#151822]">
                  <Clock className="w-3.5 h-3.5 text-[#ff9900]" />
                  <span>Timings TBA (IST)</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call for Student Demos Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0e1017] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display text-base font-bold text-white">Have a student project to demo?</h4>
            <p className="text-xs text-[#94a3b8] mt-0.5">
              The Demo Arena invites undergraduates with cloud or web builds to showcase their projects.
            </p>
          </div>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Student%20Demo%20Arena%20Proposal"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9900] hover:text-[#ffd08a] font-semibold whitespace-nowrap"
          >
            <span>Submit Demo Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
