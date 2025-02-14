<template>
  <section :class="heroShineTop.section">
    <div ref="shine-container" :class="[heroShineTop.shineContainer, 'is-shine-1']">
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
      <p :class="heroShineTop.pillContainer">
        <Button
          :label="t('heroShineTop.pillLabel')"
          href="https://github.com/nice-af/chronos-app/releases"
          isPill
          variant="secondary">
          <template #icon><PhArrowRight size="16" weight="bold" /></template>
        </Button>
      </p>
      <h1
        ref="headline"
        :class="heroShineTop.headline"
        class="headline-xl headline-gradient"
        :data-lines="headlineLines?.toString() ?? undefined">
        {{ t('heroShineTop.headlineBeforeIcon') }}
        <img
          :class="heroShineTop.icon"
          src="/assets/images/hero-icon.png"
          srcset="/assets/images/hero-icon@2x.png 2x"
          width="82"
          height="82"
          alt="Chronos app icon" />
        {{ t('heroShineTop.headlineAfterIcon') }}
      </h1>
      <p :class="heroShineTop.description">{{ t('heroShineTop.description') }}</p>
      <p :class="heroShineTop.buttonsContainer">
        <Button :label="t('global.download')" :href="config.public.DOWNLOAD_MACOS_URL">
          <template #icon><PhAppStoreLogo size="22" weight="bold" /></template>
        </Button>
        <Button :label="t('global.sourceCode')" :href="config.public.SOURCE_CODE_URL" variant="secondary">
          <template #icon><PhGithubLogo size="22" /></template>
        </Button>
      </p>
      <video
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
        :title="t('shapes.titleDodecahedron')"></video>
      <video
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
        :title="t('shapes.titleCone')"></video>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n, useRuntimeConfig, useTextLines } from '#imports';
import { PhAppStoreLogo, PhArrowRight, PhGithubLogo } from '@phosphor-icons/vue';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import Button from '~/components/Button/Button.vue';

const $shineContainer = useTemplateRef('shine-container');
const headline = useTemplateRef('headline');
const { headlineLines } = useTextLines(headline);
const { t } = useI18n();
const config = useRuntimeConfig();

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
