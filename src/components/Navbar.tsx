"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUI } from "@/context/UIContext";

const navLinks = [
  { href: "/", label: "ROOT" },
  { href: "/work", label: "WORK" },
  { href: "/skills", label: "SKILLS" },
  { href: "/logs", label: "LOGS" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isExpanded, toggleExpanded, isSpinning } = useUI();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#3b4b37]/20 shadow-[0px_0px_60px_-15px_rgba(0,255,65,0.1)]">
      <div className="flex justify-between items-center px-6 h-14">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#00FF41]">
            terminal
          </span>
          <span className="text-xl font-bold text-[#00FF41] font-headline tracking-tighter uppercase">
            KERNEL_ARCH
          </span>
        </div>

        <nav className="hidden md:flex gap-8 items-center font-headline tracking-tighter uppercase text-sm font-bold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-[#00FF41] border-b-2 border-[#00FF41] pb-1"
                    : "text-[#e5e2e1]/60 hover:text-[#00FF41] hover:bg-[#2a2a2a] transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-[10px] opacity-50 hidden sm:block font-mono text-[#00FF41]">
            LATENCY: 14MS
          </span>
          <button 
            onClick={toggleExpanded}
            className={`material-symbols-outlined text-[#00FF41] cursor-pointer hover:text-white transition-all duration-300 ${
              isSpinning ? "animate-[spin_700ms_ease-in-out]" : ""
            } ${isExpanded ? "scale-110 text-white" : ""}`}
          >
            settings
          </button>
        </div>
      </div>
    </header>
  );
}
