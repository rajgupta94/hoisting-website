"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
// Register GSAP Plugin
if (typeof window !== "undefined") {
  // Common GSAP registration
}

export default function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    // Floating Animation for the entire image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -15,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section className="relative w-full max-w-360 mx-auto px-4 sm:px-12 pt-0 pb-16 lg:pb-14 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
      {/* Left Content */}
      <div className="flex-1 max-w-[800px] text-center lg:text-left z-20 w-full pl-0 lg:pl-4">
        <h1 className="text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] font-bold text-primary leading-[1.2] mb-8">
          <span className="block lg:whitespace-nowrap">Fast, Secure &</span>
          <span className="block mt-1 sm:mt-2 leading-10">Scalable Web Hosting</span>
        </h1>

        <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-2 text-sm rounded-md text-secondary mb-8">
          <svg className="w-4 h-4 text-[#06B6D4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Powered by NVMe SSD & 99.9% Uptime Guarantee
        </div>

        <p className="text-lg text-secondary mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
          Launch your website in minutes with lightning-fast performance and enterprise-level security.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="px-8 py-3.5 cursor-pointer rounded-full font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-lg shadow-[#06B6D4]/30 transition-all hover:opacity-90">
            Get Started
          </button>
          <button className="px-8 py-3.5 cursor-pointer rounded-full font-semibold border border-white text-white hover:bg-white/10 transition-all">
            View Plans
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center lg:justify-start gap-4 mt-12 flex-wrap">
          {/* Stars */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {/* Half star */}
              <svg className="w-5 h-5 text-amber-400" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="halfStar">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="#4B5563" />
                  </linearGradient>
                </defs>
                <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white ml-1">4.8/5 Rating</span>
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-white/20 hidden sm:block" />

          {/* Trust text */}
          <span className="text-sm text-secondary font-light">Trusted by 10,000+ websites</span>
        </div>
      </div>

      {/* Right Content / Illustration Image */}
      <div
        ref={imageRef}
        className="flex-1 w-full max-w-[700px] flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] pointer-events-none z-10 mt-10 lg:mt-0"
      >
        <div className="absolute inset-0 scale-110 sm:scale-125 lg:scale-[1.3] sm:origin-right lg:translate-x-[15%] translate-y-[5%]">
          <Image
            src="/images/Banner 1.svg"
            alt="3D Server Isometric View"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 800px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
