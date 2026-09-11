import { CheckCircle2 } from "lucide-react";
import { SOBRE_PILLAR_ICONS } from "../content/sobreContent";
import { useTranslation } from "../i18n/useTranslation";

export default function Sobre() {
  const { m } = useTranslation();

  return (
    <section id="como-trabalho" className="relative py-14 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-cyan/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="font-mono text-cyan text-[0.7rem] tracking-[0.3em] uppercase mb-4 block opacity-70">
            {m.sobre.kicker}
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {m.sobre.titleBefore}{" "}
            <span className="text-cyan text-glow">{m.sobre.titleAccent}</span>
            {m.sobre.titleAfter}
          </h2>
          <p className="text-slate-400 font-light text-lg max-w-xl leading-relaxed">
            {m.sobre.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {m.sobre.pillars.map((p, i) => {
            const Icon = SOBRE_PILLAR_ICONS[i];
            return (
              <div
                key={i}
                className="group relative bg-dark-2 border border-dark-5 hover:border-cyan/30 rounded-lg p-8 transition-all duration-300 hover:shadow-cyan-sm hover:-translate-y-1"
              >
                <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan/40 rounded-tl-lg transition-all duration-300 group-hover:w-12 group-hover:h-12" />

                <div className="text-cyan mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 group-hover:text-cyan transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-dark-2 border border-dark-5 rounded-lg p-10">
          <p className="font-display font-semibold text-sm uppercase tracking-widest text-cyan mb-7 opacity-80">
            {m.sobre.whyTitle}
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
            {m.sobre.checks.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={15} className="text-cyan shrink-0" />
                <span className="text-slate-300 font-light text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
