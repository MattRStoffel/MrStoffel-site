import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import wikiLinkPlugin from 'remark-wiki-link';

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default defineConfig({
  integrations: [icon()],
  site: 'https://mrstoffel.com',
  //base: 'MrStoffel-site',
  markdown: {
    remarkPlugins: [
      [wikiLinkPlugin, {
        hrefTemplate: (permalink: string) => `/blog/${permalink}`,
        pageResolver: (name: string) => [toSlug(name)],
      }],
    ],
  },
});
