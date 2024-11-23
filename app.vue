<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup lang="ts">
import Footer from '~/components/Footer/Footer.vue';
import Header from '~/components/Header/Header.vue';
import { NuxtPage } from '#components';
</script>

<style lang="scss" src="./assets/styles/global.scss" />
