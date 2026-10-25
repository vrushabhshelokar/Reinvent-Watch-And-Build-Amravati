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
      setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled || mobileMenuOpen
          ? "bg-[#08090d]/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "bg-[#08090d]/60 backdrop-blur-sm border-b border-white/[0.06]"
      }`}
    >
      <nav
        aria-label="Primary Event Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between"
      >
        {/* Brand Signature */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="Reinvent Watch And Build Amravati Home"
        >
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-1.5 font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              <span>re</span>
              <span className="text-[#ff9900]">:</span>
              <span>Invent</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#94a3b8] uppercase mt-1">
              <span className="text-[#ff9900]">WATCH &amp; BUILD</span>
              <span className="text-white/30">/</span>
              <span>AMRAVATI</span>
            </div>
          </div>
        </Link>

        {/* Minimal Navigation Links with Slash Notation */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono uppercase tracking-wider text-[#94a3b8] hover:text-[#f8fafc] transition-colors py-2 flex items-center gap-1.5"
            >
              <span className="text-[#ff9900]/70 font-mono text-[10px]">
                0{idx + 1}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Desktop CTA with Live Status */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono text-[#94a3b8] border-r border-white/10 pr-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FEE: ₹0 // FREE ENTRY</span>
          </div>
          <RegistrationButton
            placement="navbar"
            size="sm"
            label="Register on Luma"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-[#ffd08a]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-18 bottom-0 bg-[#08090d]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#ff9900] mb-2">
              INDEX // NAVIGATION
            </p>
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-[#f8fafc] hover:text-[#ff9900] py-2 border-b border-white/5 transition-colors flex items-baseline justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#94a3b8]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-8 flex flex-col gap-4 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8]">
              <span>ENTRY STATUS:</span>
              <span className="text-[#ff9900] font-bold">100% FREE // ₹0</span>
            </div>
            <RegistrationButton
              placement="navbar"
              size="lg"
              label="Register on Luma — Free"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
