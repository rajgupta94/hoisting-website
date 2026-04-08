"use client";

const features = [
  {
    title: "Blazing Fast SSD Storage",
    description: "NVMe SSD storage for lightning-fast website loading speeds and optimal performance.",
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "bg-orange-400/10",
    borderColor: "border-orange-400/20"
  },
  {
    title: "Free SSL Security",
    description: "Enterprise-grade SSL certificates included free with every hosting plan.",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  },
  {
    title: "24/7 Expert Support",
    description: "Round-the-clock technical support from our team of hosting experts.",
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    iconBg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "One-Click Install",
    description: "Install WordPress, Joomla, and 100+ apps with a single click.",
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    iconBg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "99.9% Uptime Guarantee",
    description: "Industry-leading uptime backed by our service level agreement.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    iconBg: "bg-blue-400/10",
    borderColor: "border-blue-400/20"
  }
];
export default function Features() {
  return (
    <section id="features" className="w-full py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 mb-4 uppercase">
            Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-[16px] text-secondary max-w-2xl mx-auto opacity-70 font-light">
            Premium hosting features designed to deliver exceptional performance and reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.iconBg} border ${feature.borderColor} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary opacity-70 leading-relaxed font-light text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
