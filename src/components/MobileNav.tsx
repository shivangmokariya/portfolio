"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileIcon({ name, isActive }: { name: string; isActive: boolean }) {
  const className = `h-5 w-5 ${isActive ? "text-[#00FF41]" : "text-[#e5e2e1]"}`;

  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.75 9.75V21h10.5V9.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3.75 19.5 7.5V12c0 4.2-2.7 7.97-7.5 9-4.8-1.03-7.5-4.8-7.5-9V7.5L12 3.75Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 11.75 11.25 13.5 14.75 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m8.25 8.25-4.5 3.75 4.5 3.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m15.75 8.25 4.5 3.75-4.5 3.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m13.5 5.25-3 13.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "terminal":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m5.25 7.5 4.5 4.5-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.25 16.5h7.5" strokeLinecap="round" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3.75 6.75h16.5v10.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m4.5 7.5 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

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
            <MobileIcon name={link.icon} isActive={isActive} />
            <span className="text-[8px] font-bold font-headline">
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
