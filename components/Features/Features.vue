<template>
  <div class="wrapper">
    <div :class="features.container">
      <div :class="[features.tile, features.tileLarge]">
        <FeatureTile
          :additionalClass="features.largeTile"
          headline="Non hac mattis lectus"
          description="Eros accumsan tempus eleifend purus fringilla elit turpis
        nascetur neque fermentum nulla fames malesuada, pharetra mauris curabitur dis hendrerit class cras primis amet
        quisque morbi.">
          <template #graphic><AppOverviewGraphic /></template>
        </FeatureTile>
      </div>
      <div :class="features.tile">
        <FeatureTile
          headline="Connect multiple accounts"
          description="Manage worklogs from different accounts and workspaces.">
          <template #graphic><AccountCardsGraphic /></template>
        </FeatureTile>
      </div>
      <div :class="features.tile">
        <FeatureTile
          headline="Start/stop tracking"
          description="Start and stop your timers as you go. Track the actual time that you are working on a task.">
          <template #graphic><StartStopGraphic /></template>
        </FeatureTile>
      </div>
      <div :class="features.tile">
        <FeatureTile
          headline="Manual submit"
          description="Take a look at your worklogs and make adjustments before you submit them.">
          <template #graphic><ManualSubmitGraphic /></template>
        </FeatureTile>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeatureTile from '~/components/FeatureTile/FeatureTile.vue';
import AppOverviewGraphic from '~/components/AppOverviewGraphic/AppOverviewGraphic.vue';
import AccountCardsGraphic from '~/components/AccountCardsGraphic/AccountCardsGraphic.vue';
import StartStopGraphic from '~/components/StartStopGraphic/StartStopGraphic.vue';
import ManualSubmitGraphic from '~/components/ManualSubmitGraphic/ManualSubmitGraphic.vue';
</script>

<style module="features" lang="scss" src="./Features.scss" />
