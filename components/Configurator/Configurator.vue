<template>
  <div class="wrapper">
    <div :class="configurator.container">
      <div :class="configurator.screenshotsContainer">
        <!-- Dark mode -->
        <img
          :class="configurator.sidebarScreenshot"
          :style="{
            display: !isLight && sidebarLayout?.ref.value === 'compact' ? 'block' : 'none',
          }"
          src="/assets/images/sidebar-compact-macos-dark.png"
          srcset="
            /assets/images/sidebar-compact-macos-dark@2x.png 2x,
            /assets/images/sidebar-compact-macos-dark@3x.png 3x
          "
          width="64"
          height="400"
          alt="A screenshot of the Chronos app sidebar in compact layout and dark mode" />
        <img
          :class="configurator.sidebarScreenshot"
          :style="{
            display: !isLight && sidebarLayout?.ref.value === 'micro' ? 'block' : 'none',
          }"
          src="/assets/images/sidebar-micro-macos-dark.png"
          srcset="/assets/images/sidebar-micro-macos-dark@2x.png 2x, /assets/images/sidebar-micro-macos-dark@3x.png 3x"
          width="64"
          height="400"
          alt="A screenshot of the Chronos app sidebar in micro layout and dark mode" />
        <img
          :class="configurator.mainAppscreenshot"
          :style="{
            display: isLight ? 'none' : 'block',
          }"
          src="/assets/images/overview-macos-dark.png"
          srcset="/assets/images/overview-macos-dark@2x.png 2x, /assets/images/overview-macos-dark@3x.png 3x"
          width="462"
          height="509"
          alt="A screenshot of the Chronos app and dark mode" />
        <!-- Light mode -->
        <img
          :class="configurator.sidebarScreenshot"
          :style="{
            display: isLight && sidebarLayout?.ref.value === 'compact' ? 'block' : 'none',
          }"
          src="/assets/images/sidebar-compact-macos-light.png"
          srcset="
            /assets/images/sidebar-compact-macos-light@2x.png 2x,
            /assets/images/sidebar-compact-macos-light@3x.png 3x
          "
          width="64"
          height="400"
          alt="A screenshot of the Chronos app sidebar in compact layout and light mode" />
        <img
          :class="configurator.sidebarScreenshot"
          :style="{
            display: isLight && sidebarLayout?.ref.value === 'micro' ? 'block' : 'none',
          }"
          src="/assets/images/sidebar-micro-macos-light.png"
          srcset="
            /assets/images/sidebar-micro-macos-light@2x.png 2x,
            /assets/images/sidebar-micro-macos-light@3x.png 3x
          "
          width="64"
          height="400"
          alt="A screenshot of the Chronos app sidebar in micro layout and light mode" />
        <img
          :class="configurator.mainAppscreenshot"
          :style="{
            display: isLight ? 'block' : 'none',
          }"
          src="/assets/images/overview-macos-light.png"
          srcset="/assets/images/overview-macos-light@2x.png 2x, /assets/images/overview-macos-light@3x.png 3x"
          width="462"
          height="509"
          alt="A screenshot of the Chronos app and light mode" />
      </div>
      <div>
        <h2 :class="configurator.headline">Highly customizable</h2>
        <p :class="configurator.description">
          Chronos offers lots of customization options to make the app fit your needs. Test the look with different
          options on different platforms right here:
        </p>
        <div :class="configurator.cardsContainer">
          <CardsSelection v-model="appThemeValue" label="Theme" :options="themeOptions" />
        </div>
        <div :class="configurator.cardsContainer">
          <CardsSelection
            v-if="sidebarLayout"
            v-model="sidebarLayoutValue"
            label="Layout"
            :options="isLight ? sidebarLayoutOptionsLight : sidebarLayoutOptionsDark" />
        </div>
      </div>
      <div class="dot is-bottom-left"></div>
      <div class="dot is-bottom-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref, watch } from 'vue';
import {
  appSidebarLayoutProvider,
  appThemeProvider,
  systemThemeProvider,
  type SidebarLayout,
} from '../AppSettingsProvider/appSettingsProvider.types';
import CardsSelection from '../CardsSelection/CardsSelection.vue';
import {
  sidebarLayoutOptionsDark,
  sidebarLayoutOptionsLight,
  themeOptions,
  type ThemeOptionsValue,
} from './configuratorOptions';

const appThemeValue = ref<ThemeOptionsValue>('system');
const sidebarLayoutValue = ref<SidebarLayout>('normal');

// We need this ref to prevent hydration mismatches
const isMounted = ref(false);
const isLight = computed(() => isMounted.value && appTheme?.ref.value === 'light');

const systemTheme = inject(systemThemeProvider);
const appTheme = inject(appThemeProvider);
const sidebarLayout = inject(appSidebarLayoutProvider);

function handleThemeChange(value: ThemeOptionsValue) {
  if (!appTheme || !systemTheme) {
    return;
  }
  if (value === 'system') {
    appTheme.setValue(systemTheme.ref.value);
  } else {
    appTheme.setValue(value);
  }
}

watch(appThemeValue, handleThemeChange);

function handleSidebarLayoutChange(value: SidebarLayout) {
  if (!sidebarLayout) {
    return;
  }
  sidebarLayout.setValue(value);
}

watch(sidebarLayoutValue, handleSidebarLayoutChange);

onMounted(() => {
  isMounted.value = true;
});
</script>

<style module="configurator" lang="scss" src="./Configurator.scss" />
