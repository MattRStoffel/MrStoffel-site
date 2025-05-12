import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
  site: 'https://mrstoffel.com',
  //base: 'MrStoffel-site',
});
