<template>
  <div class="wrapper">
    <Faq headline="FAQ" :categories="categories" />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import type { FaqProps } from '~/components/Faq/Faq.vue';
import CtaSection from '~/components/CtaSection/CtaSection.vue';
import Faq from '~/components/Faq/Faq.vue';

const categories: FaqProps['categories'] = {
  'App & features': [
    {
      question: 'Auctor suspendisse erat natoque potenti?',
      answer:
        'Facilisis enim at nullam sagittis lorem nibh accumsan netus, eros nulla ad odio aliquet porta dui, placerat dignissim ultrices fermentum justo nisi primis.',
    },
    {
      question: 'Ut rutrum sociosqu quam morbi feugiat commodo ridiculus?',
      answer:
        'Gravida porttitor duis nascetur maximus dolor placerat in blandit fames viverra facilisi pretium potenti suscipit augue lacus erat cubilia imperdiet.',
    },
    {
      question: 'Vivamus auctor aliquam?',
      answer:
        'Vivamus auctor aliquam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.',
    },
    {
      question: 'Dui inceptos massa lobortis class luctus feugiat pharetra fringilla?',
      answer:
        'Elementum vestibulum erat quam senectus fringilla mattis torquent ullamcorper eleifend, lorem duis non maximus donec molestie lobortis in egestas, tincidunt sit mi ut convallis nisi phasellus vel. Faucibus netus proin purus feugiat rhoncus magna nibh nunc metus tellus erat, at suscipit himenaeos hendrerit luctus varius tortor felis lectus nostra.',
    },
  ],
  'Support & contact': [
    {
      question: 'Auctor suspendisse erat natoque potenti?',
      answer:
        'Facilisis enim at nullam sagittis lorem nibh accumsan netus, eros nulla ad odio aliquet porta dui, placerat dignissim ultrices fermentum justo nisi primis.',
    },
    {
      question: 'Ut rutrum sociosqu quam morbi feugiat commodo ridiculus?',
      answer:
        'Gravida porttitor duis nascetur maximus dolor placerat in blandit fames viverra facilisi pretium potenti suscipit augue lacus erat cubilia imperdiet.',
    },
    {
      question: 'Vivamus auctor aliquam?',
      answer:
        'Viv amus auctor aliquam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.',
    },
    {
      question: 'Dui inceptos massa lobortis class luctus feugiat pharetra fringilla?',
      answer:
        'Elementum vestibulum erat quam senectus fringilla mattis torquent ullamcorper eleifend, lorem duis non maximus donec molestie lobortis in egestas, tincidunt sit mi ut convallis nisi phasellus vel. Faucibus netus proin purus feugiat rhoncus magna nibh nunc metus tellus erat, at suscipit himenaeos hendrerit luctus varius tortor felis lectus nostra.',
    },
  ],
};
</script>
