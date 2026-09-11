import type { Locale } from '../context/PreferencesContext'

function FlagBR({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 20"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="28" height="20" rx="2" fill="#009B3A" />
      <polygon points="14,2.2 25.4,10 14,17.8 2.6,10" fill="#FFDF00" />
      <circle cx="14" cy="10" r="3.5" fill="#002776" />
    </svg>
  )
}

function FlagUS({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 20"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="28" height="20" rx="2" fill="#B22234" />
      {[2, 5, 8, 11, 14, 17].map((y) => (
        <rect key={y} y={y} width="28" height="1.55" fill="#fff" />
      ))}
      <rect width="12" height="10.8" fill="#3C3B6E" />
    </svg>
  )
}

const FLAG_BTN =
  'inline-flex items-center justify-center w-10 h-10 rounded border transition-all duration-300'

type Props = {
  locale: Locale
  setLocale: (locale: Locale) => void
  selectLabel: string
}

export default function LanguageSwitch({ locale, setLocale, selectLabel }: Props) {
  return (
    <div className="inline-flex items-center gap-1.5" role="group" aria-label={selectLabel}>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`${FLAG_BTN} ${
          locale === 'en'
            ? 'border-cyan/60 bg-cyan/10'
            : 'border-dark-5 bg-dark-2 opacity-70 hover:opacity-100 hover:border-cyan/30'
        }`}
        aria-label="English (United States)"
        aria-pressed={locale === 'en'}
        title="English"
      >
        <FlagUS className="w-[22px] h-[16px] rounded-[2px] shadow-sm" />
      </button>
      <button
        type="button"
        onClick={() => setLocale('pt')}
        className={`${FLAG_BTN} ${
          locale === 'pt'
            ? 'border-cyan/60 bg-cyan/10'
            : 'border-dark-5 bg-dark-2 opacity-70 hover:opacity-100 hover:border-cyan/30'
        }`}
        aria-label="Português (Brasil)"
        aria-pressed={locale === 'pt'}
        title="Português"
      >
        <FlagBR className="w-[22px] h-[16px] rounded-[2px] shadow-sm" />
      </button>
    </div>
  )
}
