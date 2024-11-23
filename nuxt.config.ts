import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxtjs/stylelint-module', '@nuxt/fonts', 'nuxt-svgo'],
  imports: { autoImport: false },
  routeRules: { '/**': { static: true } },
  typescript: { typeCheck: true },

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

  compatibilityDate: '2024-11-23',
});
