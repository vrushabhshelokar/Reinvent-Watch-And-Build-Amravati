"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { displayEventConfig } from "@/data/event";
import { CtaPlacement, trackCtaClick } from "@/lib/analytics";

interface RegistrationButtonProps {
  placement: CtaPlacement;
  variant?: "primary" | "secondary" | "outline" | "compact";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
  showIcon?: boolean;
}

export function RegistrationButton({
  placement,
  variant = "primary",
  size = "md",
  label = "Register for Free",
  className = "",
  showIcon = true,
}: RegistrationButtonProps) {
  const isReady = displayEventConfig.isLumaReady;
  const href = isReady ? displayEventConfig.lumaUrl : "#register";

  const handleClick = () => {
    trackCtaClick(placement, href);
  };

  // Base styling adhering to Design.md
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-[#ff9900] hover:bg-[#e88900] text-black font-semibold shadow-[0_0_20px_rgba(255,153,0,0.25)] hover:shadow-[0_0_28px_rgba(255,153,0,0.4)] border border-[#ffa726]";
      break;
    case "secondary":
      variantClasses =
        "bg-[#1a222d] hover:bg-[#212c3b] text-[#f5f7fa] font-medium border border-[#334052] hover:border-[#ff9900]/50";
      break;
    case "outline":
      variantClasses =
        "bg-transparent hover:bg-white/5 text-[#f5f7fa] font-medium border border-white/20 hover:border-[#ff9900]";
      break;
    case "compact":
      variantClasses =
        "bg-[#ff9900] hover:bg-[#e88900] text-black font-semibold text-xs py-2 px-3.5";
      break;
  }

  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "text-xs px-4 py-2 rounded-md";
      break;
    case "md":
      sizeClasses = "text-sm px-5 py-2.5 rounded-lg";
      break;
    case "lg":
      sizeClasses = "text-base px-7 py-3.5 rounded-xl font-bold tracking-wide";
      break;
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target={isReady ? "_blank" : undefined}
      rel={isReady ? "noopener noreferrer" : undefined}
      aria-label={`${label} (opens official registration on Luma)`}
      className={`group inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${variantClasses} ${sizeClasses} ${className}`}
    >
      <span>{label}</span>
      {showIcon && (
        <ArrowUpRight
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
