"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Mr. Issac Denise",
    image: "/images/Ellipse 6.svg",
    quote: "Host provides solid value in VPS hosting with great prices that provide the best premium support and excellent up-time in the industry.",
    rating: 5
  },
  {
    name: "Mr. John Williams",
    image: "/images/Ellipse 6 (1).svg",
    quote: "Being in education we need an interactive and user friendly online platform for admissions and registrations. Host offered us the complete package.",
    rating: 5
  },
  {
    name: "Mr. Paul Conner",
    image: "/images/Ellipse 6 (2).svg",
    quote: "My company has had a great long standing relationship with Host. Their response time and customer support has been a boon.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-4 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What our clients say
          </h2>
          <p className="text-secondary opacity-70 text-[15px] max-w-2xl mx-auto leading-relaxed font-light">
            Your trusted hosting partner since 2005. Here's what some of our customers say about HOST.CO.IN
          </p>
        </div>

        <div className="relative group/nav">
          {/* Left Arrow */}
          <button className="absolute -left-4 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-[100] transition-all hover:scale-110 active:scale-95">
            <Image src="/images/Vector.svg" alt="Previous" width={24} height={24} className="opacity-40 hover:opacity-100 transition-opacity" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((t, index) => (
              <div key={index} className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-2">
                {/* Profile Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white/5 shadow-2xl transition-transform group-hover:scale-105">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    width={96} 
                    height={96} 
                    className="object-cover"
                  />
                </div>

                {/* Bubble */}
                <div className="relative w-full max-w-[320px] mx-auto bg-[#1a1f3a]/40 border border-white/10 rounded-2xl p-6 mb-6 text-center shadow-lg backdrop-blur-sm">
                  {/* Triangle Arrow */}
                  <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0e27] border-l border-t border-white/10 rotate-45" />
                  
                  <p className="text-white/80 text-[14px] leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Identity & Rating */}
                <div className="text-center">
                  <h4 className="text-white font-semibold text-base mb-1.5">{t.name}</h4>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-[#3B82F6] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute -right-4 sm:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-[100] transition-all hover:scale-110 active:scale-95">
            <Image src="/images/Vector%20(1).svg" alt="Next" width={24} height={24} className="opacity-40 hover:opacity-100 transition-opacity" />
          </button>

        </div>
      </div>
    </section>
  );
}
