import React from "react";
import { Ticket, Users, Cloud, Gift, Award } from "lucide-react";
import { RegistrationButton } from "./registration-button";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-label="Why Attend and Attendee Benefits"
      className="py-20 md:py-28 bg-[#08090d] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900] uppercase tracking-widest mb-2">
              <span>02</span>
              <span className="text-white/20">/</span>
              <span>ATTENDEE VALUE PROPOSITION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              WHAT BUILDERS <span className="text-[#ff9900]">EXPERIENCE.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94a3b8] max-w-xl">
              Zero fluff. A curriculum built by student builders for undergraduates eager to understand modern cloud infrastructure.
            </p>
          </div>
          <div className="shrink-0">
            <RegistrationButton placement="benefits" size="md" label="Claim Free Ticket" />
          </div>
        </div>

        {/* Asymmetrical Editorial Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Bento Item 1: Primary Feature (Large 7 Cols) */}
          <div className="md:col-span-7 bg-[#0e1017] border border-white/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-[#ff9900]/40 transition-colors">
            <div className="absolute top-3 right-4 font-mono text-xs text-white/20">[BEN-01]</div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#151822] border border-white/10 flex items-center justify-center text-[#ff9900] mb-6">
                <Ticket className="w-5 h-5" />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-semibold border border-emerald-500/20 mb-3">
                PLANNED ENTRY // ₹0 FREE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Zero Financial Barrier for Any Student
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-lg">
                No tickets to buy. No hidden conference fees. Every aspiring software engineering, IT, or polytechnic student in Vidarbha can attend without cost. Advance Luma registration is required solely to manage venue hall capacity.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#64748b]">
              <span>ACCESS: OPEN TO ALL COLLEGES</span>
              <span className="text-emerald-400">STATUS: CONFIRMED</span>
            </div>
          </div>

          {/* Bento Item 2: Cloud Knowledge (5 Cols) */}
          <div className="md:col-span-5 bg-[#0e1017] border border-white/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative group hover:border-[#ff9900]/40 transition-colors">
            <div className="absolute top-3 right-4 font-mono text-xs text-white/20">[BEN-02]</div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#151822] border border-white/10 flex items-center justify-center text-[#ff9900] mb-6">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-sm bg-blue-500/10 text-blue-400 font-mono text-[11px] font-semibold border border-blue-500/20 mb-3">
                SYSTEMS &amp; ARCHITECTURES
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Deconstructing Real Production Systems
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Move past basic hello-world tutorials. Understand serverless design, event-driven architectures, and generative AI deployment primitives showcased at re:Invent.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#64748b]">
              <span>LEVEL: BEGINNER TO INTERMEDIATE</span>
              <span className="text-[#ff9900]">CURATED CONTENT</span>
            </div>
          </div>

          {/* Bento Item 3: Peer Network (5 Cols) */}
          <div className="md:col-span-5 bg-[#0e1017] border border-white/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative group hover:border-[#ff9900]/40 transition-colors">
            <div className="absolute top-3 right-4 font-mono text-xs text-white/20">[BEN-03]</div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#151822] border border-white/10 flex items-center justify-center text-[#ff9900] mb-6">
                <Users className="w-5 h-5" />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-sm bg-purple-500/10 text-purple-400 font-mono text-[11px] font-semibold border border-purple-500/20 mb-3">
                COLLABORATIVE NETWORK
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Meet Fellow Amravati Builders
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Find co-founders, hackathon teammates, and open-source contributors from engineering campuses across Amravati and surrounding Vidarbha districts.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#64748b]">
              <span>COMMUNITY: CROSS-CAMPUS</span>
              <span className="text-purple-400">ORGANIC NETWORKING</span>
            </div>
          </div>

          {/* Bento Item 4: Swag & Certification Policy (7 Cols) */}
          <div className="md:col-span-7 bg-[#0e1017] border border-white/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative group hover:border-[#ff9900]/40 transition-colors">
            <div className="absolute top-3 right-4 font-mono text-xs text-white/20">[BEN-04 &amp; 05]</div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#151822] border border-white/10 flex items-center justify-center text-[#ff9900]">
                  <Gift className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#151822] border border-white/10 flex items-center justify-center text-[#ff9900]">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-sm bg-amber-500/10 text-amber-400 font-mono text-[11px] font-semibold border border-amber-500/20 mb-3">
                PERKS // TRANSPARENT TERMS
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Community Swag &amp; Participation Credentials
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#94a3b8]">
                <p>
                  <strong className="text-white">Community Swag:</strong> Limited stickers and community merchandise are distributed on an attendance and activity participation basis.
                </p>
                <p>
                  <strong className="text-white">Participation Certificate:</strong> Digital participation credentials planned for registered attendees who check in and attend the complete event program.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#64748b]">
              <span>GOVERNANCE: NO FALSE PROMISES</span>
              <span className="text-amber-400">TERMS DISCLOSED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
