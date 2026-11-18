// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Live domain (client confirmed 2026-11-18). Used for canonical links, Open Graph URLs, structured data and the sitemap.
const SITE = 'https://www.lakesideobgyn.org';

export default defineConfig({
  site: SITE,
  redirects: {
    '/services/laparoscopic-surgery': '/services/minimally-invasive-surgery',
    '/contactus': '/contact',
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
