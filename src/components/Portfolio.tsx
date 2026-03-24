import { Github, ExternalLink, Briefcase, Lock } from "lucide-react";

interface Project {
  type: "github" | "professional";
  title: string;
  desc: string;
  techs: string[];
  link?: string;
  context?: string;
  highlight?: string;
}

const projects: Project[] = [
  // Professional projects (no client name)
  {
    type: "professional",
    title: "Sistema de Monitoramento de Câmeras",
    desc: "Plataforma de monitoramento em tempo real para ECVs, substituindo o monitoramento terceirizado e reduzindo custos operacionais significativamente.",
    techs: ["React", "Node.js", "TypeScript", "WebSocket"],
    context: "Renova Soluções em Tecnologia",
    highlight: "Eliminou custo com monitoramento terceirizado",
  },
  {
    type: "professional",
    title: "Sistema de Validação Facial",
    desc: "Aplicação para órgão público com autenticação biométrica, controle de níveis de usuário e geração de relatórios em PDF.",
    techs: ["React", "Node.js", "TypeScript", "PDF Generation"],
    context: "Renova Soluções em Tecnologia",
    highlight: "Autenticação facial para órgão público",
  },
  {
    type: "professional",
    title: "Módulo de Pessoal — ERP de Engenharia",
    desc: "Front-end completo do módulo de gestão de pessoal integrado a um ERP voltado para o setor de engenharia civil.",
    techs: ["React", "Material UI", "TypeScript", "REST API"],
    context: "SGN Sistemas",
    highlight: "Módulo completo de ERP do zero",
  },
  {
    type: "professional",
    title: "Biblioteca de Geração de Boletos",
    desc: "Reestruturação completa do processo de emissão de boletos bancários, criando uma biblioteca interna em Node.js reutilizável.",
    techs: ["Node.js", "TypeScript", "Boleto.js", "REST API"],
    context: "SGN Sistemas",
    highlight: "Processo de boletos totalmente reescrito",
  },
  {
    type: "professional",
    title: "Sistema de Gerenciamento de Projetos",
    desc: "Plataforma web para gestão de projetos e tarefas com front-end responsivo e back-end integrado ao banco de dados Oracle.",
    techs: ["HTML", "Bootstrap", "jQuery", "PHP", "Oracle"],
    context: "SIGMA Gestão e Consultoria",
    highlight: "Sistema full stack do zero",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-14 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-cyan text-[0.7rem] tracking-[0.3em] uppercase mb-4 block opacity-70">
            // projetos & experiências
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Trabalhos <span className="text-cyan text-glow">realizados</span>
          </h2>
          <p className="text-slate-400 font-light text-lg max-w-xl leading-relaxed">
            Projetos desenvolvidos ao longo da trajetória profissional —
            sistemas reais, entregues e em produção.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <Briefcase size={13} className="text-cyan/60" />
            Projeto profissional
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <Github size={13} className="text-cyan/60" />
            Projeto open source
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <Lock size={13} className="text-slate-600" />
            Cliente confidencial
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative bg-dark-2 border border-dark-5 hover:border-cyan/30 rounded-lg p-7 flex flex-col transition-all duration-300 hover:shadow-cyan-sm hover:-translate-y-1 overflow-hidden"
            >
              {/* Corner accent */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan/25 rounded-tl-lg transition-all duration-300 group-hover:w-12 group-hover:h-12" />

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {p.type === "professional" ? (
                    <Briefcase size={14} className="text-cyan/60 shrink-0" />
                  ) : (
                    <Github size={14} className="text-cyan/60 shrink-0" />
                  )}
                  {p.context && (
                    <span className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-wider">
                      {p.context}
                    </span>
                  )}
                  {p.type === "professional" && (
                    <Lock size={11} className="text-slate-700 ml-auto" />
                  )}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-cyan transition-colors ml-auto"
                    aria-label="Ver no GitHub"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base mb-3 group-hover:text-cyan transition-colors duration-300 leading-snug">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 font-light text-sm leading-relaxed mb-4 flex-1">
                {p.desc}
              </p>

              {/* Highlight badge */}
              {p.highlight && (
                <div className="mb-4 inline-flex items-center gap-1.5 bg-cyan/[0.06] border border-cyan/15 text-cyan/70 font-mono text-[0.58rem] px-2.5 py-1.5 rounded-sm self-start">
                  <span className="w-1 h-1 rounded-full bg-cyan/60" />
                  {p.highlight}
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.58rem] text-slate-500 bg-dark-3 border border-dark-5 px-2 py-1 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Mateus1508"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-slate-700 text-slate-400 hover:border-cyan/50 hover:text-cyan font-display text-sm uppercase tracking-widest px-6 py-3 rounded transition-all duration-300"
          >
            <Github size={16} />
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
