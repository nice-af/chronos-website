<template>
  <div>
    <label :class="cardsSelection.label">{{ label }}</label>
    <div :class="cardsSelection.cardsContainer">
      <div :key="option.value" v-for="option in options">
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
            :alt="`Icon for ${label.toLowerCase()} ${option.label.toLowerCase()}`" />
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
