import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: 'docs',
  base: '/Hamza_cv/',
  vite: {
    build: {
      cssCodeSplit: true, // This forces CSS files to be separate
    },
  },
});
