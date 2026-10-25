import React from "react";
import { RegistrationButton } from "./registration-button";

export function RegistrationCTA() {
  return (
    <section
      id="register"
      aria-label="Register for Event"
      className="py-24 md:py-32 bg-[#0c0d14] border-b border-white/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-4">
          Registration
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
          Ready to build with us?
        </h2>

        <p className="text-base sm:text-lg text-[#94a3b8] max-w-xl mx-auto leading-relaxed mb-10">
          Admission is 100% free for all college and polytechnic students. Reserve your spot on Luma before venue hall capacity is reached.
        </p>

        <div className="w-full sm:w-auto flex justify-center mb-6">
          <RegistrationButton
            placement="final_cta"
            size="lg"
            label="Register on Luma — ₹0 Free"
            className="w-full sm:w-auto min-w-[280px]"
          />
        </div>

        <p className="text-xs font-mono text-[#64748b]">
          Instant confirmation via email · Advance registration required for entry
        </p>
      </div>
    </section>
  );
}
