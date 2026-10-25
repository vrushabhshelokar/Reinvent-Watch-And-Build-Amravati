"use client";

import React, { useEffect, useRef } from "react";
import { displayEventConfig } from "@/data/event";
import { RegistrationButton } from "./registration-button";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Explicitly enforce muted properties on the DOM node for browser autoplay policies
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    // 2. Attempt playback with promise error handling
    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay was blocked or deferred by browser policy (e.g., low power mode, background tab)
          console.warn("[HeroSection] Video autoplay deferred by browser:", error?.message || error);
        });
      }
    };

    startPlayback();

    // 3. Fallback: If autoplay was deferred (e.g. mobile battery saver), start on first user interaction
    const handleFirstInteraction = () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
    };

    window.addEventListener("touchstart", handleFirstInteraction, { passive: true, once: true });
    window.addEventListener("scroll", handleFirstInteraction, { passive: true, once: true });
    window.addEventListener("click", handleFirstInteraction, { passive: true, once: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  return (
    <section
      id="hero"
      aria-label="Event Hero"
      className="relative isolate min-h-screen flex items-center overflow-hidden bg-[#090809] text-[#F5F0EE] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-24 lg:pb-16"
    >
      {/* Full-bleed Background Video Layer */}
      <div className="absolute inset-0 -z-30 w-full h-full overflow-hidden" aria-hidden="true">
        {/* Reduced motion static fallback */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center hidden motion-reduce:block opacity-35"
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
        />

        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          disablePictureInPicture
          disableRemotePlayback
          className="h-full w-full object-cover object-center motion-reduce:hidden opacity-35 sm:opacity-40 scale-105 pointer-events-none select-none"
        >
          <source src="/videos/hero_background.webm" type="video/webm" />
          <source src="/videos/hero_background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Atmospheric Black-to-Burgundy Overlays */}
      <div className="absolute inset-0 -z-20 bg-black/55 sm:bg-black/40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#090809]/95 via-[#160B10]/80 sm:via-[#160B10]/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#090809] via-transparent to-[#090809]/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_75%,rgba(87,29,49,0.35),transparent_55%)]"
        aria-hidden="true"
      />

      {/* Asymmetric Left-Aligned Editorial Composition */}
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="max-w-4xl text-left">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#C2B6BA]/85 mb-4 sm:mb-8">
            AMRAVATI · STUDENT TECHNOLOGY EVENT
          </p>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.4rem,8.5vw,7.8rem)] sm:text-[clamp(3.2rem,9.5vw,7.8rem)] font-light leading-[0.9] sm:leading-[0.88] tracking-[-0.065em] text-[#F5F0EE] mb-6 sm:mb-8">
            Watch. Build.<br />
            <span className="font-normal text-[#F5F0EE]">Reinvent.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-xl text-sm sm:text-lg font-light leading-relaxed text-[#C2B6BA] mb-3 sm:mb-4">
            Explore cloud technology, dissect production architectures, and connect with the student developer community.
          </p>

          {/* Minimal Event Coordinates */}
          <p className="text-[11px] sm:text-xs font-mono tracking-wide sm:tracking-wider text-[#C2B6BA]/60 mb-8 sm:mb-10">
            {displayEventConfig.displayDate} · Amravati, Maharashtra · Free Entry
          </p>

          {/* Primary Outlined CTA */}
          <div className="w-full sm:w-auto">
            <RegistrationButton
              placement="hero"
              size="lg"
              label="Register Now"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
