import React from "react";
import { Camera, CheckCircle2, ShieldCheck } from "lucide-react";
import { verifiedHighlights, pastEventsConfig } from "@/data/pastEvents";

export function PastEventsSection() {
  return (
    <section
      id="past-events"
      aria-label="Past Events and Community Highlights"
      className="py-20 md:py-28 bg-[#08090d] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900] uppercase tracking-widest mb-2">
            <span>06</span>
            <span className="text-white/20">/</span>
            <span>VERIFIED RECORD</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            COMMUNITY <span className="text-[#ff9900]">MOMENTUM.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94a3b8]">
            Grassroots technical learning cultivated through peer code reviews, collaborative hackathon teams, and student circles.
          </p>
        </div>

        {/* Large Typographic Momentum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {verifiedHighlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className="p-7 rounded-2xl bg-[#0e1017] border border-white/10 hover:border-[#ff9900]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#64748b] mb-4">
                  <span>METRIC // 0{index + 1}</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    VERIFIED
                  </span>
                </div>
                <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                  {highlight.metric}
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#ff9900] mb-3">
                  {highlight.metricLabel}
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Curation & Authenticity Notice */}
        <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <Camera className="w-5 h-5 text-[#ff9900] shrink-0 mt-0.5" />
            <div className="text-xs text-[#94a3b8] leading-relaxed">
              <span className="font-bold text-white">Authentic Archive Policy: </span>
              {pastEventsConfig.statusMessage} Photographs from previous meetups will be published here upon attendee sign-off. We strictly reject stock or unrelated photos.
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#64748b] whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>AUTHENTICITY VERIFIED</span>
          </span>
        </div>
      </div>
    </section>
  );
}
