import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-frontend-masters.netrify.app',
  output: 'hybrid',
  experimental: {
    hybridOutput: true
  },
  integrations: [solid({
    include: ['**/solid/*']
  }), react({
    include: ['**/react/*']
  })],
  adapter: netlify()
});