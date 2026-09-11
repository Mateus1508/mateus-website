import type { Locale } from '../context/PreferencesContext'

export interface Project {
  type: 'github' | 'professional'
  title: string
  desc: string
  titleEn: string
  descEn: string
  techs: string[]
  link?: string
  context?: string
  contextEn?: string
  highlight?: string
  highlightEn?: string
}

export function projectText(p: Project, locale: Locale) {
  if (locale === 'en') {
    return {
      title: p.titleEn,
      desc: p.descEn,
      context: p.contextEn ?? p.context,
      highlight: p.highlightEn ?? p.highlight,
    }
  }
  return {
    title: p.title,
    desc: p.desc,
    context: p.context,
    highlight: p.highlight,
  }
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    type: 'professional',
    title: 'Everon Hub — Dados e Consultas Cadastrais',
    desc: 'Plataforma SaaS para consulta, validação e enriquecimento de dados de pessoas físicas e jurídicas, via portal web ou API. Microsserviços com gateway, billing por consumo (pré e pós-pago), validações de e-mail e WhatsApp e painéis separados para clientes e operação interna.',
    titleEn: 'Everon Hub — registry data and queries',
    descEn:
      'SaaS platform for querying, validating, and enriching individual and business registry data via web portal or API. Microservices with a central gateway, usage-based billing (pre- and post-paid), email and WhatsApp validation, and separate client and internal admin portals.',
    techs: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Prisma'],
    context: 'Everon Data',
    contextEn: 'Everon Data',
    highlight: 'Billing transacional com saldo em tempo real',
    highlightEn: 'Transactional billing with real-time balance',
  },
  {
    type: 'professional',
    title: 'GS1 MyHub — Portal de Produtos e Serviços',
    desc: 'Portal B2B em que empresas associadas descobrem, contratam e gerenciam soluções GS1. Ecossistema com front em Next.js, microsserviços NestJS, API gateway, jobs financeiros e jornada de contratação com assinatura eletrônica e sincronização financeira.',
    titleEn: 'GS1 MyHub — products and services portal',
    descEn:
      'B2B portal where member companies discover, contract, and manage GS1 solutions. Next.js front end, NestJS microservices, API gateway, financial jobs, and a contracting journey with e-signature and financial synchronization.',
    techs: ['Next.js', 'NestJS', 'TypeScript', 'MongoDB', 'Kubernetes', 'Azure'],
    context: 'Everon Data',
    contextEn: 'Everon Data',
    highlight: 'Contratação digital ponta a ponta',
    highlightEn: 'End-to-end digital contracting',
  },
  {
    type: 'professional',
    title: 'Sistema de Monitoramento de Câmeras',
    desc: 'Plataforma de monitoramento em tempo real para ECVs, substituindo o monitoramento terceirizado e reduzindo custos operacionais. Liderança técnica de front-end nos projetos da empresa, com redução de 85% nos chamados de suporte.',
    titleEn: 'Vehicle inspection camera monitoring system',
    descEn:
      'Real-time monitoring platform for vehicle inspection centers, replacing outsourced monitoring and cutting operational costs. Front-end technical leadership across company projects, with an 85% drop in support tickets.',
    techs: ['React', 'Node.js', 'TypeScript', 'WebSocket'],
    context: 'Renova Soluções em Tecnologia',
    contextEn: 'Renova Soluções em Tecnologia',
    highlight: '−85% nos chamados de suporte',
    highlightEn: '85% fewer support tickets',
  },
  {
    type: 'professional',
    title: 'Sistema de Validação Facial',
    desc: 'Aplicação para órgão público com autenticação biométrica, controle de níveis de usuário e geração de relatórios em PDF. Inclui sistema biométrico desktop em C# e WPF.',
    titleEn: 'Facial validation system',
    descEn:
      'Public sector application with biometric authentication, user role management, and PDF report generation. Includes a desktop biometric system in C# and WPF.',
    techs: ['React', 'Node.js', 'TypeScript', 'C#', 'WPF'],
    context: 'Renova Soluções em Tecnologia',
    contextEn: 'Renova Soluções em Tecnologia',
    highlight: 'Autenticação facial para órgão público',
    highlightEn: 'Facial auth for public sector',
  },
  {
    type: 'professional',
    title: 'Bipix',
    desc: 'Aplicativo mobile construído do zero ao MVP, com experiências multiplayer e comunicação em tempo real (chamada de vídeo). Back-end em Node.js, infraestrutura no Firebase, com melhorias de usabilidade e performance.',
    titleEn: 'Bipix',
    descEn:
      'Mobile app built from zero to MVP, with multiplayer experiences and real-time communication (video calls). Node.js back end, Firebase infrastructure, and improvements in usability and performance.',
    techs: ['Flutter', 'Node.js', 'Firebase'],
    context: 'Freelancer',
    contextEn: 'Freelance',
    highlight: 'Do zero ao MVP, com vídeo em tempo real',
    highlightEn: 'From zero to MVP, with live video',
  },
  {
    type: 'professional',
    title: 'Biblioteca de Geração de Boletos',
    desc: 'Reestruturação completa do processo de emissão de boletos bancários, com uma biblioteca interna reutilizável em Node.js e TypeScript — base dos serviços de pagamento do sistema.',
    titleEn: 'Bank slip generation library',
    descEn:
      'Complete restructuring of bank slip issuance with a reusable internal Node.js and TypeScript library — the foundation of the system\'s payment services.',
    techs: ['Node.js', 'TypeScript', 'Boleto.js', 'REST API'],
    context: 'SGN Sistemas',
    contextEn: 'SGN Sistemas',
    highlight: 'Processo de boletos totalmente reescrito',
    highlightEn: 'Slip process fully rewritten',
  },
  {
    type: 'professional',
    title: 'Sistema de Gerenciamento de Projetos',
    desc: 'Sistema corporativo de gestão de projetos e tarefas desenvolvido do zero: interface responsiva em HTML, CSS, Bootstrap e jQuery, com back-end em PHP integrado ao banco Oracle.',
    titleEn: 'Project management system',
    descEn:
      'Corporate project and task management system built from scratch: responsive interface in HTML, CSS, Bootstrap, and jQuery, with a PHP back end integrated with Oracle.',
    techs: ['HTML', 'Bootstrap', 'jQuery', 'PHP', 'Oracle'],
    context: 'SIGMA Gestão e Consultoria',
    contextEn: 'SIGMA Gestão e Consultoria',
    highlight: 'Sistema full stack do zero',
    highlightEn: 'Full-stack system from scratch',
  },
]
