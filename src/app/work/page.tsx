import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import {
  breadcrumbJsonLd,
  buildMetadata,
  workCollectionJsonLd,
} from "@/lib/seo";

function FolderOpenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.5 7.5h5l2 2H20.5v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 10.5h17" strokeLinecap="round" />
    </svg>
  );
}

function AnalyticsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 19.5V10.5" strokeLinecap="round" />
      <path d="M12 19.5v-15" strokeLinecap="round" />
      <path d="M19 19.5v-7" strokeLinecap="round" />
      <path d="M3.5 19.5h17" strokeLinecap="round" />
    </svg>
  );
}

function DataExplorationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="10" cy="10" r="5.5" />
      <path d="m14.5 14.5 5 5" strokeLinecap="round" />
      <path d="M10 7.5v5" strokeLinecap="round" />
      <path d="M7.5 10H10h2.5" strokeLinecap="round" />
    </svg>
  );
}

export const metadata = buildMetadata({
  title: "Projects and Work",
  description:
    "Browse selected work by Shivang Mokariya across backend APIs, vendor platforms, RBAC systems, billing engines, and automation-focused product engineering.",
  path: "/work",
  keywords: [
    "software projects",
    "Node.js portfolio projects",
    "full-stack developer work",
  ],
});

export default function WorkPage() {
  return (
    <div className="p-6 md:p-12">
      <StructuredData
        data={[
          workCollectionJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        ]}
      />

      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Work" }]} />

      <header className="mb-16 max-w-4xl">
        <div className="inline-block px-3 py-1 bg-surface-container-high text-[#00FF41] font-headline text-[10px] tracking-[0.3em] uppercase mb-6">
          /home/shivang/projects
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-on-surface mb-6 uppercase">
          Selected <span className="text-[#00FF41]">Projects</span>
        </h1>
        <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-2xl">
          A collection of software projects focused on backend APIs, admin
          systems, security architecture, distributed billing, and automation-led
          product delivery.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
        <article
          id="vendor-management-platform"
          className="md:col-span-8 group relative bg-surface-container border border-outline-variant/20 hover:border-[#00FF41]/40 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-[#00FF41]/10"></div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-12">
              <div>
                <div className="text-[#00FF41] font-headline text-xs tracking-widest mb-2 opacity-60">
                  PROJECT_ID: 0x001
                </div>
                <h2 className="text-3xl font-bold font-headline text-on-surface tracking-tighter">
                  Multi-vendor management platform
                </h2>
              </div>
              <FolderOpenIcon className="h-10 w-10 text-outline-variant group-hover:text-[#00FF41] transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-[10px] text-on-surface/40 tracking-[0.2em] font-headline uppercase">
                  Architectural_Scope
                </h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  A centralized platform for multi-entity vendor management with
                  nested hierarchy support, operational controls, and reliable
                  workflows for enterprise-scale teams.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-4 border-l border-[#00FF41]/30">
                <pre className="text-[10px] text-[#00FF41]/70 font-mono leading-tight">
                  {`{
  "node": "VENDOR_ROOT",
  "children": [
    "LOGISTICS_01",
    "PROCUREMENT_A",
    "DIST_CENTER_ALPHA"
  ],
  "status": "OPERATIONAL"
}`}
                </pre>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface-container-high px-3 py-1 text-[10px] font-headline text-on-surface/60">
                #_NODEJS
              </span>
              <span className="bg-surface-container-high px-3 py-1 text-[10px] font-headline text-on-surface/60">
                #_POSTGRESQL
              </span>
              <span className="bg-surface-container-high px-3 py-1 text-[10px] font-headline text-on-surface/60">
                #_RBAC
              </span>
            </div>
          </div>
        </article>

        <article
          id="rbac-authentication-systems"
          className="md:col-span-4 group bg-surface-container-low border border-outline-variant/20 hover:border-secondary/40 transition-all duration-500 flex flex-col"
        >
          <div className="h-40 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
            <Image
              className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all"
              alt="Abstract cyber security data flow representing role-based access control architecture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD76VnMU7X-LHaGLsfQ10fZQoysGGxXXRzQ1yRpZFxZqL3HojkSqnqvsY3PBAzlB6Yd5xn9mI07GhjdNOF7IpS1tu15EHwhdlkAMScTbJ39U6O2-rhUuFAqu0uZ_AZF-02qLPW_YHYcbHbtd5NZM5zKcyVt0DsY91H0JD9-JM9sIs3xbzZmVdU-hMGI6_FVc0wZo3iQnfV0vnVIVF3qN0xWjlQcqTL7W0SC8UnXae5GISNgOUaTtHQ_AvcfbO3YV9H7vhhdRK004s4"
              width={600}
              height={300}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-6">
              <div className="text-secondary font-headline text-[10px] tracking-widest mb-1 opacity-60">
                SECURITY_CORE
              </div>
              <h2 className="text-xl font-bold font-headline text-on-surface tracking-tight">
                RBAC and authentication systems
              </h2>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed mb-6">
              Secure role-based access control with granular permission mapping,
              JWT-based authentication, and stateless session architecture for
              enterprise-grade deployments.
            </p>
            <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-center">
              <span className="text-[10px] font-headline text-[#00FF41]">
                PROTECTED
              </span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 text-on-surface/40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="m14 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </article>

        <article
          id="automated-billing-engine"
          className="md:col-span-6 group bg-surface-container border border-outline-variant/20 hover:border-[#00FF41]/40 transition-all duration-500"
        >
          <div className="p-1 bg-surface-container-highest flex items-center">
            <div className="terminal-header-dots ml-2"></div>
            <div className="text-[9px] text-on-surface/30 font-headline uppercase tracking-[0.2em]">
              billing_engine.sh
            </div>
          </div>
          <div className="p-8">
            <div className="mb-6">
              <div className="text-[#00FF41] font-headline text-xs tracking-widest mb-2 opacity-60">
                FIN_CORE
              </div>
              <h2 className="text-2xl font-bold font-headline text-on-surface tracking-tighter">
                Automated billing engine
              </h2>
            </div>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
              A high-precision billing engine designed for idempotency,
              throughput, and reliable invoice processing across distributed
              environments.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-[#2a2a2a] border border-[#3b4b37] flex items-center justify-center text-[10px] text-[#00FF41]">
                  TS
                </div>
                <div className="w-8 h-8 bg-[#2a2a2a] border border-[#3b4b37] flex items-center justify-center text-[10px] text-[#00FF41]">
                  RD
                </div>
                <div className="w-8 h-8 bg-[#2a2a2a] border border-[#3b4b37] flex items-center justify-center text-[10px] text-[#00FF41]">
                  SQ
                </div>
              </div>
              <div className="text-[10px] text-on-surface/30 font-headline uppercase">
                Stack_Dependencies
              </div>
            </div>
          </div>
        </article>

        <aside className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/20 p-8 font-headline relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <AnalyticsIcon className="h-24 w-24" />
          </div>
          <div className="flex items-center space-x-3 mb-8">
            <DataExplorationIcon className="h-5 w-5 text-[#00FF41] animate-pulse" />
            <h2 className="text-xs font-bold tracking-[0.4em] text-on-surface/40 uppercase">
              LIVE_SYSTEM_TELEMETRY
            </h2>
          </div>
          <div className="space-y-4 text-[11px]">
            <TelemetryRow label="ARCH_UPTIME" value="99.982%" color="text-[#00FF41]" />
            <TelemetryRow label="DEPLOY_CYCLES" value="1,248" color="text-[#00FF41]" />
            <TelemetryRow label="THREAT_LEVEL" value="MINIMAL" color="text-secondary" />
            <TelemetryRow label="KERNEL_VER" value="v5.18.4-rt" color="text-on-surface/40 italic" />
          </div>
          <div className="mt-8 bg-[#00FF41]/5 p-4 border border-[#00FF41]/20">
            <div className="text-[10px] text-[#00FF41] mb-2 uppercase">
              Current_Active_Task:
            </div>
            <div className="text-sm text-on-surface font-bold tracking-tight">
              OPTIMIZING_DATA_REPLICATION_LATENCY
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-32 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:space-x-12 mb-16">
          <div className="text-8xl font-bold font-headline text-outline-variant/10 select-none">
            SYSTEMS
          </div>
          <div className="pb-4">
            <h2 className="text-2xl font-bold font-headline text-[#00FF41] uppercase tracking-tighter mb-4">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CompetencyItem category="Distributed" tech="KUBERNETES" />
              <CompetencyItem category="Real-time" tech="WEBSOCKETS" />
              <CompetencyItem category="Security" tech="OAUTH2/SAML" />
              <CompetencyItem category="Message" tech="RABBITMQ" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Sub Components --- */

function TelemetryRow({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
      <span className="text-on-surface/60">{label}</span>
      <span className={color}>{value}</span>
    </div>
  );
}

function CompetencyItem({
  category,
  tech,
}: {
  category: string;
  tech: string;
}) {
  return (
    <div className="border-l-2 border-[#00FF41] pl-4">
      <div className="text-[10px] text-on-surface/40 uppercase tracking-widest">
        {category}
      </div>
      <div className="text-sm font-bold">{tech}</div>
    </div>
  );
}
