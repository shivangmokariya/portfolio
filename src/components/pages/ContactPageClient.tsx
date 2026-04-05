"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TerminalWindow } from "@/components/TerminalWindow";

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 12H4" strokeLinecap="round" />
      <path d="m10 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11.5 21 3l-8.5 18-1.9-7.6L3 11.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6 13.4 21 3" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.4 2.4 4.6-5.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SyncIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 5v5h-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19v-5h5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.8 9A8 8 0 0 1 20 10" strokeLinecap="round" />
      <path d="M17.2 15A8 8 0 0 1 4 14" strokeLinecap="round" />
    </svg>
  );
}

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [packetId, setPacketId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setPacketId(`SHVJ-${crypto.randomUUID().slice(0, 4).toUpperCase()}`);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pb-24 px-4 md:px-8 max-w-3xl mx-auto pt-8">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { label: "Contact" },
        ]}
      />

      <div className="mb-8 flex items-center gap-3">
        <Link
          href="/"
          className="text-[#00FF41] hover:bg-[#00FF41]/10 p-2 border border-[#00FF41]/20 transition-all active:scale-95"
          aria-label="Back to home page"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-headline font-bold tracking-tighter text-[#E5E2E1]">
            Contact Shivang Mokariya
          </h1>
          <p className="text-[10px] font-mono text-[#00FF41] opacity-60">
            discuss freelance, contract, and full-stack product work
          </p>
        </div>
      </div>

      <TerminalWindow title="guest@kernel-v1: ~/contacts" useSquareDots>
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Use this form to share your project goals, timeline, and the kind of
              help you need with backend APIs, full-stack development, or AI and
              automation workflows.
            </p>

            <div className="space-y-6">
              <div className="space-y-2 group">
                <label className="block font-mono text-xs text-[#00FF41]/70 group-focus-within:text-[#00FF41]">
                  [ 01 ] INPUT_IDENTITY_NAME:
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full bg-[#131313]/50 border border-[#3b4b37]/30 px-4 py-3 font-headline text-on-surface focus:outline-none focus:border-[#00FF41] focus:ring-1 focus:ring-[#00FF41]/50 transition-all placeholder:opacity-30"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2 group">
                <label className="block font-mono text-xs text-[#00FF41]/70 group-focus-within:text-[#00FF41]">
                  [ 02 ] INPUT_CONTACT_EMAIL:
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@provider.com"
                  className="w-full bg-[#131313]/50 border border-[#3b4b37]/30 px-4 py-3 font-headline text-on-surface focus:outline-none focus:border-[#00FF41] focus:ring-1 focus:ring-[#00FF41]/50 transition-all placeholder:opacity-30"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2 group">
                <label className="block font-mono text-xs text-[#00FF41]/70 group-focus-within:text-[#00FF41]">
                  [ 03 ] INPUT_COMMUNICATION_CONTENT:
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your request, business context, and technical requirements..."
                  className="w-full bg-[#131313]/50 border border-[#3b4b37]/30 px-4 py-3 font-headline text-on-surface focus:outline-none focus:border-[#00FF41] focus:ring-1 focus:ring-[#00FF41]/50 transition-all placeholder:opacity-30 resize-none"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <div className="text-[10px] font-mono text-[#00FF41]/40">
                &gt; READY_TO_TRANSMIT:{" "}
                <span className={formData.description ? "text-[#00FF41]" : ""}>
                  {formData.description ? "YES" : "NO"}
                </span>
              </div>
              <button
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#00FF41] text-[#003907] px-8 py-3 font-headline font-bold text-sm flex items-center justify-center gap-2 group transition-all active:scale-95 disabled:opacity-50 disabled:grayscale"
              >
                {isSubmitting ? (
                  <>
                    <SyncIcon className="h-4 w-4 animate-spin" />
                    SENDING_PACKET...
                  </>
                ) : (
                  <>
                    TRANSMIT_DATA
                    <SendIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-10 flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
            <div className="w-16 h-16 rounded-full border-2 border-[#00FF41] flex items-center justify-center animate-pulse">
              <CheckIcon className="h-8 w-8 text-[#00FF41]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-headline font-bold text-[#00FF41]">
                Transmission Complete
              </h2>
              <p className="font-mono text-xs opacity-60 max-w-sm">
                Packet ID:{" "}
                <span className="text-[#00FF41]">{packetId}</span>{" "}
                has been broadcasted to the system. Expect a response shortly.
              </p>
            </div>
            <button
              onClick={() => {
                setPacketId(null);
                setIsSuccess(false);
              }}
              className="text-xs font-mono border-b border-[#00FF41]/40 text-[#00FF41]/80 hover:text-[#00FF41] transition-colors pt-4"
            >
              &gt; SEND_ANOTHER_REF
            </button>
          </div>
        )}
      </TerminalWindow>

      <div className="mt-12 p-4 bg-[#00FF41]/5 border border-[#00FF41]/10 font-mono text-[10px] text-[#00FF41]/60">
        <div className="flex justify-between items-center mb-2">
          <span>SYSTEM_HEALTH: STABLE</span>
          <span>UPTIME: 100%</span>
        </div>
        <div className="h-1 bg-surface-container overflow-hidden">
          <div className="h-full bg-[#00FF41]/20 animate-[progress_3s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
