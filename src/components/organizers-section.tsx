import React from "react";
import Image from "next/image";
import { committeeMembers, organizingCommitteeConfig } from "@/data/organizers";

export function OrganizersSection() {
  return (
    <section
      id="organizers"
      aria-label="Organizing Committee"
      className="relative isolate overflow-hidden bg-[#090809] px-5 py-12 text-[#F5F0EE] sm:px-10 sm:py-24 lg:px-16 border-b border-white/[0.08]"
    >
      {/* Subtle Burgundy Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(53,16,30,0.30),transparent_60%)]"
      />

      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-14">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-2 sm:mb-3">
              Stewardship &amp; Coordination
            </span>
            <h2 className="text-3xl font-light tracking-[-0.06em] sm:text-6xl text-[#F5F0EE]">
              Organizing <span className="text-[#C24A70]">Committee.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-light leading-relaxed text-[#C2B6BA]/70 sm:text-right">
            {organizingCommitteeConfig.rosterNote}
          </p>
        </div>

        {/* Responsive Committee Cards Grid: 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-14">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#160B10]/40 overflow-hidden transition-colors duration-300 hover:border-white/25"
            >
              {/* 1. Photo: Consistent 3:4 portrait ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#160B10]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090809] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Details: Name, Position, College */}
              <div className="p-3.5 sm:p-6 border-t border-white/10 bg-[#090809]/80 flex flex-col justify-between flex-1">
                <div>
                  {/* 2. Full Name */}
                  <h3 className="text-sm sm:text-lg font-light text-[#F5F0EE] tracking-tight group-hover:text-white transition-colors leading-snug">
                    {member.name}
                  </h3>

                  {/* 3. Position / Designation */}
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.1em] sm:tracking-[0.12em] text-[#C24A70] mt-1 sm:mt-1.5 font-medium leading-snug">
                    {member.position}
                  </p>

                  {/* 4. College Name */}
                  <p className="text-[11px] sm:text-xs font-light text-[#C2B6BA]/75 mt-0.5 sm:mt-1 leading-snug sm:leading-relaxed">
                    {member.college}
                  </p>
                </div>

                {member.isPlaceholder && (
                  <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#C2B6BA]/40">
                    <span>DEMO</span>
                    <span>TBA</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Invitation Strip */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-light text-[#F5F0EE]">Interested in joining the student event crew?</h4>
            <p className="text-xs text-[#C2B6BA]/70 mt-0.5 sm:mt-1 font-light">
              We welcome collegiate volunteers for stage assistance, audio/visual streaming, and attendee check-in.
            </p>
          </div>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Volunteer%20Interest%20-%20Watch%20and%20Build"
            className="text-xs font-mono uppercase tracking-[0.14em] text-[#F5F0EE] hover:text-[#C24A70] transition-colors shrink-0 py-1"
          >
            Apply as Volunteer ↗
          </a>
        </div>
      </div>
    </section>
  );
}
