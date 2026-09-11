import { LOGO_MB } from '../assets'
import { useTranslation } from '../i18n/useTranslation'

export default function Footer() {
  const year = new Date().getFullYear()
  const { m } = useTranslation()

  return (
    <footer className="relative border-t border-dark-5 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity">
          <img
            src={LOGO_MB}
            alt={m.logoAlt}
            className="h-9 w-auto object-contain"
          />
          <span className="font-display font-bold uppercase tracking-[0.16em] text-[0.7rem] text-slate-400">
            {m.nav.brand}
          </span>
        </a>

        <p className="text-slate-600 font-light text-xs text-center">
          © {year} {m.nav.brand}. {m.footer.rights}
          <span className="block mt-1 text-slate-700">{m.footer.legal}</span>
        </p>

        <div className="flex gap-6">
          {m.footer.linkItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-cyan font-display text-[0.65rem] uppercase tracking-widest transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
