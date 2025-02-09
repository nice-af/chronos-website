import { useResizeObserver, useThrottleFn } from '@vueuse/core';
import { ref, watch, type ShallowRef } from 'vue';

export function useTextLines(headlineRef: Readonly<ShallowRef<HTMLHeadingElement | null>>) {
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
