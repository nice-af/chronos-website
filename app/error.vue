<template>
  <a href="#main" class="skip-to-content">{{ t('global.skipToContent') }}</a>
  <Header />
  <main id="main">
    <div class="wrapper">
      <div :class="errorPage.container">
        <h1 :class="[errorPage.headline, 'headline-gradient']" data-lines="1">404</h1>
        <h2 :class="[errorPage.descriptionHeadline]">{{ t('fourOhFour.headline') }}</h2>
        <p :class="[errorPage.description]">{{ t('fourOhFour.description') }}</p>
        <NuxtLink to="/" :class="errorPage.link">{{ t('fourOhFour.linkText') }}</NuxtLink>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from '~/components/Footer/Footer.vue';
import Header from '~/components/Header/Header.vue';
import { NuxtLink } from '#components';
import { useI18n } from '#imports';

const { t } = useI18n();
</script>

<style lang="scss" src="./assets/styles/global.scss" />
<style lang="scss" src="./error.scss" module="errorPage" />
