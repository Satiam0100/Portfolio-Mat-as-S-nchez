"use client";

import i18n, { refreshTranslationBundlesDev } from "@/i18n/client";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

const STORAGE_KEY = "architect-os-locale";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const onPersist = (lng: string) => {
      document.documentElement.lang = lng;
      try {
        window.localStorage.setItem(STORAGE_KEY, lng);
      } catch {
        /* ignore */
      }
    };

    i18n.on("languageChanged", onPersist);

    document.documentElement.lang = i18n.language;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      void i18n.changeLanguage(stored);
    }

    refreshTranslationBundlesDev();

    return () => {
      i18n.off("languageChanged", onPersist);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
