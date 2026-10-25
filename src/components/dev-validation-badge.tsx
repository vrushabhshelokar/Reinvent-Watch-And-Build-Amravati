"use client";

import React, { useState } from "react";
import { ShieldAlert, X } from "lucide-react";
import { validateLaunchConfig } from "@/lib/validation";

export function DevValidationBadge() {
  const [isOpen, setIsOpen] = useState(false);

  // In production builds, this developer badge is strictly omitted
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  const report = validateLaunchConfig();

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#160B10] border border-[#C24A70]/40 text-xs font-mono text-[#F5F0EE] shadow-xl hover:border-[#C24A70] transition-all"
          title="Click to view Phase 1 Pre-Release Content Gate audit"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-[#C24A70]" />
          <span>Launch Gate: {report.blockersCount} Blockers</span>
        </button>
      ) : (
        <div className="w-[360px] sm:w-[440px] max-h-[500px] overflow-y-auto bg-[#090809] border border-[#C24A70]/50 rounded-2xl shadow-2xl p-5 text-xs text-[#F5F0EE]">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#C24A70]" />
              <span className="font-semibold text-sm">Pre-Release Content Gate</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#C2B6BA] hover:text-white"
              aria-label="Close launch gate modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#C2B6BA] mb-4">
            Phase 1 Documentation Audit status: literal placeholders in typed configuration awaiting organizer sign-off.
          </p>

          <div className="space-y-3">
            {report.items.map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-[#160B10] border border-white/10 flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#F5F0EE]">{item.field}</span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                      item.isResolved
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-[#571D31] text-[#F5F0EE]"
                    }`}
                  >
                    {item.isResolved ? "Resolved" : "Pending Sign-off"}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#C2B6BA]/60">
                  Placeholder: {item.placeholderPattern}
                </div>
                <div className="text-[11px] text-[#C2B6BA]">
                  {item.requiredAction}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
