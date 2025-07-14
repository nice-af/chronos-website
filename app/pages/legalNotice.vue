<template>
  <div class="wrapper"></div>
</template>

<script setup lang="ts">
import { defineI18nRoute } from '#imports';

defineI18nRoute({
  paths: {
    en: '/legal-notice',
    de: '/impressum',
  },
});
</script>
