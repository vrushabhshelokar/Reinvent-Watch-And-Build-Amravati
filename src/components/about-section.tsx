import React from "react";
import { Info } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About the Event"
      className="py-20 md:py-28 bg-[#0b0d13] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900] uppercase tracking-widest mb-4">
          <span>03</span>
          <span className="text-white/20">/</span>
          <span>COMMUNITY MANIFESTO</span>
        </div>

        {/* Large Editorial Pull-Quote Statement */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            We don’t need another slide lecture. We need a physical space where students{" "}
            <span className="text-[#ff9900]">dissect real architectures</span> and build together.
          </h2>
        </div>

        {/* Editorial Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            <p>
              <strong className="text-white font-medium">Reinvent Watch And Build — Amravati</strong> is an independent grassroots student developer initiative. While global technology summits happen thousands of miles away, the passion to learn, engineer, and build is vibrant right here across Vidarbha’s engineering colleges.
            </p>
            <p>
              Rather than watching conference announcements in isolation, this gathering brings aspiring software engineers together in a single room. We break down enterprise cloud architectures, discuss practical serverless patterns, and showcase open source software built by undergraduates.
            </p>
            <p>
              Whether you are writing your first lines of code or already deploying backend microservices on cloud providers, this room is built for you.
            </p>

            {/* Credibility manifest indicators */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 font-mono">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white">₹0</p>
                <p className="text-[10px] text-[#64748b] uppercase tracking-wider mt-1">Planned Fee</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-[#ff9900]">100%</p>
                <p className="text-[10px] text-[#64748b] uppercase tracking-wider mt-1">Student-Run</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white">Vidarbha</p>
                <p className="text-[10px] text-[#64748b] uppercase tracking-wider mt-1">Regional Focus</p>
              </div>
            </div>
          </div>

          {/* Structured Principles Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-xl bg-[#0e1017] border border-white/10 hover:border-[#ff9900]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[#ff9900]">
                <span>01</span>
                <span className="text-white/20">/</span>
                <span className="font-semibold text-white">PEER-LED DEMYSTIFICATION</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Cloud computing can feel intimidating when trapped in marketing buzzwords. We translate high-scale cloud primitives into actionable concepts students can run on free tier environments.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0e1017] border border-white/10 hover:border-[#ff9900]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[#ff9900]">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span className="font-semibold text-white">INTER-COLLEGE SOLIDARITY</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Breaking down campus walls to foster cross-college teamwork. Developers from different institutions meet, exchange project repositories, and collaborate on future hackathons.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0e1017] border border-white/10 hover:border-[#ff9900]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[#ff9900]">
                <Info className="w-3.5 h-3.5 text-[#ff9900]" />
                <span className="font-semibold text-white">AUTONOMOUS COMMUNITY NOTICE</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                This event is independently organized by local student builders and developer circles. It is not an official Amazon Web Services conference, sponsorship, or corporate program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
