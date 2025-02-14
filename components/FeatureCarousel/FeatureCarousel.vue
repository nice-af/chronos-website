<template>
  <section id="other-features" ref="section" :class="featureCarousel.container">
    <div :class="featureCarousel.textContainer">
      <h2 :class="featureCarousel.headline">{{ t('featureCarousel.headline') }}</h2>
      <p :class="featureCarousel.description">{{ t('featureCarousel.description') }}</p>
    </div>
    <div :class="featureCarousel.rowsContainer">
      <div v-for="(row, i) in rowsData" :key="i" :class="featureCarousel.rowContainer">
        <div
          ref="row"
          :class="[featureCarousel.row, i % 2 ? featureCarousel.runsLeft : featureCarousel.runsRight]"
          :style="{ animationDuration: `${animationDurations[i % animationDurations.length]}s` }">
          <button
            v-for="(entry, j) in [...row, ...row, ...row]"
            ref="button"
            :key="entry.label + j"
            :tabindex="j >= rowsData[i].length ? -1 : 0"
            :class="[featureCarousel.entry, { [featureCarousel.isActive]: activeEntryIds?.[1] === `${i}-${j}` }]"
            :data-id="`${i}-${j}`"
            @click="e => (e.target as HTMLElement).blur()"
            @touchstart="() => debouncedHandleEntryActivation(i, j)"
            @focus="() => debouncedHandleEntryActivation(i, j)"
            @mouseenter="() => debouncedHandleEntryActivation(i, j)"
            @mouseleave="handleEntryDeactivation">
            {{ entry.label }}
          </button>
        </div>
      </div>
    </div>
    <template v-for="(row, i) in rowsData">
      <div
        v-for="(entry, j) in row"
        ref="popup"
        :key="entry.label"
        :data-id="`${i}-${j}`"
        :class="[featureCarousel.infoPopup, { [featureCarousel.isActive]: activeEntryIds?.[1] === `${i}-${j}` }]"
        :style="[
          activePopupId1 === `${i}-${j}` ? floatingStyles1 : null,
          activePopupId2 === `${i}-${j}` ? floatingStyles2 : null,
        ]">
        {{ entry.infoPopup }}
        <div
          ref="arrow"
          :data-id="`${i}-${j}`"
          :class="featureCarousel.arrow"
          :style="[
            activePopupId1 === `${i}-${j}` ? { left: `${middlewareData1.arrow?.x}px` } : null,
            activePopupId2 === `${i}-${j}` ? { left: `${middlewareData2.arrow?.x}px` } : null,
          ]"></div>
      </div>
    </template>
    <div class="dot is-bottom-left"></div>
    <div class="dot is-bottom-right"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, useI18n, useTemplateRef, watch } from '#imports';
import { detectOverflow, arrow as floatingArrow, useFloating, type Middleware } from '@floating-ui/vue';
import { useDebounceFn } from '@vueuse/core';

const { t } = useI18n();
const section = useTemplateRef('section');
const rowsEls = useTemplateRef<HTMLDivElement[]>('row');
const buttonEls = useTemplateRef<HTMLButtonElement[]>('button');
const popupEls = useTemplateRef<HTMLDivElement[]>('popup');
const arrowEls = useTemplateRef<HTMLDivElement[]>('arrow');
const animationDurations = ref<number[]>([]);

// We use two separate references and floating elements to fade out the inactive popup when
// directly switching between two popups. That way we avoid using an enormous amount of refs.
const activePopupInstance = ref<1 | 2>(1);
// We store the id of the button as well as the popup
const activeEntryIds = ref<[string, string] | null>(null);
const activePopupId1 = ref<string | null>(null);
const activePopupId2 = ref<string | null>(null);
const reference1 = ref<HTMLElement | null>(null);
const reference2 = ref<HTMLElement | null>(null);
const floating1 = ref<HTMLElement | null>(null);
const floating2 = ref<HTMLElement | null>(null);
const arrow1 = ref<HTMLElement | null>(null);
const arrow2 = ref<HTMLElement | null>(null);

const preventOverflowMiddleware: Middleware = {
  name: 'middleware',
  async fn(state) {
    const overflow = await detectOverflow(state, {
      rootBoundary: section.value?.getBoundingClientRect(),
      padding: 16,
    });
    if (overflow.left > 0) {
      state.x += overflow.left;
    } else if (overflow.right > 0) {
      state.x -= overflow.right;
    }
    return state;
  },
};

const { floatingStyles: floatingStyles1, middlewareData: middlewareData1 } = useFloating(reference1, floating1, {
  placement: 'top',
  middleware: [preventOverflowMiddleware, floatingArrow({ element: arrow1, padding: 12 })],
});
const { floatingStyles: floatingStyles2, middlewareData: middlewareData2 } = useFloating(reference2, floating2, {
  placement: 'top',
  middleware: [preventOverflowMiddleware, floatingArrow({ element: arrow2, padding: 12 })],
});

interface Entry {
  label: string;
  infoPopup: string;
}

const rowsData: Entry[][] = [
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

function handleEntryActivation(i: number, j: number) {
  const buttonId = `${i}-${j}`; // We got multiple instances of the "same" button
  const popupId = `${i}-${j % rowsData[i].length}`; // We only got one instance of the popup
  const buttonEl = buttonEls.value?.find(el => el.dataset.id === buttonId);
  const popupEl = popupEls.value?.find(el => el.dataset.id === popupId);
  const arrowEl = arrowEls.value?.find(el => el.dataset.id === popupId);

  if (!buttonEl || !popupEl || !arrowEl || activeEntryIds.value?.[0] === buttonId) {
    // An element is missing or the popup is already active
    return;
  }
  activeEntryIds.value = [buttonId, popupId];

  if (activePopupId1.value === popupId || activePopupId2.value === popupId) {
    // The popup already has a floating ui hook assigned
    return;
  }

  if (activePopupInstance.value === 1) {
    activePopupId1.value = popupId;
    activePopupInstance.value = 2;
    reference1.value = buttonEl;
    floating1.value = popupEl;
    arrow1.value = arrowEl;
  } else {
    activePopupId2.value = popupId;
    activePopupInstance.value = 1;
    reference2.value = buttonEl;
    floating2.value = popupEl;
    arrow2.value = arrowEl;
  }
}
const debouncedHandleEntryActivation = useDebounceFn(handleEntryActivation, 100);

function handleEntryDeactivation() {
  activeEntryIds.value = null;
}

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
