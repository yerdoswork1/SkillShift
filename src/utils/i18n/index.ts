import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend"; // 👈 Новый

i18n
  .use(HttpBackend) // 👈 Добавить backend
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["ru", "en", "kz"],
    returnNull: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    backend: {
      loadPath: "/locales/{{lng}}/common.json", // 👈 динамический путь
    },
    debug: import.meta.env?.DEV ?? false,
  });

export default i18n;
