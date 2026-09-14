import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Planning your visit', 'Haircuts & styling', 'Beards & shaving']),
    summary: z.string(),
    service: z.enum(['haircut', 'beard', 'shave', 'scissor']),
    related: z.array(z.string()).min(2).max(4),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).min(1),
  }),
});

export const collections = { guides };
