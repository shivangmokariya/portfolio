"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileLinks = [
  { href: "/", label: "HOME", icon: "home" },
  { href: "/about", label: "ABOUT", icon: "badge" },
  { href: "/work", label: "WORK", icon: "code" },
  { href: "/skills", label: "SKILLS", icon: "terminal" },
  { href: "/contact", label: "CONTACT", icon: "mail" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#201f1f] flex justify-around items-center px-3 py-3">
      {mobileLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center gap-1 min-w-0 ${
              isActive ? "text-[#00FF41]" : "text-[#e5e2e1] opacity-60"
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="text-[8px] font-bold font-headline">
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
