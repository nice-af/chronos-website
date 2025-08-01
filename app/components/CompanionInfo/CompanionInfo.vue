<template>
  <section :class="companionInfo.section">
    <div :class="companionInfo.container">
      <div :class="companionInfo.downloadContainer">
        <p :class="companionInfo.downloadHeadline">{{ t('companion.info.downloadHeadline') }}</p>
        <ul :class="companionInfo.downloadList" :aria-label="t('companion.info.downloadListLabel')">
          <li>
            <div :class="companionInfo.downloadLink">
              <img
                :class="companionInfo.browserIcon"
                :src="`/assets/images/browsers/safari.png`"
                :srcset="`/assets/images/browsers/safari@2x.png 2x, /assets/images/browsers/safari@3x.png 3x`"
                alt="Safari Logo" />
            </div>
            <p :class="companionInfo.downloadText" v-html="t('companion.info.downloadForX', { browser: 'Safari' })"></p>
          </li>
          <li v-for="browser in browsers" :key="browser.name">
            <a
              :class="companionInfo.downloadLink"
              :href="browser.downloadUrl"
              target="_blank"
              rel="noopener noreferrer">
              <img
                :class="companionInfo.browserIcon"
                :src="`/assets/images/browsers/${browser.imageName}.png`"
                :srcset="`/assets/images/browsers/${browser.imageName}@2x.png 2x, /assets/images/browsers/${browser.imageName}@3x.png 3x`"
                :alt="`${browser.name} Logo`" />
            </a>
            <p
              :class="companionInfo.downloadText"
              v-html="t('companion.info.downloadForX', { browser: browser.name })"></p>
          </li>
        </ul>
      </div>
      <hr :class="companionInfo.line" />
      <div :class="companionInfo.infoContainer">
        <img
          src="/assets/images/companion-screenshot.png"
          srcset="/assets/images/companion-screenshot@2x.png 2x"
          :alt="t('companion.info.screenshotAlt')" />
        <p :class="companionInfo.featureInfo">
          {{ t('companion.info.featureInfo') }}
        </p>
      </div>
      <div class="dot is-top-left"></div>
      <div class="dot is-top-right"></div>
      <div class="dot is-bottom-left"></div>
      <div class="dot is-bottom-right"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n, useRuntimeConfig } from '#imports';

const { t } = useI18n();
const config = useRuntimeConfig();

const browsers: { name: string; imageName: string; downloadUrl: string }[] = [
  {
    name: 'Chrome',
    imageName: 'chrome',
    downloadUrl: config.public.COMPANION_CHROME_URL,
  },
  {
    name: 'Firefox',
    imageName: 'firefox',
    downloadUrl: config.public.COMPANION_FIREFOX_URL,
  },
  {
    name: 'Edge',
    imageName: 'edge',
    downloadUrl: config.public.COMPANION_EDGE_URL,
  },
  {
    name: 'Opera',
    imageName: 'opera',
    downloadUrl: config.public.COMPANION_CHROME_URL,
  },
  {
    name: 'Brave',
    imageName: 'brave',
    downloadUrl: config.public.COMPANION_CHROME_URL,
  },
];
</script>

<style module="companionInfo" lang="scss" src="./CompanionInfo.scss" />
