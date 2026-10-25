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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? "bg-[#090a0f]/95 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-b from-[#090a0f]/90 via-[#090a0f]/40 to-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary Event Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between"
      >
        {/* Brand Signature */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Reinvent Watch And Build Amravati Home"
        >
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              re<span className="text-[#ff9900]">:</span>Invent
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#94a3b8] uppercase mt-1">
              Watch &amp; Build Amravati
            </span>
          </div>
        </Link>

        {/* Minimal Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono uppercase tracking-wider text-[#94a3b8] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Restrained CTA */}
        <div className="hidden sm:flex items-center">
          <RegistrationButton
            placement="navbar"
            size="sm"
            label="Register Now"
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
            className="p-2 text-[#94a3b8] hover:text-white focus:outline-none focus:ring-1 focus:ring-[#ff9900]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-18 sm:top-20 bottom-0 bg-[#090a0f]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display font-semibold text-white hover:text-[#ff9900] py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-8">
            <RegistrationButton
              placement="navbar"
              size="lg"
              label="Register on Luma — ₹0 Free"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
