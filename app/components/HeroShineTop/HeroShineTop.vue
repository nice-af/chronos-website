<template>
  <section :class="heroShineTop.section">
    <div
      ref="shineContainer"
      :class="[heroShineTop.shineContainer, 'is-shine-1', { [heroShineTop.runAnimation!]: isLoaded }]"
      :data-transition-delay="(headline1Array.length + headline2Array.length).toString()">
      <img
        :class="heroShineTop.shine"
        src="/assets/images/shine-1.png"
        width="1114"
        height="634"
        role="presentation"
        alt="" />
      <img
        :class="heroShineTop.shine"
        src="/assets/images/shine-2.png"
        width="1114"
        height="634"
        role="presentation"
        alt="" />
      <img
        :class="heroShineTop.shine"
        src="/assets/images/shine-3.png"
        width="1114"
        height="634"
        role="presentation"
        alt="" />
      <img
        :class="heroShineTop.shine"
        src="/assets/images/shine-4.png"
        width="1114"
        height="634"
        role="presentation"
        alt="" />
    </div>
    <div :class="heroShineTop.container">
      <p
        :class="[heroShineTop.pillContainer, { [heroShineTop.runAnimation!]: isLoaded }]"
        :data-transition-delay="(headline1Array.length + headline2Array.length + 3).toString()">
        <Button
          :label="t('heroShineTop.pillLabel')"
          href="https://github.com/nice-af/chronos-app/releases"
          isPill
          variant="secondary">
          <template #icon><Icon name="ph:arrow-right-bold" size="16" /></template>
        </Button>
      </p>
      <h1 :class="[heroShineTop.headline, { [heroShineTop.runAnimation!]: isLoaded }]" class="headline-xl">
        <span
          v-for="(word, index) in headline1Array"
          :key="`${index}_${word}`"
          class="headline-gradient"
          data-lines="1"
          :data-transition-delay="index.toString()">
          {{ word }}{{ ' ' }}
        </span>
        <img
          ref="logoIcon"
          :class="heroShineTop.icon"
          src="/assets/images/hero-icon.png"
          srcset="/assets/images/hero-icon@2x.png 2x, /assets/images/hero-icon@3x.png 3x"
          width="82"
          height="82"
          alt="Chronos app icon"
          :data-transition-delay="headline1Array.length.toString()" />
        <span
          v-for="(word, index) in headline2Array"
          :key="`${index}_${word}`"
          class="headline-gradient"
          data-lines="1"
          :data-transition-delay="(headline1Array.length + 1 + index).toString()">
          {{ word }}{{ ' ' }}
        </span>
      </h1>
      <p
        :class="[heroShineTop.description, { [heroShineTop.runAnimation!]: isLoaded }]"
        :data-transition-delay="(headline1Array.length + headline2Array.length + 3).toString()">
        {{ t('heroShineTop.description') }}
      </p>
      <p
        :class="[heroShineTop.buttonsContainer, { [heroShineTop.runAnimation!]: isLoaded }]"
        :data-transition-delay="(headline1Array.length + headline2Array.length + 5).toString()">
        <Button :label="t('global.download')" :href="config.public.DOWNLOAD_MACOS_URL">
          <template #icon><Icon name="ph:app-store-logo-bold" size="22" /></template>
        </Button>
        <Button :label="t('global.sourceCode')" :href="config.public.SOURCE_CODE_URL" variant="secondary">
          <template #icon><Icon name="ph:github-logo" size="22" /></template>
        </Button>
      </p>
      <video
        ref="shapeDodecahedron"
        :class="[heroShineTop.shapeVideo, heroShineTop.dodecahedron, { [heroShineTop.runAnimation!]: isLoaded }]"
        src="/assets/videos/shape-dodecahedron.mp4"
        width="105"
        height="105"
        autoplay
        loop
        muted
        playsinline
        poster="/assets/videos/shape-dodecahedron-poster.jpg"
        role="presentation"
        :title="t('shapes.titleDodecahedron')"
        :data-transition-delay="(headline1Array.length + headline2Array.length + 8).toString()"></video>
      <video
        ref="shapeCone"
        :class="[heroShineTop.shapeVideo, heroShineTop.cone, { [heroShineTop.runAnimation!]: isLoaded }]"
        src="/assets/videos/shape-cone.mp4"
        width="105"
        height="105"
        autoplay
        loop
        muted
        playsinline
        poster="/assets/videos/shape-cone-poster.jpg"
        role="presentation"
        :title="t('shapes.titleCone')"
        :data-transition-delay="(headline1Array.length + headline2Array.length + 10).toString()"></video>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n, useRuntimeConfig } from '#imports';
import { Icon } from '#components';
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import Button from '~/components/Button/Button.vue';
import { useParallaxScrolling } from '~/composables/useParallaxScrolling';

const $shineContainer = useTemplateRef('shineContainer');
const { t } = useI18n();
const config = useRuntimeConfig();
const headline1Array = computed(() => t('heroShineTop.headlineBeforeIcon').split(' '));
const headline2Array = computed(() => t('heroShineTop.headlineAfterIcon').split(' '));
const $shapeDodecahedron = useTemplateRef('shapeDodecahedron');
const $shapeCone = useTemplateRef('shapeCone');
const $logoIcon = useTemplateRef('logoIcon');
const isLoaded = ref(false);

useParallaxScrolling([
  { el: $shapeDodecahedron, speed: 0.08 },
  { el: $shapeCone, speed: 0.2 },
]);

/**
 * Check if videos and image are loaded
 */
function checkLoaded() {
  const videosLoaded = $shapeDodecahedron.value?.readyState === 4 && $shapeCone.value?.readyState === 4;
  const logoIconLoaded = $logoIcon.value?.complete;
  if (videosLoaded && logoIconLoaded) {
    isLoaded.value = true;
  }
}

let shineTimer: NodeJS.Timeout;
onMounted(() => {
  // Add shine classes
  let shineIndex = 2;
  $shineContainer.value?.classList.remove(`is-shine-1`);
  $shineContainer.value?.classList.add(`is-shine-${shineIndex}`);
  shineTimer = setInterval(() => {
    if (!$shineContainer.value) {
      return;
    }
    $shineContainer.value.classList.remove(`is-shine-${shineIndex}`);
    shineIndex = shineIndex === 4 ? 1 : shineIndex + 1;
    $shineContainer.value.classList.add(`is-shine-${shineIndex}`);
  }, 2200);

  // Check for and/or trigger the fade in animation
  checkLoaded();
  $shapeDodecahedron.value?.addEventListener('loadeddata', checkLoaded);
  $shapeCone.value?.addEventListener('loadeddata', checkLoaded);
  $logoIcon.value?.addEventListener('load', checkLoaded);

  // Trigger animations after 1 second if not already triggered
  setTimeout(() => {
    if (!isLoaded.value) {
      isLoaded.value = true;
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(shineTimer);
  $shapeDodecahedron.value?.removeEventListener('loadeddata', checkLoaded);
  $shapeCone.value?.removeEventListener('loadeddata', checkLoaded);
  $logoIcon.value?.removeEventListener('load', checkLoaded);
});
</script>

<style module="heroShineTop" lang="scss" src="./HeroShineTop.scss" />
