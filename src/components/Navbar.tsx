import { useState, useEffect } from 'react'
import { Globe, Menu, Moon, Sun, X } from 'lucide-react'
import { NAVBAR_ITEMS } from '../content/navbarLinks'
import { LOGO_MB } from '../assets'
import { usePreferences } from '../context/PreferencesContext'
import { useTranslation } from '../i18n/useTranslation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme, locale, setLocale } = usePreferences()
  const { m } = useTranslation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl border-b border-cyan/10 shadow-cyan-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#hero" className="flex items-center h-10 group gap-3">
          <img
            src={LOGO_MB}
            alt={m.logoAlt}
            className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,229,212,0.35)] group-hover:drop-shadow-[0_0_18px_rgba(0,229,212,0.6)] transition-all duration-300"
          />
          <span className="font-display font-extrabold uppercase tracking-[0.18em] text-[0.8rem] text-slate-200 group-hover:text-cyan transition-colors duration-300">
            {m.nav.brand}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAVBAR_ITEMS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-slate-400 hover:text-cyan transition-colors duration-300 relative group"
              >
                {m.nav[link.labelKey]}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-10 h-10 rounded border border-cyan/25 text-cyan hover:bg-cyan/10 hover:border-cyan/50 transition-all duration-300"
            aria-label={theme === 'dark' ? m.nav.toggleThemeLight : m.nav.toggleThemeDark}
            title={theme === 'dark' ? m.nav.toggleThemeLight : m.nav.toggleThemeDark}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 h-10 px-3 rounded border border-dark-5 bg-dark-2 text-slate-300 hover:border-cyan/30 hover:text-cyan transition-all duration-300"
            aria-label={m.nav.selectLanguage}
            title={m.nav.selectLanguage}
            onClick={() => setLocale(locale === 'pt' ? 'en' : 'pt')}
          >
            <Globe size={16} className="text-cyan/70" />
            <span className="font-display text-[0.7rem] font-bold uppercase tracking-widest">
              {locale.toUpperCase()}
            </span>
          </button>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-cyan/50 text-cyan font-display text-[0.72rem] font-bold uppercase tracking-widest px-5 py-2.5 rounded hover:bg-cyan/10 hover:border-cyan hover:shadow-cyan-sm transition-all duration-300"
          >
            {m.nav.ctaContact}
          </a>
        </div>

        <button
          className="md:hidden text-cyan p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? m.nav.menuClose : m.nav.menu}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-2/95 backdrop-blur-xl border-b border-cyan/10 px-6 py-6 flex flex-col gap-5">
          {NAVBAR_ITEMS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm uppercase tracking-widest text-slate-300 hover:text-cyan transition-colors"
            >
              {m.nav[link.labelKey]}
            </a>
          ))}
          <div className="flex gap-3 justify-center pt-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-10 h-10 rounded border border-cyan/25 text-cyan"
              aria-label={theme === 'dark' ? m.nav.toggleThemeLight : m.nav.toggleThemeDark}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setLocale(locale === 'pt' ? 'en' : 'pt')}
              className="inline-flex items-center gap-2 h-10 px-3 rounded border border-dark-5 text-slate-300"
            >
              <Globe size={16} />
              {locale.toUpperCase()}
            </button>
          </div>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 text-center border border-cyan/50 text-cyan font-display text-sm uppercase tracking-widest px-5 py-3 rounded hover:bg-cyan/10 transition-all"
          >
            {m.nav.ctaContact}
          </a>
        </div>
      )}
    </nav>
  )
}
