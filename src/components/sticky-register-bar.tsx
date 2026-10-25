"use client";

import React, { useState, useEffect } from "react";
import { RegistrationButton } from "./registration-button";

export function StickyRegisterBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      className="md:hidden fixed bottom-0 inset-x-0 z-30 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#08090d]/95 backdrop-blur-lg border-t border-white/15 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#ff9900] uppercase tracking-wider font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>FREE ENTRY // ₹0</span>
          </div>
          <span className="text-xs font-display font-bold text-white">
            Watch &amp; Build Amravati
          </span>
        </div>

        <RegistrationButton
          placement="sticky_mobile"
          size="sm"
          label="Reserve Spot ↗"
          className="shrink-0"
        />
      </div>
    </aside>
  );
}
