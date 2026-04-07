import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pb-4 pt-2">
      <nav className="flex items-center justify-between bg-dark-secondary px-6 h-16 rounded-xs">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image src="/icons/Hosting Logo 1.svg" alt="Logo Icon" width={28} height={28} />
          <Image src="/icons/HOSTER.svg" alt="HOSTER Logo" width={90} height={18} className="hidden lg:block pt-1" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm xl:text-[15px] font-medium text-secondary">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>  
          <Link href="#domain" className="hover:text-primary transition-colors">Domain</Link>
          <Link href="#web-hosting" className="hover:text-primary transition-colors">Web Hosting</Link>
          <Link href="#reseller" className="hover:text-primary transition-colors">Reseller Hosting</Link>
          <Link href="#servers" className="hover:text-primary transition-colors">Servers</Link>
          <Link href="#security" className="hover:text-primary transition-colors">Security</Link>
        </div>

        {/* Actions / Right Side */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 border-r border-[#3a4055] pr-5 flex-1 sm:flex">
            <button className="text-secondary hover:text-primary transition-all">
              <Image src="/icons/clarity_search-line.svg" alt="Search" width={18} height={18} className="opacity-80 hover:opacity-100" />
            </button>
            <button className="text-secondary hover:text-primary transition-all">
              <Image src="/icons/Vector (5).svg" alt="Globe" width={18} height={18} className="opacity-80 hover:opacity-100" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-full text-[14px] font-semibold text-white bg-gradient-to-r from-[#ee2a90] to-[#CF088C] shadow-md shadow-[#CF088C]/30 transition-all hover:opacity-90">Login</button>
            <button className="px-5 py-2 rounded-full text-[14px] font-semibold text-white bg-gradient-to-r from-[#ee2a90] to-[#CF088C] shadow-md shadow-[#CF088C]/30 transition-all hover:opacity-90">Sign Up</button>
          </div>
        </div>

      </nav>
    </div>
  );
}

