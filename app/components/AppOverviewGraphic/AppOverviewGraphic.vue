<template>
  <div :class="appOverviewGraphic.container">
    <img
      :class="appOverviewGraphic.screenshot"
      src="/assets/images/overview-macos-light.png"
      srcset="/assets/images/overview-macos-light@2x.png 2x, /assets/images/overview-macos-light@3x.png 3x"
      width="462"
      height="509"
      :alt="t('screenshots.overviewLightAlt')"
      :style="{ opacity: isMounted && appTheme?.ref.value === 'light' ? 1 : 0 }" />
    <img
      :class="appOverviewGraphic.screenshot"
      src="/assets/images/overview-macos-dark.png"
      srcset="/assets/images/overview-macos-dark@2x.png 2x, /assets/images/overview-macos-dark@3x.png 3x"
      width="462"
      height="509"
      :alt="t('screenshots.overviewDarkAlt')"
      :style="{ opacity: isMounted && appTheme?.ref.value === 'light' ? 0 : 1 }" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
import { inject, onMounted, ref } from 'vue';
import { appThemeProvider } from '~/components/AppSettingsProvider/appSettingsProvider.types';

// We need this ref to prevent hydration mismatches
const isMounted = ref(false);
const appTheme = inject(appThemeProvider);
const { t } = useI18n();

onMounted(() => {
  isMounted.value = true;
});
</script>

<style module="appOverviewGraphic" lang="scss" src="./AppOverviewGraphic.scss" />
