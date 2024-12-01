<template>
  <div id="download" :class="faq.wrapper">
    <div :class="faq.headlineContainer">
      <h2 ref="headlineRef" class="headline-l headline-gradient" :data-lines="headlineLines ?? undefined">
        {{ headline }}
      </h2>
    </div>
    <div :class="faq.entriesContainer">
      <template v-for="([category, entries], index) in Object.entries(categories)" :key="category">
        <hr v-if="index > 0" :class="faq.line" />
        <div :class="faq.category">
          <h3 class="headline-m">{{ category }}</h3>
          <div>
            <FaqEntry
              v-for="entry in entries"
              :key="entry.question"
              :question="entry.question"
              :answer="entry.answer" />
          </div>
        </div>
      </template>
      <div class="dot is-top-left"></div>
      <div class="dot is-top-right"></div>
      <div class="dot is-bottom-left"></div>
      <div class="dot is-bottom-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTextLines } from '~/composables/useTextLines';
import type { FaqEntryProps } from '~/components/FaqEntry/FaqEntry.vue';
import FaqEntry from '~/components/FaqEntry/FaqEntry.vue';

export interface FaqProps {
  headline: string;
  categories: Record<string, FaqEntryProps[]>;
}

defineProps<FaqProps>();

const headlineRef = ref<HTMLElement>();
const { headlineLines } = useTextLines(headlineRef);
</script>

<style module="faq" lang="scss" src="./Faq.scss" />
