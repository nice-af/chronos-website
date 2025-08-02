<template>
  <div class="wrapper">
    <div class="legal-page">
      <h1>Privacy Policy</h1>

      <section v-if="$i18n.locale === 'en'">
        <h2>Introduction</h2>
        <p>
          Welcome to our Privacy Policy. Your privacy is critically important to us. This document outlines how we
          collect, use, and protect your personal information when you interact with our website and services.
        </p>
      </section>
      <section v-else>
        <h2>Einleitung</h2>
        <p>
          Willkommen zu unserer Datenschutzerklärung. Ihre Privatsphäre ist uns äußerst wichtig. Dieses Dokument
          beschreibt, wie wir Ihre persönlichen Daten erfassen, verwenden und schützen, wenn Sie mit unserer Website und
          unseren Diensten interagieren.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>Information We Collect</h2>
        <p>
          <strong>Data You Provide:</strong> We collect your email address when you subscribe to our newsletter. This
          information is processed by Brevo, our newsletter management tool, in compliance with GDPR Article 6(1)(a),
          which allows data processing based on your consent. You can review Brevo's privacy policy
          <a
            href="https://www.brevo.com/legal/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Brevo's privacy policy"
            >here</a
          >. Brevo maintains an opt-out list to ensure that no further emails are sent to unsubscribed users.
        </p>
        <p>
          <strong>Data Collected Automatically:</strong> Vercel, our hosting provider, collects server-side analytics,
          including IP addresses, browser details, referrer and exit pages, and usage statistics such as time spent on
          the site. Vercel does not collect precise location data but determines city and country based on IP address.
          This data is processed under GDPR Article 6(1)(f), which allows processing for legitimate interests. You can
          review Vercel's privacy policy
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Vercel's privacy policy"
            >here</a
          >.
        </p>
        <p>
          <strong>Third-Party Data:</strong> We provide links to external platforms like LinkedIn. Please review their
          privacy policies for more information. LinkedIn's privacy policy can be found
          <a
            href="https://www.linkedin.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read LinkedIn's privacy policy"
            >here</a
          >.
        </p>
      </section>
      <section v-else>
        <h2>Informationen, die wir sammeln</h2>
        <p>
          <strong>Daten, die Sie bereitstellen:</strong> Wir erfassen Ihre E-Mail-Adresse, wenn Sie unseren Newsletter
          abonnieren. Diese Informationen werden von Brevo, unserem Newsletter-Management-Tool, gemäß Artikel 6(1)(a)
          der DSGVO verarbeitet, der die Datenverarbeitung auf Grundlage Ihrer Einwilligung erlaubt. Sie können die
          Datenschutzrichtlinie von Brevo
          <a
            href="https://www.brevo.com/legal/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Brevo's privacy policy"
            >hier</a
          >
          einsehen. Brevo führt eine Opt-out-Liste, um sicherzustellen, dass keine weiteren E-Mails an abgemeldete
          Nutzer gesendet werden.
        </p>
        <p>
          <strong>Automatisch erfasste Daten:</strong> Vercel, unser Hosting-Anbieter, erfasst serverseitige Analysen,
          einschließlich IP-Adressen, Browserdetails, Referrer- und Exit-Seiten sowie Nutzungsstatistiken wie die auf
          der Website verbrachte Zeit. Vercel erfasst keine präzisen Standortdaten, sondern bestimmt Stadt und Land
          basierend auf der IP-Adresse. Diese Daten werden gemäß Artikel 6(1)(f) der DSGVO verarbeitet, der die
          Verarbeitung für berechtigte Interessen erlaubt. Sie können die Datenschutzrichtlinie von Vercel
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Vercel's privacy policy"
            >hier</a
          >
          einsehen.
        </p>
        <p>
          <strong>Daten von Drittanbietern:</strong> Wir stellen Links zu externen Plattformen wie LinkedIn bereit.
          Bitte überprüfen Sie deren Datenschutzrichtlinien für weitere Informationen. Die Datenschutzrichtlinie von
          LinkedIn finden Sie
          <a
            href="https://www.linkedin.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read LinkedIn's privacy policy"
            >hier</a
          >.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>How We Use Information</h2>
        <ul>
          <li>To manage newsletter subscriptions and send updates.</li>
          <li>To analyze website performance and ensure security.</li>
          <li>To improve user experience and provide relevant content.</li>
        </ul>
      </section>
      <section v-else>
        <h2>Wie wir Informationen verwenden</h2>
        <ul>
          <li>Um Newsletter-Abonnements zu verwalten und Updates zu senden.</li>
          <li>Um die Leistung der Website zu analysieren und die Sicherheit zu gewährleisten.</li>
          <li>Um die Benutzererfahrung zu verbessern und relevante Inhalte bereitzustellen.</li>
        </ul>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>Cookies</h2>
        <p>We do not use cookies on our website.</p>
      </section>
      <section v-else>
        <h2>Cookies</h2>
        <p>Wir verwenden keine Cookies auf unserer Website.</p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>Third-Party Services</h2>
        <p>
          Our website is hosted on Vercel, which collects analytics data. We also provide links to LinkedIn profiles for
          your convenience. Please review the privacy policies of these services for more information.
        </p>
      </section>
      <section v-else>
        <h2>Drittanbieter-Dienste</h2>
        <p>
          Unsere Website wird auf Vercel gehostet, das Analysedaten sammelt. Wir stellen auch Links zu LinkedIn-Profilen
          zu Ihrer Bequemlichkeit bereit. Bitte überprüfen Sie die Datenschutzrichtlinien dieser Dienste für weitere
          Informationen.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
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
      <section v-else>
        <h2>Benutzerrechte</h2>
        <p>Als Benutzer haben Sie folgende Rechte in Bezug auf Ihre persönlichen Daten:</p>
        <ul>
          <li>
            <strong>Auskunftsrecht:</strong> Sie können Informationen über die persönlichen Daten anfordern, die wir
            über Sie speichern.
          </li>
          <li>
            <strong>Recht auf Berichtigung:</strong> Sie haben das Recht, Korrekturen an ungenauen oder unvollständigen
            persönlichen Daten zu verlangen.
          </li>
          <li>
            <strong>Recht auf Löschung:</strong> Sie können die Löschung Ihrer persönlichen Daten verlangen,
            vorbehaltlich gesetzlicher oder vertraglicher Verpflichtungen.
          </li>
          <li>
            <strong>Recht auf Datenübertragbarkeit:</strong> Sie können eine Kopie Ihrer persönlichen Daten in einem
            strukturierten, maschinenlesbaren Format anfordern.
          </li>
          <li>
            <strong>Recht auf Widerruf der Einwilligung:</strong> Wenn Sie eine Einwilligung zur Datenverarbeitung
            erteilt haben, können Sie diese jederzeit widerrufen.
          </li>
          <li>
            <strong>Recht auf Beschwerde:</strong> Wenn Sie der Meinung sind, dass Ihre Datenschutzrechte verletzt
            wurden, können Sie eine Beschwerde bei der zuständigen Datenschutzbehörde einreichen.
          </li>
        </ul>
        <p>
          Um diese Rechte auszuüben, kontaktieren Sie uns bitte über die im Abschnitt "Kontaktinformationen" angegebenen
          Informationen. Wenn Sie sich von unserem Newsletter abmelden möchten, können Sie dies jederzeit tun, indem Sie
          auf den Abmeldelink in jeder E-Mail klicken. Alternativ können Sie uns direkt kontaktieren, und wir werden
          Ihre Anfrage umgehend bearbeiten.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>Contact Information</h2>
        <p>For privacy-related inquiries, please contact:</p>
        <p>
          Adrian Fahrbach<br />
          Filderstraße 71/1<br />
          70771 Leinfelden-Echterdingen<br />
          Email: <a href="mailto:adrianfahrbach@me.com">adrianfahrbach@me.com</a>
        </p>
      </section>
      <section v-else>
        <h2>Kontaktinformationen</h2>
        <p>Für datenschutzbezogene Anfragen kontaktieren Sie bitte:</p>
        <p>
          Adrian Fahrbach<br />
          Filderstraße 71/1<br />
          70771 Leinfelden-Echterdingen<br />
          E-Mail: <a href="mailto:adrianfahrbach@me.com">adrianfahrbach@me.com</a>
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this policy from time to time. Please review it periodically to stay informed about how we
          protect your information.
        </p>
      </section>
      <section v-else>
        <h2>Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Bitte überprüfen Sie sie regelmäßig, um informiert
          zu bleiben, wie wir Ihre Informationen schützen.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineI18nRoute, useI18n } from '#imports';
import { useJsonld } from '#jsonld';

const { t } = useI18n();

defineI18nRoute({
  paths: {
    en: '/privacy-policy',
    de: '/datenschutzerklaerung',
  },
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
        '@id': '/privacy-policy',
        name: t('global.privacyPolicyWebsite'),
      },
    },
  ],
});
</script>

<style lang="scss" src="~/assets/styles/legal-page.scss" scoped />
