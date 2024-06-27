<template>
  <div class="wrapper">
    <div :class="configurator.container">
      <img
        :class="configurator.screenshot"
        src="/assets/images/overview-macos-dark.png"
        srcset="/assets/images/overview-macos-dark@2x.png 2x, /assets/images/overview-macos-dark@3x.png 3x"
        width="462"
        height="509"
        alt="A screenshot of the Chronos app" />
      <div>
        <h2 :class="configurator.headline">Highly customizable</h2>
        <p :class="configurator.description">
          Chronos offers lots of customization options to make the app fit your needs. Test the look with different
          options on different platforms right here:
        </p>
        <p :class="configurator.tabsContainer">
          <Tabs :options="osOptions" :value="osValue" @change="value => (osValue = value)" />
        </p>
        <p :class="configurator.cardsContainer">
          <CardsSelection label="Theme" :options="themeOptions" :value="themeValue" @change="handleThemeChange" />
        </p>
        <p :class="configurator.cardsContainer">
          <CardsSelection
            label="Layout"
            :options="currentTheme === 'dark' ? layoutOptionsDark : layoutOptionsLight"
            :value="layoutValue"
            @change="value => (layoutValue = value)" />
        </p>
      </div>
      <div class="dot is-bottom-left" />
      <div class="dot is-bottom-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardsSelection from '../CardsSelection/CardsSelection.vue';
import Tabs from '../Tabs/Tabs.vue';
import {
  themeOptions,
  layoutOptionsDark,
  layoutOptionsLight,
  osOptions,
  type ThemeOptionsValue,
} from './configuratorOptions';

const osValue = ref('macos');

const themeValue = ref('light');
const currentTheme = 'dark';
const systemTheme = 'dark';

function handleThemeChange(value: ThemeOptionsValue) {
  if (value === 'system') {
    themeValue.value = systemTheme;
  } else {
    themeValue.value = value;
  }
}

const layoutValue = ref('default');
</script>

<style module="configurator" lang="scss" src="./Configurator.scss" />
