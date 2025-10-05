import { useLanguage } from '@/lib/contexts/LanguageContext';
import enTranslations from '@/lib/translations/en.json';
import arTranslations from '@/lib/translations/ar.json';

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
    
    return typeof value === 'string' ? value : key;
  };

  return { t, language };
}
