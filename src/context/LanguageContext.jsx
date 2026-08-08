import { createContext, useContext, useState, useEffect } from 'react';
import { siteData as siteDataEs } from '../data/siteData.es';
import { siteData as siteDataEn } from '../data/siteData.en';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const siteData = lang === 'es' ? siteDataEs : siteDataEn;
  const toggleLang = () => setLang((current) => (current === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ siteData, lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

export function useSiteData() {
  return useLanguage().siteData;
}
