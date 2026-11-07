import React from "react";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About the Event"
      className="relative isolate overflow-hidden bg-[#090809] px-5 py-12 text-[#F5F0EE] sm:px-10 sm:py-24 lg:px-16 lg:py-28 border-b border-white/[0.08]"
    >
      {/* Subtle Burgundy Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(53,16,30,0.35),transparent_60%)]"
      />

      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-8 sm:gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 items-start">
          {/* Left Narrative Column */}
          <div className="min-w-0">
            <p className="mb-4 sm:mb-6 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60">
              A grassroots technology gathering
            </p>
            <h2 className="text-[clamp(2.4rem,7.5vw,5.5rem)] sm:text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[0.9] tracking-[-0.06em] text-[#F5F0EE]">
              Imagine.<br />
              Build.<br />
              <span className="text-[#C24A70]">Reinvent.</span>
            </h2>
            <p className="mt-5 sm:mt-8 max-w-xl text-sm sm:text-lg font-light leading-relaxed text-[#C2B6BA]">
              Reinvent Watch And Build - Amravati brings developers, students, and aspiring engineers together to explore technology, dissect modern serverless architectures, and build what comes next.
            </p>
            <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm font-light leading-relaxed text-[#C2B6BA]/75">
              Rather than watching conference announcements in isolation, this in-person gathering creates a space for collegiate builders in Vidarbha to analyze real production systems and collaborate on open-source projects.
            </p>
          </div>

          {/* Right Community Statement Column */}
          <div className="flex min-w-0 flex-col justify-end">
            <div className="border-t border-white/15 pt-5 sm:pt-8">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#C24A70]">
                The Community Behind The Gathering
              </span>
              <h3 className="mt-3 sm:mt-4 text-xl sm:text-3xl font-light leading-tight tracking-tight text-[#F5F0EE]">
                Student Builder Groups of Amravati
              </h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base font-light leading-relaxed text-[#C2B6BA]">
                We are a Community of Tech Enthusiasts, developer network uniting peers across colleges in Amravati. Our goal is straightforward: help students, Developer, Tech Enthusiasts move beyond generic tutorials, experiment with cloud infrastructure, and turn classroom theory into working software.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 border-t border-white/10 pt-4 sm:pt-5 text-[11px] sm:text-xs font-mono text-[#C2B6BA]/50 leading-relaxed">
              {/* <strong className="text-[#C2B6BA]">Autonomous Notice:</strong> Independently organized by student builders in Vidarbha. Not an official Amazon Web Services conference, sponsorship, or corporate program. */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
