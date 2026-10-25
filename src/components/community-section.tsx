import React from "react";
import { Users, ExternalLink, ShieldCheck } from "lucide-react";
import { communitiesData } from "@/data/communities";

export function CommunitySection() {
  return (
    <section
      id="communities"
      aria-label="Community Collaboration"
      className="py-20 md:py-28 bg-[#0d1117] border-t border-[#242e3d] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
            Multi-Campus Network
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f7fa]">
            Community <span className="text-[#ff9900]">Collaboration</span>
          </h2>
          <p className="mt-4 text-base text-[#9aa7b8] leading-relaxed">
            Uniting student builder clubs, developer associations, and coding societies across Amravati to collaborate and share technical knowledge.
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communitiesData.map((community) => (
            <div
              key={community.id}
              className="bg-[#121820] border border-[#242e3d] hover:border-[#ff9900]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1a222d] border border-[#334052] text-[#ff9900]">
                    {community.role}
                  </span>
                  <span
                    className={`text-[11px] font-mono flex items-center gap-1 ${
                      community.status === "Confirmed"
                        ? "text-emerald-400"
                        : "text-[#9aa7b8]"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    {community.status}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a222d] to-[#242e3d] border border-[#334052] flex items-center justify-center text-[#f5f7fa] font-bold text-lg mb-5 group-hover:border-[#ff9900]/40 transition-colors">
                  <Users className="w-6 h-6 text-[#ff9900]" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-[#f5f7fa] group-hover:text-[#ff9900] transition-colors mb-2">
                  {community.name}
                </h3>
                <p className="text-sm text-[#9aa7b8] leading-relaxed">
                  {community.description}
                </p>
              </div>

              {community.link && (
                <div className="mt-6 pt-4 border-t border-[#242e3d]">
                  <a
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#9aa7b8] hover:text-[#ff9900] font-mono transition-colors"
                  >
                    <span>View Community Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partnership callout */}
        <div className="mt-12 bg-[#121820]/60 border border-[#242e3d] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#9aa7b8]">
            Represent a college tech club or developer circle in Vidarbha? Join as a participating student community partner!
          </p>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Community%20Partner%20Inquiry"
            className="text-xs font-semibold text-[#ff9900] hover:text-[#ffd08a] whitespace-nowrap"
          >
            Contact Organizing Team →
          </a>
        </div>
      </div>
    </section>
  );
}
