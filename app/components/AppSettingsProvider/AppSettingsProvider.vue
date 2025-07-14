<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import {
  appOSProvider,
  appSidebarLayoutProvider,
  appThemeProvider,
  systemThemeProvider,
  type OS,
  type SidebarLayout,
  type ThemeColor,
} from './appSettingsProvider.types';

const matchMediaRef = ref<MediaQueryList | null>(null);

function getMediaPreference() {
  if (typeof window === 'undefined') {
    return 'dark';
  }
  if (matchMediaRef.value?.matches) {
    return 'light';
  } else {
    return 'dark';
  }
}

onMounted(() => {
  getMediaPreference();
  matchMediaRef.value = window.matchMedia('(prefers-color-scheme: light)');
  matchMediaRef.value.addEventListener('change', () => {
    systemTheme.value = getMediaPreference();
  });
});

const systemTheme = ref<ThemeColor>('dark');
function setSystemTheme(theme: ThemeColor) {
  systemTheme.value = theme;
}
provide(systemThemeProvider, { ref: systemTheme, setValue: setSystemTheme });

const appOS = ref<OS>('macos');
function setAppOS(os: OS) {
  appOS.value = os;
}
provide(appOSProvider, { ref: appOS, setValue: setAppOS });

const appTheme = ref<ThemeColor>(getMediaPreference());
function setAppTheme(theme: ThemeColor) {
  if (import.meta.client) {
    if (theme === 'light') {
      document.body.classList.add('has-light-app');
    } else {
      document.body.classList.remove('has-light-app');
    }
  }
  appTheme.value = theme;
}
provide(appThemeProvider, { ref: appTheme, setValue: setAppTheme });

const appSidebarLayout = ref<SidebarLayout>('normal');
function setAppSidebarLayout(layout: SidebarLayout) {
  appSidebarLayout.value = layout;
}
provide(appSidebarLayoutProvider, { ref: appSidebarLayout, setValue: setAppSidebarLayout });
</script>
