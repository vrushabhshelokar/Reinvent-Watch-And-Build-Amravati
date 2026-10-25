"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin, Navigation, HelpCircle, Mail, ExternalLink } from "lucide-react";
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
      className="py-20 md:py-28 bg-[#0a0d12] border-t border-[#242e3d] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Venue & Directions Guidance */}
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
              Event Logistics
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f7fa] mb-6">
              Venue &amp; <span className="text-[#ff9900]">Directions</span>
            </h2>

            <div className="bg-[#121820] border border-[#242e3d] rounded-2xl p-6 sm:p-7 mb-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#1a222d] border border-[#334052] flex items-center justify-center text-[#ff9900] shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f5f7fa]">
                    {displayEventConfig.displayVenue}
                  </h3>
                  <p className="text-xs text-[#ff9900] font-mono mt-0.5">
                    {displayEventConfig.venueCity}
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#9aa7b8] leading-relaxed mb-6">
                {displayEventConfig.displayAddress}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#242e3d] text-xs text-[#9aa7b8]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
                  <span>Central campus auditorium in Amravati (TBA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
                  <span>Accessible by local city bus routes &amp; shared autos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
                  <span>Two-wheeler and bicycle parking available on premises</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#242e3d]">
                <button
                  type="button"
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1a222d] border border-[#334052] text-xs font-mono text-[#65758a] cursor-not-allowed"
                  title="Google Maps link will be enabled once venue is confirmed"
                >
                  <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Google Maps Link Coming With Venue Confirmation</span>
                </button>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-[#121820]/60 border border-[#242e3d] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-[#ff9900]" aria-hidden="true" />
                <h4 className="text-sm font-semibold text-[#f5f7fa]">Still have questions?</h4>
              </div>
              <p className="text-xs text-[#9aa7b8] leading-relaxed mb-3">
                Send an email directly to the student coordination council. We are here to help.
              </p>
              <a
                href={`mailto:${displayEventConfig.contactEmail}?subject=Query%20Regarding%20Amravati%20Watch%20and%20Build`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9900] hover:text-[#ffd08a]"
              >
                <span>{displayEventConfig.contactEmail}</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#ff9900]" aria-hidden="true" />
              <p className="text-xs font-mono uppercase tracking-widest text-[#ff9900]">
                Common Inquiries
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f7fa] mb-8">
              Frequently Asked <span className="text-[#ff9900]">Questions</span>
            </h2>

            <div className="space-y-4" role="region" aria-label="FAQ Accordion">
              {faqData.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`border rounded-2xl transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#121820] border-[#ff9900]/50"
                        : "bg-[#121820]/70 border-[#242e3d] hover:border-[#334052]"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        id={`faq-btn-${faq.id}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#ffd08a] rounded-2xl"
                      >
                        <span className="text-sm sm:text-base font-semibold text-[#f5f7fa] leading-snug">
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
                        className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#9aa7b8] leading-relaxed border-t border-[#242e3d]/60"
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
