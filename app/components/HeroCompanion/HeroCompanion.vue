<template>
  <section :class="heroCompanion.section">
    <div ref="shineContainer" :class="heroCompanion.shineContainer">
      <img
        :class="heroCompanion.shine"
        src="/assets/images/shine-1.png"
        width="1114"
        height="634"
        role="presentation"
        alt="" />
    </div>
    <div :class="heroCompanion.container">
      <img
        :class="heroCompanion.logo"
        src="/assets/images/companion-logo.svg"
        width="128"
        height="128"
        alt="Chronos Companion Logo" />
      <h1 :class="heroCompanion.headlineContainer">
        <span :class="heroCompanion.headlineLarge" class="headline-gradient" data-lines="1">
          {{ t('companion.hero.headlineLarge') }}
        </span>
        <br />
        <span :class="heroCompanion.headlineSmall" class="headline-gradient" data-lines="1">
          {{ t('companion.hero.headlineSmall') }}
        </span>
      </h1>
      <p :class="heroCompanion.description">
        {{ t('companion.hero.description') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';

const { t } = useI18n();
</script>

<style module="heroCompanion" lang="scss" src="./HeroCompanion.scss" />
