import { onMounted, type ShallowRef } from 'vue';

interface Entry {
  el: Readonly<ShallowRef<HTMLElement | null>>;
  speed?: number;
}

export function useParallaxScrolling(entries: Entry[]) {
  function handleScroll() {
    const viewportHeight = window.innerHeight;
    entries.forEach(entry => {
      if (entry.el.value) {
        const scrollY = window.scrollY;
        const offsetTop = entry.el.value.offsetTop;
        const elementCenter = offsetTop + entry.el.value.offsetHeight / 2;
        const distanceToViewportCenter = elementCenter - (scrollY + viewportHeight / 2);
        const speed = entry.speed ?? 0.5;
        entry.el.value.style.transform = `translateY(${distanceToViewportCenter * speed}px)`;
      }
    });
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });

  return {
    handleScroll,
  };
}
