'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


if ( typeof window !== 'undefined' && !i18n.isInitialized) {
    i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        supportedLngs: ['ru', 'kz', 'en'],
        ns: ['common'],
        defaultNS: 'common',
        detection: {
            order: ['localStorage', 'navigator',],
            caches: ['localStorage'],
            lookupLocalStorage: "i18nextLng",
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        interpolation: {
            escapeValue: false,
        },
    });
}

export default i18n;
