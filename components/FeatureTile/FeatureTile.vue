<template>
  <div :class="featureTile.container">
    <div>
      <h2 :class="featureTile.headline">{{ headline }}</h2>
      <p :class="featureTile.description">{{ description }}</p>
    </div>
    <slot name="graphic" />
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
