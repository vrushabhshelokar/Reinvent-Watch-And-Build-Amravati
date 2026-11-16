"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { RegistrationButton } from "./registration-button";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // handle scroll shadow
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // prevent background scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#090809]/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-white/[0.08]"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16 h-16 sm:h-22 flex items-center justify-between"
        >
          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3 focus:outline-none"
            aria-label="Reinvent Watch And Build Amravati Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src="/aws-logo.png" alt="AWS Logo" className="h-8 w-auto mr-2" />
            <span className="flex flex-col leading-none">
              <span className="text-[20px] sm:text-[26px] font-light tracking-[-0.05em] text-[#F5F0EE]">
                re<span className="text-[#C24A70]">:</span>Invent
              </span>
              <span className="mt-2.5 hidden sm:block border-l border-white/20 pl-3 text-[9px] font-medium uppercase leading-relaxed tracking-[0.2em] text-[#C2B6BA]/60">
                WATCH &amp;<br />BUILD AMRAVATI
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#C2B6BA]/75 hover:text-[#F5F0EE] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Register button */}
          <div className="hidden sm:flex items-center">
            <RegistrationButton placement="navbar" size="sm" label="Register" />
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2.5 -mr-1 text-[#C2B6BA] hover:text-[#F5F0EE] focus:outline-none focus:ring-1 focus:ring-[#F5F0EE] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-40 bg-[#090809]/98 backdrop-blur-2xl flex flex-col pt-16 sm:pt-22"
        >
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between overscroll-contain">
            {/* Logo + title at top of mobile menu */}
            <div className="flex items-center gap-3 mb-4">
              <img src="/aws-logo.png" alt="AWS Logo" className="h-8 w-auto" />
              <span className="text-[20px] font-light text-[#F5F0EE]">re:Invent</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C24A70] mb-1">Navigation</span>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-light tracking-tight text-[#F5F0EE] hover:text-[#C24A70] py-2 min-h-[44px] flex items-center transition-colors border-b border-white/[0.04] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 pb-6 mt-6">
              <p className="text-xs text-[#C2B6BA] mb-3 font-mono">Amravati · 100% Free Entry</p>
              <RegistrationButton placement="navbar" size="lg" label="Register ↗" className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
