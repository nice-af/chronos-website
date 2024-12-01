<template>
  <div ref="shineContainerRef" :class="[heroShineTop.shineContainer, 'is-shine-1']">
    <img
      :class="heroShineTop.shine"
      src="/assets/images/shine-1.png"
      width="1114"
      height="634"
      alt="Lights shining from the top" />
    <img
      :class="heroShineTop.shine"
      src="/assets/images/shine-2.png"
      width="1114"
      height="634"
      alt="Lights shining from the top" />
    <img
      :class="heroShineTop.shine"
      src="/assets/images/shine-3.png"
      width="1114"
      height="634"
      alt="Lights shining from the top" />
    <img
      :class="heroShineTop.shine"
      src="/assets/images/shine-4.png"
      width="1114"
      height="634"
      alt="Lights shining from the top" />
  </div>
  <div :class="heroShineTop.container">
    <p v-if="!!pill" :class="heroShineTop.pillContainer">
      <Button :label="pill.label" :href="pill.href" is-pill variant="secondary">
        <template #icon><PhArrowRight size="16" weight="bold" /></template>
      </Button>
    </p>
    <h1 ref="headlineRef" class="headline-xl headline-gradient" :data-lines="headlineLines ?? undefined">
      {{ headlineBeforeIcon }}
      <img
        v-if="showIcon"
        :class="heroShineTop.icon"
        src="/assets/images/hero-icon.png"
        srcset="/assets/images/hero-icon@2x.png 2x"
        width="82"
        height="82"
        alt="Chronos app icon" />
      {{ headlineAfterIcon }}
    </h1>
    <p :class="heroShineTop.description">{{ description }}</p>
    <p v-if="$slots.buttons" :class="heroShineTop.buttonsContainer"><slot name="buttons"></slot></p>
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
      alt="A 3d animation of a dodecahedron"></video>
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
      alt="A 3d animation of a cone"></video>
  </div>
</template>

<script setup lang="ts">
import { useTextLines } from '#build/imports';
import { PhArrowRight } from '@phosphor-icons/vue';
import { onMounted, onUnmounted, ref } from 'vue';
import Button from '~/components/Button/Button.vue';

interface HeroShineTopProps {
  pill: {
    label: string;
    href: string;
  };
  headlineBeforeIcon: string;
  headlineAfterIcon: string;
  showIcon: boolean;
  description: string;
}

defineProps<HeroShineTopProps>();

const shineContainerRef = ref<HTMLElement>();
const headlineRef = ref<HTMLElement>();
const { headlineLines } = useTextLines(headlineRef);

// Add shine classes
let shineTimer: NodeJS.Timeout;
onMounted(() => {
  let shineIndex = 2;
  shineContainerRef.value?.classList.remove(`is-shine-1`);
  shineContainerRef.value?.classList.add(`is-shine-${shineIndex}`);
  shineTimer = setInterval(() => {
    if (!shineContainerRef.value) return;
    shineContainerRef.value.classList.remove(`is-shine-${shineIndex}`);
    shineIndex = shineIndex === 4 ? 1 : shineIndex + 1;
    shineContainerRef.value.classList.add(`is-shine-${shineIndex}`);
  }, 2200);
});

onUnmounted(() => {
  clearInterval(shineTimer);
});
</script>

<style module="heroShineTop" lang="scss" src="./HeroShineTop.scss" />
