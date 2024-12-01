<template>
  <div class="wrapper">
    <div :class="header.container">
      <NuxtLink :class="header.logoLink" to="/">
        <img src="/assets/images/logo-with-text.svg" alt="Vue logo" />
      </NuxtLink>
      <nav>
        <ul :class="header.navList">
          <li>
            <NuxtLink to="#features">Features</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#download">Download</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://chromewebstore.google.com/detail/ffabeiojbdhkmllfadkidohlkjochcan">
              Companion
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq">FAQ</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="dot is-bottom-left"></div>
      <div class="dot is-bottom-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<style module="header" lang="scss" src="./Header.scss" />
