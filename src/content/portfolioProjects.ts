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
  // Professional projects (no client name)
  {
    type: 'professional',
    title: 'Sistema de Monitoramento de Câmeras',
    desc: 'Plataforma de monitoramento em tempo real para ECVs, substituindo o monitoramento terceirizado e reduzindo custos operacionais significativamente.',
    titleEn: 'Vehicle inspection camera monitoring system',
    descEn:
      'Real-time monitoring platform for vehicle inspection centers, replacing outsourced monitoring and significantly reducing operational costs.',
    techs: ['React', 'Node.js', 'TypeScript', 'WebSocket'],
    context: 'Renova Soluções em Tecnologia',
    contextEn: 'Renova Soluções em Tecnologia',
    highlight: 'Eliminou custo com monitoramento terceirizado',
    highlightEn: 'Removed outsourced monitoring costs',
  },
  {
    type: 'professional',
    title: 'Sistema de Validação Facial',
    desc: 'Aplicação para órgão público com autenticação biométrica, controle de níveis de usuário e geração de relatórios em PDF.',
    titleEn: 'Facial validation system',
    descEn:
      'Public sector application with biometric authentication, user role management, and PDF report generation.',
    techs: ['React', 'Node.js', 'TypeScript', 'PDF Generation'],
    context: 'Renova Soluções em Tecnologia',
    contextEn: 'Renova Soluções em Tecnologia',
    highlight: 'Autenticação facial para órgão público',
    highlightEn: 'Facial auth for public sector',
  },
  {
    type: 'professional',
    title: 'Bipix',
    desc: 'Aplicativo mobile construído do zero ao MVP com foco em experiências multiplayer e comunicação em tempo real (chamada de vídeo), com back-end em Node.js e infraestrutura no Firebase.',
    titleEn: 'Bipix',
    descEn:
      'Mobile app built from zero to MVP focused on multiplayer experiences and real-time communication (video calls), with Node.js back end and Firebase infrastructure.',
    techs: ['Flutter', 'Node.js', 'Firebase'],
    context: 'Freelancer',
    contextEn: 'Freelance',
    highlight: 'Do zero ao MVP',
    highlightEn: 'From zero to MVP',
  },
  {
    type: 'professional',
    title: 'Revitalização de Sistema — Multinacional',
    desc: 'Revitalização e modernização de um sistema com código e bibliotecas desatualizados, atualizando dependências, ajustando compatibilidades e melhorando a base para evolução contínua.',
    titleEn: 'System revitalization — multinational',
    descEn:
      'Revitalization and modernization of a system with outdated code and libraries: dependency upgrades, compatibility fixes, and a stronger foundation for continuous evolution.',
    techs: ['Node.js', 'Azure', 'Kubernetes', 'CI/CD', 'MongoDB'],
    context: 'Everon Data',
    contextEn: 'Everon Data',
    highlight: 'Base modernizada para evoluir com segurança',
    highlightEn: 'Modernized foundation for safe evolution',
  },
  {
    type: 'professional',
    title: 'Biblioteca de Geração de Boletos',
    desc: 'Reestruturação completa do processo de emissão de boletos bancários, criando uma biblioteca interna em Node.js reutilizável.',
    titleEn: 'Bank slip generation library',
    descEn:
      'Complete restructuring of bank slip issuance with a reusable internal Node.js library.',
    techs: ['Node.js', 'TypeScript', 'Boleto.js', 'REST API'],
    context: 'SGN Sistemas',
    contextEn: 'SGN Sistemas',
    highlight: 'Processo de boletos totalmente reescrito',
    highlightEn: 'Slip process fully rewritten',
  },
  {
    type: 'professional',
    title: 'Sistema de Gerenciamento de Projetos',
    desc: 'Plataforma web para gestão de projetos e tarefas com front-end responsivo e back-end integrado ao banco de dados Oracle.',
    titleEn: 'Project management system',
    descEn:
      'Web platform for projects and tasks with a responsive front end and PHP back end integrated with Oracle.',
    techs: ['HTML', 'Bootstrap', 'jQuery', 'PHP', 'Oracle'],
    context: 'SIGMA Gestão e Consultoria',
    contextEn: 'SIGMA Gestão e Consultoria',
    highlight: 'Sistema full stack do zero',
    highlightEn: 'Full-stack system from scratch',
  },
]

