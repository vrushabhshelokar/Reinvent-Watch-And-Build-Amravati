import React from "react";
import { ArrowUpRight } from "lucide-react";
import { communitiesData } from "@/data/communities";

export function CommunitySection() {
  return (
    <section
      id="communities"
      aria-label="Community Collaborators"
      className="py-20 md:py-28 bg-[#090a0f] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
            Community
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Collaborating Student Groups.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94a3b8]">
            Grassroots student-run tech clubs and developer societies across Amravati collaborating to make this event happen.
          </p>
        </div>

        {/* Minimal Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communitiesData.map((community, index) => (
            <div
              key={community.id}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-4">
                  <span className="text-[#ff9900] font-bold">0{index + 1}</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 uppercase text-[10px]">
                    {community.role}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {community.name}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {community.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#64748b]">
                <span>Status: {community.status}</span>
                {community.link && (
                  <a
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-[#ff9900] transition-colors"
                    aria-label={`Visit ${community.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Community Invite */}
        <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[#94a3b8]">
            Leading a student developer club in Vidarbha? Join as a recognized community collaborator.
          </p>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Community%20Partner%20Collaboration"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9900] hover:underline font-semibold shrink-0"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
