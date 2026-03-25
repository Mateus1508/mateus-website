import {
  Globe,
  Smartphone,
  Server,
  RefreshCw,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";

const SERVICE_ICONS = [
  Globe,
  Smartphone,
  Server,
  RefreshCw,
  ShieldCheck,
  BarChart3,
] as const;

export default function Servicos() {
  const { m } = useTranslation();

  return (
    <section id="servicos" className="relative py-14 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-cyan/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="font-mono text-cyan text-[0.7rem] tracking-[0.3em] uppercase mb-4 block opacity-70">
            {m.servicos.kicker}
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {m.servicos.titleLine1}
            <br />
            {m.servicos.titleLine2Before}{" "}
            <span className="text-cyan text-glow">{m.servicos.titleAccent}</span>
          </h2>
          <p className="text-slate-400 font-light text-lg max-w-xl leading-relaxed">
            {m.servicos.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {m.servicos.cards.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div
                key={i}
                className="group relative bg-dark-2 border border-dark-5 hover:border-cyan/30 rounded-lg p-8 transition-all duration-300 hover:shadow-cyan-sm hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute top-6 right-7 font-mono text-[0.65rem] text-slate-600 group-hover:text-cyan/40 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan/30 rounded-tl-lg transition-all duration-300 group-hover:w-14 group-hover:h-14" />

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="text-cyan mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon size={26} />
                </div>

                <h3 className="font-display font-bold text-lg mb-3 group-hover:text-cyan transition-colors duration-300">
                  {s.title}
                </h3>

                <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>

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
            );
          })}
        </div>
      </div>
    </section>
  );
}
