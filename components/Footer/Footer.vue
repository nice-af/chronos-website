<template>
  <div class="wrapper">
    <div :class="footer.container">
      <div :class="footer.topRow">
        <img src="/assets/images/logo-with-text.svg" alt="Chronos logo" />
        <nav>
          <ul :class="footer.navContainer">
            <li :class="footer.list">
              <p :class="footer.listHeadline">Socials</p>
              <ul>
                <li><NuxtLink to="https://www.linkedin.com/in/adrian-fahrbach/">LinkedIn Adrian</NuxtLink></li>
                <li><NuxtLink to="https://www.linkedin.com/in/florian-mrz/">LinkedIn Florian</NuxtLink></li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">Resources</p>
              <ul>
                <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                <li><NuxtLink to="mailto:support@chronos-for-jira.com">Support</NuxtLink></li>
                <li><NuxtLink to="https://github.com/nice-af/chronos-app">Source code</NuxtLink></li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">App Download</p>
              <ul>
                <li><NuxtLink to="/404">macOS</NuxtLink></li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">Browser extensions</p>
              <ul>
                <li>
                  <NuxtLink to="https://chromewebstore.google.com/detail/ffabeiojbdhkmllfadkidohlkjochcan">
                    Chrome
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">Legal information</p>
              <ul>
                <li><NuxtLink to="/404">Legal notice</NuxtLink></li>
                <li><NuxtLink to="/404">Privacy policy</NuxtLink></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <p :class="footer.bottomText">&copy; {{ thisYear }} Chronos by Adrian Fahrbach & Florian Merz</p>
      <div class="dot is-top-left"></div>
      <div class="dot is-top-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

const thisYear = new Date().getFullYear();
</script>

<style module="footer" lang="scss" src="./Footer.scss" />
