<template>
  <div class="wrapper">
    <div :class="configurator.container">
      <img
        :class="configurator.screenshot"
        src="/assets/images/overview-macos-dark.png"
        srcset="/assets/images/overview-macos-dark@2x.png 2x"
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
          <Tabs :options="tabsOptions" :value="osValue" @change="value => (osValue = value)" />
        </p>
      </div>
      <div class="dot is-bottom-left" />
      <div class="dot is-bottom-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tabs, { type TabsOption } from '../Tabs/Tabs.vue';

const tabsOptions: TabsOption[] = [
  { label: 'Mac', value: 'macos', iconUrl: '/assets/images/icon-macos.svg' },
  { label: 'Windows', value: 'windows', iconUrl: '/assets/images/icon-windows.svg' },
  { label: 'Linux', value: 'linux', iconUrl: '/assets/images/icon-linux.svg' },
];
const osValue = ref('macos');
</script>

<style module="configurator" lang="scss" src="./Configurator.scss" />
