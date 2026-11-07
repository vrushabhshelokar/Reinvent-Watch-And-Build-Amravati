import React from "react";
import { RegistrationButton } from "./registration-button";

export function RegistrationCTA() {
  return (
    <section
      id="register"
      aria-label="Final Registration"
      className="relative isolate overflow-hidden bg-[#0E070B] px-5 py-14 sm:px-10 sm:py-32 lg:px-16 border-b border-white/[0.08]"
    >
      {/* Subtle Burgundy Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(87,29,49,0.30),transparent_65%)]"
      />

      <div className="mx-auto max-w-[1600px] text-center flex flex-col items-center">
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-4 sm:mb-6">
          Registration · 100% Free
        </span>

        <h2 className="text-[clamp(2.2rem,6.5vw,5.5rem)] sm:text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[0.92] tracking-[-0.06em] text-[#F5F0EE] mb-5 sm:mb-6 max-w-3xl">
          Ready to build with us in Amravati?
        </h2>

        <p className="max-w-xl text-sm sm:text-lg font-light leading-relaxed text-[#C2B6BA]/80 mb-8 sm:mb-10">
          Registration is completely free for all, Reserve your spot before auditorium capacity is reached.
        </p>

        <div className="w-full sm:w-auto">
          <RegistrationButton
            placement="final_cta"
            size="lg"
            label="Register"
            className="w-full sm:w-auto"
          />
        </div>

        <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs font-mono text-[#C2B6BA]/50 tracking-wider">
          Instant email confirmation · Advance registration required for campus entry
        </p>
      </div>
    </section>
  );
}
