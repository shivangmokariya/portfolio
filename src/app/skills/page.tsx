import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

function Icon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "more_horiz":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
          <circle cx="6" cy="12" r="1.7" />
          <circle cx="12" cy="12" r="1.7" />
          <circle cx="18" cy="12" r="1.7" />
        </svg>
      );
    case "memory":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="7" width="12" height="10" rx="1.5" />
          <path d="M9 10h6M9 14h6M4 10v4M20 10v4M9 4v3M15 4v3M9 17v3M15 17v3" strokeLinecap="round" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.5" />
          <path d="M5.5 6.5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5" />
          <path d="M5.5 11.5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5" />
        </svg>
      );
    case "storage":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4.5 7.5h15v4h-15zM4.5 12.5h15v4h-15z" />
          <path d="M7.5 9.5h.01M7.5 14.5h.01" strokeLinecap="round" />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" strokeLinecap="round" />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 4a8 8 0 1 0 0 16h1.2a2.3 2.3 0 0 0 0-4.6h-.4A2.8 2.8 0 0 1 10 12.6 8.6 8.6 0 0 0 12 4Z" />
          <circle cx="7.8" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="10.5" cy="7.6" r="1" fill="currentColor" stroke="none" />
          <circle cx="14.2" cy="7.6" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "animation":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="m9 9 6 6M15 9l-6 6" strokeLinecap="round" />
        </svg>
      );
    case "robot_2":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="12" height="9" rx="2" />
          <path d="M12 4v4M9 12h.01M15 12h.01M9 17v2M15 17v2M4 12h2M18 12h2" strokeLinecap="round" />
        </svg>
      );
    case "hub":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2" />
          <circle cx="5" cy="7" r="1.5" />
          <circle cx="19" cy="7" r="1.5" />
          <circle cx="7" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
          <path d="M10.7 10.9 6.2 7.8M13.3 10.9l4.5-3.1M10.8 13l-2.9 3.3M13.2 13l2.9 3.3" strokeLinecap="round" />
        </svg>
      );
    case "check_circle":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="m8.5 12.3 2.2 2.2 4.8-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "verified_user":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3.8 18.5 6v5.2c0 4-2.3 7-6.5 8.9-4.2-1.9-6.5-4.9-6.5-8.9V6L12 3.8Z" />
          <path d="m9.5 11.8 1.6 1.6 3.4-3.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export const metadata = buildMetadata({
  title: "Technical Skills",
  description:
    "Technical skills and engineering strengths across Node.js, NestJS, Express.js, TypeScript, MongoDB, AWS, frontend delivery, and AI automation.",
  path: "/skills",
  keywords: [
    "Node.js skills",
    "NestJS developer",
    "TypeScript full-stack engineer",
  ],
});

export default function SkillsPage() {
  return (
    <div className="p-6 md:p-10 bg-surface">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" },
        ])}
      />

      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Skills" }]} />

      <div className="mb-12 border-l-2 border-[#00FF41] pl-6 py-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tighter uppercase mb-2">
          Technical <span className="text-primary-container">Skills</span>
        </h1>
        <p className="font-label text-sm text-[#00FF41]/60 tracking-widest">
          backend, frontend, database, cloud, and automation capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container border border-outline-variant/20 relative group">
          <div className="bg-surface-container-highest px-4 py-2 flex items-center justify-between">
            <span className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="w-2 h-2 rounded-full bg-[#FFB400]"></span>
              <span className="w-2 h-2 rounded-full bg-[#00FF41]"></span>
              MODULE_ID: KERNEL_MODULES
            </span>
            <Icon name="more_horiz" className="h-4 w-4 text-on-surface/40" />
          </div>
          <div className="p-6">
            <h2 className="font-headline text-2xl text-primary-container mb-6 flex items-center gap-3">
              <Icon name="memory" className="h-6 w-6" />{" "}
              Backend systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SkillBar name="Node.js" percentage={92} />
              <SkillBar name="Express.js" percentage={88} />
              <SkillBar name="NestJS" percentage={75} />
              <SkillBar name="TypeScript" percentage={95} />
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/20 flex flex-col">
          <div className="bg-surface-container-highest px-4 py-2 flex items-center">
            <span className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase">
              DATA_PERSISTENCE.LOG
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <Icon name="database" className="h-6 w-6 text-primary-container" />
              <div>
                <h3 className="font-headline text-lg uppercase text-on-surface">
                  PostgreSQL
                </h3>
                <p className="text-xs font-body text-on-surface/40 mt-1">
                  Relational integrity, reporting, and performance-oriented schema
                  design.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 bg-surface-container-high text-primary-container font-label uppercase">
                    High_Availability
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-surface-container-high text-primary-container font-label uppercase">
                    Indexing
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-outline-variant/10"></div>

            <div className="flex items-start gap-4">
              <Icon name="storage" className="h-6 w-6 text-primary-container" />
              <div>
                <h3 className="font-headline text-lg uppercase text-on-surface">
                  MongoDB
                </h3>
                <p className="text-xs font-body text-on-surface/40 mt-1">
                  Flexible document storage for modern application workflows and
                  automation pipelines.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 bg-surface-container-high text-primary-container font-label uppercase">
                    Aggregation
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-surface-container-high text-primary-container font-label uppercase">
                    Scaling
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <div className="text-[10px] font-label text-primary-container/40 animate-pulse">
                [SYSTEM] SYNCING DATABASE CLUSTERS... 100%
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 bg-surface-container border border-outline-variant/20">
          <div className="bg-surface-container-highest px-4 py-2">
            <span className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase">
              INTERFACE_LAYER.SYS
            </span>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-headline text-xl text-on-surface uppercase">
                Frontend core
              </h2>
              <span className="text-xs font-label text-[#00FF41]">
                ACTIVE_UI_THREAD
              </span>
            </div>
            <div className="space-y-4">
              <InterfaceSkill
                icon="web"
                name="REACT / NEXT.JS"
                percentage={95}
                color="primary-container"
              />
              <InterfaceSkill
                icon="palette"
                name="TAILWIND CSS"
                percentage={95}
                color="primary-container"
              />
              <InterfaceSkill
                icon="animation"
                name="ACCESSIBLE UI PATTERNS"
                percentage={82}
                color="secondary"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7 relative bg-surface-container/50 border border-[#00FF41]/10 backdrop-blur-md overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent pointer-events-none"></div>
          <div className="bg-surface-container-highest px-4 py-2 border-b border-[#00FF41]/10">
            <span className="font-label text-[10px] tracking-widest text-primary-container uppercase">
              AUTOMATION_CORE // AI_RUNTIME
            </span>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-4">
              <AutoCard
                icon="robot_2"
                title="AI Agents"
                desc="Custom LLM orchestrations and agent workflows for business automation and developer tooling."
                status="OPTIMIZED"
                statusIcon="check_circle"
              />
              <AutoCard
                icon="hub"
                title="MCP Servers"
                desc="Model Context Protocol servers that connect AI systems to local tools, context, and workflows."
                status="STABLE"
                statusIcon="verified_user"
              />
            </div>
            <div className="bg-surface-container-lowest/80 p-5 font-headline text-[10px] text-primary-container/80 space-y-1 overflow-hidden">
              <div className="text-on-surface/40 mb-2">
                &gt;&gt; RUNNING N8N WORKFLOWS
              </div>
              <div>[09:24:01] GET /webhook/ai-agent-trigger</div>
              <div>[09:24:02] PARSING PAYLOAD...</div>
              <div>[09:24:03] LLM_RESPONSE: SUCCESS</div>
              <div>[09:24:04] SYNCING TO POSTGRES...</div>
              <div>[09:24:05] TRIGGERING SLACK_NOTIFY...</div>
              <div>[09:24:06] WORKFLOW COMPLETE.</div>
              <div className="pt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-container animate-pulse"></div>
                <span>AWAITING NEXT EVENT_POLL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="uptime" value="99.98%" />
          <StatCard label="commits" value="4,821" />
          <StatCard label="latency" value="14ms" />
          <StatCard label="entropy" value="SECURE" />
        </div>
      </div>
    </div>
  );
}

/* --- Sub Components --- */

function SkillBar({
  name,
  percentage,
}: {
  name: string;
  percentage: number;
}) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end font-label text-xs">
        <span className="text-on-surface uppercase"># {name}</span>
        <span className="text-primary-container">STATUS: OK</span>
      </div>
      <div className="h-2 w-full bg-surface-container-lowest">
        <div
          className="h-full bg-primary-container shadow-[0_0_10px_rgba(0,255,65,0.5)]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function InterfaceSkill({
  icon,
  name,
  percentage,
  color,
}: {
  icon: string;
  name: string;
  percentage: number;
  color: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 bg-surface-container-lowest p-3 border-l-2 ${
        color === "primary-container"
          ? "border-primary-container"
          : "border-secondary"
      }`}
    >
      <Icon
        name={icon}
        className={`h-6 w-6 ${
          color === "primary-container" ? "text-primary-container" : "text-secondary"
        }`}
      />
      <div className="flex-1">
        <div className="flex justify-between text-xs font-label">
          <span>{name}</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-1 w-full bg-surface-variant mt-2">
          <div
            className={`h-full ${
              color === "primary-container" ? "bg-primary-container" : "bg-secondary"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function AutoCard({
  icon,
  title,
  desc,
  status,
  statusIcon,
}: {
  icon: string;
  title: string;
  desc: string;
  status: string;
  statusIcon: string;
}) {
  return (
    <div className="p-4 bg-surface-container-highest/50 border border-outline-variant/20">
      <div className="flex items-center gap-3 mb-3">
        <Icon name={icon} className="h-6 w-6 text-primary-container" />
        <h4 className="font-headline text-sm uppercase">{title}</h4>
      </div>
      <p className="text-xs text-on-surface/60 font-body mb-3">{desc}</p>
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-label text-[#00FF41]">{status}</span>
        <Icon name={statusIcon} className="h-4 w-4 text-[#00FF41]" />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-container-low p-4 border border-outline-variant/10 text-center">
      <div className="text-[10px] font-label text-on-surface/40 uppercase mb-1">
        {label}
      </div>
      <div className="text-xl font-headline text-primary-container tracking-tighter">
        {value}
      </div>
    </div>
  );
}
