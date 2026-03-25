import { useState, type FormEvent } from "react";
import { Send, MapPin, Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function Contato() {
  const { m } = useTranslation();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
  };

  const inputClass =
    "w-full bg-dark-3 border border-dark-5 text-slate-200 font-body font-light text-sm px-4 py-3 rounded focus:outline-none focus:border-cyan/50 focus:shadow-cyan-sm transition-all duration-300 placeholder:text-slate-600";

  const contactBlocks = [
    {
      icon: <Mail size={18} />,
      label: m.contato.labelEmail,
      value: "contatosoftbel@gmail.com",
      href: "mailto:contatosoftbel@gmail.com",
    },
    {
      icon: <MessageSquare size={18} />,
      label: m.contato.labelWhatsApp,
      value: "+55 (71) 9 83557279",
      href: "https://wa.me/5571983557279",
    },
    {
      icon: <MapPin size={18} />,
      label: m.contato.labelLocation,
      value: m.contato.locationValue,
      href: null as string | null,
    },
  ];

  return (
    <section id="contato" className="relative py-14 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/[0.05] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="font-mono text-cyan text-[0.7rem] tracking-[0.3em] uppercase mb-4 block opacity-70">
            {m.contato.kicker}
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {m.contato.titleBefore}{" "}
            <span className="text-cyan text-glow">{m.contato.titleAccent}</span>
            {m.contato.titleAfter}
          </h2>
          <p className="text-slate-400 font-light text-lg max-w-lg leading-relaxed">
            {m.contato.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {contactBlocks.map((c, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-cyan/[0.08] border border-cyan/20 rounded flex items-center justify-center text-cyan shrink-0 mt-0.5">
                  {c.icon}
                </div>
                <div>
                  <p className="font-display text-[0.68rem] uppercase tracking-widest text-slate-500 mb-1">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-slate-300 font-light hover:text-cyan transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 font-light">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-dark-2 border border-dark-5 rounded-lg p-5 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-display text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  {m.contato.availTitle}
                </span>
              </div>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                {m.contato.availDesc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-dark-2 border border-cyan/25 rounded-xl p-12 text-center shadow-cyan-sm">
                <div className="w-14 h-14 bg-cyan/10 border border-cyan/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Send size={22} className="text-cyan" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">
                  {m.contato.sentTitle}
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  {m.contato.sentDesc}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-dark-2 border border-dark-5 rounded-xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-display text-[0.65rem] uppercase tracking-widest text-slate-500 mb-2 block">
                      {m.contato.labelName}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={m.contato.phName}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-display text-[0.65rem] uppercase tracking-widest text-slate-500 mb-2 block">
                      {m.contato.labelEmailField}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={m.contato.phEmail}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-display text-[0.65rem] uppercase tracking-widest text-slate-500 mb-2 block">
                      {m.contato.labelCompany}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={m.contato.phCompany}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-display text-[0.65rem] uppercase tracking-widest text-slate-500 mb-2 block">
                      {m.contato.labelService}
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">{m.contato.selectPlaceholder}</option>
                      {m.contato.services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-display text-[0.65rem] uppercase tracking-widest text-slate-500 mb-2 block">
                    {m.contato.labelMessage}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={m.contato.phMessage}
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-cyan text-dark font-display font-bold text-[0.8rem] uppercase tracking-[0.12em] py-4 rounded hover:shadow-cyan-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  {m.contato.submit} <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
