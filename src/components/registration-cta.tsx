import React from "react";
import { Sparkles, ShieldCheck, Ticket } from "lucide-react";
import { RegistrationButton } from "./registration-button";

export function RegistrationCTA() {
  return (
    <section
      id="register"
      aria-label="Final Event Registration Call to Action"
      className="py-20 md:py-28 bg-[#0d1117] relative overflow-hidden"
    >
      {/* Radiant glow accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#ff9900]/12 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#121820] to-[#1a222d] border border-[#ff9900]/30 rounded-3xl p-8 sm:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Subtle inner grid */}
          <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff9900]/10 border border-[#ff9900]/30 text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#ff9900]" aria-hidden="true" />
              <span>Free Student Registration · ₹0</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5f7fa] leading-tight mb-5">
              Be part of the{" "}
              <span className="bg-gradient-to-r from-[#ff9900] to-[#ffa726] bg-clip-text text-transparent">
                Amravati builder community.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#9aa7b8] max-w-xl mx-auto leading-relaxed mb-8 font-light">
              Check the event details, connect with fellow developers, and reserve your free spot through Luma before venue capacity is reached.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
              <RegistrationButton
                placement="final_cta"
                size="lg"
                label="Reserve Your Free Spot on Luma"
                className="w-full sm:w-auto min-w-[260px]"
              />
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9aa7b8] pt-6 border-t border-[#334052]/60 w-full max-w-lg">
              <div className="flex items-center gap-1.5">
                <Ticket className="w-4 h-4 text-[#ff9900]" aria-hidden="true" />
                <span>100% Free · ₹0 Entry</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Secure Ticket Delivery via Luma</span>
              </div>
              <span className="text-white/20">•</span>
              <span>All Colleges Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
