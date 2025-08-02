<template>
  <div class="wrapper">
    <div :class="newsletterSuccess.container">
      <Icon name="ph:check-light" size="64" :class="newsletterSuccess.icon" />
      <h1 :class="newsletterSuccess.headline">
        {{ t('newsletterSuccess.headline') }}
      </h1>
      <p :class="[newsletterSuccess.description]">{{ t('newsletterSuccess.description') }}</p>
      <NuxtLink to="/" :class="newsletterSuccess.link">{{ t('newsletterSuccess.linkText') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon, NuxtLink } from '#components';
import { defineI18nRoute, useI18n } from '#imports';
import { useJsonld } from '#jsonld';

const { t } = useI18n();

defineI18nRoute({
  paths: {
    en: '/newsletter-success',
    de: '/newsletter-success',
  },
});

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
        '@id': '/newsletter-success',
        name: t('global.newsletterSuccess'),
      },
    },
  ],
});
</script>

<style lang="scss" src="../assets/styles/global.scss" />
<style lang="scss" src="./newsletterSuccess.scss" module="newsletterSuccess" />
