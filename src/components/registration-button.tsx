"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { displayEventConfig } from "@/data/event";
import { CtaPlacement, trackCtaClick } from "@/lib/analytics";

interface RegistrationButtonProps {
  placement: CtaPlacement;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
  showIcon?: boolean;
}

export function RegistrationButton({
  placement,
  variant = "primary",
  size = "md",
  label = "Register on Luma",
  className = "",
  showIcon = true,
}: RegistrationButtonProps) {
  const isReady = displayEventConfig.isLumaReady;
  const href = isReady ? displayEventConfig.lumaUrl : "#register";

  const handleClick = () => {
    trackCtaClick(placement, href);
  };

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-[#ff9900] hover:bg-[#ffaa22] text-black font-semibold tracking-wide border border-[#ffb84d] shadow-[0_2px_14px_rgba(255,153,0,0.3)] hover:shadow-[0_4px_20px_rgba(255,153,0,0.45)]";
      break;
    case "secondary":
      variantClasses =
        "bg-[#151822] hover:bg-[#1c202d] text-[#f8fafc] font-medium border border-white/15 hover:border-[#ff9900]/70";
      break;
    case "outline":
      variantClasses =
        "bg-transparent hover:bg-white/[0.04] text-[#f8fafc] font-medium border border-white/20 hover:border-[#ff9900]";
      break;
    case "ghost":
      variantClasses =
        "bg-transparent hover:bg-white/[0.05] text-[#94a3b8] hover:text-[#f8fafc]";
      break;
  }

  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "text-xs px-3.5 py-1.5 rounded-md font-mono";
      break;
    case "md":
      sizeClasses = "text-xs sm:text-sm px-5 py-2.5 rounded-lg font-mono uppercase tracking-wider";
      break;
    case "lg":
      sizeClasses = "text-sm sm:text-base px-7 py-3.5 rounded-xl font-mono uppercase tracking-wider font-bold";
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
