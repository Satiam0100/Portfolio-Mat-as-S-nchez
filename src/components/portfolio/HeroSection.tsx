export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-10 md:px-20"
      id="hero"
    >
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="scanline absolute inset-0 opacity-10" />
      <div className="relative z-10 max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-4">
          <span className="h-[1px] w-12 bg-primary" />
          <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">
            SYSTEM_INITIALIZED // ARCHITECT_V2.0
          </span>
        </div>
        <h1 className="font-headline mb-8 text-6xl font-black uppercase leading-none tracking-tighter md:text-9xl">
          DEV<span className="text-primary">_</span>UNIT
          <br />
          <span className="text-primary-container">OS_01</span>
        </h1>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="border-l-4 border-primary bg-surface-container-high p-6">
            <p className="font-mono text-sm leading-relaxed text-primary-dim md:text-base max-w-lg">
              <span className="text-white/40">guest@architect:~$</span> build
              --target full-stack
              <br />
              <span className="text-white/40">[LOG]</span> Compiling
              high-fidelity interfaces...
              <br />
              <span className="text-white/40">[LOG]</span> Optimizing React
              architectures...
              <br />
              <span className="text-white">STATUS: READY_TO_DEPLOY</span>
              <span className="animate-pulse">_</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="font-headline bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-all hover:shadow-[0_0_20px_rgba(170,255,220,0.4)] active:scale-95"
            >
              _EXECUTE_PROJECTS
            </button>
            <button
              type="button"
              className="font-headline border border-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary"
            >
              _ACCESS_CORE_CV
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 hidden select-none opacity-20 xl:block">
        <span className="-mb-20 block text-[20rem] font-black leading-none text-outline-variant/20">
          0101
        </span>
      </div>
    </section>
  );
}
