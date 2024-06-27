<template>
  <div :class="appOverviewGraphic.container">
    <img
      :class="appOverviewGraphic.screenshot"
      src="/assets/images/overview-macos-dark.png"
      srcset="/assets/images/overview-macos-dark@2x.png 2x, /assets/images/overview-macos-dark@3x.png 3x"
      width="462"
      height="509"
      alt="A screenshot of the Chronos app" />
  </div>
</template>

<style module="appOverviewGraphic" lang="scss" src="./AppOverviewGraphic.scss" />
