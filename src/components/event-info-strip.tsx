import React from "react";
import { displayEventConfig } from "@/data/event";

export function EventInfoStrip() {
  const infoItems = [
    {
      code: "01 // DATE",
      label: "CALENDAR DATE",
      value: displayEventConfig.displayDate,
      status: "Awaiting Sign-off",
    },
    {
      code: "02 // TIME",
      label: "SESSION WINDOW",
      value: displayEventConfig.displayTime,
      status: "India Standard Time",
    },
    {
      code: "03 // VENUE",
      label: "CAMPUS AUDITORIUM",
      value: displayEventConfig.displayVenue,
      status: "Amravati, Maharashtra",
    },
    {
      code: "04 // FEE",
      label: "REGISTRATION COST",
      value: "₹0 // 100% FREE",
      status: "Subject to Confirmation",
      highlight: true,
    },
    {
      code: "05 // FORMAT",
      label: "GATHERING TYPE",
      value: displayEventConfig.displayFormat,
      status: "Interactive Community",
    },
  ];

  return (
    <section
      aria-label="Event Logistics Manifest"
      className="border-b border-white/10 bg-[#0e1017] relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className={`py-5 px-4 sm:px-5 flex flex-col justify-between transition-colors duration-150 hover:bg-white/[0.02] ${
                item.highlight ? "bg-[#ff9900]/[0.04]" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-semibold tracking-wider text-[#94a3b8]">
                  {item.code}
                </span>
                <span className="text-[9px] font-mono text-[#64748b] uppercase">
                  {item.label}
                </span>
              </div>
              <div>
                <p className={`text-sm sm:text-base font-display font-bold leading-tight ${
                  item.highlight ? "text-[#ff9900]" : "text-white"
                }`}>
                  {item.value}
                </p>
                <p className="text-[10px] font-mono text-[#64748b] mt-1">
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
