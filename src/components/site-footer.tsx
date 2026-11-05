import React from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { VisitorCounter } from "./visitor-counter";

function LinkedInIcon({ className, size = 13 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer
      aria-label="Site Footer"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#090809] px-5 pt-12 pb-10 text-[#F5F0EE] sm:px-10 sm:pt-20 lg:px-16"
    >
      {/* Ambient Burgundy Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(53,16,30,0.30),transparent_55%)]"
      />

      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-8 sm:gap-12 pb-10 sm:pb-16 md:flex-row md:items-end">
          {/* Brand & Mission Statement */}
          <div>
            <Link
              href="/"
              className="inline-block text-3xl sm:text-6xl font-light tracking-[-0.07em] text-[#F5F0EE]"
            >
              re<span className="text-[#C24A70]">:</span>Invent<span className="text-white/40">.</span>
            </Link>
            <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-base font-light leading-relaxed text-[#C2B6BA]/60">
              Watch keynote releases, unpack cloud architectures, and connect with collegiate builders in Amravati.
            </p>
          </div>

          {/* Minimal Navigation Jump Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-2.5 sm:gap-y-4 font-mono text-xs uppercase tracking-[0.14em]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#C2B6BA]/70 hover:text-[#F5F0EE] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              className="text-[#F5F0EE] hover:text-[#C24A70] transition-colors py-1"
            >
              Register ↗
            </a>
          </nav>
        </div>

        {/* Organizer Credit, Live Visitor Metrics & Copyright */}
        <div className="flex flex-col gap-3 sm:gap-4 border-t border-white/10 pt-5 sm:pt-6 text-xs text-[#C2B6BA]/50 sm:flex-row sm:items-center sm:justify-between font-mono">
          <p>
            Organized by <span className="text-[#F5F0EE]/80">Student Builders of Amravati</span>
          </p>
          <VisitorCounter />
          <p>© {currentYear} Reinvent Watch And Build — Amravati.</p>
        </div>

        {/* Non-Affiliation Legal Disclaimer */}
        <p className="mt-4 sm:mt-5 max-w-3xl text-[10px] sm:text-[11px] leading-relaxed sm:leading-5 text-[#C2B6BA]/40 font-mono">
          Reinvent Watch And Build — Amravati is an independent, student-led community gathering inspired by AWS re:Invent.
        </p>

                {/* Developer Credit */}
        <div className="mt-6 border-t border-white/5 pt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-end">
          <p className="font-mono text-[10px] sm:text-[11px] tracking-wide text-[#C2B6BA]/40">
            Designed & Developed by{" "}
            <span className="text-[#F5F0EE]/70">Vrushabh Shelokar</span>
          </p>

          <a
            href="https://www.linkedin.com/in/vrushabh-shelokar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with the developer on LinkedIn"
            className="text-[#C2B6BA]/50 transition-colors duration-200 hover:text-[#C24A70]"
          >
            <LinkedInIcon size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
