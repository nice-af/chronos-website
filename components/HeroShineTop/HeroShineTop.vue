<template>
  <div class="wrapper">
    <div :class="heroShineTop.container">
      <p v-if="!!pill" :class="heroShineTop.pillContainer">
        <Button :label="pill.label" :href="pill.href" is-pill variant="secondary">
          <template v-slot:icon><PhArrowRight size="16" weight="bold" /></template>
        </Button>
      </p>
      <h1 class="headline-xl">{{ headline }}</h1>
      <p :class="heroShineTop.description">{{ description }}</p>
      <p v-if="$slots.buttons" :class="heroShineTop.buttonsContainer"><slot name="buttons" /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Button from '../Button/Button.vue';
import { PhArrowRight } from '@phosphor-icons/vue';

interface HeroShineTopProps {
  pill: {
    label: string;
    href: string;
  };
  headline: string;
  description: string;
}

defineProps<HeroShineTopProps>();
</script>

<style module="heroShineTop" lang="scss" src="./HeroShineTop.scss" />
