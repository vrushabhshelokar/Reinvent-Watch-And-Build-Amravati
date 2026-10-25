import React from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { communitiesData } from "@/data/communities";

export function CommunitySection() {
  return (
    <section
      id="communities"
      aria-label="Community Collaboration"
      className="py-20 md:py-28 bg-[#0b0d13] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900] uppercase tracking-widest mb-2">
              <span>05</span>
              <span className="text-white/20">/</span>
              <span>ECOSYSTEM PARTNERS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              COMMUNITY <span className="text-[#ff9900]">COLLABORATION.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94a3b8] max-w-xl">
              Uniting student-run developer circles, campus cloud clubs, and engineering societies across Amravati.
            </p>
          </div>
        </div>

        {/* Structured Directory Rows */}
        <div className="border border-white/10 rounded-2xl bg-[#0e1017] divide-y divide-white/10 overflow-hidden">
          {communitiesData.map((community, index) => (
            <div
              key={community.id}
              className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-white/[0.02] transition-colors group"
            >
              {/* Role & Index */}
              <div className="md:col-span-3 flex items-center justify-between md:justify-start gap-3">
                <span className="font-mono text-xs text-[#ff9900] font-bold">
                  0{index + 1} {"//"}
                </span>
                <span className="px-2.5 py-1 rounded-sm bg-[#151822] border border-white/10 font-mono text-[11px] text-[#94a3b8] uppercase">
                  {community.role}
                </span>
              </div>

              {/* Name & Narrative */}
              <div className="md:col-span-6">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#ff9900] transition-colors mb-1.5">
                  {community.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {community.description}
                </p>
              </div>

              {/* Verification & Link */}
              <div className="md:col-span-3 flex items-center md:justify-end gap-4">
                <span
                  className={`inline-flex items-center gap-1 font-mono text-xs ${
                    community.status === "Confirmed"
                      ? "text-emerald-400"
                      : "text-[#64748b]"
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{community.status}</span>
                </span>
                {community.link && (
                  <a
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#151822] border border-white/10 hover:border-[#ff9900] text-white hover:text-[#ff9900] transition-colors"
                    aria-label={`Visit ${community.name} profile`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Invitation Box */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0e1017] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#94a3b8] text-left">
            Run a college tech association or coding club in Vidarbha? Join as a recognized student community collaborator!
          </p>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Community%20Partner%20Inquiry"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9900] hover:text-[#ffd08a] font-semibold whitespace-nowrap"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
