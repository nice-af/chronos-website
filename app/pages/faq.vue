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
import { useJsonld } from '#jsonld';

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
      question: t('faq.appAndFeatures.selfHostedJira.question'),
      answer: t('faq.appAndFeatures.selfHostedJira.answer', envs),
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
    {
      question: t('faq.appAndFeatures.freeTrial.question'),
      answer: t('faq.appAndFeatures.freeTrial.answer', envs),
    },
    {
      question: t('faq.appAndFeatures.offlineUsage.question'),
      answer: t('faq.appAndFeatures.offlineUsage.answer', envs),
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
    {
      question: t('faq.supportAndContact.supportLanguage.question'),
      answer: t('faq.supportAndContact.supportLanguage.answer', envs),
    },
    {
      question: t('faq.supportAndContact.loginError.question'),
      answer: t('faq.supportAndContact.loginError.answer', envs),
    },
  ],
  [t('faq.securityAndPrivacy.headline')]: [
    {
      question: t('faq.securityAndPrivacy.dataHandling.question'),
      answer: t('faq.securityAndPrivacy.dataHandling.answer', envs),
    },
    {
      question: t('faq.securityAndPrivacy.jiraCredentials.question'),
      answer: t('faq.securityAndPrivacy.jiraCredentials.answer', envs),
    },
  ],
};

/**
 * Add faq schema to the page
 */
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: Object.entries(categories).flatMap(([_category, items]) =>
    items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
});

/**
 * Add breadcrumb schema to the page
 */
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': '/',
        name: t('global.home'),
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@id': '/faq',
        name: t('global.faq'),
      },
    },
  ],
});
</script>
