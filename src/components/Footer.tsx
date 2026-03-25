import { LOGO_FULL } from '../assets'
import { useTranslation } from '../i18n/useTranslation'

export default function Footer() {
  const year = new Date().getFullYear()
  const { m } = useTranslation()

  return (
    <footer className="relative border-t border-dark-5 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src={LOGO_FULL}
          alt={m.logoAlt}
          className="h-8 w-auto object-contain opacity-60 drop-shadow-[0_0_8px_rgba(0,229,212,0.3)]"
        />

        <p className="text-slate-600 font-light text-xs text-center">
          © {year} Softbel. {m.footer.rights}
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
