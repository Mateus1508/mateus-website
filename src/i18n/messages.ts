import type { Locale } from '../context/PreferencesContext'

const pt = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    portfolio: 'Portfólio',
    founder: 'Fundador',
    contact: 'Contato',
    ctaContact: 'Fale Conosco',
    toggleThemeDark: 'Ativar tema escuro',
    toggleThemeLight: 'Ativar tema claro',
    selectLanguage: 'Selecionar idioma',
    menu: 'Abrir menu',
    menuClose: 'Fechar menu',
  },
  hero: {
    badgeConsulting: 'Consultoria de Software',
    badgeProjects: 'Aceitando projetos',
    h1Before: 'Desenvolvimento, Evolução e Gestão de',
    h1Accent: 'Software Sob Medida.',
    subtitle:
      'Do zero ao suporte contínuo: crio aplicativos, sistemas e automações, além de garantir que sua tecnologia atual nunca pare de crescer.',
    cta: 'Solicitar Diagnóstico Técnico',
  },
  sobre: {
    kicker: '// sobre a empresa',
    titleBefore: 'Software que',
    titleAccent: 'resolve',
    titleAfter: ', não que complica',
    intro:
      'A Softbel nasceu da crença de que tecnologia precisa ser acessível, eficiente e alinhada ao negócio. Somos especialistas em transformar desafios complexos em soluções digitais elegantes e escaláveis.',
    pillars: [
      {
        title: 'Tecnologia de Ponta',
        desc: 'Utilizamos as stacks mais modernas e eficientes do mercado para garantir performance, segurança e escalabilidade nos projetos.',
      },
      {
        title: 'Foco no Resultado',
        desc: 'Cada linha de código é escrita pensando no impacto real no seu negócio. Entregamos valor concreto, não apenas software.',
      },
      {
        title: 'Parceria Contínua',
        desc: 'Não somos apenas fornecedores. Somos parceiros de longo prazo comprometidos com o crescimento do seu produto digital.',
      },
    ],
    checks: [
      'Desenvolvimento ágil e transparente',
      'Código limpo, documentado e escalável',
      'Suporte técnico especializado pós-entrega',
      'Entregas dentro do prazo combinado',
      'Metodologia orientada a dados e métricas',
      'Segurança e performance garantidas',
    ],
    whyTitle: 'Por que escolher a Softbel?',
  },
  servicos: {
    kicker: '// o que fazemos',
    titleLine1: 'Soluções digitais',
    titleLine2Before: 'do início ao',
    titleAccent: 'fim',
    intro:
      'Cobrimos todo o ciclo de vida do seu produto digital — desde a concepção da arquitetura até a manutenção em produção.',
    cards: [
      {
        title: 'Sistemas Web',
        desc: 'Plataformas, dashboards, ERPs, CRMs e portais completos. Do MVP ao produto final com arquitetura sólida e escalável.',
        techs: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
      },
      {
        title: 'Apps Mobile',
        desc: 'Aplicativos iOS e Android multiplataforma com UX centrado no usuário e performance nativa.',
        techs: ['React Native', 'Flutter', 'Expo'],
      },
      {
        title: 'APIs & Back-end',
        desc: 'Arquiteturas REST e GraphQL, microsserviços e integrações com sistemas legados e serviços de terceiros.',
        techs: ['Node.js', 'Python', 'AWS', 'Docker'],
      },
      {
        title: 'Manutenção & Evolução',
        desc: 'Cuidamos do seu software em produção: correção de bugs, refatoração, modernização e novas funcionalidades.',
        techs: ['Auditoria', 'Refatoração', 'DevOps', 'CI/CD'],
      },
      {
        title: 'Segurança & Performance',
        desc: 'Análise de vulnerabilidades, otimização de queries, caching avançado e hardening de infraestrutura.',
        techs: ['Pentest', 'Redis', 'CDN', 'Monitoramento'],
      },
      {
        title: 'Consultoria Técnica',
        desc: 'Revisão de arquitetura, escolha de stack, code review e mentoria para equipes de desenvolvimento.',
        techs: ['Arquitetura', 'Code Review', 'Squad', 'Tech Lead'],
      },
    ],
  },
  portfolio: {
    kicker: '// projetos & experiências',
    titleBefore: 'Trabalhos',
    titleAccent: 'realizados',
    intro:
      'Projetos desenvolvidos ao longo da trajetória profissional — sistemas reais, entregues e em produção.',
    legendPro: 'Projeto profissional',
    legendOs: 'Projeto open source',
    legendConf: 'Cliente confidencial',
    githubCta: 'Ver mais no GitHub',
    githubAria: 'Ver no GitHub',
  },
  fundador: {
    kicker: '// quem está por trás',
    titleBefore: 'O',
    titleAccent: 'fundador',
    photoAlt: 'Mateus Belmonte dos Santos — Fundador da Softbel',
    roleBadge: 'Desenvolvedor de Software',
    roleSubtitle: 'CEO & Fundador · Softbel',
    skillsHeading: 'Stack & Competências',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    bioParas: [
      'Desenvolvedor de Software com mais de 4 anos de experiência em aplicações web escaláveis — a mesma base técnica que orienta a entrega da Softbel para clientes.',
      'Atuação com React, Next.js, Node.js, NestJS e C#, integração com APIs REST e GraphQL, arquitetura em camadas e ambientes em nuvem (Azure e Kubernetes).',
      'Experiência em projetos de monitoramento, validação facial e sistemas corporativos, com práticas de CI/CD e metodologias ágeis (Scrum e Kanban).',
    ],
    skills: [
      'React, Next.js e React Native',
      'Node.js, NestJS e ASP.NET',
      'TypeScript',
      'C# e JavaScript',
      'PostgreSQL, MongoDB e SQL Server',
      'Docker, Azure DevOps e Kubernetes',
      'REST, GraphQL e CI/CD',
      'Clean Code e Design Patterns',
    ],
  },
  contato: {
    kicker: '// entre em contato',
    titleBefore: 'Vamos construir algo',
    titleAccent: 'incrível',
    titleAfter: '?',
    intro:
      'Conte-nos sobre seu projeto. Respondemos em até 24 horas e agendamos uma conversa sem compromisso.',
    labelEmail: 'E-mail',
    labelWhatsApp: 'WhatsApp',
    labelLocation: 'Localização',
    locationValue: 'Salvador, Bahia — Brasil',
    availTitle: 'Disponível para novos projetos',
    availDesc: 'Atualmente aceitamos novos clientes. Entre em contato e reserve sua vaga.',
    sentTitle: 'Mensagem enviada!',
    sentDesc: 'Obrigado pelo contato. Retornaremos em até 24 horas úteis.',
    labelName: 'Nome *',
    phName: 'Seu nome',
    labelEmailField: 'E-mail *',
    phEmail: 'seu@email.com',
    labelCompany: 'Empresa',
    phCompany: 'Nome da empresa',
    labelService: 'Serviço de interesse',
    selectPlaceholder: 'Selecionar...',
    labelMessage: 'Mensagem *',
    phMessage: 'Conte-nos sobre seu projeto...',
    submit: 'Enviar Mensagem',
    services: ['Sistema Web', 'App Mobile', 'API / Back-end', 'Manutenção', 'Consultoria', 'Outro'],
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    linkItems: [
      { label: 'Início', href: '#hero' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  logoAlt: 'Softbel — logotipo',
} as const

const en = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    founder: 'Founder',
    contact: 'Contact',
    ctaContact: 'Contact us',
    toggleThemeDark: 'Switch to dark theme',
    toggleThemeLight: 'Switch to light theme',
    selectLanguage: 'Select language',
    menu: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    badgeConsulting: 'Software consulting',
    badgeProjects: 'Accepting projects',
    h1Before: 'Development, Evolution and Management of',
    h1Accent: 'Tailor-made Software.',
    subtitle:
      'From zero to ongoing support: I build applications, systems, and automations, and I make sure your current technology never stops growing.',
    cta: 'Request a technical assessment',
  },
  sobre: {
    kicker: '// about the company',
    titleBefore: 'Software that',
    titleAccent: 'solves',
    titleAfter: ', not complicates',
    intro:
      'Softbel was born from the belief that technology should be accessible, efficient, and aligned with business. We specialize in turning complex challenges into elegant, scalable digital solutions.',
    pillars: [
      {
        title: 'Cutting-edge technology',
        desc: 'We use the most modern and efficient stacks on the market to ensure performance, security, and scalability.',
      },
      {
        title: 'Results-driven',
        desc: 'Every line of code is written with real business impact in mind. We deliver tangible value, not just software.',
      },
      {
        title: 'Long-term partnership',
        desc: 'We are not just vendors. We are long-term partners committed to growing your digital product.',
      },
    ],
    checks: [
      'Agile and transparent development',
      'Clean, documented, and scalable code',
      'Specialized technical support after delivery',
      'On-time deliveries',
      'Data- and metrics-oriented methodology',
      'Security and performance guaranteed',
    ],
    whyTitle: 'Why choose Softbel?',
  },
  servicos: {
    kicker: '// what we do',
    titleLine1: 'Digital solutions',
    titleLine2Before: 'from start to',
    titleAccent: 'finish',
    intro:
      'We cover the full lifecycle of your digital product — from architecture to production maintenance.',
    cards: [
      {
        title: 'Web systems',
        desc: 'Platforms, dashboards, ERPs, CRMs, and full portals. From MVP to launch with solid, scalable architecture.',
        techs: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
      },
      {
        title: 'Mobile apps',
        desc: 'Cross-platform iOS and Android apps with user-centered UX and native-grade performance.',
        techs: ['React Native', 'Flutter', 'Expo'],
      },
      {
        title: 'APIs & Back-end',
        desc: 'REST and GraphQL architectures, microservices, and integrations with legacy systems and third parties.',
        techs: ['Node.js', 'Python', 'AWS', 'Docker'],
      },
      {
        title: 'Maintenance & evolution',
        desc: 'We care for your software in production: bug fixes, refactoring, modernization, and new features.',
        techs: ['Audit', 'Refactoring', 'DevOps', 'CI/CD'],
      },
      {
        title: 'Security & performance',
        desc: 'Vulnerability analysis, query optimization, advanced caching, and infrastructure hardening.',
        techs: ['Pentest', 'Redis', 'CDN', 'Monitoring'],
      },
      {
        title: 'Technical consulting',
        desc: 'Architecture review, stack choices, code review, and mentoring for development teams.',
        techs: ['Architecture', 'Code Review', 'Squad', 'Tech Lead'],
      },
    ],
  },
  portfolio: {
    kicker: '// projects & experience',
    titleBefore: 'Work',
    titleAccent: 'delivered',
    intro: 'Projects from my professional journey — real systems shipped and in production.',
    legendPro: 'Professional project',
    legendOs: 'Open source project',
    legendConf: 'Confidential client',
    githubCta: 'See more on GitHub',
    githubAria: 'Open on GitHub',
  },
  fundador: {
    kicker: '// behind the scenes',
    titleBefore: 'The',
    titleAccent: 'founder',
    photoAlt: 'Mateus Belmonte dos Santos — Softbel founder',
    roleBadge: 'Software Developer',
    roleSubtitle: 'CEO & Founder · Softbel',
    skillsHeading: 'Stack & skills',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    bioParas: [
      'Software developer with 4+ years of experience in scalable web applications — the same technical foundation that guides Softbel delivery for clients.',
      'Hands-on with React, Next.js, Node.js, NestJS, and C#, REST and GraphQL integration, layered architecture, and cloud environments (Azure and Kubernetes).',
      'Experience in monitoring, facial validation, and enterprise systems, with CI/CD practices and agile methodologies (Scrum and Kanban).',
    ],
    skills: [
      'React, Next.js & React Native',
      'Node.js, NestJS & ASP.NET',
      'TypeScript',
      'C# & JavaScript',
      'PostgreSQL, MongoDB & SQL Server',
      'Docker, Azure DevOps & Kubernetes',
      'REST, GraphQL & CI/CD',
      'Clean Code & Design Patterns',
    ],
  },
  contato: {
    kicker: '// get in touch',
    titleBefore: "Let's build something",
    titleAccent: 'amazing',
    titleAfter: '?',
    intro:
      'Tell us about your project. We reply within 24 hours and schedule a no-obligation call.',
    labelEmail: 'Email',
    labelWhatsApp: 'WhatsApp',
    labelLocation: 'Location',
    locationValue: 'Salvador, Bahia — Brazil',
    availTitle: 'Available for new projects',
    availDesc: 'We are currently accepting new clients. Get in touch to reserve a slot.',
    sentTitle: 'Message sent!',
    sentDesc: 'Thank you for reaching out. We will get back to you within one business day.',
    labelName: 'Name *',
    phName: 'Your name',
    labelEmailField: 'Email *',
    phEmail: 'you@email.com',
    labelCompany: 'Company',
    phCompany: 'Company name',
    labelService: 'Service of interest',
    selectPlaceholder: 'Select...',
    labelMessage: 'Message *',
    phMessage: 'Tell us about your project...',
    submit: 'Send message',
    services: ['Web system', 'Mobile app', 'API / Back-end', 'Maintenance', 'Consulting', 'Other'],
  },
  footer: {
    rights: 'All rights reserved.',
    linkItems: [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#sobre' },
      { label: 'Services', href: '#servicos' },
      { label: 'Contact', href: '#contato' },
    ],
  },
  logoAlt: 'Softbel — logo',
} as const

export type Messages = typeof pt

export const MESSAGES: Record<Locale, Messages> = {
  pt: pt,
  en: en as unknown as Messages,
}

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale]
}
