export function TimelineSection() {
  return (
    <section className="px-10 py-24 md:px-20">
      <h2 className="font-headline mb-16 text-center text-4xl font-black uppercase tracking-tighter md:text-5xl">
        _TIMELINE_SEQUENCING
      </h2>
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute top-0 bottom-0 left-4 w-[1px] -translate-x-1/2 bg-outline-variant/30 md:left-1/2" />

        <div className="relative mb-20 flex w-full flex-col items-start md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 md:text-right">
            <div className="inline-block border border-outline-variant/15 bg-surface-container-high p-6">
              <span className="mb-2 block text-xs font-bold tracking-widest text-primary">
                2021 - PRESENT
              </span>
              <h4 className="font-headline mb-2 text-lg font-bold text-white">
                SENIOR FRONTEND ARCHITECT
              </h4>
              <p className="text-xs text-on-surface-variant">
                Leading interface engineering for global data management
                platforms.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-4 h-3 w-3 -translate-x-1/2 bg-primary shadow-[0_0_10px_#aaffdc] md:left-1/2" />
          <div className="md:w-1/2 md:pl-12" />
        </div>

        <div className="relative mb-20 flex w-full flex-col items-start md:flex-row-reverse md:items-center">
          <div className="md:w-1/2 md:pl-12">
            <div className="inline-block border border-outline-variant/15 bg-surface-container-high p-6">
              <span className="mb-2 block text-xs font-bold tracking-widest text-secondary">
                2018 - 2021
              </span>
              <h4 className="font-headline mb-2 text-lg font-bold text-white">
                SYSTEMS DEVELOPER
              </h4>
              <p className="text-xs text-on-surface-variant">
                Building internal toolings and module libraries for enterprise
                systems.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-4 h-3 w-3 -translate-x-1/2 bg-secondary shadow-[0_0_10px_#ff51fa] md:left-1/2" />
          <div className="md:w-1/2 md:pr-12" />
        </div>

        <div className="relative flex w-full flex-col items-start md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 md:text-right">
            <div className="inline-block border border-outline-variant/15 bg-surface-container-high p-6">
              <span className="mb-2 block text-xs font-bold tracking-widest text-tertiary">
                2014 - 2018
              </span>
              <h4 className="font-headline mb-2 text-lg font-bold text-white">
                COMP_SCI_DEGREE
              </h4>
              <p className="text-xs text-on-surface-variant">
                Foundational logic and algorithm engineering certification.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-4 h-3 w-3 -translate-x-1/2 bg-tertiary shadow-[0_0_10px_#f3ffca] md:left-1/2" />
          <div className="md:w-1/2 md:pl-12" />
        </div>
      </div>
    </section>
  );
}
