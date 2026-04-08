"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { useUI } from "@/context/UIContext";
import profileImage from "../../../public/profile1.jpg";

const desktopBreakpointQuery = "(min-width: 768px)";

function SparkAdjustIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5v3M12 17.5v3M20.5 12h-3M6.5 12h-3M17.3 6.7l-2 2M8.7 15.3l-2 2M17.3 17.3l-2-2M8.7 8.7l-2-2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function SlidersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 6h14M5 12h14M5 18h14" strokeLinecap="round" />
      <circle cx="9" cy="6" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="11" cy="18" r="2" />
    </svg>
  );
}

function DeveloperBoardIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="5" width="17" height="11.5" rx="1.5" />
      <path d="M8 19h8" strokeLinecap="round" />
      <path d="M12 16.5V19" strokeLinecap="round" />
      <path d="M7.5 9h3M7.5 12h5M14.5 9l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomePageClient() {
  const { isExpanded } = useUI();
  const heroGridRef = useRef<HTMLDivElement>(null);
  const imagePanelRef = useRef<HTMLDivElement>(null);
  const contentPanelRef = useRef<HTMLDivElement>(null);
  const [swapOffsets, setSwapOffsets] = useState({
    imageX: 0,
    imageY: 0,
    contentX: 0,
    contentY: 0,
  });
  const isDesktop = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") {
        return () => {};
      }

      const mediaQuery = window.matchMedia(desktopBreakpointQuery);
      mediaQuery.addEventListener("change", onStoreChange);

      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(desktopBreakpointQuery).matches,
    () => false
  );

  useEffect(() => {
    const heroGrid = heroGridRef.current;
    const imagePanel = imagePanelRef.current;
    const contentPanel = contentPanelRef.current;

    if (!heroGrid || !imagePanel || !contentPanel) {
      return;
    }

    const updateSwapOffsets = () => {
      const imageRect = imagePanel.getBoundingClientRect();
      const contentRect = contentPanel.getBoundingClientRect();
      const computedGridStyles = window.getComputedStyle(heroGrid);
      const rowGap = Number.parseFloat(computedGridStyles.rowGap || "0");
      const columnGap = Number.parseFloat(computedGridStyles.columnGap || "0");

      setSwapOffsets({
        imageX: contentRect.width + columnGap,
        imageY: contentRect.height + rowGap,
        contentX: imageRect.width + columnGap,
        contentY: imageRect.height + rowGap,
      });
    };

    updateSwapOffsets();

    const resizeObserver = new ResizeObserver(updateSwapOffsets);
    resizeObserver.observe(heroGrid);
    resizeObserver.observe(imagePanel);
    resizeObserver.observe(contentPanel);

    window.addEventListener("resize", updateSwapOffsets);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSwapOffsets);
    };
  }, []);

  const imageTransform = isExpanded
    ? isDesktop
      ? `translate3d(${swapOffsets.imageX}px, 0, 0)`
      : `translate3d(0, ${swapOffsets.imageY}px, 0)`
    : "translate3d(0, 0, 0)";

  const contentTransform = isExpanded
    ? isDesktop
      ? `translate3d(-${swapOffsets.contentX}px, 0, 0)`
      : `translate3d(0, -${swapOffsets.contentY}px, 0)`
    : "translate3d(0, 0, 0)";

  return (
    <div className="w-full max-w-full pb-24 px-2 sm:px-4 md:px-8 mx-auto overflow-x-hidden">
      <section className="mt-4 sm:mt-8 mb-16">
        <TerminalWindow title="shivang@kernel-v1: ~" useSquareDots>
          <div
            ref={heroGridRef}
            className="p-3 sm:p-6 md:p-10 grid md:grid-cols-12 gap-5 sm:gap-8 items-center md:overflow-hidden min-h-[500px]"
          >
            <div
              ref={imagePanelRef}
              className={`w-full md:col-span-4 relative group overflow-hidden border border-primary-container/20 z-20 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isExpanded ? "md:z-30" : ""
              }`}
              style={{ transform: imageTransform }}
            >
              <div className="absolute -inset-2 border border-primary-container/20 translate-x-2 translate-y-2 pointer-events-none z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <Image
                src={profileImage}
                alt="Portrait of Shivang Mokariya, Node.js developer and AI automation engineer"
                className="w-full aspect-square object-cover grayscale-[0.3] contrast-[1.05] brightness-[0.9] border-none scale-95 transition-transform group-hover:scale-100"
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,rgba(0,0,0,0.9)_85%)] pointer-events-none"></div>
              <div className="absolute inset-0 border border-primary-container/10 pointer-events-none z-20"></div>
            </div>

            <div
              ref={contentPanelRef}
              className={`w-full md:col-span-8 space-y-6 z-10 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isExpanded ? "z-30" : ""
              }`}
              style={{ transform: contentTransform }}
            >
              <div className="space-y-2">
                <p className="font-mono text-primary-container text-sm">
                  guest@portfolio:~$ <span className="text-on-surface">whoami</span>
                </p>
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface break-words">
                  Shivang Mokariya
                </h1>
                <p className="text-xl md:text-2xl font-headline text-primary-container opacity-90 break-words">
                  Node.js Developer | Full-Stack Developer | AI &amp; Automation
                  Engineer
                </p>
              </div>
              <p className="text-on-surface-variant max-w-none md:max-w-2xl leading-relaxed break-words">
                I build reliable backend APIs, full-stack web applications, and
                automation systems that help teams move faster without sacrificing
                maintainability. My focus is on TypeScript-first architecture,
                scalable Node.js services, and production-ready user experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/work"
                  className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-bold text-sm flex items-center gap-2 group transition-transform active:scale-95"
                >
                  View Project Work
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" strokeLinecap="round" />
                    <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="border border-outline-variant/30 px-6 py-2 font-headline font-bold text-sm text-on-surface hover:border-primary-container hover:text-primary-container transition-colors"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </section>

      <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Link
          href="/about"
          className="border border-outline-variant/20 bg-surface-container-low p-5 hover:border-primary-container/40 transition-colors"
        >
          <p className="font-mono text-[11px] text-primary-container uppercase mb-2">
            About
          </p>
          <h2 className="font-headline text-xl font-bold mb-2">Professional Profile</h2>
          <p className="text-sm text-on-surface-variant">
            Learn about my background, engineering approach, and the kind of work
            I enjoy building.
          </p>
        </Link>
        <Link
          href="/skills"
          className="border border-outline-variant/20 bg-surface-container-low p-5 hover:border-primary-container/40 transition-colors"
        >
          <p className="font-mono text-[11px] text-primary-container uppercase mb-2">
            Skills
          </p>
          <h2 className="font-headline text-xl font-bold mb-2">Technical Stack</h2>
          <p className="text-sm text-on-surface-variant">
            Explore the tools I use across backend APIs, frontend systems, cloud,
            databases, and AI automation.
          </p>
        </Link>
        <Link
          href="/contact"
          className="border border-outline-variant/20 bg-surface-container-low p-5 hover:border-primary-container/40 transition-colors"
        >
          <p className="font-mono text-[11px] text-primary-container uppercase mb-2">
            Contact
          </p>
          <h2 className="font-headline text-xl font-bold mb-2">Work Together</h2>
          <p className="text-sm text-on-surface-variant">
            Reach out for freelance, contract, or collaboration opportunities in
            Node.js, full-stack delivery, or automation engineering.
          </p>
        </Link>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="md:col-span-2 bg-surface-container border border-outline-variant/20 p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline font-bold text-lg flex items-center gap-2">
              <span className="text-primary-container">/</span> Technical Stack
            </h2>
            <span className="text-[10px] font-mono opacity-30">TYPE: ARRAY</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <TechCategory
              title="Frontend_Engine"
              items={["React.js", "Next.js", "Tailwind CSS"]}
              borderClassName="border-primary-container"
            />
            <TechCategory
              title="Backend_Core"
              items={["Node.js", "Express.js", "NestJS"]}
              borderClassName="border-secondary"
            />
            <TechCategory
              title="Persistence_Layers"
              items={["MongoDB", "PostgreSQL", "Redis"]}
              borderClassName="border-primary-container"
            />
            <TechCategory
              title="Automation_AI"
              items={["n8n Workflows", "MCP Servers", "AI Agents"]}
              borderClassName="border-secondary"
            />
          </div>
        </div>

        <div className="bg-surface-container border border-outline-variant/20 p-6 flex flex-col">
          <div className="mb-6">
            <h2 className="font-headline font-bold text-lg flex items-center gap-2">
              <span className="text-primary-container">/</span> Credentials
            </h2>
          </div>
          <div className="space-y-6">
            <CredentialItem
              status="CURRENT"
              statusColor="text-primary-container"
              dotColor="bg-primary-container"
              title="MCA"
              subtitle="Master of Computer Applications"
            />
            <CredentialItem
              status="GRADUATED"
              statusColor="opacity-50"
              dotColor="bg-outline"
              title="BCA"
              subtitle="Bachelor of Computer Applications"
            />
            <CredentialItem
              status="CERTIFICATION"
              statusColor="text-secondary"
              dotColor="bg-secondary"
              title="MongoDB Certified"
              subtitle="Database Architecture Specialization"
            />
          </div>
        </div>

        <div className="md:col-span-3 grid md:grid-cols-2 gap-6">
          <div className="bg-surface-container border border-outline-variant/20 p-5 sm:p-8 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 min-w-0">
              <DeveloperBoardIcon className="h-9 w-9 text-primary-container sm:h-11 sm:w-11 shrink-0" />
              <div className="min-w-0">
                <h2 className="font-headline font-bold text-lg sm:text-xl uppercase tracking-tighter break-words">
                  Architecture Specialization
                </h2>
                <p className="text-[10px] font-mono opacity-50 break-words">
                  production-ready systems
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              <SpecItem
                title="Vendor management platforms"
                desc="Complex hierarchy management for multi-level business operations with secure admin controls."
              />
              <SpecItem
                title="Admin panels with RBAC"
                desc="Role-based access systems built for teams that need clarity, governance, and scale."
              />
              <SpecItem
                title="Billing and real-time systems"
                desc="Subscription flows, payment integrations, and real-time communication architecture."
              />
            </ul>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/10 p-5 sm:p-8 flex flex-col overflow-hidden">
            <div className="mb-8">
              <div className="text-primary-container font-mono text-xs mb-2">
                RUNNING: AGENT_SYSTEM_01
              </div>
              <h2 className="font-headline font-bold text-2xl sm:text-3xl tracking-tighter break-words">
                AI Automation
              </h2>
            </div>
            <div className="flex-grow space-y-6">
              <div className="p-5 border border-primary-container/20 bg-surface-container flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3 min-w-0">
                  <span className="font-headline font-bold text-xs uppercase tracking-widest break-all min-w-0">
                    n8n_agentic_flows
                  </span>
                  <SparkAdjustIcon className="h-5 w-5 text-secondary shrink-0" />
                </div>
                <p className="text-xs leading-relaxed opacity-80">
                  Self-correcting automation workflows that use LLMs for multi-step
                  decisions, integrations, and data processing.
                </p>
              </div>
              <div className="p-5 border border-outline-variant/20 bg-surface-container flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3 min-w-0">
                  <span className="font-headline font-bold text-xs uppercase tracking-widest break-all min-w-0">
                    mcp_server_dev
                  </span>
                  <SlidersIcon className="h-5 w-5 text-primary-container shrink-0" />
                </div>
                <p className="text-xs leading-relaxed opacity-80 break-words">
                  Model Context Protocol servers and tool integrations that connect
                  AI systems to real workflows.
                </p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-black/40 font-mono text-[10px] text-primary-container overflow-hidden">
              <div className="animate-pulse">system.load(automation_core)</div>
              <div className="opacity-60">&gt; connection: secure_tunnel</div>
              <div className="opacity-40">&gt; processing: mcp_request_712</div>
              <div className="terminal-cursor w-2 h-4 inline-block align-middle ml-1"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-4 mb-16">
        <div className="flex items-center justify-between gap-4 px-2">
          <h2 className="font-headline font-bold text-lg">Selected Delivery Logs</h2>
          <Link
            href="/logs"
            className="text-xs font-mono text-primary-container hover:underline"
          >
            View full project log archive
          </Link>
        </div>
        <div className="bg-surface-container-low border border-outline-variant/20 divide-y divide-outline-variant/10">
          <LogRow
            date="2024-05-12"
            label="Deployed multi-vendor ERP platform"
            status="STATUS: LIVE"
          />
          <LogRow
            date="2024-03-22"
            label="Optimized real-time socket engine"
            status="STATUS: STABLE"
          />
          <LogRow
            date="2024-01-05"
            label="Integrated subscription core v2"
            status="STATUS: DEPLOYED"
          />
        </div>
      </section>
    </div>
  );
}

function TechCategory({
  title,
  items,
  borderClassName,
}: {
  title: string;
  items: string[];
  borderClassName: string;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-[10px] font-headline uppercase tracking-widest text-secondary font-bold">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-3 py-1 bg-surface-container-high text-xs font-mono text-on-surface border-l-2 ${borderClassName}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CredentialItem({
  status,
  statusColor,
  dotColor,
  title,
  subtitle,
}: {
  status: string;
  statusColor: string;
  dotColor: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative pl-4 border-l border-outline-variant/40">
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 w-2 h-2 ${dotColor}`}
      ></div>
      <div className={`text-xs font-mono ${statusColor} mb-1`}>{status}</div>
      <div className="font-headline font-bold">{title}</div>
      <div className="text-xs text-on-surface-variant">{subtitle}</div>
    </div>
  );
}

function SpecItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3 sm:gap-4 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors min-w-0 overflow-hidden">
      <span className="text-primary-container font-mono text-lg">&gt;</span>
      <div className="min-w-0">
        <h3 className="font-headline font-bold text-sm break-words">{title}</h3>
        <p className="text-xs text-on-surface-variant opacity-70 break-words">{desc}</p>
      </div>
    </li>
  );
}

function LogRow({
  date,
  label,
  status,
}: {
  date: string;
  label: string;
  status: string;
}) {
  return (
    <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-surface-container transition-colors group">
      <div className="flex items-center gap-4">
        <span className="text-primary font-mono text-xs opacity-50">{date}</span>
        <span className="font-headline font-bold text-sm">{label}</span>
      </div>
      <div className="text-[10px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity uppercase">
        {status}
      </div>
    </div>
  );
}
