import { defineConfig } from 'astro/config';

// /about/ , /youth/events/ ... (folder style URLs, no .html)
export default defineConfig({
  trailingSlash: 'always',
  build: { format: 'directory' },
});
