import React from "react";
import { Mail, Heart } from "lucide-react";
import { navItems } from "@/data/navigation";
import { displayEventConfig } from "@/data/event";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#08090d] pt-16 pb-12 text-[#94a3b8] text-xs font-mono"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-1 font-display text-xl font-bold text-white mb-2">
                <span>re</span>
                <span className="text-[#ff9900]">:</span>
                <span>Invent</span>
                <span className="text-xs font-mono text-[#94a3b8] ml-2">
                  {"//"} WATCH &amp; BUILD AMRAVATI
                </span>
              </div>
              <p className="text-xs text-[#94a3b8] max-w-sm leading-relaxed mb-6 font-sans">
                A student-run technology initiative bringing together aspiring cloud engineers and web developers across institutions in Vidarbha.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={displayEventConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Community Profile"
                className="w-8 h-8 rounded-lg bg-[#0e1017] border border-white/10 hover:border-[#ff9900] hover:text-[#ff9900] flex items-center justify-center transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={displayEventConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Community Profile"
                className="w-8 h-8 rounded-lg bg-[#0e1017] border border-white/10 hover:border-[#ff9900] hover:text-[#ff9900] flex items-center justify-center transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={displayEventConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Community Profile"
                className="w-8 h-8 rounded-lg bg-[#0e1017] border border-white/10 hover:border-[#ff9900] hover:text-[#ff9900] flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${displayEventConfig.contactEmail}`}
                aria-label="Email the Organizing Committee"
                className="w-8 h-8 rounded-lg bg-[#0e1017] border border-white/10 hover:border-[#ff9900] hover:text-[#ff9900] flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-mono uppercase tracking-widest text-white font-bold mb-4">
              INDEX // JUMP LINKS
            </p>
            <ul className="space-y-2 text-xs">
              {navItems.map((item, idx) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#ff9900] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#64748b]">0{idx + 1}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#register"
                  className="text-[#ff9900] hover:underline font-bold"
                >
                  → Register on Luma
                </a>
              </li>
            </ul>
          </div>

          {/* Ethics & Legal */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-mono uppercase tracking-widest text-white font-bold mb-4">
              COMMUNITY GOVERNANCE
            </p>
            <p className="text-[11px] leading-relaxed text-[#64748b] mb-3 font-sans">
              Organized by student volunteers across engineering colleges in Amravati. We adhere to an open, inclusive, and strictly respectful code of conduct.
            </p>
            <p className="text-[11px] leading-relaxed text-[#64748b]">
              Contact:{" "}
              <a
                href={`mailto:${displayEventConfig.contactEmail}`}
                className="text-[#94a3b8] hover:text-[#ff9900] underline"
              >
                {displayEventConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>

        {/* Legal Disclaimer & Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#64748b]">
          <p className="max-w-2xl text-center md:text-left leading-relaxed font-sans">
            <strong>Non-Affiliation Notice:</strong> Reinvent Watch And Build — Amravati is an independent, student-led community gathering inspired by AWS re:Invent. It is not an official Amazon Web Services conference, sponsorship, or corporate program. AWS and re:Invent are trademarks of Amazon.com, Inc. or its affiliates.
          </p>

          <div className="flex items-center gap-1.5 shrink-0">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-[#ff9900] fill-[#ff9900]" />
            <span>for Vidarbha Student Builders</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/[0.04] text-center text-[10px] text-[#64748b]">
          © {currentYear} Reinvent Watch And Build — Amravati. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
