// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aredrepair.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = item.url.replace('https://aredrepair.com', '');
        const priorities = {
          '/': 1.0,
          '/services/': 0.9,
          '/portfolio/': 0.9,
          '/contact/': 0.8,
          '/about/': 0.7,
          '/blog/': 0.6,
          '/privacy-policy/': 0.2,
          '/terms-of-use/': 0.2,
        };
        if (priorities[path] !== undefined) {
          item.priority = priorities[path];
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
});