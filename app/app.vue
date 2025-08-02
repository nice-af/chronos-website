<template>
  <Analytics />
  <a href="#main" class="skip-to-content">{{ t('global.skipToContent') }}</a>
  <Header />
  <main id="main">
    <NuxtPage />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from '~/components/Footer/Footer.vue';
import Header from '~/components/Header/Header.vue';
import { NuxtPage } from '#components';
import { useI18n, useRuntimeConfig, useSeoMeta } from '#imports';
import { Analytics } from '@vercel/analytics/nuxt';

const { t } = useI18n();
const config = useRuntimeConfig();

useSeoMeta({
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  ogImage: `${config.public.BASE_URL}/assets/images/og-image.jpg`,
});
</script>

<style lang="scss" src="./assets/styles/global.scss" />
