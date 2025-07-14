<template>
  <div :class="tabs.container">
    <button
      v-for="option in options"
      :key="option.value"
      :class="[tabs.tabButton, { [tabs.tabButtonActive!]: option.value === value }]"
      @click="$emit('change', option.value)">
      <span>{{ option.label }}</span>
      <img v-if="option.iconUrl" :src="option.iconUrl" :alt="`${option.label} icon`" />
    </button>
  </div>
</template>

<script setup lang="ts" generic="T extends string">
import type { TabsProps, TabsEmits } from './tabs.types';
defineProps<TabsProps<T>>();
defineEmits<TabsEmits<T>>();
</script>

<style module="tabs" lang="scss" src="./Tabs.scss" />
