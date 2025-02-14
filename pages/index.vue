<template>
  <div class="wrapper">
    <HeroShineTop />
    <AppSettingsProvider>
      <Features />
      <Configurator />
    </AppSettingsProvider>
    <FeatureCarousel />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import AppSettingsProvider from '~/components/AppSettingsProvider/AppSettingsProvider.vue';
import Configurator from '~/components/Configurator/Configurator.vue';
import CtaSection from '~/components/CtaSection/CtaSection.vue';
import Features from '~/components/Features/Features.vue';
import FeatureCarousel from '~/components/FeatureCarousel/FeatureCarousel.vue';
import HeroShineTop from '~/components/HeroShineTop/HeroShineTop.vue';
</script>
