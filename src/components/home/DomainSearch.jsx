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
    <section className="w-full bg-dark-secondary py-4 px-4 sm:px-12 relative z-20 shadow-lg -mt-8 sm:-mt-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:pl-4">

        {/* Left Side: Offer */}
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-[32px] font-bold text-primary mb-3">Get 10% Off Today</h2>
          <p className="text-[15px] font-light text-secondary mb-1 opacity-90">Grab the holiday offer.This offer will end in 3 days.Hurry Up!</p>
          <p className="text-[15px] font-light text-secondary opacity-90">Get your perfect domain starting from 149/Mo.</p>
        </div>

        {/* Right Side: Search & Pricing */}
        <div className="w-full max-w-175 flex flex-col gap-8 flex-1">
          <div className="relative w-full flex bg-white rounded-full overflow-hidden p-1 shadow-xl">
            <input
              type="text"
              placeholder="Type your Domain Name"
              className="flex-1 bg-transparent px-6 py-2.5 text-gray-800 outline-none text-[14px] sm:text-base placeholder:text-gray-400 font-medium"
            />
            <div className="flex items-center px-4 sm:px-6 border-l border-gray-200">
              <span className="text-sm sm:text-base font-semibold text-gray-800 mr-2">.com</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <button 
              onClick={handleSearch}
              disabled={isSearching}
              className={`py-2.5 px-8 cursor-pointer sm:px-12 rounded-full text-[14px] sm:text-[15px] font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-lg shadow-[#06B6D4]/30 transition-all hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px] sm:min-w-[170px] flex items-center justify-center gap-2`}
            >
              {isSearching ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching...
                </>
              ) : (
                "Search"
              )}
            </button>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 px-2 sm:px-4">
            {domains.map((domain) => (
              <div key={domain.tld} className="flex flex-col items-center text-center">
                <span className="text-primary font-bold text-base mb-1 tracking-wide">{domain.tld}</span>
                <span className="text-secondary text-sm font-light opacity-60 tracking-wider font-mono">{domain.price}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
