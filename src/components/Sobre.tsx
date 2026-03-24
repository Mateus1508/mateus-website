import { CheckCircle2, Cpu, Target, Users } from 'lucide-react'

const pillars = [
  {
    icon: <Cpu size={22} />,
    title: 'Tecnologia de Ponta',
    desc: 'Utilizamos as stacks mais modernas e eficientes do mercado para garantir performance, segurança e escalabilidade nos projetos.',
  },
  {
    icon: <Target size={22} />,
    title: 'Foco no Resultado',
    desc: 'Cada linha de código é escrita pensando no impacto real no seu negócio. Entregamos valor concreto, não apenas software.',
  },
  {
    icon: <Users size={22} />,
    title: 'Parceria Contínua',
    desc: 'Não somos apenas fornecedores. Somos parceiros de longo prazo comprometidos com o crescimento do seu produto digital.',
  },
]

const checks = [
  'Desenvolvimento ágil e transparente',
  'Código limpo, documentado e escalável',
  'Suporte técnico especializado pós-entrega',
  'Entregas dentro do prazo combinado',
  'Metodologia orientada a dados e métricas',
  'Segurança e performance garantidas',
]

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-14 overflow-hidden">
      {/* Side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-cyan/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-8">
          <span className="font-mono text-cyan text-[0.7rem] tracking-[0.3em] uppercase mb-4 block opacity-70">
            // sobre a empresa
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Software que <span className="text-cyan text-glow">resolve</span>,
            <br />
            não que complica
          </h2>
          <p className="text-slate-400 font-light text-lg max-w-xl leading-relaxed">
            A Softbel nasceu da crença de que tecnologia precisa ser acessível,
            eficiente e alinhada ao negócio. Somos especialistas em transformar
            desafios complexos em soluções digitais elegantes e escaláveis.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative bg-dark-2 border border-dark-5 hover:border-cyan/30 rounded-lg p-8 transition-all duration-300 hover:shadow-cyan-sm hover:-translate-y-1"
            >
              {/* Corner accent */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan/40 rounded-tl-lg transition-all duration-300 group-hover:w-12 group-hover:h-12" />

              <div className="text-cyan mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-3 group-hover:text-cyan transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Checklist card */}
        <div className="bg-dark-2 border border-dark-5 rounded-lg p-10">
          <p className="font-display font-semibold text-sm uppercase tracking-widest text-cyan mb-7 opacity-80">
            Por que escolher a Softbel?
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
            {checks.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={15} className="text-cyan shrink-0" />
                <span className="text-slate-300 font-light text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
