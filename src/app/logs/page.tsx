import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KERNEL_OS // LOGS",
  description:
    "System activity logs — deployments, optimizations, integrations, and real-time event monitoring.",
};

export default function LogsPage() {
  return (
    <div className="flex flex-col md:flex-row bg-surface overflow-hidden relative" style={{ height: "calc(100vh - 3.5rem)" }}>
      {/* System Stats Margin (Left) */}
      <aside className="w-full md:w-72 bg-surface-container-low border-r border-outline-variant/10 p-6 overflow-y-auto">
        <div className="space-y-8">
          {/* System Metrics */}
          <div>
            <h3 className="text-xs uppercase tracking-tighter text-[#00FF41]/60 mb-4 font-headline">
              SYSTEM_METRICS
            </h3>
            <div className="space-y-6">
              <MetricBar label="CPU_LOAD" value="24.8%" width="24.8%" />
              <MetricBar label="RAM_USAGE" value="4.2GB / 16GB" width="32%" />
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-on-surface-variant font-headline">
                  <span>UPTIME</span>
                  <span>124:14:02:44</span>
                </div>
                <div className="h-[2px] bg-surface-container-highest w-full"></div>
              </div>
            </div>
          </div>

          {/* Network Status */}
          <div className="bg-surface-container-highest p-4 border border-outline-variant/20">
            <h4 className="text-[10px] font-bold text-primary mb-2 tracking-widest uppercase font-headline">
              NETWORK_STATUS
            </h4>
            <div className="text-[10px] font-headline text-on-surface/60 leading-relaxed">
              IP: 192.168.1.104
              <br />
              DNS: KERNEL.PRO
              <br />
              PORT: 443 [OPEN]
              <br />
              LATENCY: 14ms
            </div>
          </div>

          {/* Local Radar */}
          <div className="flex flex-col gap-2">
            <div className="h-32 w-full bg-surface-container-lowest relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/10 to-transparent"></div>
              <div className="absolute bottom-2 left-2 flex flex-col">
                <span className="text-[8px] text-primary/40 font-headline uppercase">
                  LOCAL_RADAR
                </span>
                <span className="text-[10px] text-primary font-headline">
                  REGION: NA-EAST-1
                </span>
              </div>
              <div className="p-2">
                <div className="w-2 h-2 bg-primary animate-pulse"></div>
              </div>
              <Image
                className="absolute inset-0 object-cover opacity-20 grayscale"
                alt="Server circuit board with glowing green microchips in a dark data center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk-f1i2rpPu1PcThmp82MZYrCsQqI0tBvRAGaihIwOUZ3aH9PQ4krA8YtqXnW2jBCwT402SkJXLXZQS5z26VDqWu8JnV2ZKczaB5s6nI3qMerovtYGNcvTGArttHNwT_ccShkPJroF5wzaU2tS1VeJYSKpXHI-rUxlkRyNM-fbbcL7gmAjzLaUSszkJPGZYpi6uFTJmqSP4ZP70OLUy7b8yD5dIg3ICaDNqSY3O9B3vJValxUHyOw8YAEZ_KCvKAE57zAaIqVv2JY"
                fill
                unoptimized
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Terminal Area */}
      <section className="flex-1 flex flex-col bg-surface overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="bg-surface-container-highest px-4 py-2 flex items-center justify-between border-b border-outline-variant/20">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-outline-variant/40 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-outline-variant/40 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-outline-variant/40 rounded-full"></div>
          </div>
          <div className="text-[10px] font-headline text-on-surface-variant tracking-widest uppercase">
            bash — kernel-os@admin: ~/logs
          </div>
          <div className="w-10"></div>
        </div>

        {/* Scrolling Logs */}
        <div className="flex-1 overflow-y-auto p-6 font-headline bg-surface-container-lowest/30 backdrop-blur-sm">
          <div className="space-y-4 max-w-4xl">
            <LogEntry
              timestamp="2024-11-20 14:22:01"
              action="DEPLOYED:"
              actionColor="text-primary-container"
              description="Multi-vendor ERP system integrated with Stripe API."
              tags={["#NEXTJS", "#PRISMA", "#AWS"]}
            />
            <LogEntry
              timestamp="2024-11-18 09:10:45"
              action="OPTIMIZED:"
              actionColor="text-secondary-container"
              description="Real-time Socket Engine performance improved by 40% reducing latency to 12ms."
              tags={["#REDIS", "#SOCKETIO"]}
            />
            <LogEntry
              timestamp="2024-11-15 22:45:12"
              action="INTEGRATED:"
              actionColor="text-primary-container"
              description="Subscription Core v2 migration completed for 15,000+ active seats."
              tags={["#GOLANG", "#POSTGRES"]}
            />
            <LogEntry
              timestamp="2024-11-12 04:12:33"
              action="REFACTORED:"
              actionColor="text-error"
              description="Legacy auth middleware replaced with decentralized JWT strategy."
              tags={[]}
              isError
            />
            <LogEntry
              timestamp="2024-11-10 18:05:00"
              action="INITIATED:"
              actionColor="text-primary-container"
              description="Internal AI-driven log analysis engine (v0.1-alpha)."
              tags={[]}
            />
            <LogEntry
              timestamp="2024-11-05 12:00:22"
              action="SCALED:"
              actionColor="text-secondary-container"
              description="Microservices cluster scaled to 12 instances across 3 availability zones."
              tags={["#K8S", "#DOCKER"]}
            />
            <LogEntry
              timestamp="2024-10-28 11:30:44"
              action="DECRYPTED:"
              actionColor="text-primary-container"
              description="Customer vault security handshake protocols updated."
              tags={[]}
            />

            {/* Command Prompt Simulation */}
            <div className="pt-8 flex gap-3 items-center">
              <span className="text-[#00FF41] font-bold">
                admin@kernel_os:~$
              </span>
              <span className="text-on-surface/90">
                tail -f activity.log
              </span>
              <span className="w-2.5 h-5 bg-secondary-container animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Terminal Bottom Info */}
        <div className="bg-surface-container border-t border-outline-variant/10 px-6 py-3 flex justify-between items-center text-[10px] font-headline">
          <div className="flex gap-6">
            <span className="text-on-surface-variant">
              <b className="text-primary">MODE:</b> LIVE_STREAM
            </span>
            <span className="text-on-surface-variant">
              <b className="text-primary">ENCODING:</b> UTF-8
            </span>
          </div>
          <div className="text-on-surface-variant opacity-50">
            SCROLLING_ENABLED_v2.4
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Sub Components --- */

function MetricBar({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] text-on-surface-variant font-headline">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-[2px] bg-surface-container-highest w-full relative">
        <div
          className="absolute h-full bg-primary-container"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}

function LogEntry({
  timestamp,
  action,
  actionColor,
  description,
  tags,
  isError = false,
}: {
  timestamp: string;
  action: string;
  actionColor: string;
  description: string;
  tags: string[];
  isError?: boolean;
}) {
  return (
    <div className="flex gap-4 group">
      <span
        className={`${
          isError ? "text-error/40" : "text-[#00FF41]/40"
        } text-xs shrink-0`}
      >
        [{timestamp}]
      </span>
      <div className="flex-1">
        <span
          className={`${actionColor} text-xs font-bold uppercase tracking-widest`}
        >
          {action}
        </span>
        <span className="text-on-surface text-sm ml-2">{description}</span>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-surface-container-high text-[10px] text-secondary font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
