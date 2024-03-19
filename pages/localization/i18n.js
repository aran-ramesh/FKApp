import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import enTranslation from './translations/en.json'; // English translations
import frTranslation from './translations/fr.json'; // French translations
import tnTranslation from './translations/tn.json'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback) => {
    try {
      const storedLanguage = await AsyncStorage.getItem('language');
      const language = storedLanguage || 'en'; // Default to English if language is not set
      callback(language);
    } catch (error) {
      console.error('Error reading language from AsyncStorage:', error);
      callback('en'); // Fallback to English if an error occurs
    }
  },
  cacheUserLanguage: (lng) => {
    AsyncStorage.setItem('language', lng).catch(error => {
      console.error('Error caching language to AsyncStorage:', error);
    });
  }
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      tn: { translation: tnTranslation}
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;