"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { RegistrationButton } from "./registration-button";

export function StickyRegisterBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 350px)
      // Hide near the bottom where the final CTA and footer already have buttons
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight > docHeight - 450;

      if (scrollY > 350 && !nearBottom) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Registration Bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#0a0d12]/95 backdrop-blur-lg border-t border-[#ff9900]/30 shadow-[0_-8px_25px_rgba(0,0,0,0.7)] transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-[#ff9900] uppercase tracking-wider flex items-center gap-1 font-semibold">
            <Sparkles className="w-3 h-3 text-[#ff9900]" aria-hidden="true" />
            <span>Limited Free Seats</span>
          </span>
          <span className="text-xs font-bold text-[#f5f7fa]">
            Watch &amp; Build Amravati
          </span>
        </div>

        <RegistrationButton
          placement="sticky_mobile"
          size="sm"
          label="Reserve Spot (₹0)"
          className="shrink-0"
        />
      </div>
    </aside>
  );
}
