<template>
  <div class="wrapper">
    <div class="legal-page">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to our Privacy Policy. Your privacy is critically important to us. This document outlines how we
          collect, use, and protect your personal information when you interact with our website and services.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          <strong>Data You Provide:</strong> We collect your email address when you subscribe to our newsletter. This
          information is processed by Brevo, our newsletter management tool, in compliance with GDPR Article 6(1)(a),
          which allows data processing based on your consent. You can review Brevo's privacy policy
          <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank">here</a>.
        </p>
        <p>
          <strong>Data Collected Automatically:</strong> Vercel, our hosting provider, collects server-side analytics,
          including IP addresses and browser details, to ensure website performance and security. This data is processed
          under GDPR Article 6(1)(f), which allows processing for legitimate interests. You can review Vercel's privacy
          policy <a href="https://vercel.com/legal/privacy-policy" target="_blank">here</a>.
        </p>
        <p>
          <strong>Third-Party Data:</strong> We provide links to external platforms like LinkedIn. Please review their
          privacy policies for more information. LinkedIn's privacy policy can be found
          <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">here</a>.
        </p>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <ul>
          <li>To manage newsletter subscriptions and send updates.</li>
          <li>To analyze website performance and ensure security.</li>
          <li>To improve user experience and provide relevant content.</li>
        </ul>
      </section>

      <section>
        <h2>Cookies and Tracking</h2>
        <p>We do not use cookies on our website.</p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>
          Our website is hosted on Vercel, which collects analytics data. We also provide links to LinkedIn profiles for
          your convenience. Please review the privacy policies of these services for more information.
        </p>
      </section>

      <section>
        <h2>User Rights</h2>
        <p>As a user, you have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Access:</strong> You can request information about the personal data we hold about you.</li>
          <li>
            <strong>Correction:</strong> You have the right to request corrections to any inaccurate or incomplete
            personal data.
          </li>
          <li>
            <strong>Deletion:</strong> You can request the deletion of your personal data, subject to legal or
            contractual obligations.
          </li>
          <li>
            <strong>Data Portability:</strong> You can request a copy of your personal data in a structured,
            machine-readable format.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> If you have provided consent for data processing, you can withdraw it at
            any time.
          </li>
          <li>
            <strong>File a Complaint:</strong> If you believe your data rights have been violated, you can file a
            complaint with the relevant data protection authority.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information provided in the "Contact Information"
          section. If you wish to unsubscribe from our newsletter, you can do so at any time by clicking the unsubscribe
          link included in each email. Alternatively, you may contact us directly, and we will promptly handle your
          request.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>For privacy-related inquiries, please contact:</p>
        <p>
          Adrian Fahrbach<br />
          Filderstraße 71/1<br />
          70771 Leinfelden-Echterdingen<br />
          Email: <a href="mailto:adrianfahrbach@me.com">adrianfahrbach@me.com</a>
        </p>
      </section>

      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this policy from time to time. Please review it periodically to stay informed about how we
          protect your information.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineI18nRoute } from '#imports';

defineI18nRoute({
  paths: {
    en: '/privacy',
    de: '/datenschutzerklaerung',
  },
});
</script>

<style lang="scss" src="~/assets/styles/legal-page.scss" scoped />
