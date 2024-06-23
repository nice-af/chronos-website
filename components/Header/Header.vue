<template>
  <div class="wrapper">
    <div :class="header.container">
      <img src="/assets/images/logo-with-text.svg" alt="Vue logo" />
      <ul :class="header.navList">
        <li>
          <NuxtLink to="#features">Features</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#download">Download</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/companion">Companion</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </li>
      </ul>
      <div class="dot is-bottom-left" />
      <div class="dot is-bottom-right" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style module="header" lang="scss" src="./Header.scss" />
