"use client";

import { useTranslation } from "react-i18next";
import { HeroHeading } from "./HeroHeading";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-x-hidden px-4 pt-16 sm:px-8 md:px-20"
      id="hero"
    >
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="scanline absolute inset-0 opacity-10" />
      <div className="relative z-10 w-full min-w-0 max-w-4xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span className="hidden h-[1px] w-12 shrink-0 bg-primary sm:block" />
          <span className="font-label max-w-full text-[10px] font-bold uppercase leading-snug tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em]">
            {t("hero.badge")}
          </span>
        </div>
        <HeroHeading />
        <div className="flex w-full min-w-0 flex-col items-stretch gap-8 md:flex-row md:items-center">
          <div className="min-w-0 border-l-4 border-primary bg-surface-container-high p-4 sm:p-6">
            <p className="font-mono max-w-lg text-xs leading-relaxed break-words text-primary-dim sm:text-sm md:text-base">
              <span className="text-white/40">{t("hero.terminalPrompt")}</span>{" "}
              {t("hero.terminalBuild")}
              <br />
              <span className="text-white/40">[LOG]</span>{" "}
              {t("hero.terminalLog1Body")}
              <br />
              <span className="text-white/40">[LOG]</span>{" "}
              {t("hero.terminalLog2Body")}
              <br />
              <span className="text-white">{t("hero.terminalStatus")}</span>
              <span className="animate-pulse">_</span>
            </p>
          </div>
          <div className="flex w-full min-w-0 flex-col gap-4 sm:w-auto sm:shrink-0">
            <button
              type="button"
              className="font-headline w-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-on-primary transition-all hover:shadow-[0_0_20px_rgba(170,255,220,0.4)] active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
            >
              {t("hero.ctaExecute")}
            </button>
            <button
              type="button"
              className="font-headline w-full border border-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
            >
              {t("hero.ctaCv")}
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 hidden max-h-full max-w-full overflow-hidden select-none opacity-20 xl:block">
        <span className="block translate-y-1/4 text-[clamp(8rem,25vw,20rem)] font-black leading-none text-outline-variant/20">
          0101
        </span>
      </div>
    </section>
  );
}
