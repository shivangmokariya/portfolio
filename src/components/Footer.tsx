import Link from "next/link";
import { PRIMARY_NAV_LINKS, SECONDARY_NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#131313] text-[#00FF41] font-headline text-[10px] uppercase tracking-tighter border-t border-[#2a2a2a] relative z-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 w-full lg:ml-64 gap-4">
        <div className="flex items-center gap-4 md:mb-0">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></span>
            Shivang Mokariya
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline">Node.js • Full-Stack • AI Automation</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {/* {PRIMARY_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#e5e2e1]/50 hover:text-[#00FF41] transition-opacity"
            >
              {link.label}
            </Link>
          ))} */}
          {/* {SECONDARY_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#e5e2e1]/50 hover:text-[#00FF41] transition-opacity"
            >
              {link.label}
            </Link>
          ))} */}
        </div>
      </div>
    </footer>
  );
}
