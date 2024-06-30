<template>
  <div class="wrapper">
    <div :class="[heroShineTop.shineContainer, 'is-shine-1']" ref="shineContainerRef">
      <img
        :class="heroShineTop.shine"
        src="/assets/images/shine-1.png"
        width="1114"
        height="634"
        alt="Lights shining from top" />
      <img
        :class="heroShineTop.shine"
        src="/assets/images/shine-2.png"
        width="1114"
        height="634"
        alt="Lights shining from top" />
      <img
        :class="heroShineTop.shine"
        src="/assets/images/shine-3.png"
        width="1114"
        height="634"
        alt="Lights shining from top" />
      <img
        :class="heroShineTop.shine"
        src="/assets/images/shine-4.png"
        width="1114"
        height="634"
        alt="Lights shining from top" />
    </div>
    <div :class="heroShineTop.container">
      <p v-if="!!pill" :class="heroShineTop.pillContainer">
        <Button :label="pill.label" :href="pill.href" is-pill variant="secondary">
          <template #icon><PhArrowRight size="16" weight="bold" /></template>
        </Button>
      </p>
      <h1 :class="['headline-xl', 'headline-gradient']" :data-lines="headlineLines ?? undefined" ref="headlineRef">
        {{ headline }}
      </h1>
      <p :class="heroShineTop.description">{{ description }}</p>
      <p v-if="$slots.buttons" :class="heroShineTop.buttonsContainer"><slot name="buttons" /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Button from '../Button/Button.vue';
import { PhArrowRight } from '@phosphor-icons/vue';
import { useResizeObserver } from '@vueuse/core';
import { throttle } from 'lodash';

const shineContainerRef = ref<HTMLElement | null>(null);

const headlineRef = ref<HTMLElement | null>(null);
const headlineLines = ref<number | null>(null);

interface HeroShineTopProps {
  pill: {
    label: string;
    href: string;
  };
  headline: string;
  description: string;
}

defineProps<HeroShineTopProps>();

function updateLines() {
  const el = headlineRef.value;
  if (!el) return;
  headlineLines.value = Math.round(el.offsetHeight / parseInt(window.getComputedStyle(el).lineHeight));
}
const throttledUpdateLines = throttle(updateLines, 100);

useResizeObserver(headlineRef, throttledUpdateLines);
throttledUpdateLines();

// Add shine classes
let shineTimer: NodeJS.Timeout;
onNuxtReady(() => {
  let shineIndex = 2;
  shineContainerRef.value.classList.remove(`is-shine-1`);
  shineContainerRef.value.classList.add(`is-shine-${shineIndex}`);
  shineTimer = setInterval(() => {
    if (!shineContainerRef.value) return;
    shineContainerRef.value.classList.remove(`is-shine-${shineIndex}`);
    shineIndex = shineIndex === 4 ? 1 : shineIndex + 1;
    shineContainerRef.value.classList.add(`is-shine-${shineIndex}`);
  }, 2500);
});

onUnmounted(() => {
  clearInterval(shineTimer);
});
</script>

<style module="heroShineTop" lang="scss" src="./HeroShineTop.scss" />
