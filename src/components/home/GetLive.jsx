"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const steps = [
  {
    title: "Register",
    icon: "/icons/carbon_user-avatar.svg",
  },
  {
    title: "Choose Plan",
    icon: "/icons/ep_select.svg",
  },
  {
    title: "See your website live",
    icon: "/icons/world-wide-web-icon 1.svg",
  },
];

export default function GetLive() {
  useEffect(() => {
    // Running Current Animation for the steps connector
    gsap.to(".steps-flow-path", {
      strokeDashoffset: -40,
      duration: 0.6,
      repeat: -1,
      ease: "none",
    });
    
    gsap.to(".steps-flow-path-mobile", {
      strokeDashoffset: -40,
      duration: 0.6,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-24 text-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get Your Website Live Today
          </h2>
          <p className="text-secondary opacity-70 text-[14px] sm:text-[15px] max-w-3xl mx-auto leading-relaxed font-light">
            Get everything that you require to set up your personal / business website and
            establish your online presence. Service includes web hosting in India,
            free domain registration along with 24×7 Support.
          </p>
        </div>

        {/* Steps with Curved Connected Path */}
        <div className="relative max-w-5xl mx-auto lg:px-10">
          {/* Curved Dashed Line (Desktop Only) */}
          <div className="absolute top-10 sm:top-12 left-0 w-full hidden md:block" aria-hidden="true">
            <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" className="w-full overflow-visible">
              <defs>
                <filter id="step-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Base Dashed Path - Re-mapped to hit centers */}
              <path
                d="M166,40 Q333,-40 500,40 T833,-40"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="8 8"
                className="opacity-10"
              />

              {/* Animated Current Path */}
              <path
                d="M166,40 Q333,-40 500,40 T833,-40"
                stroke="#06B6D4"
                strokeWidth="2"
                strokeDasharray="15 25"
                className="steps-flow-path"
                strokeOpacity="0.6"
                filter="url(#step-glow)"
              />
            </svg>
          </div>

          {/* Vertical Dashed Line (Mobile Only) */}
          <div className="absolute top-10 bottom-32 left-1/2 -translate-x-1/2 w-[2px] md:hidden" aria-hidden="true">
            <svg width="2" height="100%" className="overflow-visible">
               <line x1="1" y1="0" x2="1" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="8 8" className="opacity-10" />
               <line x1="1" y1="0" x2="1" y2="100%" stroke="#06B6D4" strokeWidth="2" strokeDasharray="15 25" className="steps-flow-path-mobile" strokeOpacity="0.6" filter="url(#step-glow)" />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-4 sm:gap-6 group flex-1">
                {/* Gradient Circle - Faster transition & centered alignment */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center shadow-2xl shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110 relative z-20">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="brightness-200"
                  />
                </div>

                {/* Step Title */}
                <p className="text-white text-lg font-semibold text-center mt-2 group-hover:text-[#06B6D4] transition-colors max-w-[150px]">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-16 md:mt-20 flex flex-col items-center gap-4 sm:gap-6 relative z-10 bg-[#0a0e27]">
            <p className="text-white text-xl sm:text-2xl font-bold">
              Starting at just <span className="text-[#06B6D4]">£100/yr</span>
            </p>
            <button className="px-10 sm:px-12 py-3.5 sm:py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-xl shadow-blue-500/20 transition-all hover:scale-105 hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
