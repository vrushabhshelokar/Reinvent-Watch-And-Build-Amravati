"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { RegistrationButton } from "./registration-button";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#090809]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-white/[0.08]"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 h-20 sm:h-22 flex items-center justify-between"
      >
        {/* Restrained Wordmark */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 focus:outline-none"
          aria-label="Reinvent Watch And Build Amravati Home"
        >
          <span className="flex flex-col leading-none">
            <span className="mb-1 text-[9px] font-medium uppercase tracking-[0.24em] text-[#C2B6BA]/70">
              Student Builder Gathering
            </span>
            <span className="text-[22px] sm:text-[26px] font-light tracking-[-0.05em] text-[#F5F0EE]">
              re<span className="text-[#C24A70]">:</span>Invent
            </span>
          </span>
          <span className="mt-3 hidden sm:block border-l border-white/20 pl-3 text-[9px] font-medium uppercase leading-relaxed tracking-[0.2em] text-[#C2B6BA]/60">
            WATCH &amp;<br />BUILD AMRAVATI
          </span>
        </Link>

        {/* Minimal Navigation Links */}
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

        {/* Single Outlined Registration CTA */}
        <div className="hidden sm:flex items-center">
          <RegistrationButton
            placement="navbar"
            size="sm"
            label="Register"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 text-[#C2B6BA] hover:text-[#F5F0EE] focus:outline-none focus:ring-1 focus:ring-[#F5F0EE]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#090809]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col space-y-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C24A70]">
              Navigation
            </span>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-tight text-[#F5F0EE] hover:text-[#C24A70] py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-[#C2B6BA] mb-4 font-mono">
              Amravati · 100% Free Entry
            </p>
            <RegistrationButton
              placement="navbar"
              size="lg"
              label="Register on Luma ↗"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
