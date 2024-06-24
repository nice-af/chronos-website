<template>
  <div :class="featureTile.container">
    <div>
      <h2 :class="featureTile.headline">{{ headline }}</h2>
      <p :class="featureTile.description">{{ description }}</p>
    </div>
    <slot name="graphic" />
    <div class="dot is-top-left" />
    <div class="dot is-top-right" />
    <div class="dot is-bottom-left" />
    <div class="dot is-bottom-right" />
  </div>
</template>

<script setup lang="ts">
interface FeatureTileProps {
  headline: string;
  description: string;
}

defineProps<FeatureTileProps>();
</script>

<style module="featureTile" lang="scss" src="./FeatureTile.scss" />
