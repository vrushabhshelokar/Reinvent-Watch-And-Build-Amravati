"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin, Mail, ArrowUpRight } from "lucide-react";
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
      aria-label="Venue and FAQ"
      className="py-20 md:py-28 bg-[#090a0f] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Venue & Logistical Info */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
              Logistics
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Venue &amp; Location.
            </h2>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
              <div className="flex items-start gap-3.5 mb-4">
                <MapPin className="w-5 h-5 text-[#ff9900] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {displayEventConfig.displayVenue}
                  </h3>
                  <p className="text-xs text-[#94a3b8] mt-0.5">
                    {displayEventConfig.venueCity}, Maharashtra
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                {displayEventConfig.displayAddress}
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-[#94a3b8]">
                <div>• Central campus auditorium in Amravati (TBA)</div>
                <div>• Accessible via city bus routes &amp; shared autos</div>
                <div>• Two-wheeler campus parking available</div>
              </div>
            </div>

            {/* Inquiries / Contact */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2.5 mb-2">
                <Mail className="w-4 h-4 text-[#ff9900]" />
                <h4 className="font-display text-sm font-bold text-white">Student Questions?</h4>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed mb-3">
                Have questions regarding demo slots, attendee check-in, or group registrations?
              </p>
              <a
                href={`mailto:${displayEventConfig.contactEmail}?subject=Amravati%20Watch%20and%20Build%20Query`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9900] hover:underline font-semibold"
              >
                <span>{displayEventConfig.contactEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
              FAQ
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
              Frequently Asked Questions.
            </h2>

            <div className="divide-y divide-white/10 border-y border-white/10" role="region" aria-label="FAQ Accordion">
              {faqData.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="py-4">
                    <h3>
                      <button
                        type="button"
                        id={`faq-btn-${faq.id}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full text-left flex items-center justify-between gap-4 py-1 text-white hover:text-[#ff9900] transition-colors focus:outline-none focus:ring-1 focus:ring-[#ff9900]"
                      >
                        <span className="font-display text-base sm:text-lg font-semibold">
                          {faq.question}
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
                        className="pt-2 pb-3 pr-6 text-sm text-[#94a3b8] leading-relaxed"
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
