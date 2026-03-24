import { Globe, Smartphone, Server, RefreshCw, ShieldCheck, BarChart3 } from 'lucide-react'
import { type ReactNode } from 'react'

interface Service {
  icon: ReactNode
  tag: string
  title: string
  desc: string
  techs: string[]
}

const services: Service[] = [
  {
    icon: <Globe size={26} />,
    tag: '01',
    title: 'Sistemas Web',
    desc: 'Plataformas, dashboards, ERPs, CRMs e portais completos. Do MVP ao produto final com arquitetura sólida e escalável.',
    techs: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: <Smartphone size={26} />,
    tag: '02',
    title: 'Apps Mobile',
    desc: 'Aplicativos iOS e Android multiplataforma com UX centrado no usuário e performance nativa.',
    techs: ['React Native', 'Flutter', 'Expo'],
  },
  {
    icon: <Server size={26} />,
    tag: '03',
    title: 'APIs & Back-end',
    desc: 'Arquiteturas REST e GraphQL, microsserviços e integrações com sistemas legados e serviços de terceiros.',
    techs: ['Node.js', 'Python', 'AWS', 'Docker'],
  },
  {
    icon: <RefreshCw size={26} />,
    tag: '04',
    title: 'Manutenção & Evolução',
    desc: 'Cuidamos do seu software em produção: correção de bugs, refatoração, modernização e novas funcionalidades.',
    techs: ['Auditoria', 'Refactoring', 'DevOps', 'CI/CD'],
  },
  {
    icon: <ShieldCheck size={26} />,
    tag: '05',
    title: 'Segurança & Performance',
    desc: 'Análise de vulnerabilidades, otimização de queries, caching avançado e hardening de infraestrutura.',
    techs: ['Pentest', 'Redis', 'CDN', 'Monitoring'],
  },
  {
    icon: <BarChart3 size={26} />,
    tag: '06',
    title: 'Consultoria Técnica',
    desc: 'Revisão de arquitetura, escolha de stack, code review e mentoria para equipes de desenvolvimento.',
    techs: ['Arquitetura', 'Code Review', 'Squad', 'Tech Lead'],
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-14 overflow-hidden">
      {/* Right glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-cyan/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-cyan text-[0.7rem] tracking-[0.3em] uppercase mb-4 block opacity-70">
            // o que fazemos
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Soluções digitais
            <br />
            do início ao <span className="text-cyan text-glow">fim</span>
          </h2>
          <p className="text-slate-400 font-light text-lg max-w-xl leading-relaxed">
            Cobrimos todo o ciclo de vida do seu produto digital — desde a
            concepção da arquitetura até a manutenção em produção.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-dark-2 border border-dark-5 hover:border-cyan/30 rounded-lg p-8 transition-all duration-300 hover:shadow-cyan-sm hover:-translate-y-1 overflow-hidden"
            >
              {/* Tag number */}
              <span className="absolute top-6 right-7 font-mono text-[0.65rem] text-slate-600 group-hover:text-cyan/40 transition-colors">
                {s.tag}
              </span>

              {/* Corner accent */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan/30 rounded-tl-lg transition-all duration-300 group-hover:w-14 group-hover:h-14" />

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-cyan mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {s.icon}
              </div>

              <h3 className="font-display font-bold text-lg mb-3 group-hover:text-cyan transition-colors duration-300">
                {s.title}
              </h3>

              <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {s.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.62rem] text-cyan/60 bg-cyan/[0.06] border border-cyan/15 px-2.5 py-1 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
