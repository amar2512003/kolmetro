import { en } from './en.js';
import { bn } from './bn.js';
import { hi } from './hi.js';

export const translations = { en, bn, hi };
export const supportedLanguages = [
  { code: 'en', label: 'English' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'hi', label: 'हिन्दी' },
];

// Looks up `key` for `lang`, falling back to English, then the raw key.
// `vars` does simple {placeholder} interpolation (e.g. {d}, {mode}).
export function translate(lang, key, vars) {
  const dict = translations[lang] || translations.en;
  let str = dict[key] ?? translations.en[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replaceAll(`{${k}}`, v);
    }
  }
  return str;
}
