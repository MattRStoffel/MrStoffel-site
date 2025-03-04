import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
  site: 'https://MattRStoffel.github.io',
  base: 'MrStoffel-site',
});
