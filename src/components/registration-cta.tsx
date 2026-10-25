import React from "react";
import { ShieldCheck, Check } from "lucide-react";
import { RegistrationButton } from "./registration-button";

export function RegistrationCTA() {
  return (
    <section
      id="register"
      aria-label="Final Event Registration Call to Action"
      className="py-24 md:py-32 bg-[#08090d] border-b border-white/10 relative overflow-hidden tech-blueprint"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Index marker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0e1017] border border-white/15 text-[11px] font-mono text-[#ff9900] mb-6">
            <span>10 // CONVERGENCE</span>
            <span className="text-white/20">|</span>
            <span>RESERVE SEAT</span>
          </div>

          {/* Bold Editorial Headline */}
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
            BUILD WITH US <br />
            <span className="text-[#ff9900]">IN AMRAVATI.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#94a3b8] max-w-xl mx-auto leading-relaxed mb-10">
            Secure your spot through the official Luma event portal. Seats are allocated on a first-come basis to manage venue capacity.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <RegistrationButton
              placement="final_cta"
              size="lg"
              label="Reserve Free Spot on Luma"
              className="w-full sm:w-auto min-w-[280px]"
            />
          </div>

          {/* Manifest Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-[#64748b] pt-8 border-t border-white/10 w-full max-w-lg">
            <div className="flex items-center gap-1.5 text-[#94a3b8]">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>ENTRY: ₹0 FREE</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5 text-[#94a3b8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff9900]" />
              <span>OFFICIAL LUMA TICKETING</span>
            </div>
            <span className="text-white/20">•</span>
            <span className="text-[#94a3b8]">ALL VIDARBHA COLLEGES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
