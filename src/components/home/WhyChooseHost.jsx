"use client";

import Image from "next/image";

const cards = [
  {
    title: "Loading Speed",
    description: "Our high-performance infrastructure, powered by the latest technologies, ensures rapid response times, efficient processing, and exceptionally fast website loading speeds for a seamless user experience.",
    icon: "/icons/internet-speed-icon 1.svg"
  },
  {
    title: "Network Security",
    description: "Our certified Tier III, eco-efficient data centers in India deliver ultra-low latency, supported by a four-layer Software Defined Network to ensure secure, reliable, and high-performance connectivity.",
    icon: "/icons/cloud-computing-icon 1.svg"
  },
  {
    title: "Hosting Reliability",
    description: "Built on advanced infrastructure and modern server architectures, our platform leverages optimized resources to deliver a resilient environment that ensures seamless business continuity.",
    icon: "/icons/secure-icon 1.svg"
  }
];

export default function WhyChooseHost() {
  return (
    <section id="hosting" className="w-full py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose HostMeerkat?
          </h2>
          <p className="text-secondary opacity-70 text-[15px] max-w-4xl mx-auto leading-relaxed font-light">
            Stand out in the digital landscape with Hostmeerkat. We offer highly flexible, premium hosting solutions 
tailored to meet diverse business needs, ensuring seamless performance and uninterrupted execution of your online operations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group pt-6"
            >
              {/* Icon Bubble - Swapped to Purple for contrast */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-[#a946d3] to-[#d946ef] flex items-center justify-center shadow-xl z-20 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="brightness-200"
                />
              </div>

              {/* Card Body - Now using the Blue-Cyan Button Gradient */}
              <div className="bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-3xl p-10 text-center h-full flex flex-col items-center shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-4 mt-4">
                  {card.title}
                </h3>
                <p className="text-white/90 text-[15px] leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
