<template>
  <div id="download" :class="ctaSection.wrapper">
    <div :class="ctaSection.container">
      <h2 ref="headlineRef" class="headline-l headline-gradient" :data-lines="headlineLines ?? undefined">
        Download now
      </h2>
      <p :class="ctaSection.description">
        Arcu potenti laoreet tristique porttitor lobortis praesent rutrum nisl viverra mi, a duis neque cursus class
        quam risus nullam.
      </p>
      <p :class="ctaSection.buttonsContainer">
        <Button label="Download for macOS" href="/404">
          <template #icon><img src="/assets/images/icon-macos.svg" size="20" alt="Apple logo" /></template>
        </Button>
      </p>
      <p :class="ctaSection.buttonsContainer">
        <Button label="Windows app" href="/404" variant="secondary">
          <template #icon><img src="/assets/images/icon-windows.svg" size="20" alt="Windows logo" /></template>
        </Button>
        <Button label="Linux app" href="/404" variant="secondary">
          <template #icon><img src="/assets/images/icon-linux.svg" size="20" alt="Linux logo" /></template>
        </Button>
      </p>
    </div>
    <img
      :class="ctaSection.shine"
      src="/assets/images/shine-bottom.jpg"
      srcset="/assets/images/shine-bottom@2x.jpg 2x, /assets/images/shine-bottom@3x.jpg 3x"
      alt="Lights shining from the bottom"
      width="850"
      height="380"
      class="shine-bottom" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '~/components/Button/Button.vue';
import { useTextLines } from '~/composables/useTextLines';

const headlineRef = ref<HTMLElement>();
const { headlineLines } = useTextLines(headlineRef);
</script>

<style module="ctaSection" lang="scss" src="./CtaSection.scss" />
