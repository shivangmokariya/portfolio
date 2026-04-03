export function Footer() {
  return (
    <footer className="bg-[#131313] text-[#00FF41] font-headline text-[10px] uppercase tracking-tighter border-t border-[#2a2a2a] relative z-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 w-full lg:ml-64">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></span>
            SYS_STATUS: ONLINE // 127.0.0.1
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline">UPTIME: 99.9%</span>
        </div>
        <div className="flex gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e5e2e1]/50 hover:text-[#00FF41] transition-opacity"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e5e2e1]/50 hover:text-[#00FF41] transition-opacity"
          >
            LINKEDIN
          </a>
          <a href="#" className="text-[#00FF41] transition-opacity">
            UPTIME_99.9%
          </a>
        </div>
      </div>
    </footer>
  );
}
