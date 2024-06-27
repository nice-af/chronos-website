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
  </AppSettingsProvider>
</template>

<script setup lang="ts">
import { PhAppStoreLogo, PhGithubLogo } from '@phosphor-icons/vue';
</script>

<style lang="scss" src="./assets/styles/global.scss" />
