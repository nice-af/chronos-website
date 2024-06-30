<template>
  <div class="wrapper">
    <div :class="footer.container">
      <div :class="footer.topRow">
        <img src="/assets/images/logo-with-text.svg" alt="Vue logo" />
        <nav>
          <ul :class="footer.navContainer">
            <li :class="footer.list">
              <p :class="footer.listHeadline">Socials</p>
              <ul>
                <li><NuxtLink to="/404">LinkedIn Adrian</NuxtLink></li>
                <li><NuxtLink to="/404">LinkedIn Florian</NuxtLink></li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">Resources</p>
              <ul>
                <li><NuxtLink to="/404">FAQ</NuxtLink></li>
                <li><NuxtLink to="/404">Support</NuxtLink></li>
                <li><NuxtLink to="/404">Source code</NuxtLink></li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">App Download</p>
              <ul>
                <li><NuxtLink to="/404">macOS</NuxtLink></li>
                <li><NuxtLink to="/404">Windows</NuxtLink></li>
                <li><NuxtLink to="/404">Linux</NuxtLink></li>
              </ul>
            </li>
            <li :class="footer.list">
              <p :class="footer.listHeadline">Browser extensions</p>
              <ul>
                <li><NuxtLink to="/404">Chrome</NuxtLink></li>
                <li><NuxtLink to="/404">Safari</NuxtLink></li>
                <li><NuxtLink to="/404">Firefox</NuxtLink></li>
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
      <div class="dot is-top-left" />
      <div class="dot is-top-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
const thisYear = new Date().getFullYear();
</script>

<style module="footer" lang="scss" src="./Footer.scss" />
