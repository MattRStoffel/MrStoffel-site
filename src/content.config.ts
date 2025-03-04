import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: { pattern: "**/*.md", base: "./content/blog" },
  schema: z.object({
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
