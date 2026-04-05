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
              <span className="material-symbols-outlined text-sm">
                {link.icon}
              </span>
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
                <span className="material-symbols-outlined text-sm">article</span>
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
