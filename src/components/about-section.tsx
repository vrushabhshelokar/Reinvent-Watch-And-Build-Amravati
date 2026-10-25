import React from "react";
import { Info } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About the Event"
      className="py-20 md:py-28 bg-[#090a0f] border-b border-white/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
          About the Event
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
          A grassroots gathering for student builders in Vidarbha.
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-[#94a3b8] leading-relaxed">
          <p>
            <strong className="text-white font-medium">Reinvent Watch And Build — Amravati</strong> is an independent, student-led tech event designed to bridge global cloud innovation with local student development. While major tech summits take place thousands of miles away, undergraduate developers across Amravati and Vidarbha are actively building real projects.
          </p>
          <p>
            Rather than streaming keynotes alone in dorm rooms, we gather in person to watch key announcements, deconstruct modern serverless and cloud architectures, and connect with peers building open-source tools and software.
          </p>
        </div>

        {/* Clear non-affiliation notice */}
        <div className="mt-10 p-5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5 text-xs text-[#94a3b8]">
          <Info className="w-4 h-4 text-[#ff9900] shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong className="text-white">Community Disclaimer:</strong> This is a community-run initiative organized by local students and developers. It is not an official Amazon Web Services conference, sponsorship, or corporate program.
          </p>
        </div>
      </div>
    </section>
  );
}
