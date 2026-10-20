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
    title: 'GS1 MyHub — Compra e Checkout',
    desc: 'Fluxo completo de compra e checkout do GS1 MyHub, plataforma B2B com 13 microsserviços. Integrei DocuSign, ERP Protheus e CRM para automatizar assinatura de contrato, cobrança, acompanhamento de pagamento e liberação de acesso.',
    titleEn: 'GS1 MyHub — purchase and checkout',
    descEn:
      'End-to-end purchase and checkout flow for GS1 MyHub, a B2B platform with 13 microservices. Integrated DocuSign, Protheus ERP, and CRM workflows to automate contract signing, billing, payment tracking, and access provisioning.',
    techs: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'DocuSign', 'Protheus', 'CRM'],
    context: 'EverOn',
    contextEn: 'EverOn',
    highlight: '~80% menos esforço do time comercial',
    highlightEn: '~80% less commercial team effort',
  },
  {
    type: 'professional',
    title: 'Hub EverOn — Carteira em Tempo Real',
    desc: 'Troquei o polling da carteira a cada 15 segundos por Server-Sent Events (SSE) e Redis no Hub EverOn, plataforma B2B com 10 serviços e 2 front-ends. O saldo atualiza sem recarregar a página. Desenvolvi serviços de back-end e integrei fluxos de pagamento e e-mail por um API Gateway.',
    titleEn: 'EverOn Hub — real-time wallet',
    descEn:
      'Replaced 15-second wallet polling with Server-Sent Events (SSE) and Redis in EverOn Hub, a B2B platform with 10 services and 2 front ends. Balance updates without page reloads. Built backend services and integrated payment and email workflows through an API Gateway.',
    techs: ['TypeScript', 'Node.js', 'NestJS', 'Redis', 'SSE', 'API Gateway'],
    context: 'EverOn',
    contextEn: 'EverOn',
    highlight: 'Saldo atualizado em até 1 segundo, sem recarregar',
    highlightEn: 'Balance updated within 1 second, no reload',
  },
  {
    type: 'professional',
    title: 'CNP — Cadastro Nacional de Produtos',
    desc: 'Modernização do CNP, plataforma legada com 29 microsserviços. Atualizei código e versões do Node.js, otimizei a mensageria RabbitMQ, refiz Dockerfiles e pipelines de CI/CD no Azure DevOps e reduzi o teto de réplicas de vários serviços no Kubernetes (AKS) de 8–10 para 5, validando as mudanças nos logs de produção.',
    titleEn: 'CNP — National Product Registry',
    descEn:
      'Modernization of CNP, a legacy platform with 29 microservices. Updated legacy code and Node.js versions, optimized RabbitMQ messaging, reworked Dockerfiles and Azure DevOps CI/CD pipelines, and cut the replica ceiling of several Kubernetes (AKS) services from 8–10 to 5, validating the changes through production logs.',
    techs: ['TypeScript', 'Node.js', 'Hapi', 'React', 'RabbitMQ', 'Azure DevOps', 'Kubernetes'],
    context: 'EverOn',
    contextEn: 'EverOn',
    highlight: 'Réplicas no AKS reduzidas de 8–10 para 5',
    highlightEn: 'AKS replicas cut from 8–10 to 5',
  },
  {
    type: 'professional',
    title: 'Biblioteca de Geração de Boletos',
    desc: 'Biblioteca reutilizável em TypeScript para gerar boletos bancários, substituindo uma dependência Java desatualizada. Como não havia alternativa em TypeScript, usei uma biblioteca PHP existente como referência e entreguei uma solução de fácil manutenção, adotada pelo time.',
    titleEn: 'Bank slip generation library',
    descEn:
      'Reusable TypeScript library for generating Brazilian bank slips (boletos), replacing an outdated Java dependency. With no suitable TypeScript alternative, I used an existing PHP library as a reference and delivered a maintainable solution adopted by the team.',
    techs: ['TypeScript', 'Node.js'],
    context: 'SGN Sistemas',
    contextEn: 'SGN Sistemas',
    highlight: 'Substituiu dependência Java desatualizada',
    highlightEn: 'Replaced an outdated Java dependency',
  },
  {
    type: 'professional',
    title: 'Sistema de Monitoramento de Câmeras',
    desc: 'Aplicação de monitoramento em tempo real de mais de 300 centros de inspeção veicular, com acesso às gravações, entregue em duas semanas em dupla. Eliminou a dependência de um provedor externo e foi adotada por todo o suporte.',
    titleEn: 'Vehicle inspection camera monitoring system',
    descEn:
      'Real-time monitoring application for 300+ vehicle-inspection stations, with access to recorded footage, delivered in two weeks with another developer. Removed the dependency on an external provider and was adopted by the whole support department.',
    techs: ['React', 'REST API'],
    context: 'Renova Soluções em Tecnologia',
    contextEn: 'Renova Soluções em Tecnologia',
    highlight: '300+ centros monitorados, entregue em 2 semanas',
    highlightEn: '300+ stations monitored, delivered in 2 weeks',
  },
  {
    type: 'professional',
    title: 'Redução de Chamados e Modernização de Módulos',
    desc: 'Redução dos chamados semanais de suporte de cerca de 3 a 5 por desenvolvedor para cerca de 1, abrindo espaço para projetos de licitação. Modernização de módulos legados e contribuição para a documentação ISO 27001.',
    titleEn: 'Support ticket reduction and module modernization',
    descEn:
      'Cut weekly support tickets from about 3 to 5 per developer down to about 1, opening room for bidding projects. Modernized legacy modules and contributed to the ISO 27001 documentation.',
    techs: ['C#', 'ASP.NET Razor', 'JavaScript', 'jQuery', 'Bootstrap'],
    context: 'Renova Soluções em Tecnologia',
    contextEn: 'Renova Soluções em Tecnologia',
    highlight: 'De 3–5 para ~1 chamado por dev na semana',
    highlightEn: 'From 3–5 to ~1 ticket per dev per week',
  },
]
