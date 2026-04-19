const cards = [
  {
    n: "01",
    icon: "deployed_code",
    accent: "primary" as const,
    title: "REACT_UI",
    body: "High-performance component architecture and state management systems.",
    tags: ["HOOKS", "VIRTUAL_DOM"],
  },
  {
    n: "02",
    icon: "terminal",
    accent: "secondary" as const,
    title: "TYPESCRIPT",
    body: "Type-safe development ensuring runtime stability and architecture clarity.",
    tags: ["STRICT_MODE", "GENERICS"],
  },
  {
    n: "03",
    icon: "css",
    accent: "tertiary" as const,
    title: "TAILWIND_UX",
    body: "Utility-first design methodology for rapid and scalable styling systems.",
    tags: ["JIT_ENGINE", "GRID_LAYOUT"],
  },
  {
    n: "04",
    icon: "database",
    accent: "primary" as const,
    title: "NODE_SERVER",
    body: "Scalable backend services and API design for complex data streams.",
    tags: ["EXPRESS", "REST_API"],
  },
];

const borderHover: Record<(typeof cards)[number]["accent"], string> = {
  primary: "hover:border-primary/50",
  secondary: "hover:border-secondary/50",
  tertiary: "hover:border-tertiary/50",
};

const indexColor: Record<(typeof cards)[number]["accent"], string> = {
  primary: "text-primary/20",
  secondary: "text-secondary/20",
  tertiary: "text-tertiary/20",
};

const iconColor: Record<(typeof cards)[number]["accent"], string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

const tagColor: Record<(typeof cards)[number]["accent"], string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export function TechSection() {
  return (
    <section
      className="bg-surface-container-low px-4 py-16 sm:px-8 sm:py-20 md:px-20 md:py-24"
      id="tech"
    >
      <div className="mb-10 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2 className="font-headline mb-4 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
            _TECHNOLOGIES
          </h2>
          <p className="font-body max-w-md text-sm uppercase tracking-widest text-on-surface-variant">
            Advanced module integration and engineering stacks.
          </p>
        </div>
        <div className="hidden text-right md:block">
          <span className="font-mono block text-[8px] text-primary/40">
            0x0001 // REACT_CORE
          </span>
          <span className="font-mono block text-[8px] text-primary/40">
            0x0002 // TYPESCRIPT_ENGINE
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.n}
            className={`group relative min-w-0 overflow-hidden border border-outline-variant/15 bg-surface p-5 transition-all sm:p-8 ${borderHover[c.accent]}`}
          >
            <div
              className={`absolute top-0 right-0 p-2 font-mono text-[10px] ${indexColor[c.accent]}`}
            >
              {c.n}
            </div>
            <span
              className={`material-symbols-outlined mb-6 block text-4xl ${iconColor[c.accent]}`}
            >
              {c.icon}
            </span>
            <h3 className="font-headline mb-2 text-xl font-bold text-white">
              {c.title}
            </h3>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              {c.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className={`bg-surface-variant px-2 py-1 text-[10px] font-bold ${tagColor[c.accent]}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
