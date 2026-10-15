// Compatibility configuration for unused stock Velocity components.
// The production Mistral Boréal navigation is generated from knowledge/okf
// by src/lib/okf.ts, in the visitor's selected Canadian language.
export interface NavItem { label: string; href: string; order: number }
export const navItems: NavItem[] = [
  { label: 'Communauté', href: '/communaute/', order: 1 },
  { label: 'Rencontres', href: '/rencontres/', order: 2 },
  { label: 'Articles', href: '/articles/', order: 3 },
  { label: 'Formation', href: '/formation/', order: 4 },
];
export function getNavItems(): NavItem[] { return [...navItems].sort((a,b)=>a.order-b.order); }
