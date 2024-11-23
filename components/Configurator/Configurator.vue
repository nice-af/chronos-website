<template>
  <div ref="$container" :class="configurator.container">
    <!-- Dark mode -->
    <div :class="configurator.screenshotsContainer">
      <div :class="configurator.themeContainer" :style="{ opacity: isLight ? 0 : 1 }">
        <img
          :class="configurator.sidebarScreenshot"
          :style="{
            display: sidebarLayout?.ref.value === 'compact' ? 'block' : 'none',
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
            display: sidebarLayout?.ref.value === 'micro' ? 'block' : 'none',
          }"
          src="/assets/images/sidebar-micro-macos-dark.png"
          srcset="/assets/images/sidebar-micro-macos-dark@2x.png 2x, /assets/images/sidebar-micro-macos-dark@3x.png 3x"
          width="64"
          height="400"
          alt="A screenshot of the Chronos app sidebar in micro layout and dark mode" />
        <img
          :class="configurator.mainAppscreenshot"
          src="/assets/images/overview-macos-dark.png"
          srcset="/assets/images/overview-macos-dark@2x.png 2x, /assets/images/overview-macos-dark@3x.png 3x"
          width="462"
          height="509"
          alt="A screenshot of the Chronos app and dark mode" />
      </div>

      <!-- Light mode -->
      <div :class="configurator.themeContainer" :style="{ opacity: isLight ? 1 : 0 }">
        <img
          :class="configurator.sidebarScreenshot"
          :style="{
            display: sidebarLayout?.ref.value === 'compact' ? 'block' : 'none',
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
            display: sidebarLayout?.ref.value === 'micro' ? 'block' : 'none',
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
          src="/assets/images/overview-macos-light.png"
          srcset="/assets/images/overview-macos-light@2x.png 2x, /assets/images/overview-macos-light@3x.png 3x"
          width="462"
          height="509"
          alt="A screenshot of the Chronos app and light mode" />
      </div>
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
          :options="sidebarLayoutOptions"
          :isLight="isLight" />
      </div>
    </div>
    <div class="dot is-bottom-left"></div>
    <div class="dot is-bottom-right"></div>
  </div>
  <video
    ref="$shapeCylinder"
    :class="configurator.shapeVideo"
    :style="{
      display: shapeCylinderPosition ? 'block' : 'none',
      top: shapeCylinderPosition?.top,
      left: shapeCylinderPosition?.left,
    }"
    src="/assets/videos/shape-cylinder.mp4"
    width="91"
    height="44"
    autoplay
    loop
    muted
    playsinline
    poster="/assets/videos/shape-cylinder-poster.jpg"
    alt="A 3d animation of a cylinder"></video>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, watch } from 'vue';
import {
  appSidebarLayoutProvider,
  appThemeProvider,
  systemThemeProvider,
  type SidebarLayout,
} from '../AppSettingsProvider/appSettingsProvider.types';
import CardsSelection from '../CardsSelection/CardsSelection.vue';
import { sidebarLayoutOptions, themeOptions, type ThemeOptionsValue } from './configuratorOptions';

const $container = ref<HTMLElement>();
const $shapeCylinder = ref<HTMLVideoElement>();
const shapeCylinderPosition = ref<{ top: string; left: string } | null>(null);
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

/**
 * Moves cylinder shape video to its correct position.
 * We have to do this, because the mix-blend-mode of the videos only works on the parent element.
 * The videos would overlay their parents if positioned inside them, so we had to move them out and do this.
 */
function positionShape() {
  if (!$container.value || !$shapeCylinder.value) {
    return;
  }

  const containerRect = $container.value.getBoundingClientRect();
  shapeCylinderPosition.value = {
    top: `${containerRect.bottom + window.scrollY - 94}px`,
    left: `${containerRect.right + window.scrollX - 40}px`,
  };
}

onMounted(() => {
  isMounted.value = true;
  positionShape();
  window.addEventListener('resize', positionShape);
});

onUnmounted(() => {
  window.removeEventListener('resize', positionShape);
});
</script>

<style module="configurator" lang="scss" src="./Configurator.scss" />
