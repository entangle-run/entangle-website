import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		author: z.string(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	blog,
};
