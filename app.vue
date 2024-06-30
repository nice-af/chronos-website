<template>
  <Header />
  <AppSettingsProvider>
    <HeroShineTop
      headline="Easy and fast time tracking for Jira"
      description="Use the Chronos app to manage your daily Jira worklogs in an easy and intuitiv way. Stop the time waste of time tracking."
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
    <Features />
    <Configurator />
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
  </AppSettingsProvider>
</template>

<script setup lang="ts">
import { PhAppStoreLogo, PhGithubLogo } from '@phosphor-icons/vue';
</script>

<style lang="scss" src="./assets/styles/global.scss" />
