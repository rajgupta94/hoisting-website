"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050812] pt-12 pb-6 px-4 sm:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 text-center items-center lg:text-left lg:items-start">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Link href="/" className="flex items-center justify-center lg:justify-start cursor-pointer">
              <Image src="/icons/Hosterlogo.svg" alt="HOSTER Logo" width={160} height={40} className="pt-1" />
            </Link>
            <p className="text-secondary opacity-50 text-[14px] font-light leading-relaxed">
              Empowering businesses with fast, secure, and reliable web hosting 
              solutions since 2020.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 group cursor-pointer">
              <svg className="w-4 h-4 text-[#3B82F6] opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="text-secondary opacity-60 text-xs hover:opacity-100 transition-opacity font-light">support@hostmeerkat.co.uk</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <svg className="w-4 h-4 text-[#3B82F6] opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="text-secondary opacity-60 text-xs hover:opacity-100 transition-opacity font-light">+44 7709 322226</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-secondary opacity-40 text-sm font-light">
            © 2026 HostMeerkat. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <SocialIcon icon="facebook" />
            <SocialIcon icon="twitter" />
            <SocialIcon icon="instagram" />
            <SocialIcon icon="linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  // Simple SVG paths for each icon
  const icons = {
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    twitter: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    instagram: "M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z M12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z M17.5 7C17.7761 7 18 6.77614 18 6.5C18 6.22386 17.7761 6 17.5 6C17.2239 6 17 6.22386 17 6.5C17 6.77614 17.2239 7 17.5 7Z",
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
  };

  return (
    <div className="w-10 h-10 rounded-lg bg-dark-secondary border border-white/5 flex items-center justify-center text-secondary opacity-60 hover:opacity-100 hover:text-[#3B82F6] hover:border-[#3B82F6]/30 transition-all cursor-pointer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={icon === 'instagram' ? 'stroke-none fill-current' : 'fill-none'}>
        <path d={icons[icon]} />
      </svg>
    </div>
  );
}
