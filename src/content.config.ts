import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: async () => {
    const posts = await import.meta.glob("./content/blog/**/*.md");
    return Object.keys(posts).map((id) => ({ id }));
  }
  schema: z.object({
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
