import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import wikiLinkPlugin from 'remark-wiki-link';
import { visit } from 'unist-util-visit';

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

const IMAGE_EXTENSIONS = /\.(png|jpg|jpeg|gif|webp|svg|avif)$/i;

function remarkObsidianImages() {
  return (tree: any) => {
    visit(tree, 'paragraph', (node: any, index: any, parent: any) => {

      // Case 1: entire paragraph is "![[image.png]]" as plain text
      if (node.children.length === 1 && node.children[0].type === 'text') {
        const match = node.children[0].value.match(/^!\[\[([^\]]+)\]\]$/);
        if (match && IMAGE_EXTENSIONS.test(match[1])) {
          parent.children.splice(index, 1, {
            type: 'image',
            url: `./_images/${match[1]}`,
            alt: match[1],
          });
          return;
        }
      }

      // Case 2: "!" text node + wikiLink node
      if (node.children.length === 2) {
        const [first, second] = node.children;
        if (
          first.type === 'text' &&
          first.value === '!' &&
          second.type === 'wikiLink' &&
          IMAGE_EXTENSIONS.test(second.value)
        ) {
          parent.children.splice(index, 1, {
            type: 'image',
            url: `./_images/${second.value}`,
            alt: second.value,
          });
        }
      }
    });
  };
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
      remarkObsidianImages,
    ],
  },
});
