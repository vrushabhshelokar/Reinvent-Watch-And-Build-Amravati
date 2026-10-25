import React from "react";
import { UserCheck, ShieldAlert, Users } from "lucide-react";
import { provisionalOrganizers, organizingCommitteeConfig } from "@/data/organizers";

export function OrganizersSection() {
  return (
    <section
      id="organizers"
      aria-label="Organizing Committee"
      className="py-20 md:py-28 bg-[#0d1117] border-t border-[#242e3d] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
            Event Stewards
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f7fa]">
            Organizing <span className="text-[#ff9900]">Committee</span>
          </h2>
          <p className="mt-4 text-base text-[#9aa7b8] leading-relaxed">
            The student builders and campus leads dedicating their time to curate a welcoming, technically rich experience for Amravati students.
          </p>
        </div>

        {/* Committee Roster Status Notice */}
        <div className="mb-12 bg-[#121820] border border-[#242e3d] rounded-2xl p-5 flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-[#ff9900] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-[#9aa7b8] leading-relaxed">
            <span className="font-semibold text-[#f5f7fa]">Roster Verification: </span>
            {organizingCommitteeConfig.rosterNote}
          </p>
        </div>

        {/* Provisional Organizer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {provisionalOrganizers.map((organizer) => (
            <div
              key={organizer.id}
              className="bg-[#121820] border border-[#242e3d] hover:border-[#ff9900]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Avatar Placeholder with Initials */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a222d] to-[#242e3d] border border-[#334052] group-hover:border-[#ff9900]/40 flex items-center justify-center text-[#ff9900] font-mono font-bold text-lg mb-5 transition-colors">
                  {organizer.initials}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#1a222d] text-[#ff9900] border border-[#334052]">
                    {organizer.team} Team
                  </span>
                  <span className="text-[10px] font-mono text-[#65758a]">
                    Pending Verification
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#f5f7fa] group-hover:text-[#ff9900] transition-colors">
                  {organizer.name}
                </h3>
                <p className="text-xs text-[#ff9900] font-medium mt-1">
                  {organizer.role}
                </p>
                <p className="text-xs text-[#9aa7b8] mt-3 leading-relaxed">
                  {organizer.affiliation}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#242e3d] flex items-center justify-between text-[11px] text-[#65758a]">
                <span className="flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Student Organizer</span>
                </span>
                <span className="font-mono">Amravati</span>
              </div>
            </div>
          ))}
        </div>

        {/* Join as volunteer callout */}
        <div className="mt-12 bg-[#121820]/40 border border-[#242e3d] rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <Users className="w-5 h-5 text-[#ff9900] shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-[#9aa7b8]">
              Want to contribute as an event volunteer or campus liaison? Student volunteers are welcome.
            </p>
          </div>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Volunteer%20Interest%20-%20Watch%20and%20Build"
            className="text-xs font-semibold text-[#ff9900] hover:text-[#ffd08a] whitespace-nowrap"
          >
            Apply as Volunteer →
          </a>
        </div>
      </div>
    </section>
  );
}
