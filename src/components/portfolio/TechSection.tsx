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
    <section className="bg-surface-container-low px-10 py-24 md:px-20" id="tech">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <h2 className="font-headline mb-4 text-4xl font-black uppercase tracking-tighter md:text-5xl">
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
            className={`group relative overflow-hidden border border-outline-variant/15 bg-surface p-8 transition-all ${borderHover[c.accent]}`}
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
