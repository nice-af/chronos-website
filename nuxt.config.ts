import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxtjs/stylelint-module', 'nuxt-svgo'],
  fonts: {
    families: [
      {
        name: 'Mona Sans',
        provider: 'local',
        weights: ['330', '400', '500', '600', '700'],
        src: ['/assets/fonts/mona-sans.woff', '/assets/fonts/mona-sans.woff2'],
      },
    ],
  },
});
