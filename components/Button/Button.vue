<template>
  <component
    :is="props.href ? NuxtLink : 'button'"
    :class="{
      [button.container]: true,
      [button.isSecondary]: variant === 'secondary',
      [button.isPrimary]: !variant || variant === 'primary',
      [button.isPill]: isPill,
    }">
    <span>{{ label }}</span>
    <slot name="icon"></slot>
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

const props = defineProps<{
  label: string;
  icon?: Element;
  variant?: 'primary' | 'secondary';
  isPill?: boolean;
  href?: string;
}>();
</script>

<style module="button" lang="scss" src="./Button.scss" />
