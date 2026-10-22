import { defineConfig } from 'astro/config';

// /about/ , /youth/events/ ... (folder style URLs, no .html)
export default defineConfig({
  site: 'https://vinolanmartind.github.io',
  base: '/olph',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
