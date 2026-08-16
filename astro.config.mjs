// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://poke-search.net', // ←この行が必須です
  integrations: [sitemap()]
});