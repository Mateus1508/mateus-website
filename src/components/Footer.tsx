import { LOGO_FULL } from '../assets'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-dark-5 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src={LOGO_FULL}
          alt="Softbel — logotipo"
          className="h-8 w-auto object-contain opacity-60 drop-shadow-[0_0_8px_rgba(0,229,212,0.3)]"
        />

        <p className="text-slate-600 font-light text-xs text-center">
          © {year} Softbel. Todos os direitos reservados.
        </p>

        <div className="flex gap-6">
          {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace('ç','c')}`}
              className="text-slate-600 hover:text-cyan font-display text-[0.65rem] uppercase tracking-widest transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
