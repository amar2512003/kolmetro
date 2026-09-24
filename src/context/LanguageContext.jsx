import { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { translate, translateName, translateGate, translateGateLabel } from '../i18n/index.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = useCallback((key, vars) => translate(lang, key, vars), [lang]);
  // tn(englishName) — translates a proper noun (station / line / landmark).
  const tn = useCallback((name) => translateName(lang, name), [lang]);

  // tg(englishGateDesc) — translates a gate description; tgl(label) — a gate number label ('1 & 3').
  const tg = useCallback((desc) => translateGate(lang, desc), [lang]);
  const tgl = useCallback((label) => translateGateLabel(lang, label), [lang]);

  const value = useMemo(() => ({ lang, setLang, t, tn, tg, tgl }), [lang, t, tn, tg, tgl]);

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
