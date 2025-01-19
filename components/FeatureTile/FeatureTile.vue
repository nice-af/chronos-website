<template>
  <div :class="[featureTile.container, { [featureTile.isLarge]: isLarge }]">
    <div :class="featureTile.text">
      <h2 :class="featureTile.headline">{{ headline }}</h2>
      <p :class="featureTile.description">{{ description }}</p>
    </div>
    <slot name="graphic"></slot>
    <div class="dot is-top-left"></div>
    <div class="dot is-top-right"></div>
    <div class="dot is-bottom-left"></div>
    <div class="dot is-bottom-right"></div>
  </div>
</template>

<script setup lang="ts">
interface FeatureTileProps {
  headline: string;
  description: string;
  isLarge?: boolean;
}

defineProps<FeatureTileProps>();
</script>

<style module="featureTile" lang="scss" src="./FeatureTile.scss" />
