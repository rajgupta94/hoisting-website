"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

export default function Migration() {
  const imageRef = useRef(null);
  const packetsRef = useRef([]);

  useEffect(() => {
    // Floating Animation
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -12,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Running Current Animation (Light pulses along lines)
    gsap.to(".migration-flow-path", {
      strokeDashoffset: -60,
      duration: 0.8, // Slightly faster for Migration section
      repeat: -1,
      ease: "none",
    });

    // Data Flow Animation (Packets)
    packetsRef.current.forEach((packet, index) => {
      if (packet) {
        const pathId = `#mig-path-${index}`;
        gsap.to(packet, {
          duration: 1.5 + Math.random() * 1.5,
          repeat: -1,
          ease: "none",
          motionPath: {
            path: pathId,
            align: pathId,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
          delay: index * 0.4,
        });
      }
    });
  }, []);
  return (
    <section className="w-full py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Migration is not an issue with us
          </h2>
          <p className="text-secondary opacity-70 text-[15px] font-light max-w-2xl mx-auto leading-relaxed">
            We provided free migration service so that our customers can manage their work easily
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white mb-6">
              Hassle Free Migration
            </h3>
            <p className="text-secondary opacity-70 text-[16px] leading-relaxed mb-10 font-light max-w-xl mx-auto lg:mx-0">
              Our technical expert team will help you to migrate your site from your 
              current hosting provider to Host.co.in, You don't have to worry about any 
              of the migration issues.
            </p>
            
            <button className="px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-lg shadow-[#06B6D4]/20 transition-all hover:scale-105 hover:opacity-90">
              Contact Sales
            </button>
          </div>

          {/* Right Image Column */}
          <div className="flex-1 w-full flex justify-center lg:justify-end items-center relative">
            <div 
              ref={imageRef}
              className="relative w-full aspect-[4/3] max-w-[600px] pointer-events-none"
            >
              <Image 
                src="/images/Migration 4 1.svg" 
                alt="Cloud Migration Illustration" 
                fill 
                className="object-contain drop-shadow-2xl"
                priority
              />

              {/* Data Flow Animation Layer */}
              <svg 
                viewBox="0 0 699 453" 
                className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="mig-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Path 0: Leftmost Node */}
                <path id="mig-path-0" className="migration-flow-path" d="M350 100 V 150 H 90 V 270" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="20 40" strokeOpacity="0.4" filter="url(#mig-neon-glow)" />
                
                {/* Path 1: Inner Left Node */}
                <path id="mig-path-1" className="migration-flow-path" d="M350 100 V 150 H 260 V 270" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="20 40" strokeOpacity="0.4" filter="url(#mig-neon-glow)" />
                
                {/* Path 2: Inner Right Node */}
                <path id="mig-path-2" className="migration-flow-path" d="M350 100 V 150 H 440 V 270" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="20 40" strokeOpacity="0.4" filter="url(#mig-neon-glow)" />
                
                {/* Path 3: Rightmost Node */}
                <path id="mig-path-3" className="migration-flow-path" d="M350 100 V 150 H 615 V 270" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="20 40" strokeOpacity="0.4" filter="url(#mig-neon-glow)" />

                {/* Glowing Packets (Dots) */}
                {[0, 1, 2, 3].map((i) => (
                  <circle 
                    key={i}
                    ref={(el) => (packetsRef.current[i] = el)}
                    r="4" 
                    fill="#06B6D4" 
                    filter="url(#mig-neon-glow)"
                  />
                ))}
              </svg>
              
              {/* Subtle background glow for the image */}
              <div aria-hidden="true" className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
