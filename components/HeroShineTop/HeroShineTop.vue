<template>
  <section :class="heroShineTop.section">
    <div
      ref="shineContainer"
      :class="[heroShineTop.shineContainer, 'is-shine-1']"
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
        :class="heroShineTop.pillContainer"
        :data-transition-delay="(headline1Array.length + headline2Array.length + 3).toString()">
        <Button
          :label="t('heroShineTop.pillLabel')"
          href="https://github.com/nice-af/chronos-app/releases"
          isPill
          variant="secondary">
          <template #icon><PhArrowRight size="16" weight="bold" /></template>
        </Button>
      </p>
      <h1 ref="headline" :class="heroShineTop.headline" class="headline-xl">
        <span
          v-for="(word, index) in headline1Array"
          :key="`${index}_${word}`"
          class="headline-gradient"
          data-lines="1"
          :data-transition-delay="index.toString()">
          {{ word }}{{ ' ' }}
        </span>
        <img
          :class="heroShineTop.icon"
          src="/assets/images/hero-icon.png"
          srcset="/assets/images/hero-icon@2x.png 2x"
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
        :class="heroShineTop.description"
        :data-transition-delay="(headline1Array.length + headline2Array.length + 3).toString()">
        {{ t('heroShineTop.description') }}
      </p>
      <p
        :class="heroShineTop.buttonsContainer"
        :data-transition-delay="(headline1Array.length + headline2Array.length + 5).toString()">
        <Button :label="t('global.download')" :href="config.public.DOWNLOAD_MACOS_URL">
          <template #icon><PhAppStoreLogo size="22" weight="bold" /></template>
        </Button>
        <Button :label="t('global.sourceCode')" :href="config.public.SOURCE_CODE_URL" variant="secondary">
          <template #icon><PhGithubLogo size="22" /></template>
        </Button>
      </p>
      <video
        ref="shapeDodecahedron"
        :class="[heroShineTop.shapeVideo, heroShineTop.dodecahedron]"
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
        :data-transition-delay="(headline1Array.length + headline2Array.length + 4).toString()"></video>
      <video
        ref="shapeCone"
        :class="[heroShineTop.shapeVideo, heroShineTop.cone]"
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
        :data-transition-delay="(headline1Array.length + headline2Array.length + 6).toString()"></video>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n, useRuntimeConfig } from '#imports';
import { PhAppStoreLogo, PhArrowRight, PhGithubLogo } from '@phosphor-icons/vue';
import { computed, onMounted, onUnmounted, useTemplateRef } from 'vue';
import Button from '~/components/Button/Button.vue';
import { useParallaxScrolling } from '~/composables/useParallaxScrolling';

const $shineContainer = useTemplateRef('shineContainer');
const { t } = useI18n();
const config = useRuntimeConfig();
const headline1Array = computed(() => t('heroShineTop.headlineBeforeIcon').split(' '));
const headline2Array = computed(() => t('heroShineTop.headlineAfterIcon').split(' '));
const $shapeDodecahedron = useTemplateRef('shapeDodecahedron');
const $shapeCone = useTemplateRef('shapeCone');

useParallaxScrolling([
  { el: $shapeDodecahedron, speed: 0.08 },
  { el: $shapeCone, speed: 0.2 },
]);

// Add shine classes
let shineTimer: NodeJS.Timeout;
onMounted(() => {
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
});

onUnmounted(() => {
  clearInterval(shineTimer);
});
</script>

<style module="heroShineTop" lang="scss" src="./HeroShineTop.scss" />
