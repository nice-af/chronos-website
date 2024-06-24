import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxtjs/stylelint-module', 'nuxt-svgo'],
  fonts: {
    families: [
      {
        name: 'Mona Sans',
        provider: 'local',
        weights: ['300', '400', '500', '600'],
        src: '/fonts/mona-sans',
      },
    ],
  },
});
