<template>
  <div id="features" :class="features.container">
    <div :class="[features.tile, features.tileLarge]">
      <FeatureTile
        :additionalClass="features.largeTile"
        headline="Non hac mattis lectus"
        description="Eros accumsan tempus eleifend purus fringilla elit turpis
        nascetur neque fermentum nulla fames malesuada, pharetra mauris curabitur dis hendrerit class cras primis amet
        quisque morbi.">
        <template #graphic><AppOverviewGraphic /></template>
      </FeatureTile>
    </div>
    <div :class="features.tile">
      <FeatureTile
        ref="$accountsFeatureTile"
        headline="Connect multiple accounts"
        description="Manage worklogs from different accounts and workspaces.">
        <template #graphic> <AccountCardsGraphic /> </template>
      </FeatureTile>
    </div>
    <div :class="features.tile">
      <FeatureTile
        headline="Start/stop tracking"
        description="Start and stop your timers as you go. Track the actual time that you are working on a task.">
        <template #graphic><StartStopGraphic /></template>
      </FeatureTile>
    </div>
    <div :class="features.tile">
      <FeatureTile
        headline="Manual submit"
        description="Take a look at your worklogs and make adjustments before you submit them.">
        <template #graphic><ManualSubmitGraphic /></template>
      </FeatureTile>
    </div>
  </div>
  <video
    ref="$shapeSphere"
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
    alt="A 3d animation of a sphere"></video>
</template>

<script setup lang="ts">
import FeatureTile from '~/components/FeatureTile/FeatureTile.vue';
import AppOverviewGraphic from '~/components/AppOverviewGraphic/AppOverviewGraphic.vue';
import AccountCardsGraphic from '~/components/AccountCardsGraphic/AccountCardsGraphic.vue';
import StartStopGraphic from '~/components/StartStopGraphic/StartStopGraphic.vue';
import ManualSubmitGraphic from '~/components/ManualSubmitGraphic/ManualSubmitGraphic.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const $accountsFeatureTile = ref<InstanceType<typeof FeatureTile>>();
const $shapeSphere = ref<HTMLVideoElement>();
const shapeSpherePosition = ref<{ top: string; left: string } | null>(null);

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
