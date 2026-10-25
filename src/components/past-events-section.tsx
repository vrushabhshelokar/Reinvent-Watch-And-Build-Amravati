import React from "react";
import { Camera, Layers, CheckCircle2 } from "lucide-react";
import { verifiedHighlights, pastEventsConfig } from "@/data/pastEvents";

export function PastEventsSection() {
  return (
    <section
      id="past-events"
      aria-label="Past Events and Community Highlights"
      className="py-20 md:py-28 bg-[#0a0d12] border-t border-[#242e3d] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
            Community Track Record
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f7fa]">
            Community <span className="text-[#ff9900]">Moments &amp; Highlights</span>
          </h2>
          <p className="mt-4 text-base text-[#9aa7b8] leading-relaxed">
            Building local tech momentum in Amravati through grassroots study circles, peer code reviews, and student-to-student workshops.
          </p>
        </div>

        {/* Verified Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {verifiedHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-[#121820] border border-[#242e3d] hover:border-[#ff9900]/40 rounded-2xl p-7 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff9900] bg-[#ff9900]/10 px-2.5 py-1 rounded-md border border-[#ff9900]/20">
                  {highlight.category}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              </div>

              {highlight.metric && (
                <div className="mb-3">
                  <span className="text-3xl font-extrabold text-[#f5f7fa] tracking-tight">
                    {highlight.metric}
                  </span>
                  {highlight.metricLabel && (
                    <span className="block text-xs text-[#65758a] font-mono mt-0.5">
                      {highlight.metricLabel}
                    </span>
                  )}
                </div>
              )}

              <h3 className="text-lg font-bold text-[#f5f7fa] mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-[#9aa7b8] leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Photo Gallery Curation Note */}
        <div className="bg-[#121820] border border-dashed border-[#334052] rounded-2xl p-8 text-center flex flex-col items-center justify-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#1a222d] border border-[#334052] flex items-center justify-center text-[#ff9900] mb-4">
            <Camera className="w-6 h-6" aria-hidden="true" />
          </div>
          <h4 className="text-base font-semibold text-[#f5f7fa] mb-2">
            Authentic Photo Archive In Curation
          </h4>
          <p className="text-xs sm:text-sm text-[#9aa7b8] max-w-lg leading-relaxed">
            {pastEventsConfig.statusMessage} High-resolution photography from preceding community workshops will be published here once organizer and attendee approvals are finalized.
          </p>
          <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-[#65758a]">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Strict Policy: No Unverified or Stock Images Used</span>
          </div>
        </div>
      </div>
    </section>
  );
}
