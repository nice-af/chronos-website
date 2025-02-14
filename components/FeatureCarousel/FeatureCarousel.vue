<template>
  <section id="other-features" :class="featureCarousel.container">
    <h2 :class="featureCarousel.headline">{{ t('featureCarousel.headline') }}</h2>
    <p :class="featureCarousel.description">{{ t('featureCarousel.description') }}</p>
    <div :class="featureCarousel.rowsContainer">
      <div v-for="(row, i) in rows" :key="i" :class="featureCarousel.rowContainer">
        <div
          ref="row-el"
          :class="[featureCarousel.row, i % 2 ? featureCarousel.runsLeft : featureCarousel.runsRight]"
          :style="{ animationDuration: `${animationDurations[i % animationDurations.length]}s` }">
          <button v-for="(entry, j) in [...row, ...row, ...row]" :key="entry.label + j" :class="featureCarousel.entry">
            {{ entry.label }}
          </button>
        </div>
      </div>
    </div>
    <div class="dot is-bottom-left"></div>
    <div class="dot is-bottom-right"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, useI18n, useTemplateRef, watch } from '#imports';
import { useDebounceFn } from '@vueuse/core';

const { t } = useI18n();
const rowsEls = useTemplateRef<HTMLDivElement[]>('row-el');
const animationDurations = ref<number[]>([]);

interface Entry {
  label: string;
  infoPopup: string;
}

const rows: Entry[][] = [
  [
    {
      label: t('featureCarousel.entries.germanTranslation.label'),
      infoPopup: t('featureCarousel.entries.germanTranslation.infoPopup'),
    },
    {
      label: t('featureCarousel.entries.smartSearch.label'),
      infoPopup: t('featureCarousel.entries.smartSearch.infoPopup'),
    },
    {
      label: t('featureCarousel.entries.shortcuts.label'),
      infoPopup: t('featureCarousel.entries.shortcuts.infoPopup'),
    },
    {
      label: t('featureCarousel.entries.rightClickContextMenu.label'),
      infoPopup: t('featureCarousel.entries.rightClickContextMenu.infoPopup'),
    },
  ],
  [
    {
      label: t('featureCarousel.entries.workspaceLogos.label'),
      infoPopup: t('featureCarousel.entries.workspaceLogos.infoPopup'),
    },
    {
      label: t('featureCarousel.entries.menubarWidget.label'),
      infoPopup: t('featureCarousel.entries.menubarWidget.infoPopup'),
    },
    {
      label: t('featureCarousel.entries.reminderNotification.label'),
      infoPopup: t('featureCarousel.entries.reminderNotification.infoPopup'),
    },
    {
      label: t('featureCarousel.entries.fullscreenMode.label'),
      infoPopup: t('featureCarousel.entries.fullscreenMode.infoPopup'),
    },
  ],
];

/**
 * Update the animation durations based on the scrollWidth of the row elements.
 * This is used to make all rows run at the same speed.
 */
function updateAnimationDurations() {
  animationDurations.value = rowsEls.value?.map(el => el.scrollWidth / 100) ?? [];
}
watch(rowsEls, updateAnimationDurations);
const debounceUpdateAnimationDurations = useDebounceFn(updateAnimationDurations, 100);

onMounted(() => {
  updateAnimationDurations();
  window.addEventListener('resize', debounceUpdateAnimationDurations);
});

onUnmounted(() => {
  window.removeEventListener('resize', debounceUpdateAnimationDurations);
});
</script>

<style module="featureCarousel" lang="scss" src="./FeatureCarousel.scss" />
