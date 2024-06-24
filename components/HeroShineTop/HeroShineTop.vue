<template>
  <div class="wrapper">
    <div :class="heroShineTop.container">
      <p v-if="!!pill" :class="heroShineTop.pillContainer">
        <Button :label="pill.label" :href="pill.href" is-pill variant="secondary">
          <template v-slot:icon><PhArrowRight size="16" weight="bold" /></template>
        </Button>
      </p>
      <h1 :class="['headline-xl', heroShineTop.headline]" :data-lines="headlineLines ?? undefined" ref="headlineRef">
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
</script>

<style module="heroShineTop" lang="scss" src="./HeroShineTop.scss" />
