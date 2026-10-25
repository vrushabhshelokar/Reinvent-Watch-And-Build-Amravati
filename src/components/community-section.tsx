import React from "react";
import { communitiesData } from "@/data/communities";

export function CommunitySection() {
  return (
    <section
      id="communities"
      aria-label="Community Collaborators"
      className="relative isolate overflow-hidden bg-[#090809] px-6 py-20 text-[#F5F0EE] sm:px-10 sm:py-24 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-3">
              Grassroots Network
            </span>
            <h2 className="text-4xl font-light tracking-[-0.06em] sm:text-6xl text-[#F5F0EE]">
              Collaborating <span className="text-[#C24A70]">Groups.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#C2B6BA]/70 sm:text-base font-light">
            Student developer circles and campus tech associations cooperating across Amravati to host this gathering.
          </p>
        </div>

        {/* Reference-Style Structured Grid */}
        <div className="mt-12 grid border-t border-white/15 sm:grid-cols-3">
          {communitiesData.map((community, index) => (
            <div
              key={community.id}
              className={`group flex min-h-40 flex-col justify-between border-b border-white/15 px-6 py-8 transition-colors duration-300 hover:bg-white/[0.02] sm:px-8 sm:py-10 ${
                index > 0 ? "sm:border-l" : ""
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/50">
                  {community.role}
                </span>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-light text-[#F5F0EE] group-hover:text-white sm:text-xl tracking-tight">
                    {community.name}
                  </h3>
                  <span className="text-[#C24A70] transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm font-light text-[#C2B6BA]/70 leading-relaxed">
                  {community.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#C2B6BA]/40">
                <span>Status: {community.status}</span>
                {community.link && (
                  <a
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F5F0EE] transition-colors"
                    aria-label={`Visit ${community.name}`}
                  >
                    Details ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Invitation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm font-light text-[#C2B6BA]/80">
            Leading a college coding club or open-source community in Vidarbha?
          </p>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Community%20Partner%20Collaboration"
            className="text-xs font-mono uppercase tracking-[0.14em] text-[#F5F0EE] hover:text-[#C24A70] transition-colors shrink-0"
          >
            Partner With Us ↗
          </a>
        </div>
      </div>
    </section>
  );
}
