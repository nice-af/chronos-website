<template>
  <div class="wrapper">
    <div :class="header.container">
      <NuxtLink :class="header.logoLink" to="/">
        <img src="/assets/images/logo-with-text.svg" alt="Chronose logo" />
      </NuxtLink>
      <nav>
        <ul :class="header.navList">
          <li>
            <NuxtLink to="#features">{{ t('global.features') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#download">{{ t('global.download') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="config.public.COMPANION_CHROME_URL">{{ t('global.companion') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('faq')">{{ t('global.faq') }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="dot is-bottom-left"></div>
      <div class="dot is-bottom-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#app';
import { NuxtLink } from '#components';
import { useI18n, useLocalePath } from '#imports';

const config = useRuntimeConfig();
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style module="header" lang="scss" src="./Header.scss" />
