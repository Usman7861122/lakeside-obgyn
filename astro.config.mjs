// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Live domain (client confirmed 2026-11-18). Used for canonical links, Open Graph URLs, structured data and the sitemap.
const SITE = 'https://www.lakesideobgyn.org';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  redirects: {
    '/services/laparoscopic-surgery': '/services/minimally-invasive-surgery/',
    '/contactus': '/contact/',
    '/parking': '/locations/#visit',
    '/about': '/provider/monica-hannon-md-facog/',
    '/services/perimenopausemenopause-management': '/services/perimenopause-menopause-management/',
  },
  // Put the CSS inside each page so it does not block the first paint (one request less on a phone)
  build: { inlineStylesheets: 'always' },
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/parking/') && !page.endsWith('/about/'), lastmod: new Date() })],
  vite: {
    plugins: [tailwindcss()],
  },
});
