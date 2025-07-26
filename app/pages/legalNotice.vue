<template>
  <div class="wrapper">
    <div class="legal-page">
      <h1>Legal notice</h1>
      <section>
        <h2>Contact</h2>
        <p>
          Adrian Fahrbach<br />
          Filderstraße 71/1<br />
          70771 Leinfelden-Echterdingen<br />
          E-Mail: <a href="mailto:adrianfahrbach@me.com">adrianfahrbach@me.com</a>
        </p>
      </section>

      <section>
        <h2>Liability for own content</h2>
        <p>
          We are responsible for our own content that we make available for use in accordance with the general laws. We
          assume no guarantee or responsibility for the completeness, editorial and technical errors, omissions, etc. or
          the accuracy of the information contained on this website.
        </p>
      </section>

      <section>
        <h2>Liability for content on third-party websites</h2>
        <p>
          Links to third-party websites are provided for your information only. The responsibility for this third-party
          content lies solely with the provider who makes this content available on the linked website. The internet
          offers of third parties have been checked before the corresponding link was set up.
        </p>
        <p>
          However, we assume no liability for the completeness and accuracy of the information behind a reference or
          link; in particular, the content of these websites may be changed at any time without our knowledge. If we
          become aware of any legal infringements on pages to which we have placed a link on our website, we will remove
          this link immediately.
        </p>
      </section>

      <section>
        <h2>Changes to the information provided</h2>
        <p>We reserve the right to change, supplement or remove the information provided without prior notice.</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineI18nRoute } from '#imports';

defineI18nRoute({
  paths: {
    en: '/legal-notice',
    de: '/impressum',
  },
});
</script>

<style lang="scss" src="~/assets/styles/legal-page.scss" scoped />
