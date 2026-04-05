"use client";

import Image from "next/image";
import Link from "next/link";
import { TerminalWindow } from "@/components/TerminalWindow";
import { useUI } from "@/context/UIContext";
import profileImage from "../../../public/profile1.jpg";

export function HomePageClient() {
  const { isExpanded } = useUI();

  return (
    <div className="pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <section className="mt-8 mb-16">
        <TerminalWindow title="shivang@kernel-v1: ~" useSquareDots>
          <div className="p-6 md:p-10 grid md:grid-cols-12 gap-8 items-center md:overflow-hidden min-h-[500px]">
            <div
              className={`md:col-span-4 relative group overflow-hidden border border-primary-container/20 transition-all duration-700 ease-in-out z-20 ${
                isExpanded
                  ? "md:translate-x-[calc(200%+2rem)] md:translate-y-0 translate-y-[24rem]"
                  : "translate-x-0 translate-y-0"
              }`}
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
              className={`md:col-span-8 space-y-6 transition-all duration-700 ease-in-out z-10 ${
                isExpanded
                  ? "md:-translate-x-[calc(50%+2rem)] md:translate-y-0 -translate-y-[22rem]"
                  : "translate-x-0 translate-y-0"
              }`}
            >
              <div className="space-y-2">
                <p className="font-mono text-primary-container text-sm">
                  guest@portfolio:~$ <span className="text-on-surface">whoami</span>
                </p>
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface">
                  Shivang Mokariya
                </h1>
                <p className="text-xl md:text-2xl font-headline text-primary-container opacity-90">
                  Node.js Developer | Full-Stack Developer | AI &amp; Automation
                  Engineer
                </p>
              </div>
              <p className="text-on-surface-variant max-w-2xl leading-relaxed">
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
                  <span className="material-symbols-outlined text-sm ring-1 ring-[#00FF41]/20">
                    arrow_forward
                  </span>
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
          <div className="bg-surface-container border border-outline-variant/20 p-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                developer_board
              </span>
              <div>
                <h2 className="font-headline font-bold text-xl uppercase tracking-tighter">
                  Architecture Specialization
                </h2>
                <p className="text-[10px] font-mono opacity-50">
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

          <div className="bg-surface-container-low border border-outline-variant/10 p-8 flex flex-col">
            <div className="mb-8">
              <div className="text-primary-container font-mono text-xs mb-2">
                RUNNING: AGENT_SYSTEM_01
              </div>
              <h2 className="font-headline font-bold text-3xl tracking-tighter">
                AI Automation
              </h2>
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
                  Self-correcting automation workflows that use LLMs for multi-step
                  decisions, integrations, and data processing.
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
    <li className="flex items-start gap-4 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors">
      <span className="text-primary-container font-mono text-lg">&gt;</span>
      <div>
        <h3 className="font-headline font-bold text-sm">{title}</h3>
        <p className="text-xs text-on-surface-variant opacity-70">{desc}</p>
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
