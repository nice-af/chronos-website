<template>
  <div class="wrapper">
    <HeroShineTop
      headlineBeforeIcon="Easy and fast time tracking"
      headlineAfterIcon="for Jira"
      show-icon
      description="Use the Chronos app to manage your daily Jira worklogs in an easy and intuitiv way. Stop the time waste of time tracking."
      :pill="{ label: 'Check the release changelog', href: 'https://github.com/nice-af/chronos-app/releases' }">
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
    <CtaSection />
  </div>
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
