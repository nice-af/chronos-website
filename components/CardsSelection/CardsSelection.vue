<template>
  <div>
    <label :class="cardsSelection.label">{{ label }}</label>
    <div :class="cardsSelection.cardsContainer">
      <div v-for="option in options" :key="option.value">
        <button
          :class="[cardsSelection.cardButton, { [cardsSelection.cardButtonActive]: option.value === modelValue }]"
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
              `Icon for ${label.toLowerCase()} ${option.label.toLowerCase()}` && !!option.imageLight
                ? ' in dark mode'
                : ''
            " />
          <img
            v-if="option.imageLight"
            :width="option.imageLight.width"
            :height="option.imageLight.height"
            :class="[cardsSelection.image, cardsSelection.imageLight]"
            :src="option.imageLight.src"
            :srcset="option.imageLight.srcset"
            :alt="`Icon for ${label.toLowerCase()} ${option.label.toLowerCase()} in light mode`"
            :style="{ opacity: isLight ? 1 : 0 }" />
        </button>
        <span :class="[cardsSelection.cardLabel, { [cardsSelection.cardLabelActive]: option.value === modelValue }]">
          {{ option.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends string">
import { type CardsSelectionEmits, type CardsSelectionProps } from './cardsSelection.types';

defineProps<CardsSelectionProps<T>>();
const emits = defineEmits<CardsSelectionEmits<T>>();
</script>

<style module="cardsSelection" lang="scss" src="./CardsSelection.scss" />
