import i18n from 'i18next';
import en from 'locales/en.json';
import sl from 'locales/sl.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  sl: { translation: sl },
  en: { translation: en },
} as const;

i18n.use(initReactI18next).init({
  lng: 'sl',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
