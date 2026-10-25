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
  label = "Register Now",
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
      // Refined minimal outlined button matching reference
      variantClasses =
        "bg-transparent text-[#F5F0EE] border border-[#F5F0EE]/30 hover:border-[#F5F0EE] hover:bg-[#F5F0EE]/10 backdrop-blur-sm";
      break;
    case "secondary":
      variantClasses =
        "bg-[#160B10]/80 text-[#C2B6BA] border border-white/10 hover:border-white/25 hover:text-[#F5F0EE]";
      break;
    case "outline":
      variantClasses =
        "bg-transparent text-[#C2B6BA] border border-white/15 hover:border-[#F5F0EE]/40 hover:text-[#F5F0EE]";
      break;
    case "ghost":
      variantClasses =
        "bg-transparent text-[#C2B6BA] hover:text-[#F5F0EE]";
      break;
  }

  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "text-[11px] px-4 py-2 font-mono uppercase tracking-[0.14em]";
      break;
    case "md":
      sizeClasses = "text-xs px-5 py-2.5 font-mono uppercase tracking-[0.14em]";
      break;
    case "lg":
      sizeClasses = "text-xs sm:text-sm px-7 py-3.5 font-mono uppercase tracking-[0.16em] font-medium";
      break;
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target={isReady ? "_blank" : undefined}
      rel={isReady ? "noopener noreferrer" : undefined}
      aria-label={`${label} (opens registration on Luma)`}
      className={`group inline-flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${variantClasses} ${sizeClasses} ${className}`}
    >
      <span>{label}</span>
      {showIcon && (
        <ArrowUpRight
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 opacity-80 group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
