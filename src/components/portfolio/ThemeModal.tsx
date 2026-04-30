"use client";

import { useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";

type ThemeModalProps = {
  open: boolean;
  isDark: boolean;
  onClose: () => void;
  onSetDark: (next: boolean) => void;
};

export function ThemeModal({
  open,
  isDark,
  onClose,
  onSetDark,
}: ThemeModalProps) {
  const { t } = useTranslation();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm dark:bg-black/70"
        aria-label={t("themeModal.closeBackdrop")}
        onClick={onClose}
      />
      <div
        id="theme-modal"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md border border-primary/25 bg-neutral-50 p-6 shadow-[0_0_40px_rgb(0_0_0_/0.12)] dark:bg-[#0a0a0a] dark:shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:p-8"
      >
        <div className="absolute top-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute top-0 right-0 h-2 w-2 bg-primary" />
        <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute right-0 bottom-0 h-2 w-2 bg-primary" />

        <h2
          id={titleId}
          className="font-headline mb-2 text-center text-lg font-black tracking-tighter text-neutral-950 uppercase dark:text-white sm:text-xl"
        >
          {t("themeModal.title")}
        </h2>
        <p className="mb-6 text-center text-[10px] tracking-widest text-on-surface-variant uppercase sm:text-xs">
          {t("themeModal.subtitle")}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            className={
              !isDark
                ? "font-headline flex-1 border-2 border-primary bg-primary/10 px-4 py-4 text-xs font-bold tracking-widest text-primary uppercase transition-all"
                : "font-headline flex-1 border border-neutral-950/25 px-4 py-4 text-xs font-bold tracking-widest text-neutral-950/80 uppercase transition-all hover:border-primary/40 hover:bg-neutral-950/[0.06] dark:border-white/20 dark:text-white/80 dark:hover:bg-white/5"
            }
            onClick={() => {
              onSetDark(false);
              onClose();
            }}
          >
            {t("themeModal.light")}
          </button>
          <button
            type="button"
            className={
              isDark
                ? "font-headline flex-1 border-2 border-primary bg-primary/10 px-4 py-4 text-xs font-bold tracking-widest text-primary uppercase transition-all"
                : "font-headline flex-1 border border-neutral-950/25 px-4 py-4 text-xs font-bold tracking-widest text-neutral-950/80 uppercase transition-all hover:border-primary/40 hover:bg-neutral-950/[0.06] dark:border-white/20 dark:text-white/80 dark:hover:bg-white/5"
            }
            onClick={() => {
              onSetDark(true);
              onClose();
            }}
          >
            {t("themeModal.dark")}
          </button>
        </div>

        <button
          type="button"
          className="font-headline mt-6 w-full border border-neutral-950/15 py-2 text-[10px] font-bold tracking-widest text-neutral-950/55 uppercase transition-colors hover:bg-neutral-950/[0.06] hover:text-neutral-950/85 dark:border-white/10 dark:text-white/50 dark:hover:bg-white/5 dark:hover:text-white/80"
          onClick={onClose}
        >
          {t("themeModal.close")}
        </button>
      </div>
    </div>
  );
}
