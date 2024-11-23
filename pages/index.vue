<template>
  <HeroShineTop
    headline-before-icon="Easy and fast time tracking"
    headline-after-icon="for Jira"
    show-icon
    description="Use the Chronos app to manage your daily Jira worklogs in an easy and intuitiv way. Stop the time waste of time tracking."
    show-3d-shapes
    :pill="{ label: 'Now with a browser extension', href: '/404' }">
    <template #buttons>
      <Button label="Download" href="/404">
        <template #icon><PhAppStoreLogo size="22" weight="bold" /></template>
      </Button>
      <Button label="Source code" href="/404" variant="secondary">
        <template #icon><PhGithubLogo size="22" /></template>
      </Button>
    </template>
  </HeroShineTop>
  <AppSettingsProvider>
    <Features />
    <Configurator />
  </AppSettingsProvider>
  <CtaSection
    headline="Download now"
    description="Arcu potenti laoreet tristique porttitor lobortis praesent rutrum nisl viverra mi, a duis neque cursus class quam risus nullam.">
    <template #buttonsTop>
      <Button label="Download for macOS" href="/404">
        <template #icon><img src="/assets/images/icon-macos.svg" size="20" alt="Apple logo" /></template>
      </Button>
    </template>
    <template #buttonsBottom>
      <Button label="Windows app" href="/404" variant="secondary">
        <template #icon><img src="/assets/images/icon-windows.svg" size="20" alt="Windows logo" /></template>
      </Button>
      <Button label="Linux app" href="/404" variant="secondary">
        <template #icon><img src="/assets/images/icon-linux.svg" size="20" alt="Linux logo" /></template>
      </Button>
    </template>
  </CtaSection>
</template>

<script setup lang="ts">
import { PhAppStoreLogo, PhGithubLogo } from '@phosphor-icons/vue';
import AppSettingsProvider from '~/components/AppSettingsProvider/AppSettingsProvider.vue';
import Button from '~/components/Button/Button.vue';
import Configurator from '~/components/Configurator/Configurator.vue';
import CtaSection from '~/components/CtaSection/CtaSection.vue';
import Features from '~/components/Features/Features.vue';
import HeroShineTop from '~/components/HeroShineTop/HeroShineTop.vue';
</script>
