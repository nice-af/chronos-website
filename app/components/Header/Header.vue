<template>
  <div class="wrapper" :class="header.wrapper">
    <div :class="header.container">
      <NuxtLink :class="header.logoLink" to="/">
        <img src="/assets/images/logo-with-text.svg" alt="Chronose logo" />
      </NuxtLink>
      <button
        :aria-label="t('global.toggleMobileMenu')"
        :class="[header.menuToggle, { [header.isOpen!]: menuIsOpen }]"
        @click="toggleMenu">
        <span :class="[header.line, header.line1]"></span>
        <span :class="[header.line, header.line2]"></span>
        <span :class="[header.line, header.line3]"></span>
      </button>
      <nav
        ref="nav"
        :class="[header.navContainer, { [header.isOpen!]: menuIsOpen }]"
        :style="mobileMenuForcedHeight !== null ? { height: `${mobileMenuForcedHeight}px` } : undefined">
        <ul :class="header.navList">
          <li>
            <NuxtLink to="/#features">{{ t('global.features') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#download">{{ t('global.download') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('companion')">{{ t('global.companion') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('faq')">{{ t('global.faq') }}</NuxtLink>
          </li>
        </ul>
        <div :class="[header.navDot, header.isBottomLeft]" class="dot is-bottom-left"></div>
        <div :class="[header.navDot, header.isBottomRight]" class="dot is-bottom-right"></div>
      </nav>
      <div class="dot is-bottom-left"></div>
      <div class="dot is-bottom-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import { useI18n, useLocalePath } from '#imports';
import { nextTick, ref, useTemplateRef } from 'vue';

const { t } = useI18n();
const localePath = useLocalePath();
const menuIsOpen = ref(false);
const $nav = useTemplateRef('nav');
const mobileMenuForcedHeight = ref<number | null>(null);

async function toggleMenu() {
  if (!$nav.value) {
    return;
  }
  mobileMenuForcedHeight.value = $nav.value.scrollHeight;
  await nextTick(() => {
    // $nav.value?.addEventListener('transitionend', () => (mobileMenuForcedHeight.value = null), { once: true });
    // We set the target height after one tick to ensure the transition is applied correctly
    mobileMenuForcedHeight.value = menuIsOpen.value ? 0 : $nav.value!.scrollHeight;
    menuIsOpen.value = !menuIsOpen.value;
  });
}
</script>

<style module="header" lang="scss" src="./Header.scss" />
