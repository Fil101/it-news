import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        // Загрузка переводов из папки /public для переводов в Storybook
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
