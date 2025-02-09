<template>
  <div class="wrapper">
    <div :class="footer.container">
      <div :class="footer.topRow">
        <NuxtLink :class="footer.logoLink" to="/">
          <img src="/assets/images/logo-with-text.svg" alt="Chronose logo" />
        </NuxtLink>
        <nav>
          <ul :class="footer.navContainer">
            <li :class="footer.list">
              <p :class="footer.listHeadline">{{ t('global.language') }}</p>
              <ul>
                <li>
                  <NuxtLink :to="switchLocalePath('en')">{{ t('global.english') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="switchLocalePath('de')"> {{ t('global.german') }}</NuxtLink>
                </li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">{{ t('global.socials') }}</p>
              <ul>
                <li>
                  <NuxtLink to="https://www.linkedin.com/in/adrian-fahrbach/">
                    {{ t('global.linkedInAdrian') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://www.linkedin.com/in/florian-mrz/">
                    {{ t('global.linkedInFlorian') }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">{{ t('global.resources') }}</p>
              <ul>
                <li>
                  <NuxtLink :to="localePath('faq')">{{ t('global.faq') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="config.public.SUPPORT_URL">{{ t('global.support') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="config.public.SOURCE_CODE_URL">{{ t('global.sourceCode') }}</NuxtLink>
                </li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">{{ t('global.download') }}</p>
              <ul>
                <li>
                  <NuxtLink :to="config.public.DOWNLOAD_MACOS_URL">{{
                    t('global.platformApp', { platform: 'macOS' })
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="config.public.COMPANION_CHROME_URL">{{
                    t('global.platformCompanion', { platform: 'Chrome' })
                  }}</NuxtLink>
                </li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">{{ t('global.legalInformation') }}</p>
              <ul>
                <li>
                  <NuxtLink :to="localePath('legalNotice')">{{ t('global.legalNotice') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('privacy')">{{ t('global.privacyPolicy') }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <p :class="footer.bottomText">
        <span>&copy; {{ thisYear }} Chronos {{ t('global.by') }} </span>
        <a href="https://github.com/nice-af" :class="footer.madeByText" target="_blank" rel="noopener noreferrer">
          <img :class="footer.niceAFLogo" src="/assets/images/nice-af-pixel-logo.svg" alt="Nice AF logo" />
          <span :class="footer.niceAF">Nice A.F.</span>
          <span :class="footer.names">Adrian & Florian</span>
        </a>
      </p>
      <div class="dot is-top-left"></div>
      <div class="dot is-top-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import { useI18n, useLocalePath, useRuntimeConfig, useSwitchLocalePath } from '#imports';

const switchLocalePath = useSwitchLocalePath();
const { t } = useI18n();
const thisYear = new Date().getFullYear();
const config = useRuntimeConfig();
const localePath = useLocalePath();
</script>

<style module="footer" lang="scss" src="./Footer.scss" />
