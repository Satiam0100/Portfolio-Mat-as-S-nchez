export function SiteFooter() {
  return (
    <footer className="flex w-full max-w-full flex-col items-center justify-between border-t border-[#494847]/15 bg-[#000000] px-10 py-12 md:flex-row">
      <div className="font-body mb-6 text-[10px] tracking-widest text-white/40 uppercase md:mb-0">
        ©2024_SYSTEM_ARCHITECT_PORTFOLIO
      </div>
      <div className="flex gap-8">
        <a
          className="font-body text-[10px] tracking-widest text-white/40 uppercase transition-all hover:text-[#00FFC2]"
          href="#"
        >
          GITHUB
        </a>
        <a
          className="font-body text-[10px] tracking-widest text-white/40 uppercase transition-all hover:text-[#00FFC2]"
          href="#"
        >
          LINKEDIN
        </a>
        <a
          className="font-body text-[10px] tracking-widest text-white/40 uppercase transition-all hover:text-[#00FFC2]"
          href="#"
        >
          SOURCE_CODE
        </a>
      </div>
      <div className="mt-6 flex items-center gap-2 md:mt-0">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span className="font-mono text-[8px] text-primary">
          SYSTEM_STATUS: ONLINE
        </span>
      </div>
    </footer>
  );
}
