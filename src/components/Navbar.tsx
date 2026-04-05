"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUI } from "@/context/UIContext";
import { PRIMARY_NAV_LINKS, SOCIAL_LINKS } from "@/lib/site";

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m5 7 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17h7" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M9.6 4.2h4.8l.72 2.43a6.97 6.97 0 0 1 1.44.84l2.39-.84 2.4 4.15-1.69 1.84c.06.46.06.92 0 1.38l1.69 1.84-2.4 4.15-2.39-.84c-.45.34-.93.62-1.44.84l-.72 2.43H9.6l-.72-2.43a6.97 6.97 0 0 1-1.44-.84l-2.39.84-2.4-4.15 1.69-1.84a5.8 5.8 0 0 1 0-1.38L2.65 10.8l2.4-4.15 2.39.84c.45-.34.93-.62 1.44-.84L9.6 4.2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function SocialIcon({ label }: { label: (typeof SOCIAL_LINKS)[number]["label"] }) {
  switch (label) {
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
          <path d="M12 1.5A10.5 10.5 0 0 0 8.68 22c.53.1.72-.23.72-.5v-1.95c-2.95.64-3.57-1.25-3.57-1.25-.48-1.2-1.16-1.52-1.16-1.52-.95-.64.07-.63.07-.63 1.05.08 1.6 1.08 1.6 1.08.94 1.6 2.45 1.14 3.05.87.1-.68.37-1.14.67-1.4-2.36-.27-4.84-1.18-4.84-5.24 0-1.16.42-2.1 1.08-2.84-.1-.27-.47-1.36.1-2.83 0 0 .89-.28 2.92 1.08a10.07 10.07 0 0 1 5.32 0c2.03-1.36 2.92-1.08 2.92-1.08.57 1.47.2 2.56.1 2.83.68.74 1.08 1.68 1.08 2.84 0 4.07-2.49 4.97-4.86 5.23.38.33.72.97.72 1.96v2.9c0 .28.19.6.73.5A10.5 10.5 0 0 0 12 1.5Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm14.69 9.83c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H8.87c.04.75 0 11.5 0 11.5h3.37v-6.42c0-.35.03-.7.13-.95.28-.69.93-1.4 2.02-1.4 1.43 0 2 1.09 2 2.68V20h3.37l.18-7.17Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
          <path d="M7.6 2h8.8A5.6 5.6 0 0 1 22 7.6v8.8a5.6 5.6 0 0 1-5.6 5.6H7.6A5.6 5.6 0 0 1 2 16.4V7.6A5.6 5.6 0 0 1 7.6 2Zm-.2 1.8A3.6 3.6 0 0 0 3.8 7.4v9.2a3.6 3.6 0 0 0 3.6 3.6h9.2a3.6 3.6 0 0 0 3.6-3.6V7.4a3.6 3.6 0 0 0-3.6-3.6H7.4Zm9.75 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Navbar() {
  const pathname = usePathname();
  const { isExpanded, toggleExpanded, isSpinning } = useUI();
  const settingsButtonClassName = `group flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-[#00FF41] transition-all duration-300 hover:text-white ${
    isSpinning ? "animate-[spin_700ms_ease-in-out]" : ""
  } ${isExpanded ? "scale-110 text-white" : ""}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#3b4b37]/20 shadow-[0px_0px_60px_-15px_rgba(0,255,65,0.1)]">
      <div className="flex justify-between items-center px-3 sm:px-6 h-14 gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <TerminalIcon className="h-5 w-5 text-[#00FF41]" />
          <span className="hidden sm:block text-xl font-bold text-[#00FF41] font-headline tracking-tighter uppercase whitespace-nowrap">
            KERNEL_ARCH
          </span>
        </div>

        <nav className="hidden md:flex gap-8 items-center font-headline tracking-tighter uppercase text-sm font-bold">
          {PRIMARY_NAV_LINKS.map((link) => {
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

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center border border-[#00FF41]/20 text-[#00FF41] transition-all duration-300 hover:border-[#00FF41]/70 hover:bg-[#00FF41]/10 hover:text-white"
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
          <span className="text-[10px] opacity-50 hidden sm:block font-mono text-[#00FF41]">
            LATENCY: 14MS
          </span>
          <button
            onClick={toggleExpanded}
            aria-label={isExpanded ? "Close settings panel" : "Open settings panel"}
            title={isExpanded ? "Close settings" : "Open settings"}
            className={settingsButtonClassName}
          >
            <SettingsIcon className="h-5 w-5 sm:h-[18px] sm:w-[18px] transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>
      </div>
    </header>
  );
}
