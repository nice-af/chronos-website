<template>
  <div
    :class="[
      featureTile.container,
      isLarge ? featureTile.isLarge : featureTile.isSmall,
      { [featureTile.isReversed!]: isReversed },
    ]">
    <div :class="featureTile.text">
      <h2 :class="featureTile.headline">{{ headline }}</h2>
      <p :class="featureTile.description">{{ description }}</p>
    </div>
    <div :class="featureTile.graphicContainer">
      <slot name="graphic"></slot>
    </div>
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
  /**
   * Used to reverse the order of the graphic and text when in a row
   */
  isReversed?: boolean;
}

defineProps<FeatureTileProps>();
</script>

<style module="featureTile" lang="scss" src="./FeatureTile.scss" />
