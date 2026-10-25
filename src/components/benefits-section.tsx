import React from "react";
import { benefitsData } from "@/data/benefits";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-label="Why Attend"
      className="relative overflow-hidden bg-[#090809] px-5 py-12 text-[#F5F0EE] sm:px-10 sm:py-24 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-2 sm:mb-3">
              Attendee Experience
            </span>
            <h2 className="text-3xl font-light tracking-[-0.06em] sm:text-6xl lg:text-7xl text-[#F5F0EE]">
              Experience <span className="text-[#C24A70]">more.</span>
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-[#C2B6BA]/70 sm:text-right font-light">
            Discover new ideas, experiment with technology, and meet the student builders creating what comes next.
          </p>
        </div>

        {/* 4-Column Minimal Grid */}
        <div className="grid border-y border-white/15 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((benefit, index) => {
            const borderClasses = [
              index > 0 ? "border-t border-white/15" : "",
              index % 2 === 1 ? "sm:border-l sm:border-white/15" : "sm:border-l-0",
              index < 2 ? "sm:border-b sm:border-white/15 lg:border-b-0" : "sm:border-b-0",
              index > 0 ? "lg:border-l lg:border-white/15" : "lg:border-l-0",
              "lg:border-t-0",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <article
                key={benefit.id}
                className={`group relative isolate overflow-hidden px-5 py-6 sm:px-8 sm:py-10 lg:px-8 lg:py-12 ${borderClasses}`}
              >
                {/* Subtle hover burgundy glow */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 80% 20%, rgba(128, 35, 67, 0.20), transparent 65%)",
                  }}
                />

                <div className="mb-4 sm:mb-8 flex items-center justify-between">
                  <span className="text-xs font-mono tracking-wider text-[#C24A70]">
                    / 0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#C24A70]" />
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-[#F5F0EE] group-hover:text-[#F5F0EE] transition-colors">
                  {benefit.title}
                </h3>

                <p className="mt-2.5 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-[#C2B6BA]/75 font-light">
                  {benefit.description}
                </p>

                <div className="mt-5 sm:mt-8 h-px w-8 sm:w-10 transition-all duration-500 group-hover:w-full bg-gradient-to-r from-[#802343] to-transparent" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
