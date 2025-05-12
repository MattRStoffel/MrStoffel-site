import rss, { type RSSFeedItem } from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('blog');

  const items: Array<RSSFeedItem> = [];
  for (const post of posts) {
    const { title, date, description } = post.data;

    items.push({
      title: title,
      pubDate: new Date(date),
      description: description,
      link: `/blog/${post.slug}`,
    });
  }

  return rss({
    title: "Matt Stoffel's Blog",
    description: "Matt Stoffel's blog",
    site: context.site || 'https://mrstoffel.com',
    items: items,
  });
};
