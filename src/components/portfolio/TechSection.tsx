"use client";

import { useTranslation } from "react-i18next";

type TechAccent = "primary" | "secondary" | "tertiary";

type TechCard = {
  n: string;
  icon: string;
  accent: TechAccent;
  title: string;
  body: string;
  tags: string[];
};

const borderHover: Record<TechAccent, string> = {
  primary: "hover:border-primary/50",
  secondary: "hover:border-secondary/50",
  tertiary: "hover:border-tertiary/50",
};

const indexColor: Record<TechAccent, string> = {
  primary: "text-primary/20",
  secondary: "text-secondary/20",
  tertiary: "text-tertiary/20",
};

const iconColor: Record<TechAccent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

const tagColor: Record<TechAccent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export function TechSection() {
  const { t } = useTranslation();
  const cards = t("tech.cards", { returnObjects: true }) as TechCard[];

  return (
    <section
      className="bg-surface-container-low px-4 py-16 sm:px-8 sm:py-20 md:px-20 md:py-24"
      id="tech"
    >
      <div className="mb-10 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2 className="font-headline mb-4 text-3xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white sm:text-4xl md:text-5xl">
            {t("tech.title")}
          </h2>
          <p className="font-body max-w-md text-sm uppercase tracking-widest text-on-surface-variant">
            {t("tech.subtitle")}
          </p>
        </div>
        <div className="hidden text-right md:block">
          <span className="font-mono block text-[8px] text-primary/40">
            {t("tech.mono1")}
          </span>
          <span className="font-mono block text-[8px] text-primary/40">
            {t("tech.mono2")}
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
              className={`material-symbols-outlined mb-4 block text-4xl ${iconColor[c.accent]}`}
            >
              {c.icon}
            </span>
            <h3 className="font-headline mb-3 min-w-0 max-w-full pr-8 text-balance break-words hyphens-none text-xl leading-tight font-black uppercase tracking-tighter text-neutral-950 [overflow-wrap:anywhere] dark:text-white sm:text-2xl md:text-[1.35rem] md:leading-snug lg:text-lg lg:leading-tight xl:text-2xl xl:leading-snug">
              {c.title}
            </h3>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              {c.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className={`bg-surface-variant px-2 py-1 text-[10px] font-bold ${tagColor[c.accent]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
