import React from "react";
import { benefitsData } from "@/data/benefits";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-label="Why Attend"
      className="py-20 md:py-28 bg-[#090a0f] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
            Why Attend
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Built for students who want to build.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94a3b8]">
            Three clear reasons why attending in person matters for your development journey.
          </p>
        </div>

        {/* Minimal 3-Column Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-sm text-[#ff9900] font-bold">
                  {benefit.number}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-4 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
