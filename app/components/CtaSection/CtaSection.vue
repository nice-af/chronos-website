<template>
  <section id="download" :class="ctaSection.wrapper">
    <div :class="ctaSection.container">
      <h2
        ref="headline"
        :class="ctaSection.headline"
        class="headline-l headline-gradient"
        :data-lines="headlineLines?.toString() ?? undefined">
        {{ t('ctaSection.headline') }}
      </h2>
      <p :class="ctaSection.description">
        {{ t('ctaSection.description') }}
      </p>
      <p :class="ctaSection.buttonsContainer">
        <Button
          :label="t('global.downloadForPlatform', { platform: 'macOS' })"
          :href="config.public.DOWNLOAD_MACOS_URL">
          <template #icon><PhAppStoreLogo size="22" weight="bold" /></template>
        </Button>
      </p>
    </div>
    <img
      :class="ctaSection.shine"
      src="/assets/images/shine-bottom.jpg"
      srcset="/assets/images/shine-bottom@2x.jpg 2x, /assets/images/shine-bottom@3x.jpg 3x"
      width="850"
      height="380"
      alt=""
      role="presentation" />
  </section>
</template>

<script setup lang="ts">
import { useI18n, useRuntimeConfig } from '#imports';
import { PhAppStoreLogo } from '@phosphor-icons/vue';
import { useTemplateRef } from 'vue';
import Button from '~/components/Button/Button.vue';
import { useTextLines } from '~/composables/useTextLines';

const $headline = useTemplateRef('headline');
const { headlineLines } = useTextLines($headline);
const { t } = useI18n();
const config = useRuntimeConfig();
</script>

<style module="ctaSection" lang="scss" src="./CtaSection.scss" />
