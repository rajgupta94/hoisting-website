import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-12 text-sm text-secondary bg-transparent max-w-360 mx-auto">
      <div className="flex items-center gap-6 mb-4 sm:mb-0">
        <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
          <Image src="/icons/Vector.svg" alt="Mail" width={16} height={16} className="opacity-80" />
          <span>support@hostmeerkat.co.uk</span>
        </div>
        <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
          <Image src="/icons/Vector (1).svg" alt="Phone" width={16} height={16} className="opacity-80" />
          <span>+44 7709 322226</span>
        </div>
      </div>
      {/* <div className="flex items-center gap-6">
        <a href="#contact" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
          <Image src="/icons/Vector (2).svg" alt="Support" width={16} height={16} className="opacity-80" />
          <span>Support</span>
        </a>
      </div> */}
    </div>
  );
}
