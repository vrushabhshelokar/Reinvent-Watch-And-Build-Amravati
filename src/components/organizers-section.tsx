import React from "react";
import { ShieldAlert, ArrowUpRight } from "lucide-react";
import { provisionalOrganizers, organizingCommitteeConfig } from "@/data/organizers";

export function OrganizersSection() {
  return (
    <section
      id="organizers"
      aria-label="Organizing Committee"
      className="py-20 md:py-28 bg-[#0b0d13] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900] uppercase tracking-widest mb-2">
            <span>07</span>
            <span className="text-white/20">/</span>
            <span>STEWARDSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            ORGANIZING <span className="text-[#ff9900]">COMMITTEE.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94a3b8]">
            Student leads and campus volunteers coordinating to produce a seamless gathering in Amravati.
          </p>
        </div>

        {/* Verification Status */}
        <div className="mb-10 p-4 rounded-xl bg-[#0e1017] border border-white/10 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-[#ff9900] shrink-0 mt-0.5" />
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            <span className="font-bold text-white">Roster Notice: </span>
            {organizingCommitteeConfig.rosterNote}
          </p>
        </div>

        {/* Structured Committee Roster */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {provisionalOrganizers.map((organizer) => (
            <div
              key={organizer.id}
              className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 hover:border-[#ff9900]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-[#ff9900] font-bold">
                    [{organizer.team.toUpperCase()} TEAM]
                  </span>
                  <div className="w-7 h-7 rounded bg-[#151822] border border-white/10 flex items-center justify-center font-mono text-xs text-white">
                    {organizer.initials}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {organizer.name}
                </h3>
                <p className="font-mono text-xs text-[#ff9900] mb-3">
                  {organizer.role}
                </p>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {organizer.affiliation}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#64748b]">
                <span>CAMPUS: AMRAVATI</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Application Strip */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0e1017] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#94a3b8] text-left">
            Interested in volunteering for event day coordination, registration desk, or audio/visual streaming?
          </p>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Volunteer%20Interest%20-%20Watch%20and%20Build"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9900] hover:text-[#ffd08a] font-semibold whitespace-nowrap"
          >
            <span>Apply as Volunteer</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
