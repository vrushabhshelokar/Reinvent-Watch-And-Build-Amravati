"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      aria-label="Venue and Frequently Asked Questions"
      className="relative overflow-hidden bg-[#090809] px-5 py-12 text-[#F5F0EE] sm:px-10 sm:py-24 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Left Column: Venue & Logistics */}
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-2 sm:mb-3">
              Logistics &amp; Access
            </span>
            <h2 className="text-3xl font-light tracking-[-0.06em] sm:text-5xl text-[#F5F0EE] mb-6 sm:mb-8">
              Venue &amp; <span className="text-[#C24A70]">Location.</span>
            </h2>

            <div className="border-t border-white/15 pt-5 sm:pt-8 mb-6 sm:mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C24A70]">
                Location Status
              </span>
              <h3 className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-light text-[#F5F0EE] tracking-tight">
                {displayEventConfig.displayVenue}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#C2B6BA]/60 font-mono">
                {displayEventConfig.venueCity}, Maharashtra
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-light leading-relaxed text-[#C2B6BA]/80">
                {displayEventConfig.displayAddress}
              </p>

              <div className="mt-5 sm:mt-6 overflow-hidden rounded-lg border border-white/10">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${displayEventConfig.displayVenue}, ${displayEventConfig.displayAddress}, ${displayEventConfig.venueCity}, Maharashtra`
                  )}&output=embed`}
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                  className="block w-full h-[200px] sm:h-[240px] grayscale-[20%] opacity-90"
                />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${displayEventConfig.displayVenue}, ${displayEventConfig.displayAddress}, ${displayEventConfig.venueCity}, Maharashtra`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-t border-white/10 px-4 py-3 text-xs font-mono text-[#C2B6BA]/80 transition-colors hover:text-[#C24A70]"
                >
                  OPEN IN GOOGLE MAPS ↗
                </a>
              </div>

              <div className="mt-5 sm:mt-6 space-y-1.5 sm:space-y-2 border-t border-white/10 pt-4 sm:pt-5 text-xs font-mono text-[#C2B6BA]/60">
                <p>• Sipna College of Engineering and Technology campus auditorium</p>
                <p>• Accessible via municipal bus stops &amp; shared autos</p>
              </div>
            </div>

            {/* Questions Helpdesk */}
            <div className="border-t border-white/10 pt-5 sm:pt-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/50">
                Questions
              </span>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-light text-[#C2B6BA]/80">
                Need any help regarding registration you can reach out to us
              </p>
              <a
                href={`mailto:${displayEventConfig.contactEmail}?subject=Amravati%20Watch%20and%20Build%20Query`}
                className="mt-2.5 sm:mt-3 inline-block text-xs font-mono uppercase tracking-[0.14em] text-[#F5F0EE] hover:text-[#C24A70] transition-colors py-1"
              >
                {displayEventConfig.contactEmail} ↗
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Hairline Accordion */}
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-2 sm:mb-3">
              Clarifications
            </span>
            <h2 className="text-3xl font-light tracking-[-0.06em] sm:text-5xl text-[#F5F0EE] mb-6 sm:mb-8">
              Frequently Asked <span className="text-[#C24A70]">Questions.</span>
            </h2>

            <div className="divide-y divide-white/10 border-y border-white/15" role="region" aria-label="FAQ Accordion">
              {faqData.map((faq, index) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="py-3.5 sm:py-5">
                    <h3>
                      <button
                        type="button"
                        id={`faq-btn-${faq.id}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full text-left flex items-start sm:items-baseline justify-between gap-4 sm:gap-6 py-2 sm:py-1 min-h-[44px] text-[#F5F0EE] hover:text-[#C24A70] transition-colors focus:outline-none focus:ring-1 focus:ring-[#F5F0EE]"
                      >
                        <span className="flex items-start sm:items-baseline gap-3 sm:gap-4 text-sm sm:text-lg font-light tracking-tight">
                          <span className="text-xs font-mono text-[#C2B6BA]/40 shrink-0">
                            0{index + 1}
                          </span>
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#C2B6BA] shrink-0 transition-transform duration-200 mt-1 ${
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
                        className="pt-2 sm:pt-3 pb-2 pl-7 sm:pl-9 pr-2 sm:pr-4 text-xs sm:text-sm font-light text-[#C2B6BA]/80 leading-relaxed max-w-xl"
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
