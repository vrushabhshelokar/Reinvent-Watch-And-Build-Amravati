"use client";

import React, { useState, useEffect } from "react";
import { RegistrationButton } from "./registration-button";

export function StickyRegisterBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight;
          const winHeight = window.innerHeight;
          const nearBottom = scrollY + winHeight > docHeight - 450;

          if (scrollY > 350 && !nearBottom) {
            setVisible(true);
          } else {
            setVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Registration Bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3.5 pb-[max(0.85rem,env(safe-area-inset-bottom))] bg-[#090809]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#C24A70]">
            Amravati · ₹0 Free
          </span>
          <span className="text-xs font-light text-[#F5F0EE] tracking-tight">
            Watch &amp; Build
          </span>
        </div>

        <RegistrationButton
          placement="sticky_mobile"
          size="sm"
          label="Register ↗"
          className="shrink-0"
        />
      </div>
    </aside>
  );
}
