import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full max-w-360 mx-auto px-4 sm:px-12 py-16 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
      {/* Left Content */}
      <div className="flex-1 max-w-[800px] text-center lg:text-left z-20 w-full pl-0 lg:pl-4">
        <h1 className="text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] font-bold text-primary leading-[1.2] mb-6">
          <span className="block lg:whitespace-nowrap">Reliable Web Hosting Platform</span>
          <span className="block mt-1 sm:mt-2">for Your Website</span>
        </h1>
        <p className="text-lg text-secondary mb-5 max-w-lg mx-auto lg:mx-0 font-light pt-2">
          Fully Managed High Performance Web Hosting With Free Domain
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#ee2a90] to-[#CF088C] shadow-lg shadow-[#CF088C]/30 transition-all hover:opacity-90">
            Try for 7 days free
          </button>
          <button className="px-8 py-3.5 rounded-full font-semibold border border-white text-white hover:bg-white/10 transition-all">
            Choose your plan
          </button>
        </div>
      </div>

      {/* Right Content / Illustration Image */}
      <div className="flex-1 w-full max-w-[700px] flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] pointer-events-none z-10 mt-10 lg:mt-0">
        <div className="absolute inset-0 scale-110 sm:scale-125 lg:scale-[1.3] sm:origin-right lg:translate-x-[15%] translate-y-[5%]">
          <Image
            src="/images/Banner 1.png"
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
