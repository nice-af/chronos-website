<template>
  <section id="features" :class="features.container">
    <div :class="[features.tile, features.tileLarge]">
      <FeatureTile
        isLarge
        :headline="t('features.appOverview.headline')"
        :description="t('features.appOverview.description')">
        <template #graphic><AppOverviewGraphic /></template>
      </FeatureTile>
    </div>
    <div :class="features.tile">
      <FeatureTile
        ref="accountsFeatureTile"
        :headline="t('features.multipleAccounts.headline')"
        :description="t('features.multipleAccounts.description')"
        isReversed>
        <template #graphic><AccountCardsGraphic /></template>
      </FeatureTile>
    </div>
    <div :class="features.tile">
      <FeatureTile :headline="t('features.startStop.headline')" :description="t('features.startStop.description')">
        <template #graphic><StartStopGraphic /></template>
      </FeatureTile>
    </div>
    <div :class="features.tile">
      <FeatureTile
        :headline="t('features.manualSubmit.headline')"
        :description="t('features.manualSubmit.description')"
        isReversed>
        <template #graphic><ManualSubmitGraphic /></template>
      </FeatureTile>
    </div>
  </section>
  <video
    ref="shapeSphere"
    :class="[features.shapeVideo, features.sphere]"
    :style="{
      display: shapeSpherePosition ? 'block' : 'none',
      top: shapeSpherePosition?.top,
      left: shapeSpherePosition?.left,
    }"
    src="/assets/videos/shape-sphere.mp4"
    width="86"
    height="62"
    autoplay
    loop
    muted
    playsinline
    poster="/assets/videos/shape-sphere-poster.jpg"
    :title="t('shapes.titleSphere')"></video>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import AccountCardsGraphic from '~/components/AccountCardsGraphic/AccountCardsGraphic.vue';
import AppOverviewGraphic from '~/components/AppOverviewGraphic/AppOverviewGraphic.vue';
import FeatureTile from '~/components/FeatureTile/FeatureTile.vue';
import ManualSubmitGraphic from '~/components/ManualSubmitGraphic/ManualSubmitGraphic.vue';
import StartStopGraphic from '~/components/StartStopGraphic/StartStopGraphic.vue';
import { useParallaxScrolling } from '~/composables/useParallaxScrolling';

const $accountsFeatureTile = useTemplateRef('accountsFeatureTile');
const $shapeSphere = useTemplateRef('shapeSphere');
const shapeSpherePosition = ref<{ top: string; left: string } | null>(null);
const { t } = useI18n();

useParallaxScrolling([{ el: $shapeSphere, speed: -0.05 }]);

/**
 * Moves sphere shape video to its correct position.
 * We have to do this, because the mix-blend-mode of the videos only works on the parent element.
 * The videos would overlay their parents if positioned inside them, so we had to move them out and do this.
 */
function positionShape() {
  if (!$accountsFeatureTile.value || !$shapeSphere.value) {
    return;
  }
  const accountsFeatureTileRect = $accountsFeatureTile.value.$el.getBoundingClientRect();
  const isMobilePosition = window.innerWidth < 660;
  shapeSpherePosition.value = {
    top: `${accountsFeatureTileRect.bottom + window.scrollY - (isMobilePosition ? 2 : 10)}px`,
    left: `${accountsFeatureTileRect.left + window.scrollX - (isMobilePosition ? 28 : 50)}px`,
  };
}

onMounted(() => {
  positionShape();
  window.addEventListener('resize', positionShape);
});

onUnmounted(() => {
  window.removeEventListener('resize', positionShape);
});
</script>

<style module="features" lang="scss" src="./Features.scss" />
