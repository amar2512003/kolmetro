import { useTranslation } from '../../context/LanguageContext.jsx';
import { supportedLanguages } from '../../i18n/index.js';
import { GlassCard } from '../shared/GlassCard.jsx';
import { Button } from '../shared/Button.jsx';

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="w-full max-w-5xl flex justify-end mb-3">
      <GlassCard className="p-1 flex gap-1">
        {supportedLanguages.map(({ code, label }) => (
          <Button key={code} active={lang === code} onClick={() => setLang(code)}>
            {label}
          </Button>
        ))}
      </GlassCard>
    </div>
  );
}
