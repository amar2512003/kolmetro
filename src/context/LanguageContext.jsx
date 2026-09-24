import { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { translate, translateName } from '../i18n/index.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = useCallback((key, vars) => translate(lang, key, vars), [lang]);
  // tn(englishName) — translates a proper noun (station / line / landmark).
  const tn = useCallback((name) => translateName(lang, name), [lang]);

  const value = useMemo(() => ({ lang, setLang, t, tn }), [lang, t, tn]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// Consumed via useTranslation() rather than useContext directly, so
// call sites don't need to know about LanguageContext at all.
export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return ctx;
}
