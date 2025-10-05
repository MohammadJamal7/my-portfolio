import { useLanguage } from '@/lib/contexts/LanguageContext';

// Import translations as modules to avoid Turbopack HMR issues
const enTranslations = require('@/lib/translations/en.json');
const arTranslations = require('@/lib/translations/ar.json');

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
    }
    
    // Ensure we always return a string for React components
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.join(', ');
    } else if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    
    return String(value);
  };

  const tObject = (key: string): unknown => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return null;
      }
    }
    
    return value;
  };

  return { t, tObject, language };
}
