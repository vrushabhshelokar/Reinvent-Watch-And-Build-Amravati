import React from "react";
import { Calendar, Clock, MapPin, Ticket, Radio } from "lucide-react";
import { displayEventConfig } from "@/data/event";

export function EventInfoStrip() {
  const infoItems = [
    {
      icon: Calendar,
      label: "EVENT DATE",
      value: displayEventConfig.displayDate,
      badge: "Pending Sign-off",
    },
    {
      icon: Clock,
      label: "TIMINGS (IST)",
      value: displayEventConfig.displayTime,
      badge: "India Standard Time",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: displayEventConfig.displayVenue,
      badge: "Amravati, Maharashtra",
    },
    {
      icon: Ticket,
      label: "ENTRY FEE",
      value: "100% Free Entry (₹0)",
      badge: "Seats Limited",
      highlight: true,
    },
    {
      icon: Radio,
      label: "FORMAT",
      value: displayEventConfig.displayFormat,
      badge: "Watch & Build",
    },
  ];

  return (
    <section
      aria-label="Event Information Strip"
      className="border-y border-[#242e3d] bg-[#0d1117] relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#242e3d]">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`py-6 px-4 flex flex-col justify-between transition-colors duration-150 hover:bg-white/[0.02] ${
                  item.highlight ? "bg-[#ff9900]/[0.03]" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9aa7b8] flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#ff9900]" aria-hidden="true" />
                    {item.label}
                  </span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#ff9900]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#f5f7fa] leading-tight">
                    {item.value}
                  </p>
                  <p className="text-[11px] text-[#65758a] mt-1 font-light">
                    {item.badge}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
