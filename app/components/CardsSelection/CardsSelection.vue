<template>
  <div>
    <label :class="cardsSelection.label">{{ label }}</label>
    <div :class="cardsSelection.cardsContainer">
      <div v-for="option in options" :key="option.value">
        <button
          :class="[cardsSelection.cardButton, { [cardsSelection.cardButtonActive!]: option.value === modelValue }]"
          :aria-label="t('global.selectX', { x: `${label.toLowerCase()} ${option.label.toLowerCase()}` })"
          @click="() => emits('update:modelValue', option.value)">
          <img
            v-if="option.image"
            :width="option.image.width"
            :height="option.image.height"
            :class="cardsSelection.image"
            :src="option.image.src"
            :srcset="option.image.srcset"
            :style="{ opacity: !!option.imageLight && isLight ? 0 : 1 }"
            :alt="
              !!option.imageLight
                ? t('global.iconForXInDarkMode', {
                    x: `${label.toLowerCase()} ${option.label.toLowerCase()}`,
                  })
                : t('global.iconForX', {
                    x: `${label.toLowerCase()} ${option.label.toLowerCase()}`,
                  })
            " />
          <img
            v-if="option.imageLight"
            :width="option.imageLight.width"
            :height="option.imageLight.height"
            :class="[cardsSelection.image, cardsSelection.imageLight]"
            :src="option.imageLight.src"
            :srcset="option.imageLight.srcset"
            :alt="
              t('global.iconForXInLightMode', {
                x: `${label.toLowerCase()} ${option.label.toLowerCase()}`,
              })
            "
            :style="{ opacity: isLight ? 1 : 0 }" />
        </button>
        <span :class="[cardsSelection.cardLabel, { [cardsSelection.cardLabelActive!]: option.value === modelValue }]">
          {{ option.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends string">
import { useI18n } from '#imports';
import { type CardsSelectionEmits, type CardsSelectionProps } from './cardsSelection.types';

defineProps<CardsSelectionProps<T>>();
const emits = defineEmits<CardsSelectionEmits<T>>();

const { t } = useI18n();
</script>

<style module="cardsSelection" lang="scss" src="./CardsSelection.scss" />
