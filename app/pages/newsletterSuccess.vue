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
import { NuxtLink, Icon } from '#components';
import { defineI18nRoute, useI18n } from '#imports';

const { t } = useI18n();

defineI18nRoute({
  paths: {
    en: '/newsletter-success',
    de: '/newsletter-success',
  },
});
</script>

<style lang="scss" src="../assets/styles/global.scss" />
<style lang="scss" src="./newsletterSuccess.scss" module="newsletterSuccess" />
