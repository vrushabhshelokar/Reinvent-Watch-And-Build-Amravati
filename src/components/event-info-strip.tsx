import React from "react";
import { displayEventConfig } from "@/data/event";

export function EventInfoStrip() {
  const items = [
    {
      label: "Date",
      value: displayEventConfig.displayDate,
      detail: "Schedule pending announcement",
    },
    {
      label: "Time",
      value: displayEventConfig.displayTime,
      detail: "India Standard Time (IST)",
    },
    {
      label: "Venue",
      value: displayEventConfig.displayVenue,
      detail: "Amravati, Maharashtra",
    },
    {
      label: "Admission",
      value: "₹0 Free",
      detail: "Registration required via Luma",
      highlight: true,
    },
  ];

  return (
    <section
      aria-label="Event Details"
      className="border-y border-white/10 bg-[#0c0d14]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {items.map((item, idx) => (
            <div key={idx} className="py-6 px-4 sm:px-6 flex flex-col justify-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8]">
                {item.label}
              </span>
              <p
                className={`mt-1 font-display text-lg sm:text-xl font-bold ${
                  item.highlight ? "text-[#ff9900]" : "text-white"
                }`}
              >
                {item.value}
              </p>
              <p className="mt-0.5 text-xs text-[#64748b]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
