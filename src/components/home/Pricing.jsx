"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for personal websites",
    price: { monthly: 5, yearly: 50 },
    features: {
      monthly: ["10GB NVMe SSD Storage", "1 Website", "24/7 Support"],
      yearly: ["10GB NVMe SSD Storage", "1 Website", "24/7 Support"]
    },
    highlighted: false,
    buttonText: "Choose Plan",
  },
  {
    name: "Business",
    subtitle: "Ideal for growing businesses",
    price: { monthly: 12, yearly: 100 },
    features: {
      monthly: ["30GB NVMe SSD Storage", "Unlimited Bandwidth", "Daily Backups", "Priority Support"],
      yearly: ["30GB NVMe SSD Storage", "Unlimited Bandwidth", "Daily Backups", "Priority Support"]
    },
    highlighted: true,
    mostPopular: true,
    buttonText: "Choose Plan",
  },
  {
    name: "Pro",
    subtitle: "For high-traffic websites",
    price: { monthly: 21, yearly: 240 },
    features: {
      monthly: ["60GB NVMe SSD", "Dedicated IP", "Advanced Security"],
      yearly: ["60GB NVMe SSD", "Dedicated IP", "Advanced Security"]
    },
    highlighted: false,
    buttonText: "Choose Plan",
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section id="web-hosting" className="w-full py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 mb-4 uppercase">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Perfect Plan</h2>
          <p className="text-secondary opacity-60 text-[15px] font-light">
            Flexible pricing options designed to scale with your business
          </p>
        </div>

        {/* Toggle with 17% Off Badge */}
        <div className="flex flex-col items-center mb-16">
          <div className="mb-2">
            <span className="px-3 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
              -17% Off
            </span>
          </div>
          <div className="bg-[#1a1f3a] rounded-full p-1.5 flex items-center border border-white/5">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingCycle === "monthly" 
                ? "bg-[#3B82F6] text-white shadow-lg" 
                : "text-secondary opacity-60 hover:opacity-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingCycle === "yearly" 
                ? "bg-[#3B82F6] text-white shadow-lg" 
                : "text-secondary opacity-60 hover:opacity-100"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-500 hover:-translate-y-2 border ${
                plan.highlighted 
                ? "bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] border-[#3B82F6] shadow-2xl shadow-blue-500/30" 
                : "bg-[#0d122b] border-white/5"
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                   <span className="bg-white text-[#3B82F6] text-[10px] font-extrabold py-1.5 px-4 rounded-full flex items-center gap-1 shadow-xl whitespace-nowrap">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Most Popular
                   </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1.5">{plan.name}</h3>
                <p className={`text-[13px] font-light mb-6 ${plan.highlighted ? "text-white/90" : "text-secondary opacity-50"}`}>
                  {plan.subtitle}
                </p>
                
                <div className="flex items-baseline mb-2 text-white">
                  <span className="text-4xl font-bold">£{plan.price[billingCycle]}</span>
                  <span className={`text-[13px] font-light ml-1 ${plan.highlighted ? "text-white/80" : "text-secondary opacity-60"}`}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 mb-8 flex-grow">
                {plan.features[billingCycle].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <svg className={`w-3.5 h-3.5 shrink-0 fill-current ${plan.highlighted ? "text-white" : "text-[#3B82F6]"}`} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
                        <path d="M9 12.5l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className={`text-[13px] font-light ${plan.highlighted ? "text-white/95" : "text-white/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                className={`w-full py-3 cursor-pointer rounded-xl font-bold text-[14px] transition-all duration-300 ${
                  plan.highlighted 
                  ? "bg-white text-[#3B82F6] shadow-xl hover:bg-opacity-90 hover:scale-[1.02]" 
                  : "bg-transparent border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
