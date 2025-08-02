<template>
  <div class="wrapper">
    <HeroShineTop />
    <AppSettingsProvider>
      <Features />
      <Configurator />
    </AppSettingsProvider>
    <FeatureCarousel />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import AppSettingsProvider from '~/components/AppSettingsProvider/AppSettingsProvider.vue';
import Configurator from '~/components/Configurator/Configurator.vue';
import CtaSection from '~/components/CtaSection/CtaSection.vue';
import FeatureCarousel from '~/components/FeatureCarousel/FeatureCarousel.vue';
import Features from '~/components/Features/Features.vue';
import HeroShineTop from '~/components/HeroShineTop/HeroShineTop.vue';
import { useJsonld } from '#jsonld';
import { useI18n, useRuntimeConfig } from '#imports';

const { t } = useI18n();
const config = useRuntimeConfig();

/**
 * Add WebPage schema to the page
 */
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: t('meta.title'),
  description: t('meta.description'),
  url: config.public.BASE_URL,
});

/**
 * Update BreadcrumbList schema for the home page
 */
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': '/',
        name: t('global.home'),
      },
    },
  ],
});
</script>
