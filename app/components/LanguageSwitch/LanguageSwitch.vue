<template>
  <div :class="languageSwitch.container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <button :class="languageSwitch.languageEntry" @click="isOpen = !isOpen">
      <img :class="languageSwitch.flag" :src="`/assets/images/flag-${locale}.svg`" alt="" role="presentation" />
      <span :class="languageSwitch.label"> {{ locale === 'de' ? t('global.german') : t('global.english') }}</span>
      <svg
        :class="[languageSwitch.triangle, { [languageSwitch.isOpen!]: isOpen }]"
        width="10"
        height="8"
        fill="currentColor">
        <path d="M7.865 1.5h-5.73a1 1 0 0 0-.768 1.64l2.865 3.438a1 1 0 0 0 1.536 0L8.633 3.14a1 1 0 0 0-.768-1.64z" />
      </svg>
    </button>
    <div :class="languageSwitch.dropdown">
      <NuxtLink
        :class="[languageSwitch.languageEntry, languageSwitch.otherOption, { [languageSwitch.isVisible!]: isOpen }]"
        :to="locale === 'de' ? switchLocalePath('en') : switchLocalePath('de')">
        <img
          :class="languageSwitch.flag"
          :src="`/assets/images/flag-${locale === 'de' ? 'en' : 'de'}.svg`"
          alt=""
          role="presentation" />
        <span :class="languageSwitch.label"> {{ locale === 'de' ? t('global.english') : t('global.german') }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import { useI18n, useSwitchLocalePath } from '#imports';
import { ref } from 'vue';

const isOpen = ref(false);

const switchLocalePath = useSwitchLocalePath();
const { t, locale } = useI18n();
let inactiveTimeout: ReturnType<typeof setTimeout> | null = null;

function handleMouseEnter() {
  if (inactiveTimeout) {
    clearTimeout(inactiveTimeout);
  }
}

/**
 * Automatically close the dropdown after 3 seconds of inactivity.
 */
function handleMouseLeave() {
  inactiveTimeout = setTimeout(() => {
    isOpen.value = false;
  }, 3000);
}
</script>

<style module="languageSwitch" lang="scss" src="./LanguageSwitch.scss" />
