import { ArrowRight } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";

export default function Hero() {
  const { m } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-cyan/[0.06] blur-[130px]" />
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan/[0.04] blur-[80px]" />
      </div>

      {/* Vertical scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[12, 32, 55, 72].map((pos, i) => (
          <span
            key={i}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan/15 to-transparent animate-line-scan"
            style={{ left: `${pos}%`, animationDelay: `${i * 1}s` }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 w-full">
        {/* Badges row */}
        <div
          className="flex flex-wrap items-center gap-3 mb-6"
          style={{ animation: "fadeUp 0.6s ease both" }}
        >
          <div className="inline-flex items-center gap-2.5 bg-cyan/[0.07] border border-cyan/25 text-cyan font-display text-[0.68rem] font-semibold uppercase tracking-[0.22em] px-4 py-2 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-slow" />
            {m.hero.badgeConsulting}
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/[0.08] border border-emerald-500/30 text-emerald-400 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] px-4 py-2 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {m.hero.badgeProjects}
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-extrabold leading-[1.08] tracking-[-0.025em] mb-5 max-w-4xl"
          style={{
            fontSize: "clamp(2.35rem, 5.2vw, 4.25rem)",
            animation: "fadeUp 0.7s 0.1s ease both",
            opacity: 0,
          }}
        >
          {m.hero.h1Before}{" "}
          <span className="text-cyan text-glow">{m.hero.h1Accent}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-slate-400 font-light text-lg max-w-2xl leading-[1.85] mb-8"
          style={{ animation: "fadeUp 0.7s 0.22s ease both", opacity: 0 }}
        >
          {m.hero.subtitle}
        </p>

        {/* CTA */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: "fadeUp 0.7s 0.36s ease both", opacity: 0 }}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 bg-cyan text-dark font-display font-bold text-[0.8rem] uppercase tracking-[0.12em] px-7 py-4 rounded hover:shadow-cyan-md hover:-translate-y-0.5 transition-all duration-300"
          >
            {m.hero.cta} <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
}
