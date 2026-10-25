import React from "react";
import { Ticket, Users, Cloud, Gift, Award, Laptop, CheckCircle2 } from "lucide-react";
import { benefitsData } from "@/data/benefits";
import { RegistrationButton } from "./registration-button";

export function BenefitsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "ticket":
        return Ticket;
      case "users":
        return Users;
      case "cloud":
        return Cloud;
      case "gift":
        return Gift;
      case "award":
        return Award;
      case "laptop":
        return Laptop;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section
      id="benefits"
      aria-label="Why Attend and Attendee Benefits"
      className="py-20 md:py-28 bg-[#0a0d12] relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#ff9900]/05 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
              Attendee Value
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f7fa]">
              Why Attend <span className="text-[#ff9900]">Watch &amp; Build?</span>
            </h2>
            <p className="mt-4 text-base text-[#9aa7b8] leading-relaxed">
              Designed by students for students. Learn cloud computing, network with peers, and get inspired to build your own technical ideas.
            </p>
          </div>
          <div className="shrink-0">
            <RegistrationButton placement="benefits" size="md" label="Claim Your Free Spot" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => {
            const Icon = getIcon(benefit.iconName);
            return (
              <div
                key={benefit.id}
                className="group relative bg-[#121820] border border-[#242e3d] hover:border-[#ff9900]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1a222d] border border-[#334052] flex items-center justify-center text-[#ff9900] group-hover:scale-105 group-hover:border-[#ff9900]/40 transition-all">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${
                        benefit.isConfirmed
                          ? "bg-[#ff9900]/10 text-[#ff9900] border-[#ff9900]/25"
                          : "bg-white/5 text-[#9aa7b8] border-white/10"
                      }`}
                    >
                      {benefit.tag}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono text-[#65758a] uppercase tracking-wider mb-2">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#f5f7fa] group-hover:text-[#ff9900] transition-colors mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#9aa7b8] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {benefit.termsNote && (
                  <p className="mt-5 pt-4 border-t border-[#242e3d] text-[11px] text-[#65758a] italic">
                    Note: {benefit.termsNote}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
