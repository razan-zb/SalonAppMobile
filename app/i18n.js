import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './assest/locales/en/translation.json';
import ar from './assest/locales/ar/translation.json';
import he from './assest/locales/he/translation.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  he: { translation: he },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const locales = RNLocalize.getLocales();
    const bestLanguage = locales[0]?.languageTag || 'en';
    callback(bestLanguage);
},
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;