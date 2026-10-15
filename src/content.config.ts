import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const okf = defineCollection({
  loader: glob({ pattern: '{fr-CA,en-CA}/**/*.{md,mdx}', base: './knowledge/okf' }),
  schema: z.object({
    type: z.enum(['page', 'article', 'event', 'training']),
    id: z.string(), title: z.string(), description: z.string(),
    slug: z.string(), language: z.enum(['fr-CA', 'en-CA']),
    source_of_truth: z.boolean(), translation_key: z.string(),
    translation_of: z.string().optional(),
    translation_status: z.enum(['source', 'draft', 'reviewed', 'validated']),
    updated: z.string(),
    nav_label: z.string().optional(), nav_order: z.number().optional(),
    hero_eyebrow: z.string().optional(), hero_title: z.string().optional(),
    hero_lead: z.string().optional(),
    primary_label: z.string().optional(), primary_url: z.string().optional(),
    secondary_label: z.string().optional(), secondary_url: z.string().optional(),
    author: z.string().optional(), published_at: z.string().optional(),
    event_date: z.string().optional(),
    event_status: z.enum(['planning', 'confirmed', 'cancelled']).optional(),
    event_format: z.enum(['online', 'in_person', 'series']).optional(),
    city: z.enum(['Montréal', 'Québec', 'Online']).optional(),
    registration_url: z.string().url().optional(),
    source_url: z.string().url().optional(),
    tags: z.array(z.string()).default([]), draft: z.boolean().default(false),
  }),
});
// Keep original Velocity collections available to its reusable components.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string().max(100), description: z.string().max(200),
    publishedAt: z.coerce.date(), updatedAt: z.coerce.date().optional(),
    author: z.string().default('Team'), image: image().optional(),
    imageAlt: z.string().optional(), tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), featured: z.boolean().default(false),
    locale: z.enum(['en', 'es', 'fr']).default('en'),
  }),
});
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(), description: z.string(),
    updatedAt: z.coerce.date().optional(),
    locale: z.enum(['en', 'es', 'fr']).default('en'),
  }),
});
const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) => z.object({
    name: z.string(), bio: z.string(), avatar: image().optional(),
    social: z.object({
      twitter: z.string().optional(), github: z.string().optional(),
      linkedin: z.string().optional(),
    }).optional(),
  }),
});
const faqs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(), answer: z.string(), category: z.string().optional(),
    order: z.number().default(0), locale: z.enum(['en', 'es', 'fr']).default('en'),
  }),
});
export const collections = { okf, blog, pages, authors, faqs };
