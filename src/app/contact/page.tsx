"use client";

import { useState } from "react";
import Link from "next/link";
import { TerminalWindow } from "@/components/TerminalWindow";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate packet sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pb-24 px-4 md:px-8 max-w-3xl mx-auto pt-8">
      <div className="mb-8 flex items-center gap-3">
        <Link 
          href="/" 
          className="material-symbols-outlined text-[#00FF41] hover:bg-[#00FF41]/10 p-2 border border-[#00FF41]/20 transition-all active:scale-95"
        >
          arrow_back
        </Link>
        <div>
          <h1 className="text-2xl font-headline font-bold tracking-tighter text-[#E5E2E1]">
            INIT_CONTACT.PROTO
          </h1>
          <p className="text-[10px] font-mono text-[#00FF41] opacity-60">
            SECURE_CHANNEL: ENCRYPTED
          </p>
        </div>
      </div>

      <TerminalWindow title="guest@kernel-v1: ~/contacts" useSquareDots>
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            <div className="space-y-6">
              {/* Name Field */}
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email Field */}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Description Field */}
              <div className="space-y-2 group">
                <label className="block font-mono text-xs text-[#00FF41]/70 group-focus-within:text-[#00FF41]">
                  [ 03 ] INPUT_COMMUNICATION_CONTENT:
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your request / project details..."
                  className="w-full bg-[#131313]/50 border border-[#3b4b37]/30 px-4 py-3 font-headline text-on-surface focus:outline-none focus:border-[#00FF41] focus:ring-1 focus:ring-[#00FF41]/50 transition-all placeholder:opacity-30 resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <div className="text-[10px] font-mono text-[#00FF41]/40">
                &gt; READY_TO_TRANSMIT: <span className={formData.description ? "text-[#00FF41]" : ""}>{formData.description ? "YES" : "NO"}</span>
              </div>
              <button
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#00FF41] text-[#003907] px-8 py-3 font-headline font-bold text-sm flex items-center justify-center gap-2 group transition-all active:scale-95 disabled:opacity-50 disabled:grayscale"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">sync</span>
                    SENDING_PACKET...
                  </>
                ) : (
                  <>
                    TRANSMIT_DATA
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-10 flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
            <div className="w-16 h-16 rounded-full border-2 border-[#00FF41] flex items-center justify-center animate-pulse">
              <span className="material-symbols-outlined text-[#00FF41] text-3xl">check</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-headline font-bold text-[#00FF41]">TRANSMISSION_COMPLETE</h2>
              <p className="font-mono text-xs opacity-60 max-w-sm">
                Packet ID: <span className="text-[#00FF41]">SHVJ-{Math.floor(Math.random() * 9000) + 1000}</span> has been broadcasted to the system. Expect response shortly.
              </p>
            </div>
            <button
               onClick={() => setIsSuccess(false)}
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
