"use client";

import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="flex w-full max-w-full flex-col items-center justify-between gap-6 border-t border-[#494847]/15 bg-white px-4 py-10 text-center sm:px-8 md:flex-row md:gap-8 md:px-10 md:py-12 md:text-left dark:bg-black">
      <div className="font-body max-w-full break-words text-[10px] tracking-widest text-neutral-950/45 uppercase dark:text-white/40">
        {t("footer.copyright")}
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:justify-end">
        <a
          className="font-body text-[10px] tracking-widest text-neutral-950/45 uppercase transition-all hover:text-[#00FFC2] dark:text-white/40"
          href="#"
        >
          {t("footer.github")}
        </a>
        <a
          className="font-body text-[10px] tracking-widest text-neutral-950/45 uppercase transition-all hover:text-[#00FFC2] dark:text-white/40"
          href="#"
        >
          {t("footer.linkedin")}
        </a>
        <a
          className="font-body text-[10px] tracking-widest text-neutral-950/45 uppercase transition-all hover:text-[#00FFC2] dark:text-white/40"
          href="#"
        >
          {t("footer.source")}
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 md:justify-end">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span className="font-mono text-[8px] text-primary">
          {t("footer.status")}
        </span>
      </div>
    </footer>
  );
}
