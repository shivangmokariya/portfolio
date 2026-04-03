import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  useDots?: boolean;
  useSquareDots?: boolean;
}

export function TerminalWindow({
  title,
  children,
  className = "",
  headerClassName = "",
  useDots = false,
  useSquareDots = false,
}: TerminalWindowProps) {
  return (
    <div
      className={`bg-surface-container border border-outline-variant/20 overflow-hidden ${className}`}
    >
      <div
        className={`bg-surface-container-highest px-4 py-2 flex items-center justify-between ${headerClassName}`}
      >
        <div className="flex items-center gap-2">
          {useDots && (
            <div className="flex gap-2 mr-3">
              <div className="terminal-header-dot"></div>
              <div className="terminal-header-dot"></div>
              <div className="terminal-header-dot"></div>
            </div>
          )}
          {useSquareDots && (
            <div className="flex gap-2 mr-3">
              <div className="w-3 h-3 border border-outline-variant/40"></div>
              <div className="w-3 h-3 border border-outline-variant/40"></div>
              <div className="w-3 h-3 border border-outline-variant/40"></div>
            </div>
          )}
          <span className="text-[10px] font-headline uppercase tracking-widest opacity-50">
            {title}
          </span>
        </div>
        <div className="w-10"></div>
      </div>
      {children}
    </div>
  );
}
