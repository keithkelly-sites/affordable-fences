import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://affordable-fences.keithkelly.dev',
  output: 'static',
  integrations: [sitemap()],
  fonts: [
    {
      name: 'Big Shoulders',
      cssVariable: '--font-display',
      provider: fontProviders.google(),
      weights: [600, 700, 800],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Figtree',
      cssVariable: '--font-body',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
