export function CvSection() {
  return (
    <section
      className="relative overflow-hidden px-10 py-32 md:px-20"
      id="cv"
    >
      <div className="grid-overlay absolute inset-0 opacity-10" />
      <div className="relative z-10 mx-auto max-w-4xl overflow-hidden border border-primary/20 bg-surface-container-high p-12 text-center">
        <div className="absolute top-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute top-0 right-0 h-2 w-2 bg-primary" />
        <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute right-0 bottom-0 h-2 w-2 bg-primary" />
        <span className="material-symbols-outlined mb-8 text-6xl text-primary">
          file_download
        </span>
        <h2 className="font-headline mb-4 text-4xl font-black tracking-tighter text-white uppercase">
          SYSTEM_ACCESS_GRANTED
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-xs tracking-widest text-on-surface-variant uppercase">
          Download the full technical specification and operational history of
          UNIT_01.
        </p>
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <button
            type="button"
            className="font-headline bg-primary px-10 py-5 text-sm font-bold tracking-widest text-on-primary uppercase transition-all hover:shadow-[0_0_20px_rgba(170,255,220,0.5)]"
          >
            _DOWNLOAD_PDF
          </button>
          <button
            type="button"
            className="font-headline border border-white/40 px-10 py-5 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-white/5"
          >
            _VIEW_ONLINE
          </button>
        </div>
      </div>
    </section>
  );
}
