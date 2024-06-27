<template>
  <slot />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import {
  appOSProvider,
  appSidebarLayoutProvider,
  appThemeProvider,
  systemThemeProvider,
  type OS,
  type SidebarLayout,
  type ThemeColor,
} from './appSettingsProvider.types';

function getMediaPreference() {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const hasDarkPreference = window?.matchMedia('(prefers-color-scheme: dark)').matches;
  if (hasDarkPreference) {
    return 'dark';
  } else {
    return 'light';
  }
}

if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    systemTheme.value = getMediaPreference();
  });
}

const systemTheme = ref<ThemeColor>(getMediaPreference());
provide(systemThemeProvider, systemTheme);

const appOS = ref<OS>('macos');
provide(appOSProvider, appOS);

const appTheme = ref<ThemeColor>(getMediaPreference());
provide(appThemeProvider, appTheme);

const appSidebarLayout = ref<SidebarLayout>('normal');
provide(appSidebarLayoutProvider, appSidebarLayout);
</script>
