// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: '/Hamza_cv/', // ✅ THIS IS THE FIX
  integrations: [tailwind()],
});
