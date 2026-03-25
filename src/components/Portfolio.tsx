import { Github, ExternalLink, Briefcase, Lock } from "lucide-react";
import {
  PORTFOLIO_PROJECTS,
  projectText,
} from "../content/portfolioProjects";
import { useTranslation } from "../i18n/useTranslation";

export default function Portfolio() {
  const { locale, m } = useTranslation();

  return (
    <section id="portfolio" className="relative py-14 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="font-mono text-cyan text-[0.7rem] tracking-[0.3em] uppercase mb-4 block opacity-70">
            {m.portfolio.kicker}
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {m.portfolio.titleBefore}{" "}
            <span className="text-cyan text-glow">{m.portfolio.titleAccent}</span>
          </h2>
          <p className="text-slate-400 font-light text-lg max-w-xl leading-relaxed">
            {m.portfolio.intro}
          </p>
        </div>

        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <Briefcase size={13} className="text-cyan/60" />
            {m.portfolio.legendPro}
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <Github size={13} className="text-cyan/60" />
            {m.portfolio.legendOs}
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <Lock size={13} className="text-slate-600" />
            {m.portfolio.legendConf}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((p, i) => {
            const loc = projectText(p, locale);
            return (
              <div
                key={i}
                className="group relative bg-dark-2 border border-dark-5 hover:border-cyan/30 rounded-lg p-7 flex flex-col transition-all duration-300 hover:shadow-cyan-sm hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan/25 rounded-tl-lg transition-all duration-300 group-hover:w-12 group-hover:h-12" />

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {p.type === "professional" ? (
                      <Briefcase size={14} className="text-cyan/60 shrink-0" />
                    ) : (
                      <Github size={14} className="text-cyan/60 shrink-0" />
                    )}
                    {loc.context && (
                      <span className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-wider">
                        {loc.context}
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
                      aria-label={m.portfolio.githubAria}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <h3 className="font-display font-bold text-base mb-3 group-hover:text-cyan transition-colors duration-300 leading-snug">
                  {loc.title}
                </h3>

                <p className="text-slate-400 font-light text-sm leading-relaxed mb-4 flex-1">
                  {loc.desc}
                </p>

                {loc.highlight && (
                  <div className="mb-4 inline-flex items-center gap-1.5 bg-cyan/[0.06] border border-cyan/15 text-cyan/70 font-mono text-[0.58rem] px-2.5 py-1.5 rounded-sm self-start">
                    <span className="w-1 h-1 rounded-full bg-cyan/60" />
                    {loc.highlight}
                  </div>
                )}

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
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Mateus1508"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-slate-700 text-slate-400 hover:border-cyan/50 hover:text-cyan font-display text-sm uppercase tracking-widest px-6 py-3 rounded transition-all duration-300"
          >
            <Github size={16} />
            {m.portfolio.githubCta}
          </a>
        </div>
      </div>
    </section>
  );
}
