import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

export function refreshTranslationBundlesDev(): void {
  if (process.env.NODE_ENV !== "development") return;

  void i18n.addResourceBundle("en", "translation", en, true, true);
  void i18n.addResourceBundle("es", "translation", es, true, true);
  if (i18n.isInitialized) {
    const current = i18n.resolvedLanguage ?? i18n.language ?? "en";
    void i18n.changeLanguage(current);
  }
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
} else if (process.env.NODE_ENV === "development") {
  refreshTranslationBundlesDev();
}

export default i18n;
