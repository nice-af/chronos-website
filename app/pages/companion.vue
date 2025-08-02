<template>
  <div class="wrapper">
    <HeroCompanion />
    <CompanionInfo />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
import { useJsonld } from '#jsonld';
import CompanionInfo from '~/components/CompanionInfo/CompanionInfo.vue';
import CtaSection from '~/components/CtaSection/CtaSection.vue';
import HeroCompanion from '~/components/HeroCompanion/HeroCompanion.vue';

const { t } = useI18n();

/**
 * Add breadcrumb schema to the page
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
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@id': '/companion',
        name: t('global.companion'),
      },
    },
  ],
});
</script>
