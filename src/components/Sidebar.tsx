"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECONDARY_NAV_LINKS } from "@/lib/site";

const sidebarLinks = [
  { href: "/", icon: "home", alias: "~/home" },
  { href: "/about", icon: "badge", alias: "~/about" },
  { href: "/work", icon: "code", alias: "~/projects" },
  { href: "/skills", icon: "terminal", alias: "~/skills" },
  { href: "/contact", icon: "mail", alias: "~/contact" },
];

function SidebarIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3.5 10 12 3.5 20.5 10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 9.5V20h11V9.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3.8 18.5 6v5.2c0 4-2.3 7-6.5 8.9-4.2-1.9-6.5-4.9-6.5-8.9V6L12 3.8Z" />
          <path d="m9.5 11.8 1.6 1.6 3.4-3.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m8.5 8-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m15.5 8 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m13.5 5-3 14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "terminal":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m5 7 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 17h7" strokeLinecap="round" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 6.5h16v11H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m4.5 7.5 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "article":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 5.5h12v13H6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col h-[calc(100vh-3.5rem)] w-64 fixed left-0 top-14 bg-[#1c1b1b] border-r border-[#2a2a2a] py-4 z-40">
      <div className="px-6 mb-8">
        <div className="font-headline font-black text-[#00FF41] text-lg uppercase">
          SYS_ROOT
        </div>
        <div className="text-[10px] text-[#e5e2e1]/40 tracking-widest font-headline">
          portfolio.command-center
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "flex items-center gap-3 px-6 py-3 text-[#00FF41] font-bold bg-[#2a2a2a] border-l-4 border-[#00FF41] font-headline text-sm uppercase transition-all"
                  : "flex items-center gap-3 px-6 py-3 text-[#e5e2e1]/40 hover:bg-[#201f1f] hover:text-[#00FF41] font-headline text-sm uppercase transition-all duration-150"
              }
            >
              <SidebarIcon name={link.icon} className="h-4 w-4 shrink-0" />
              <span>{link.alias}</span>
            </Link>
          );
        })}

        <div className="px-6 pt-6">
          <div className="text-[10px] text-[#e5e2e1]/30 tracking-[0.25em] font-headline uppercase mb-2">
            Secondary
          </div>
          {SECONDARY_NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "flex items-center gap-3 py-2 text-[#00FF41] font-headline text-sm uppercase"
                    : "flex items-center gap-3 py-2 text-[#e5e2e1]/40 hover:text-[#00FF41] font-headline text-sm uppercase transition-colors"
                }
              >
                <SidebarIcon name="article" className="h-4 w-4 shrink-0" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="px-6 mt-auto">
        <div className="p-3 bg-surface-container-lowest ghost-border text-[10px] leading-relaxed opacity-60 font-headline text-[#00FF41]">
          CPU_LOAD: 12%
          <br />
          MEM_USE: 4.2GB/16GB
          <br />
          NET_STATUS: UP
        </div>
      </div>
    </aside>
  );
}
