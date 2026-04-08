"use client";

import Image from "next/image";

const stats = [
  {
    icon: "/icons/customer-experience-icon 1.svg",
    value: "5000+",
    label: "Happy Clients",
  },
  {
    icon: "/icons/uptime-arrow-icon 1.svg",
    value: "Maximum",
    label: "Uptime",
  },
  {
    icon: "/icons/server-storage-icon 1.svg",
    value: "20+",
    label: "Server Locations",
  },
  {
    icon: "/icons/headphone-headset-icon 1.svg",
    value: "24/7",
    label: "Live Support",
  },
  {
    icon: "/icons/stack-icon 1.svg",
    value: "Tire 3",
    label: "Certified Data Center",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            What will you get if you join us&nbsp;?
          </h2>
          <p className="text-[15px] text-secondary opacity-75 font-light">
            Get the best hosting service at the price you can afford
          </p>
        </div>

        {/* Stats Row */}
        <div className="w-full flex flex-wrap justify-center items-start gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="stat-card flex flex-col items-center gap-3 group">
      {/* Icon bubble */}
      <div className="stat-icon-wrap relative flex items-center justify-center w-20 h-20 rounded-full transition-transform duration-300 group-hover:-translate-y-1">
        {/* Gradient ring */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
            opacity: 0.18,
          }}
        />
        {/* Inner circle */}
        <div
          className="absolute inset-[3px] rounded-full"
          style={{
            background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
          }}
        />
        <Image
          src={icon}
          alt={label}
          width={36}
          height={36}
          className="relative z-10 brightness-200"
        />
      </div>

      {/* Text */}
      <div className="text-center">
        <p className="text-xl font-bold text-white leading-tight">{value}</p>
        <p className="text-[13px] text-secondary opacity-70 font-light mt-0.5">
          {label}
        </p>
      </div>
    </div>
  );
}
