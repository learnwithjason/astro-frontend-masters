import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';
import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://astro-frontend-masters.netlify.app',
  experimental: {
    assets: true
  },
  integrations: [solidJs(), react(), mdx()],
  adapter: netlify()
});