<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Analytics />
    <SpeedInsights />
    <a href="#main" class="skip-to-content">{{ t('global.skipToContent') }}</a>
    <Header />
    <main id="main">
      <NuxtPage />
    </main>
    <Footer />
  </Html>
</template>

<script setup lang="ts">
import { Html, NuxtPage } from '#components';
import { useI18n, useLocaleHead, useRuntimeConfig, useSeoMeta } from '#imports';
import { useJsonld } from '#jsonld';
import { Analytics } from '@vercel/analytics/nuxt';
import Footer from '~/components/Footer/Footer.vue';
import Header from '~/components/Header/Header.vue';
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

const { t } = useI18n();
const config = useRuntimeConfig();
const head = useLocaleHead();

useSeoMeta({
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  ogImage: `${config.public.BASE_URL}/assets/images/og-image.jpg`,
});

/**
 * Add SoftwareApplication schema to the page
 */
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Chronos App',
  description: t('meta.description'),
  operatingSystem: 'macOS',
  applicationCategory: 'ProductivityApplication',
  image: `${config.public.BASE_URL}/assets/images/og-image.jpg`,
  offers: {
    '@type': 'Offer',
    price: '3.99',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: config.public.DOWNLOAD_MACOS_URL,
  },
});

/**
 * Add Organization schema to the page
 */
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nice A.F.',
  url: 'https://github.com/nice-af',
  logo: 'https://avatars.githubusercontent.com/u/88162758',
});
</script>

<style lang="scss" src="./assets/styles/global.scss" />
