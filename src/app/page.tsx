"use client";

import Image from "next/image";
import Link from "next/link";
import { TerminalWindow } from "@/components/TerminalWindow";
import { useUI } from "@/context/UIContext";

export default function HomePage() {
  const { isExpanded } = useUI();

  return (
    <div className="pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section: Terminal Window */}
      <section className="mt-8 mb-16">
        <TerminalWindow title="shivang@kernel-v1: ~" useSquareDots>
          <div className="p-6 md:p-10 grid md:grid-cols-12 gap-8 items-center md:overflow-hidden min-h-[500px]">
            {/* Portrait */}
            <div 
              className={`md:col-span-4 relative group overflow-hidden border border-primary-container/20 transition-all duration-700 ease-in-out z-20 ${
                isExpanded 
                  ? "md:translate-x-[calc(200%+2rem)] md:translate-y-0 translate-y-[24rem]" 
                  : "translate-x-0 translate-y-0"
              }`}
            >
              <div className="absolute -inset-2 border border-primary-container/20 translate-x-2 translate-y-2 pointer-events-none z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <Image
                alt="Shivang Mokariya Portrait"
                className="w-full aspect-square object-cover grayscale-[0.3] contrast-[1.05] brightness-[0.9] border-none scale-95 transition-transform group-hover:scale-100"
                src="/profile1.jpg"
                width={400}
                height={400}
                priority
              />
              {/* Vignette & Darkening Overlays */}
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,rgba(0,0,0,0.9)_85%)] pointer-events-none"></div>
              <div className="absolute inset-0 border border-primary-container/10 pointer-events-none z-20"></div>
            </div>

            {/* Identity Info */}
            <div 
              className={`md:col-span-8 space-y-6 transition-all duration-700 ease-in-out z-10 ${
                isExpanded 
                  ? "md:-translate-x-[calc(50%+2rem)] md:translate-y-0 -translate-y-[22rem]" 
                  : "translate-x-0 translate-y-0"
              }`}
            >
              <div className="space-y-2">
                <p className="font-mono text-primary-container text-sm">
                  guest@portfolio:~${" "}
                  <span className="text-on-surface">whoami</span>
                </p>
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface">
                  SHIVANG MOKARIYA
                </h1>
                <h2 className="text-xl md:text-2xl font-headline text-primary-container opacity-90">
                  FULL-STACK DEVELOPER | AI &amp; AUTOMATION ENGINEER
                </h2>
              </div>
              <p className="text-on-surface-variant max-w-xl leading-relaxed">
                Architecting digital environments with structural logic. Focused
                on bridging the gap between raw backend efficiency and
                high-fidelity user experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-bold text-sm flex items-center gap-2 group transition-transform active:scale-95"
                >
                  INIT_CONTACT{" "}
                  <span className="material-symbols-outlined text-sm ring-1 ring-[#00FF41]/20">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </section>

      {/* Bento Grid: Experience & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Skills Module */}
        <div className="md:col-span-2 bg-surface-container border border-outline-variant/20 p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline font-bold text-lg flex items-center gap-2">
              <span className="text-primary-container">/</span> TECHNICAL_STACK
            </h3>
            <span className="text-[10px] font-mono opacity-30">
              TYPE: ARRAY
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <TechCategory title="Frontend_Engine" color="secondary" items={["# React.js", "# Next.js", "# TailwindCSS"]} borderColor="primary-container" />
            <TechCategory title="Backend_Core" color="secondary" items={["# Node.js", "# Express", "# Socket.io"]} borderColor="secondary" />
            <TechCategory title="Persistence_Layers" color="secondary" items={["# MongoDB", "# PostgreSQL", "# Redis"]} borderColor="primary-container" />
            <TechCategory title="Automation_AI" color="secondary" items={["# n8n Workflows", "# MCP Servers", "# AI Agents"]} borderColor="secondary" />
          </div>
        </div>

        {/* Education Module */}
        <div className="bg-surface-container border border-outline-variant/20 p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="font-headline font-bold text-lg flex items-center gap-2">
              <span className="text-primary-container">/</span> CREDENTIALS
            </h3>
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
              title="MONGODB_CERTIFIED"
              subtitle="Database Architecture Specialization"
            />
          </div>
        </div>

        {/* Architecture Specialization */}
        <div className="md:col-span-3 grid md:grid-cols-2 gap-6">
          {/* Work Focus */}
          <div className="bg-surface-container border border-outline-variant/20 p-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                developer_board
              </span>
              <div>
                <h3 className="font-headline font-bold text-xl uppercase tracking-tighter">
                  Architecture_Specialization
                </h3>
                <p className="text-[10px] font-mono opacity-50">
                  PRODUCTION_READY_SYSTEMS
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              <SpecItem
                title="Multi-level Vendor Management Systems"
                desc="Complex hierarchy management with enterprise-grade security."
              />
              <SpecItem
                title="Intuitive Admin Panels with RBAC"
                desc="Granular Role-Based Access Control for large scale operations."
              />
              <SpecItem
                title="Subscription Billing & Real-time Comms"
                desc="Seamless Stripe integrations and Socket.io powered chat systems."
              />
            </ul>
          </div>

          {/* AI Systems */}
          <div className="bg-surface-container-low border border-outline-variant/10 p-8 flex flex-col">
            <div className="mb-8">
              <div className="text-primary-container font-mono text-xs mb-2">
                RUNNING: AGENT_SYSTEM_01
              </div>
              <h3 className="font-headline font-bold text-3xl tracking-tighter">
                AI_AUTOMATION
              </h3>
            </div>
            <div className="flex-grow space-y-6">
              <div className="p-5 border border-primary-container/20 bg-surface-container flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-xs uppercase tracking-widest">
                    n8n_agentic_flows
                  </span>
                  <span className="material-symbols-outlined text-secondary text-lg">
                    auto_fix
                  </span>
                </div>
                <p className="text-xs leading-relaxed opacity-80">
                  Developing self-correcting automation workflows that leverage
                  LLMs for complex decision making and data processing.
                </p>
              </div>
              <div className="p-5 border border-outline-variant/20 bg-surface-container flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-xs uppercase tracking-widest">
                    mcp_server_dev
                  </span>
                  <span className="material-symbols-outlined text-primary-container text-lg">
                    settings_input_component
                  </span>
                </div>
                <p className="text-xs leading-relaxed opacity-80">
                  Building Model Context Protocol servers to bridge the gap
                  between local tools and frontier AI models.
                </p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-black/40 font-mono text-[10px] text-primary-container overflow-hidden">
              <div className="animate-pulse">
                system.load(automation_core)
              </div>
              <div className="opacity-60">
                &gt; connection: secure_tunnel
              </div>
              <div className="opacity-40">
                &gt; processing: mcp_request_712
              </div>
              <div className="terminal-cursor w-2 h-4 inline-block align-middle ml-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Logs */}
      <section className="space-y-4 mb-16">
        <h3 className="font-headline font-bold text-lg px-2">
          SYSTEM_LOGS.TXT
        </h3>
        <div className="bg-surface-container-low border border-outline-variant/20 divide-y divide-outline-variant/10">
          <LogRow date="2024-05-12" label="DEPLOYED: MULTI_VENDOR_ERP" status="STATUS: LIVE" />
          <LogRow date="2024-03-22" label="OPTIMIZED: REALTIME_SOCKET_ENGINE" status="STATUS: STABLE" />
          <LogRow date="2024-01-05" label="INTEGRATED: SUBSCRIPTION_CORE_V2" status="STATUS: DEPLOYED" />
        </div>
      </section>
    </div>
  );
}

/* --- Sub Components --- */

function TechCategory({
  title,
  items,
  borderColor,
}: {
  title: string;
  color: string;
  items: string[];
  borderColor: string;
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-[10px] font-headline uppercase tracking-widest text-secondary font-bold">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-3 py-1 bg-surface-container-high text-xs font-mono text-on-surface border-l-2 border-${borderColor}`}
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
    <li className="flex items-start gap-4 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors">
      <span className="text-primary-container font-mono text-lg">&gt;</span>
      <div>
        <div className="font-headline font-bold text-sm">{title}</div>
        <div className="text-xs text-on-surface-variant opacity-70">{desc}</div>
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
        <span className="text-primary font-mono text-xs opacity-50">
          {date}
        </span>
        <span className="font-headline font-bold text-sm">{label}</span>
      </div>
      <div className="text-[10px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity uppercase">
        {status}
      </div>
    </div>
  );
}
