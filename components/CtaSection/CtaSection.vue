<template>
  <div class="wrapper">
    <div :class="ctaSection.container">
      <h2 :class="['headline-l', 'headline-gradient']" :data-lines="headlineLines ?? undefined" ref="headlineRef">
        {{ headline }}
      </h2>
      <p :class="ctaSection.description">{{ description }}</p>
      <p v-if="$slots.buttonsTop" :class="ctaSection.buttonsContainer"><slot name="buttonsTop" /></p>
      <p v-if="$slots.buttonsBottom" :class="ctaSection.buttonsContainer"><slot name="buttonsBottom" /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import { throttle } from 'lodash';

const headlineRef = ref<HTMLElement | null>(null);
const headlineLines = ref<number | null>(null);

interface CtaSectionProps {
  headline: string;
  description: string;
}

defineProps<CtaSectionProps>();

function updateLines() {
  const el = headlineRef.value;
  if (!el) return;
  headlineLines.value = Math.round(el.offsetHeight / parseInt(window.getComputedStyle(el).lineHeight));
}
const throttledUpdateLines = throttle(updateLines, 100);

useResizeObserver(headlineRef, throttledUpdateLines);
throttledUpdateLines();
</script>

<style module="ctaSection" lang="scss" src="./CtaSection.scss" />
