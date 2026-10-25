import React from "react";
import { displayEventConfig } from "@/data/event";

export function EventInfoStrip() {
  const items = [
    {
      label: "DATE",
      value: displayEventConfig.displayDate,
      detail: "Schedule pending announcement",
    },
    {
      label: "TIME",
      value: displayEventConfig.displayTime,
      detail: "India Standard Time (IST)",
    },
    {
      label: "VENUE",
      value: displayEventConfig.displayVenue,
      detail: "Amravati, Maharashtra",
    },
    {
      label: "ADMISSION",
      value: "₹0 Free",
      detail: "Advance Luma registration required",
    },
  ];

  return (
    <section
      aria-label="Event Details"
      className="relative overflow-hidden border-y border-white/[0.08] bg-[#0E070B]"
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {items.map((item, idx) => (
            <div key={idx} className="py-4 sm:py-8 px-2 sm:px-8 flex flex-col justify-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60">
                {item.label}
              </span>
              <p className="mt-1.5 sm:mt-2 font-display text-base sm:text-xl font-light text-[#F5F0EE] tracking-tight leading-snug">
                {item.value}
              </p>
              <p className="mt-0.5 sm:mt-1 text-xs text-[#C2B6BA]/60 font-light">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
