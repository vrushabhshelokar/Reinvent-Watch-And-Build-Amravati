"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin, Navigation, Mail, ArrowUpRight } from "lucide-react";
import { faqData } from "@/data/faq";
import { displayEventConfig } from "@/data/event";

export function VenueFaqSection() {
  const [openId, setOpenId] = useState<string | null>("eligibility");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="venue-faq"
      aria-label="Venue Information and Frequently Asked Questions"
      className="py-20 md:py-28 bg-[#08090d] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Venue Dispatch & Logistical Guidance */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900] uppercase tracking-widest mb-2">
              <span>08</span>
              <span className="text-white/20">/</span>
              <span>LOGISTICS &amp; LOCATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              VENUE &amp; <span className="text-[#ff9900]">ACCESS.</span>
            </h2>

            <div className="p-7 rounded-2xl bg-[#0e1017] border border-white/10 mb-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#151822] border border-white/10 flex items-center justify-center text-[#ff9900] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {displayEventConfig.displayVenue}
                  </h3>
                  <p className="text-xs font-mono text-[#ff9900] mt-0.5">
                    {displayEventConfig.venueCity}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-6">
                {displayEventConfig.displayAddress}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-[#94a3b8] font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
                  <span>Central campus auditorium in Amravati (TBA)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
                  <span>Accessible via city bus routes &amp; shared autos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
                  <span>Two-wheeler campus parking available</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <button
                  type="button"
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#151822] border border-white/10 text-xs font-mono text-[#64748b] cursor-not-allowed"
                  title="Google Maps link will be enabled once venue is confirmed"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps link unlocks with venue sign-off</span>
                </button>
              </div>
            </div>

            {/* Direct Contact Box */}
            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-[#ff9900]" />
                <h4 className="font-display text-sm font-bold text-white">Student Query Helpdesk</h4>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed mb-3">
                Have specific queries regarding attendance permissions, project demos, or accessibility accommodations?
              </p>
              <a
                href={`mailto:${displayEventConfig.contactEmail}?subject=Query%20Regarding%20Amravati%20Watch%20and%20Build`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9900] hover:text-[#ffd08a] font-semibold"
              >
                <span>{displayEventConfig.contactEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Hairline FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900] uppercase tracking-widest mb-2">
              <span>09</span>
              <span className="text-white/20">/</span>
              <span>INQUIRIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8">
              FREQUENTLY ASKED <span className="text-[#ff9900]">QUESTIONS.</span>
            </h2>

            <div className="divide-y divide-white/10 border-y border-white/10" role="region" aria-label="FAQ Accordion">
              {faqData.map((faq, index) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="py-4.5 transition-colors">
                    <h3>
                      <button
                        type="button"
                        id={`faq-btn-${faq.id}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#ffd08a] py-2 group"
                      >
                        <span className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#ff9900] transition-colors flex items-baseline gap-3">
                          <span className="font-mono text-xs text-[#ff9900]/70 shrink-0">
                            0{index + 1}
                          </span>
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#ff9900] shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        className="pl-7 pr-4 pt-2 pb-4 text-xs sm:text-sm text-[#94a3b8] leading-relaxed"
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
