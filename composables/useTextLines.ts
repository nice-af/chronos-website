import { useResizeObserver, useThrottleFn } from '@vueuse/core';
import { ref, watch, type Ref } from 'vue';

export function useTextLines(headlineRef: Ref<HTMLElement | undefined, HTMLElement | undefined>) {
  const headlineLines = ref<number | null>(null);

  function updateLines() {
    const el = headlineRef.value;
    if (!el) {
      return;
    }
    if (import.meta.client) {
      headlineLines.value = Math.round(el.offsetHeight / parseInt(window.getComputedStyle(el).lineHeight));
    } else {
      headlineLines.value = 1;
    }
  }
  const throttledUpdateLines = useThrottleFn(updateLines, 100);

  watch(headlineRef, () => updateLines());
  useResizeObserver(headlineRef, throttledUpdateLines);
  void throttledUpdateLines();

  return { headlineLines };
}
