import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxt/fonts', 'nuxt-svgo', '@nuxtjs/i18n', '@nuxt/icon', 'nuxt-jsonld', '@nuxtjs/sitemap'],
  imports: { autoImport: false },

  runtimeConfig: {
    public: {
      COMPANION_CHROME_URL: 'https://chromewebstore.google.com/detail/ffabeiojbdhkmllfadkidohlkjochcan',
      COMPANION_FIREFOX_URL: '',
      COMPANION_EDGE_URL: '',
      DOWNLOAD_MACOS_URL: 'https://github.com/nice-af/chronos-app',
      SOURCE_CODE_URL: 'https://github.com/nice-af/chronos-app',
      SUPPORT_EMAIL: 'mailto:support@chronos-for-jira.com',
      SUPPORT_URL: 'mailto:support@chronos-for-jira.com',
      BASE_URL: process.env.BASE_URL ?? '',
    },
    BREVO_API_KEY: process.env.BREVO_API_KEY,
    BREVO_LIST_ID: process.env.BREVO_LIST_ID,
    BREVO_REDIRECTION_URL: process.env.BREVO_REDIRECTION_URL,
    JIRA_CLIENT_ID: process.env.JIRA_CLIENT_ID,
    JIRA_SECRET: process.env.JIRA_SECRET,
    APP_OAUTH_REDIRECT_URI: process.env.APP_OAUTH_REDIRECT_URI,
  },

  typescript: {
    typeCheck: true,
    tsConfig: {
      include: ['../types/vue-html.d.ts'],
    },
  },

  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#181819' },
        { name: 'keywords', content: 'chronos, jira, time tracking, time management, productivity' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/favicons/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicons/favicon.svg', sizes: '32x32' },
        { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/assets/favicons/site.webmanifest' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  routeRules: {
    '/**': process.env.ENV === 'development' ? { cache: false } : { swr: 600 },
    '/api/**': { cache: false },
  },

  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    vueI18n: '../app/i18n.config.ts',
    strategy: 'prefix',
  },

  fonts: {
    families: [
      {
        name: 'Mona Sans',
        provider: 'local',
        weights: ['330', '400', '500', '600', '700'],
        display: 'block',
        src: ['/assets/fonts/mona-sans.woff', '/assets/fonts/mona-sans.woff2'],
      },
    ],
  },

  compatibilityDate: '2025-07-14',
});
