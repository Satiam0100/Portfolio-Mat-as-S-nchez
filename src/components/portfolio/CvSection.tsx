"use client";

import { useTranslation } from "react-i18next";
import { StitchDownloadIcon } from "./SideNav";

export function CvSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative overflow-x-hidden px-4 py-20 sm:px-8 sm:py-28 md:px-20 md:py-32"
      id="cv"
    >
      <div className="grid-overlay absolute inset-0 opacity-10" />
      <div className="relative z-10 mx-auto w-full max-w-4xl min-w-0 overflow-hidden border border-primary/20 bg-surface-container-high p-6 text-center sm:p-8 md:p-12">
        <div className="absolute top-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute top-0 right-0 h-2 w-2 bg-primary" />
        <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute right-0 bottom-0 h-2 w-2 bg-primary" />
        <StitchDownloadIcon className="mx-auto mb-8 block h-16 w-16 text-primary" />
        <h2 className="font-headline mb-4 text-2xl font-black tracking-tighter text-white uppercase sm:text-3xl md:text-4xl">
          {t("cv.title")}
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-[10px] leading-relaxed tracking-widest text-on-surface-variant uppercase sm:mb-10 sm:text-xs">
          {t("cv.body")}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            className="font-headline w-full bg-primary px-6 py-4 text-xs font-bold tracking-widest text-on-primary uppercase transition-all hover:shadow-[0_0_20px_rgba(170,255,220,0.5)] sm:w-auto sm:px-10 sm:py-5 sm:text-sm"
          >
            {t("cv.download")}
          </button>
          <button
            type="button"
            className="font-headline w-full border border-white/40 px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-white/5 sm:w-auto sm:px-10 sm:py-5 sm:text-sm"
          >
            {t("cv.viewOnline")}
          </button>
        </div>
      </div>
    </section>
  );
}
