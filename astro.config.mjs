// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://algopop.app',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  // Keep links to pages from the old site working.
  redirects: {
    '/features': '/services',
    '/careers': '/about',
    '/login': '/contact',
    '/download': '/contact',
  },
});
