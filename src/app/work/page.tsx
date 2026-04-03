import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KERNEL_ARCH // WORK",
  description:
    "Project showcase. Architected solutions specializing in system management, high-concurrency infrastructure, and automated engines.",
};

export default function WorkPage() {
  return (
    <div className="p-6 md:p-12">
      {/* Header Section */}
      <header className="mb-16 max-w-4xl">
        <div className="inline-block px-3 py-1 bg-surface-container-high text-[#00FF41] font-headline text-[10px] tracking-[0.3em] uppercase mb-6">
          /home/sys_admin/projects
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-on-surface mb-6 uppercase">
          PROJ_RECAP_<span className="text-[#00FF41]">2024</span>
        </h1>
        <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-2xl">
          A collection of architected solutions specializing in low-level system
          management, high-concurrency infrastructure, and automated financial
          engines.
        </p>
      </header>

      {/* Projects Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
        {/* Project 001: Vendor Mgmt */}
        <div className="md:col-span-8 group relative bg-surface-container border border-outline-variant/20 hover:border-[#00FF41]/40 transition-all duration-500 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#00FF41]/10"></div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-12">
              <div>
                <div className="text-[#00FF41] font-headline text-xs tracking-widest mb-2 opacity-60">
                  PROJECT_ID: 0x001
                </div>
                <h2 className="text-3xl font-bold font-headline text-on-surface tracking-tighter">
                  0x001_VENDOR_MGMT
                </h2>
              </div>
              <span className="material-symbols-outlined text-outline-variant text-4xl group-hover:text-[#00FF41] transition-colors">
                folder_open
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-[10px] text-on-surface/40 tracking-[0.2em] font-headline uppercase">
                  Architectural_Scope
                </h4>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  Engineering a centralized platform for multi-entity vendor
                  control. Designed hierarchical organizational structures
                  supporting nested parent-child vendor relationships with
                  inheritance logic.
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
                #_GOLANG
              </span>
              <span className="bg-surface-container-high px-3 py-1 text-[10px] font-headline text-on-surface/60">
                #_POSTGRESQL
              </span>
              <span className="bg-surface-container-high px-3 py-1 text-[10px] font-headline text-on-surface/60">
                #_GRPC
              </span>
            </div>
          </div>
        </div>

        {/* Project 002: RBAC */}
        <div className="md:col-span-4 group bg-surface-container-low border border-outline-variant/20 hover:border-secondary/40 transition-all duration-500 flex flex-col">
          <div className="h-40 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
            <Image
              className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all"
              alt="Abstract cyber security data flow with neon green circuit board patterns and digital nodes representing access control"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD76VnMU7X-LHaGLsfQ10fZQoysGGxXXRzQ1yRpZFxZqL3HojkSqnqvsY3PBAzlB6Yd5xn9mI07GhjdNOF7IpS1tu15EHwhdlkAMScTbJ39U6O2-rhUuFAqu0uZ_AZF-02qLPW_YHYcbHbtd5NZM5zKcyVt0DsY91H0JD9-JM9sIs3xbzZmVdU-hMGI6_FVc0wZo3iQnfV0vnVIVF3qN0xWjlQcqTL7W0SC8UnXae5GISNgOUaTtHQ_AvcfbO3YV9H7vhhdRK004s4"
              width={600}
              height={300}
              unoptimized
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-6">
              <div className="text-secondary font-headline text-[10px] tracking-widest mb-1 opacity-60">
                SECURITY_CORE
              </div>
              <h2 className="text-xl font-bold font-headline text-on-surface tracking-tight">
                0x002_RBAC_SYSTEMS
              </h2>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed mb-6">
              Secure role-based access control with granular permission mapping.
              Implementation of JWT-based stateless auth and session management
              for enterprise-scale deployments.
            </p>
            <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-center">
              <span className="text-[10px] font-headline text-[#00FF41]">
                PROTECTED
              </span>
              <button className="material-symbols-outlined text-sm text-on-surface/40 hover:text-[#00FF41] transition-colors">
                arrow_right_alt
              </button>
            </div>
          </div>
        </div>

        {/* Project 003: Billing Engine */}
        <div className="md:col-span-6 group bg-surface-container border border-outline-variant/20 hover:border-[#00FF41]/40 transition-all duration-500">
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
                0x003_BILLING_ENGINES
              </h2>
            </div>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
              High-precision automated billing cycles processing 10k+
              invoices/sec. Built with idempotency at the core to ensure
              zero-double-billing across distributed clusters.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-[#2a2a2a] border border-[#3b4b37] flex items-center justify-center text-[10px] text-[#00FF41]">
                  JS
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
        </div>

        {/* Sys Log Sidebar (Integrated in Grid) */}
        <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/20 p-8 font-headline relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">
              analytics
            </span>
          </div>
          <div className="flex items-center space-x-3 mb-8">
            <span className="material-symbols-outlined text-[#00FF41] animate-pulse">
              data_exploration
            </span>
            <h3 className="text-xs font-bold tracking-[0.4em] text-on-surface/40 uppercase">
              LIVE_SYSTEM_TELEMETRY
            </h3>
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
        </div>
      </div>

      {/* Experience / More Section (Asymmetric) */}
      <section className="mt-32 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:space-x-12 mb-16">
          <div className="text-8xl font-bold font-headline text-outline-variant/10 select-none">
            SYSTEMS
          </div>
          <div className="pb-4">
            <h3 className="text-2xl font-bold font-headline text-[#00FF41] uppercase tracking-tighter mb-4">
              Core Competencies
            </h3>
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
