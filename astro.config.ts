import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
  site: 'https://MattRStoffel.com',
  //base: 'MrStoffel-site',
});
