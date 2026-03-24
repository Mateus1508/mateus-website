import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { LOGO_FULL } from '../assets'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Fundador', href: '#fundador' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        <a href="#hero" className="flex items-center h-10 group">
          <img
            src={LOGO_FULL}
            alt="Softbel — logotipo"
            className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,229,212,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(0,229,212,0.7)] transition-all duration-300"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-slate-400 hover:text-cyan transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 border border-cyan/50 text-cyan font-display text-[0.72rem] font-bold uppercase tracking-widest px-5 py-2.5 rounded hover:bg-cyan/10 hover:border-cyan hover:shadow-cyan-sm transition-all duration-300"
        >
          Fale Conosco
        </a>

        <button
          className="md:hidden text-cyan p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-2/95 backdrop-blur-xl border-b border-cyan/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm uppercase tracking-widest text-slate-300 hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 text-center border border-cyan/50 text-cyan font-display text-sm uppercase tracking-widest px-5 py-3 rounded hover:bg-cyan/10 transition-all"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  )
}
