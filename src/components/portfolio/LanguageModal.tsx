"use client";

import { useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";

type LanguageModalProps = {
  open: boolean;
  onClose: () => void;
};

export function LanguageModal({ open, onClose }: LanguageModalProps) {
  const { t, i18n } = useTranslation();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const active = i18n.language.startsWith("es") ? "es" : "en";

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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label={t("languageModal.closeBackdrop")}
        onClick={onClose}
      />
      <div
        id="language-modal"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md border border-primary/25 bg-[#0a0a0a] p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:p-8"
      >
        <div className="absolute top-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute top-0 right-0 h-2 w-2 bg-primary" />
        <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute right-0 bottom-0 h-2 w-2 bg-primary" />

        <h2
          id={titleId}
          className="font-headline mb-2 text-center text-lg font-black tracking-tighter text-white uppercase sm:text-xl"
        >
          {t("languageModal.title")}
        </h2>
        <p className="mb-6 text-center text-[10px] tracking-widest text-on-surface-variant uppercase sm:text-xs">
          {t("languageModal.subtitle")}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            className={
              active === "en"
                ? "font-headline flex-1 border-2 border-primary bg-primary/10 px-4 py-4 text-xs font-bold tracking-widest text-primary uppercase transition-all"
                : "font-headline flex-1 border border-white/20 px-4 py-4 text-xs font-bold tracking-widest text-white/80 uppercase transition-all hover:border-primary/40 hover:bg-white/5"
            }
            onClick={() => {
              void i18n.changeLanguage("en");
              onClose();
            }}
          >
            {t("languageModal.english")}
          </button>
          <button
            type="button"
            className={
              active === "es"
                ? "font-headline flex-1 border-2 border-primary bg-primary/10 px-4 py-4 text-xs font-bold tracking-widest text-primary uppercase transition-all"
                : "font-headline flex-1 border border-white/20 px-4 py-4 text-xs font-bold tracking-widest text-white/80 uppercase transition-all hover:border-primary/40 hover:bg-white/5"
            }
            onClick={() => {
              void i18n.changeLanguage("es");
              onClose();
            }}
          >
            {t("languageModal.spanish")}
          </button>
        </div>

        <button
          type="button"
          className="font-headline mt-6 w-full border border-white/10 py-2 text-[10px] font-bold tracking-widest text-white/50 uppercase transition-colors hover:bg-white/5 hover:text-white/80"
          onClick={onClose}
        >
          {t("languageModal.close")}
        </button>
      </div>
    </div>
  );
}
