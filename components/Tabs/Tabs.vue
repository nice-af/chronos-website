<template>
  <div :class="tabs.container">
    <button
      :class="[tabs.tabButton, { [tabs.tabButtonActive]: option.value === value }]"
      @click="$emit('change', option.value)"
      v-for="option in options">
      <span>{{ option.label }}</span>
      <img v-if="option.iconUrl" :src="option.iconUrl" :alt="`${option.label} icon`" />
    </button>
  </div>
</template>

<script setup lang="ts">
export interface TabsOption {
  label: string;
  value: string;
  iconUrl?: string;
}

interface TabsProps {
  options: TabsOption[];
  value: string;
}

defineProps<TabsProps>();
</script>

<style module="tabs" lang="scss" src="./Tabs.scss" />
