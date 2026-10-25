import React from "react";
import { RegistrationButton } from "./registration-button";

export function RegistrationCTA() {
  return (
    <section
      id="register"
      aria-label="Final Registration"
      className="relative isolate overflow-hidden bg-[#0E070B] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 border-b border-white/[0.08]"
    >
      {/* Subtle Burgundy Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(87,29,49,0.30),transparent_65%)]"
      />

      <div className="mx-auto max-w-[1600px] text-center flex flex-col items-center">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-6">
          Registration · 100% Free
        </span>

        <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[0.92] tracking-[-0.06em] text-[#F5F0EE] mb-6 max-w-3xl">
          Ready to build with us in Amravati?
        </h2>

        <p className="max-w-xl text-base sm:text-lg font-light leading-relaxed text-[#C2B6BA]/80 mb-10">
          Admission is completely free for all enrolled college and university students. Reserve your spot on Luma before auditorium capacity is reached.
        </p>

        <div>
          <RegistrationButton
            placement="final_cta"
            size="lg"
            label="Register on Luma"
          />
        </div>

        <p className="mt-8 text-xs font-mono text-[#C2B6BA]/50 tracking-wider">
          Instant email confirmation · Advance registration required for campus entry
        </p>
      </div>
    </section>
  );
}
