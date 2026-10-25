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

  // Keyboard accessibility: Escape to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? "bg-[#0a0d12]/90 backdrop-blur-md border-b border-[#242e3d]/80 shadow-lg"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <nav
        aria-label="Primary Event Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between"
      >
        {/* Brand Identity */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Reinvent Watch And Build Amravati Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff9900] to-[#e88900] flex items-center justify-center font-black text-black text-sm tracking-tighter shadow-[0_0_12px_rgba(255,153,0,0.3)]">
            WB
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-[#f5f7fa] group-hover:text-[#ff9900] transition-colors">
              re:Invent <span className="font-light text-white/70">Watch &amp; Build</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#ff9900] font-mono font-medium">
              Amravati Edition
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-[#9aa7b8] hover:text-[#f5f7fa] transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <RegistrationButton placement="navbar" size="sm" label="Register for Free" />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-lg text-[#9aa7b8] hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#ffd08a]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-18 bottom-0 bg-[#0a0d12]/98 backdrop-blur-xl border-b border-[#242e3d] px-6 py-8 flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#ff9900] font-mono font-semibold mb-2">
              Navigation
            </p>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#f5f7fa] hover:text-[#ff9900] py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-8 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-[#9aa7b8] pb-2 border-b border-white/10">
              <span>Event Entry:</span>
              <span className="text-[#ff9900] font-semibold">100% Free · ₹0</span>
            </div>
            <RegistrationButton
              placement="navbar"
              size="lg"
              label="Register for Free on Luma"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
