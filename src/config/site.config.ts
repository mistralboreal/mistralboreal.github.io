import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  socialLinks: string[];
  phone?: string;
  address?: { street: string; city: string; state: string; zip: string; country: string };
  twitter?: { site: string; creator: string };
  verification?: { google?: string; bing?: string };
  branding: {
    logo: { alt: string };
    favicon: { png: string };
    colors: { themeColor: string; backgroundColor: string };
  };
}

const siteConfig: SiteConfig = {
  name: 'Mistral Boréal',
  description: 'Communauté canadienne indépendante et bilingue pour apprendre et partager les usages de Mistral AI.',
  url: SITE_URL || 'https://mistralboreal.github.io',
  ogImage: '/branding/mistral-boreal-logo.png',
  author: 'Communauté Mistral Boréal',
  email: '',
  socialLinks: ['https://github.com/mistralboreal'],
  verification: { google: GOOGLE_SITE_VERIFICATION, bing: BING_SITE_VERIFICATION },
  branding: {
    logo: { alt: 'Mistral Boréal' },
    favicon: { png: '/branding/mistral-boreal-logo.png' },
    colors: { themeColor: '#ed5929', backgroundColor: '#ffffff' },
  },
};
export default siteConfig;
