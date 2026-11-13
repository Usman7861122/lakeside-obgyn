// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: replace with the real domain once the client confirms it.
const SITE = 'https://example.com';

export default defineConfig({
  site: SITE,
  redirects: {
    '/services/laparoscopic-surgery': '/services/minimally-invasive-surgery',
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
