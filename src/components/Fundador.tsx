import { Github, Linkedin, Code2 } from "lucide-react";
import { PHOTO_MATEUS } from "../assets";

const skills = [
  "React, Next.js e React Native",
  "Node.js, NestJS e ASP.NET",
  "TypeScript",
  "C# e JavaScript",
  "PostgreSQL, MongoDB e SQL Server",
  "Docker, Azure DevOps e Kubernetes",
  "REST, GraphQL e CI/CD",
  "Clean Code e Design Patterns",
];

export default function Fundador() {
  return (
    <section id="fundador" className="relative py-14 overflow-hidden">
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-cyan text-[0.7rem] tracking-[0.3em] uppercase mb-4 block opacity-70">
            // quem está por trás
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            O <span className="text-cyan text-glow">fundador</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Decorative frame */}
            <div className="relative">
              <div className="absolute -inset-3 border border-cyan/15 rounded-xl" />
              <div className="absolute -inset-6 border border-cyan/08 rounded-2xl" />

              {/* Corner accents */}
              <span className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan/60 rounded-tl-sm" />
              <span className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan/60 rounded-tr-sm" />
              <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan/60 rounded-bl-sm" />
              <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan/60 rounded-br-sm" />

              <img
                src={PHOTO_MATEUS}
                alt="Mateus Belmonte dos Santos — Fundador da Softbel"
                className="w-[340px] h-[420px] object-cover rounded-lg relative z-10 drop-shadow-[0_0_30px_rgba(0,229,212,0.15)]"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-dark-2 border border-cyan/30 rounded-lg px-4 py-3 shadow-cyan-sm">
                <div className="flex items-center gap-2">
                  <Code2 size={14} className="text-cyan" />
                  <span className="font-mono text-xs text-cyan">
                    Desenvolvedor de Software
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-display font-extrabold text-3xl mb-1 tracking-tight">
              Mateus Belmonte dos Santos
            </h3>
            <p className="text-cyan font-mono text-sm mb-1 opacity-80">
              CEO & Fundador · Softbel
            </p>

            <div className="space-y-4 text-slate-400 font-light leading-relaxed mb-8">
              <p>
                Desenvolvedor de Software com mais de 4 anos de experiência em
                aplicações web escaláveis — a mesma base técnica que orienta a
                entrega da Softbel para clientes.
              </p>
              <p>
                Atuação com React, Next.js, Node.js, NestJS e C#, integração com
                APIs REST e GraphQL, arquitetura em camadas e ambientes em nuvem
                (Azure e Kubernetes).
              </p>
              <p>
                Experiência em projetos de monitoramento, validação facial e
                sistemas corporativos, com práticas de CI/CD e metodologias
                ágeis (Scrum e Kanban).
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <p className="font-display font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">
                Stack & Competências
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[0.65rem] text-cyan/70 bg-cyan/[0.06] border border-cyan/15 px-3 py-1.5 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/mateus-belmonte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-700 text-slate-400 hover:border-cyan/50 hover:text-cyan font-display text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-all duration-300"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/Mateus1508"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-700 text-slate-400 hover:border-cyan/50 hover:text-cyan font-display text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-all duration-300"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
