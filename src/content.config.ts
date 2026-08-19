import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({
		base: './src/content/projects',
		pattern: '**/*.{md,mdx}',
	}),
	schema: z.object({
		title: z.string().min(1),
		summary: z.string().min(1),
		year: z.number().int().min(2000).max(2100),
		role: z.string().min(1),
		tags: z.array(z.string().min(1)).min(1),
		featured: z.boolean(),
		order: z.number().int().nonnegative(),
		theme: z.enum(['orange', 'blue', 'purple', 'yellow']),
		draft: z.boolean(),
		links: z
			.object({
				live: z.url().optional(),
				source: z.url().optional(),
			})
			.refine((links) => links.live || links.source, {
				message: 'links 至少需要提供 live 或 source 其中一项',
			})
			.optional(),
	}),
});

const blog = defineCollection({
	loader: glob({
		base: './src/content/blog',
		pattern: '**/*.{md,mdx}',
	}),
	schema: z.object({
		title: z.string().min(1),
		description: z.string().min(1),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		tags: z.array(z.string().min(1)).min(1),
		featured: z.boolean(),
		draft: z.boolean(),
		lang: z.enum(['cn', 'en', 'zh']).default('cn'),
		hasTranslation: z.boolean().default(false),
		translations: z.array(z.string()).optional(),
	}),
});

export const collections = { projects, blog };
