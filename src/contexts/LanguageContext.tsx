'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (pt: any, en: any) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize with default, will be updated in useEffect
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('relia-lang') as Language;
      if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
        return savedLang;
      }
    }
    return 'pt';
  });

  useEffect(() => {
    // Save language preference when it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('relia-lang', language);
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (pt: any, en: any): any => {
    return language === 'pt' ? pt : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
