export type NavLabelKey =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'founder'
  | 'contact'

export const NAVBAR_ITEMS = [
  { href: '#hero', labelKey: 'home' as const },
  { href: '#sobre', labelKey: 'about' as const },
  { href: '#portfolio', labelKey: 'portfolio' as const },
  { href: '#servicos', labelKey: 'services' as const },
  { href: '#contato', labelKey: 'contact' as const },
] as const satisfies ReadonlyArray<{ href: string; labelKey: NavLabelKey }>
