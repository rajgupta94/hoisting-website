"use client";

import { useState } from "react";

export default function DomainSearch() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Mock search interaction
    setTimeout(() => setIsSearching(false), 2000);
  };

  const domains = [
    { tld: ".com", price: "199/Mo" },
    { tld: ".org", price: "179/Mo" },
    { tld: ".info", price: "189/Mo" },
    { tld: ".store", price: "189/Mo" },
    { tld: ".net", price: "159/Mo" },
    { tld: ".co.uk", price: "299/Mo" },
  ];

  return (
    <section className="w-full bg-dark-secondary py-12 sm:py-20 px-4 sm:px-12 relative z-20 shadow-lg -mt-8 sm:-mt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* Left Side: Offer */}
        <div className="text-center lg:text-left flex-1">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 mb-6 uppercase">
            Limited Time Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white mb-4 leading-tight">
            Get 10% Off Today
          </h2>
          <p className="text-[15px] sm:text-[16px] font-light text-secondary mb-2 opacity-70 leading-relaxed">
            Grab the holiday offer. This offer ends in 3 days. Hurry Up!
          </p>
          <p className="text-[15px] sm:text-[16px] font-light text-secondary opacity-70 leading-relaxed">
            Get your perfect domain starting from <span className="text-[#06B6D4] font-semibold">£12/Mo</span>.
          </p>
        </div>

        {/* Right Side: Search & Pricing */}
        <div className="w-full max-w-2xl flex flex-col gap-10 flex-1">
          <div className="relative w-full flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-full overflow-hidden p-2 sm:p-1.5 shadow-2xl shadow-blue-500/10">
            <input
              type="text"
              placeholder="Type your Domain Name"
              className="flex-1 bg-transparent px-6 py-4 text-gray-800 outline-none text-[15px] sm:text-base placeholder:text-gray-400 font-medium"
            />
            
            <div className="flex items-center justify-center gap-4 py-3 sm:py-0 px-4 sm:px-8 border-t sm:border-t-0 sm:border-l border-gray-100 min-w-[120px]">
              <span className="text-[15px] sm:text-base font-bold text-gray-800">.com</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-40">
                <path d="M1 1L5 5L9 1" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <button 
              onClick={handleSearch}
              disabled={isSearching}
              className={`w-full sm:w-auto py-4 px-10 rounded-xl sm:rounded-full text-[15px] font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-lg shadow-[#06B6D4]/30 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3`}
            >
              {isSearching ? (
                <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching...
                </>
              ) : (
                "Search Now"
              )}
            </button>
          </div>

          {/* Domain Pricing Tickers */}
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-between items-center gap-y-8 gap-x-4 px-2 sm:px-6">
            {domains.map((domain) => (
              <div key={domain.tld} className="flex flex-col items-center text-center group cursor-default">
                <span className="text-white font-bold text-base sm:text-lg mb-1 group-hover:text-[#06B6D4] transition-colors">{domain.tld}</span>
                <span className="text-secondary text-[12px] sm:text-sm font-medium opacity-50 tracking-wider">£{domain.price}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
