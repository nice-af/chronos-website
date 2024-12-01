<template>
  <div class="wrapper">
    <Faq :headline="t('faq.headline')" :categories="categories" />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import type { FaqProps } from '~/components/Faq/Faq.vue';
import CtaSection from '~/components/CtaSection/CtaSection.vue';
import Faq from '~/components/Faq/Faq.vue';
import { useI18n, useRuntimeConfig } from '#imports';

const { t } = useI18n();
const config = useRuntimeConfig();

const envs = {
  SOURCE_CODE_URL: config.public.SOURCE_CODE_URL,
  SUPPORT_EMAIL: config.public.SUPPORT_EMAIL,
};

const categories: FaqProps['categories'] = {
  [t('faq.appAndFeatures.headline')]: [
    {
      question: t('faq.appAndFeatures.whatIsChronos.question'),
      answer: t('faq.appAndFeatures.whatIsChronos.answer', envs),
    },
    {
      question: t('faq.appAndFeatures.adminPermissions.question'),
      answer: t('faq.appAndFeatures.adminPermissions.answer', envs),
    },
    {
      question: t('faq.appAndFeatures.supportedPlatforms.question'),
      answer: t('faq.appAndFeatures.supportedPlatforms.answer', envs),
    },
    {
      question: t('faq.appAndFeatures.otherThenJira.question'),
      answer: t('faq.appAndFeatures.otherThenJira.answer', envs),
    },
    {
      question: t('faq.appAndFeatures.builtWith.question'),
      answer: t('faq.appAndFeatures.builtWith.answer', envs),
    },
    {
      question: t('faq.appAndFeatures.freeAlternative.question'),
      answer: t('faq.appAndFeatures.freeAlternative.answer', envs),
    },
  ],
  [t('faq.supportAndContact.headline')]: [
    {
      question: t('faq.supportAndContact.foundBug.question'),
      answer: t('faq.supportAndContact.foundBug.answer', envs),
    },
    {
      question: t('faq.supportAndContact.missingFeatures.question'),
      answer: t('faq.supportAndContact.missingFeatures.answer', envs),
    },
    {
      question: t('faq.supportAndContact.notWorkingRefund.question'),
      answer: t('faq.supportAndContact.notWorkingRefund.answer', envs),
    },
    {
      question: t('faq.supportAndContact.iWantToHelp.question'),
      answer: t('faq.supportAndContact.iWantToHelp.answer', envs),
    },
  ],
};
</script>
