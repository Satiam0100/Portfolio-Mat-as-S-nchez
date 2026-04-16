export function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#494847]/15 bg-[#050505]/80 px-6 py-4 backdrop-blur-xl">
      <div className="font-headline text-xl font-black tracking-tighter text-[#00FFC2]">
        ARCHITECT_OS
      </div>
      <div className="hidden gap-8 font-headline text-sm uppercase tracking-tighter md:flex">
        <a
          className="border-b-2 border-[#00FFC2] pb-1 text-[#00FFC2]"
          href="#hero"
        >
          _HERO
        </a>
        <a
          className="text-white/60 transition-colors hover:text-white"
          href="#tech"
        >
          _TECH
        </a>
        <a
          className="text-white/60 transition-colors hover:text-white"
          href="#work"
        >
          _WORK
        </a>
        <a
          className="text-white/60 transition-colors hover:text-white"
          href="#cv"
        >
          _CV
        </a>
      </div>
      <button
        type="button"
        className="bg-[#00FFC2] px-4 py-2 font-headline text-xs font-bold uppercase text-[#00654b] transition-all hover:bg-[#00edb4]"
      >
        _CONNECT
      </button>
    </nav>
  );
}
