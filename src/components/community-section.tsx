import React from "react";
import Image from "next/image";
import { communitiesData } from "@/data/communities";
import { pastEventGallery } from "@/data/gallery";

export function CommunitySection() {
  return (
    <section
      id="communities"
      aria-label="Community and Past Gatherings"
      className="relative isolate overflow-hidden bg-[#090809] px-5 py-12 text-[#F5F0EE] sm:px-10 sm:py-24 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header: Collaborating Groups */}
        <div className="flex flex-col gap-3 sm:gap-5 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-2 sm:mb-3">
              Grassroots Network
            </span>
            <h2 className="text-3xl font-light tracking-[-0.06em] sm:text-6xl text-[#F5F0EE]">
              Our <span className="text-[#C24A70]">Sponsors.</span>
            </h2>
          </div>
          {/* <p className="max-w-md text-xs sm:text-base leading-relaxed text-[#C2B6BA]/70 font-light">
            Student Builder Groups and campus tech associations cooperating across Amravati to host this gathering.
          </p> */}
        </div>

        {/* Collaborating Groups Grid */}
        <div className="grid border-t border-white/15 sm:grid-cols-3 mb-12 sm:mb-20">
          {communitiesData.map((community, index) => (
            <div
              key={community.id}
              className={`group flex min-h-36 sm:min-h-40 flex-col justify-center border-b border-white/15 px-4 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:px-8 sm:py-10 ${
                index > 0 ? "sm:border-l" : ""
              }`}
            >
              <h3 className="text-base sm:text-xl font-light text-[#F5F0EE] group-hover:text-white tracking-tight leading-snug">
                {community.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Past Event Gallery Header */}
        <div className="pt-6 border-t border-white/10 mb-6 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2B6BA]/60 block mb-1.5 sm:mb-2">
              Community Gallery
            </span>
            <h3 className="text-2xl sm:text-4xl font-light tracking-[-0.05em] text-[#F5F0EE]">
              Past Gatherings &amp; <span className="text-[#C24A70]">Labs.</span>
            </h3>
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-[#C2B6BA]/50 max-w-md sm:text-right">
            Curated glimpses from regional student builder workshops. Demo placeholders shown prior to live event archiving.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-6 mb-8 sm:mb-12">
          {/* Item 1: Wide 7 cols */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-xl border border-white/10 bg-[#160B10] aspect-[16/10]">
            <Image
              src={pastEventGallery[0].src}
              alt={pastEventGallery[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090809]/90 via-[#090809]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C24A70] block mb-1">
                  {pastEventGallery[0].category}
                </span>
                <p className="text-xs sm:text-sm font-light text-[#F5F0EE] tracking-tight">
                  {pastEventGallery[0].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Item 2: 5 cols */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-xl border border-white/10 bg-[#160B10] aspect-[16/10] md:aspect-auto">
            <Image
              src={pastEventGallery[1].src}
              alt={pastEventGallery[1].alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090809]/90 via-[#090809]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C24A70] block mb-1">
                  {pastEventGallery[1].category}
                </span>
                <p className="text-xs sm:text-sm font-light text-[#F5F0EE] tracking-tight">
                  {pastEventGallery[1].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: 5 cols */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-xl border border-white/10 bg-[#160B10] aspect-[16/10] md:aspect-auto">
            <Image
              src={pastEventGallery[2].src}
              alt={pastEventGallery[2].alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090809]/90 via-[#090809]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C24A70] block mb-1">
                  {pastEventGallery[2].category}
                </span>
                <p className="text-xs sm:text-sm font-light text-[#F5F0EE] tracking-tight">
                  {pastEventGallery[2].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Item 4: Wide 7 cols */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-xl border border-white/10 bg-[#160B10] aspect-[16/10]">
            <Image
              src={pastEventGallery[3].src}
              alt={pastEventGallery[3].alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090809]/90 via-[#090809]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C24A70] block mb-1">
                  {pastEventGallery[3].category}
                </span>
                <p className="text-xs sm:text-sm font-light text-[#F5F0EE] tracking-tight">
                  {pastEventGallery[3].caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Invitation */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm font-light text-[#C2B6BA]/80">
            Leading a college coding club or open-source community in Vidarbha?
          </p>
          <a
            href="mailto:organizers.amravati@gmail.com?subject=Community%20Partner%20Collaboration"
            className="text-xs font-mono uppercase tracking-[0.14em] text-[#F5F0EE] hover:text-[#C24A70] transition-colors shrink-0 py-1"
          >
            Partner With Us ↗
          </a>
        </div>
      </div>
    </section>
  );
}
