<template>
  <div class="wrapper">
    <div :class="configurator.container">
      <div :class="configurator.screenshotsContainer">
        <!-- Dark mode -->
        <img
          :class="configurator.sidebarScreenshot"
          :style="{ display: appTheme === 'dark' && sidebarLayout === 'compact' ? 'block' : 'none' }"
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
          :style="{ display: appTheme === 'dark' && sidebarLayout === 'micro' ? 'block' : 'none' }"
          src="/assets/images/sidebar-micro-macos-dark.png"
          srcset="/assets/images/sidebar-micro-macos-dark@2x.png 2x, /assets/images/sidebar-micro-macos-dark@3x.png 3x"
          width="64"
          height="400"
          alt="A screenshot of the Chronos app sidebar in micro layout and dark mode" />
        <img
          :class="configurator.mainAppscreenshot"
          :style="{ display: appTheme === 'dark' ? 'block' : 'none' }"
          src="/assets/images/overview-macos-dark.png"
          srcset="/assets/images/overview-macos-dark@2x.png 2x, /assets/images/overview-macos-dark@3x.png 3x"
          width="462"
          height="509"
          alt="A screenshot of the Chronos app and dark mode" />
        <!-- Light mode -->
        <img
          :class="configurator.sidebarScreenshot"
          :style="{ display: appTheme === 'light' && sidebarLayout === 'compact' ? 'block' : 'none' }"
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
          :style="{ display: appTheme === 'light' && sidebarLayout === 'micro' ? 'block' : 'none' }"
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
          :style="{ display: appTheme === 'light' ? 'block' : 'none' }"
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
        <p :class="configurator.cardsContainer">
          <CardsSelection label="Theme" :options="themeOptions" :value="themeValue" @change="handleThemeChange" />
        </p>
        <p :class="configurator.cardsContainer">
          <CardsSelection
            label="Layout"
            :options="appTheme === 'dark' ? sidebarLayoutOptionsDark : sidebarLayoutOptionsLight"
            :value="sidebarLayout"
            @change="value => (sidebarLayout = value)" />
        </p>
      </div>
      <div class="dot is-bottom-left" />
      <div class="dot is-bottom-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  appSidebarLayoutProvider,
  appThemeProvider,
  systemThemeProvider,
} from '../AppSettingsProvider/appSettingsProvider.types';
import CardsSelection from '../CardsSelection/CardsSelection.vue';
import {
  sidebarLayoutOptionsDark,
  sidebarLayoutOptionsLight,
  themeOptions,
  type ThemeOptionsValue,
} from './configuratorOptions';

const themeValue = ref('system');
const systemTheme = inject(systemThemeProvider, { value: 'dark' } as any);
const appTheme = inject(appThemeProvider, { value: 'dark' } as any);
const sidebarLayout = inject(appSidebarLayoutProvider, { value: 'normal' } as any);

function handleThemeChange(value: ThemeOptionsValue) {
  themeValue.value = value;
  if (value === 'system') {
    appTheme.value = systemTheme.value;
  } else {
    appTheme.value = value;
  }
}
</script>

<style module="configurator" lang="scss" src="./Configurator.scss" />
