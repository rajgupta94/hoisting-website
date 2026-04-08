"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Hosting", href: "#hosting" },
    { name: "Pricing", href: "#web-hosting" },
    { name: "Contact", href: "#contact", isNative: true },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pb-4 pt-2 sticky top-0 z-[100]">
      <nav className="flex items-center justify-between bg-dark-secondary/80 backdrop-blur-md border border-white/5 px-6 h-16 rounded-2xl shadow-xl transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src="/icons/Hosterlogo.svg" alt="HOSTER Logo" width={140} height={35} className="pt-1" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm xl:text-[15px] font-medium text-secondary">
          <Image src="/icons/monkey.png" alt="Monkey" width={28} height={28} className="rounded-full object-cover cursor-pointer" />
          {navLinks.map((link) => (
            link.isNative ? (
              <a key={link.name} href={link.href} className="hover:text-primary transition-colors cursor-pointer">{link.name}</a>
            ) : (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">{link.name}</Link>
            )
          ))}
        </div>

        {/* Actions / Right Side */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-3">
            <button className="px-5 py-2 rounded-full cursor-pointer text-[14px] font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-md shadow-[#06B6D4]/30 transition-all hover:opacity-90">
              Client Area
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[99] bg-dark-secondary/95 backdrop-blur-xl transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{ top: '80px', height: 'calc(100vh - 80px)' }}
      >
        <div className="flex flex-col items-center justify-start pt-12 gap-8 h-full px-8">
          {navLinks.map((link) => (
            link.isNative ? (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={toggleMenu}
                className="text-2xl font-semibold text-white hover:text-[#3B82F6] transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={toggleMenu}
                className="text-2xl font-semibold text-white hover:text-[#3B82F6] transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          
          <button className="mt-8 w-full py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-xl">
             Client Area
          </button>
        </div>
      </div>
    </div>
  );
}

