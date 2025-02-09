<template>
  <div id="features" :class="features.container">
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
        ref="accounts-feature-tile"
        :headline="t('features.multipleAccounts.headline')"
        :description="t('features.multipleAccounts.description')">
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
        :description="t('features.manualSubmit.description')">
        <template #graphic><ManualSubmitGraphic /></template>
      </FeatureTile>
    </div>
  </div>
  <video
    ref="shape-sphere"
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
    role="presentation"
    :title="t('shapes.titleSphere')"></video>
</template>

<script setup lang="ts">
import FeatureTile from '~/components/FeatureTile/FeatureTile.vue';
import AppOverviewGraphic from '~/components/AppOverviewGraphic/AppOverviewGraphic.vue';
import AccountCardsGraphic from '~/components/AccountCardsGraphic/AccountCardsGraphic.vue';
import StartStopGraphic from '~/components/StartStopGraphic/StartStopGraphic.vue';
import ManualSubmitGraphic from '~/components/ManualSubmitGraphic/ManualSubmitGraphic.vue';
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import { useI18n } from '#imports';

const $accountsFeatureTile = useTemplateRef('accounts-feature-tile');
const $shapeSphere = useTemplateRef('shape-sphere');
const shapeSpherePosition = ref<{ top: string; left: string } | null>(null);
const { t } = useI18n();

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
  shapeSpherePosition.value = {
    top: `${accountsFeatureTileRect.bottom + window.scrollY - 40}px`,
    left: `${accountsFeatureTileRect.left + window.scrollX - 50}px`,
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
