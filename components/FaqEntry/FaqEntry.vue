<template>
  <details ref="$container" :class="faqEntry.container" :open="elementisOpen" @click="handleClick">
    <summary class="headline-s" :class="[faqEntry.question, { [faqEntry.isActive]: isOpen }]">
      {{ question }}
      <svg
        :class="faqEntry.marker"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        width="18"
        height="18"
        fill="currentColor"
        stroke="none">
        <rect
          x="0"
          y="8"
          width="18"
          height="2"
          :class="faqEntry.markerLine"
          :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: isOpen ? 0 : 1 }" />
        <rect
          x="8"
          y="0"
          width="2"
          height="18"
          :class="faqEntry.markerLine"
          :style="{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }" />
      </svg>
    </summary>
    <div ref="$answer" :class="faqEntry.answer" @transitionend="handleTransitionEnd">
      <div :class="faqEntry.answerContainer" v-html="answer"></div>
    </div>
  </details>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface FaqEntryProps {
  question: string;
  answer: string;
}

defineProps<FaqEntryProps>();

const $container = ref<HTMLDetailsElement>();
const $answer = ref<HTMLDivElement>();
const isOpen = ref(false);
const elementisOpen = ref(false);
const isTransitioning = ref(false);

function handleClick(e: Event) {
  e.preventDefault();

  if (isTransitioning.value || !$container.value || !$answer.value) {
    return;
  }

  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    // We immediately open the details element to gain access to the child elements
    elementisOpen.value = true;
  }

  requestAnimationFrame(() => {
    isTransitioning.value = true;
    const fullHeight = `${$answer.value?.scrollHeight}px`;
    $answer.value!.style.height = isOpen.value ? '0px' : fullHeight;
    requestAnimationFrame(() => {
      $answer.value!.style.height = isOpen.value ? fullHeight : '0px';
      $answer.value!.style.opacity = isOpen.value ? '0.6' : '0';
    });
  });
}

function handleTransitionEnd() {
  if (isOpen.value) {
    $answer.value!.style.height = 'auto';
  } else {
    // We didn't close the element yet, so we have to close it here
    elementisOpen.value = false;
  }
  isTransitioning.value = false;
}
</script>

<style module="faqEntry" lang="scss" src="./FaqEntry.scss" />
