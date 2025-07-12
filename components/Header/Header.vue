<template>
  <div class="wrapper">
    <div :class="header.container">
      <NuxtLink :class="header.logoLink" to="/">
        <img src="/assets/images/logo-with-text.svg" alt="Chronose logo" />
      </NuxtLink>
      <button
        :aria-label="t('global.toggleMobileMenu')"
        :class="[header.menuToggle, { [header.isOpen]: menuIsOpen }]"
        @click="toggleMenu">
        <span :class="[header.line, header.line1]"></span>
        <span :class="[header.line, header.line2]"></span>
        <span :class="[header.line, header.line3]"></span>
      </button>
      <nav :class="[header.navContainer, { [header.isOpen]: menuIsOpen }]">
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
        <div :class="header.navDot" class="dot is-bottom-left"></div>
        <div :class="header.navDot" class="dot is-bottom-right"></div>
      </nav>
      <div class="dot is-bottom-left"></div>
      <div class="dot is-bottom-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRuntimeConfig } from '#app';
import { NuxtLink } from '#components';
import { useI18n, useLocalePath } from '#imports';

const config = useRuntimeConfig();
const { t } = useI18n();
const localePath = useLocalePath();
const menuIsOpen = ref(false);

function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value;
}
</script>

<style module="header" lang="scss" src="./Header.scss" />
