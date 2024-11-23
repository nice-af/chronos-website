<template>
  <div id="download" :class="ctaSection.wrapper">
    <div :class="ctaSection.container">
      <h2 ref="headlineRef" :class="['headline-l', 'headline-gradient']" :data-lines="headlineLines ?? undefined">
        {{ headline }}
      </h2>
      <p :class="ctaSection.description">{{ description }}</p>
      <p v-if="$slots.buttonsTop" :class="ctaSection.buttonsContainer"><slot name="buttonsTop"></slot></p>
      <p v-if="$slots.buttonsBottom" :class="ctaSection.buttonsContainer"><slot name="buttonsBottom"></slot></p>
    </div>
    <img
      :class="ctaSection.shine"
      src="/assets/images/shine-bottom.jpg"
      srcset="/assets/images/shine-bottom@2x.jpg 2x, /assets/images/shine-bottom@3x.jpg 3x"
      alt="Lights shining from the bottom"
      width="850"
      height="380"
      class="shine-bottom" />
  </div>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import throttle from 'lodash/throttle';
import { ref } from 'vue';

const headlineRef = ref<HTMLElement>();
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
