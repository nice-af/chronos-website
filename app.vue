<template>
  <a href="#main" :class="appStyles.skipToContent">Skip to content</a>
  <Header />
  <NuxtPage id="main" />
  <Footer />
</template>

<script setup lang="ts">
import Footer from '~/components/Footer/Footer.vue';
import Header from '~/components/Header/Header.vue';
import { NuxtPage } from '#components';
</script>

<style lang="scss" src="./assets/styles/global.scss" />

<style lang="scss" module="appStyles" scoped>
.skipToContent {
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
  transform: translateY(-110%);
  pointer-events: none;
  transition: transform 0.25s;

  &:focus {
    transform: translateY(0);
    pointer-events: all;
  }
}
</style>
