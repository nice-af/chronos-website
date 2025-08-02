<template>
  <div class="wrapper">
    <div class="legal-page">
      <h1>Privacy Policy</h1>

      <section v-if="$i18n.locale === 'en'">
        <h2>Introduction</h2>
        <p>
          Welcome to the privacy policy for the Chronos macOS app. Your privacy is critically important to us. This
          document outlines how we collect, use, and protect your personal information when you use the Chronos app.
        </p>
      </section>
      <section v-else>
        <h2>Einleitung</h2>
        <p>
          Willkommen zur Datenschutzerklärung für die Chronos macOS-App. Ihre Privatsphäre ist uns äußerst wichtig.
          Dieses Dokument beschreibt, wie wir Ihre persönlichen Daten erfassen, verwenden und schützen, wenn Sie die
          Chronos-App nutzen.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>Information We Collect</h2>
        <p>
          <strong>Data You Provide:</strong> When you connect your Jira account, we collect your account information,
          including authentication tokens, to enable app functionality.
        </p>
        <p>
          <strong>Data Collected Automatically:</strong> The app fetches Jira issues and syncs worklogs, including
          details such as time spent and issue descriptions. The app also interacts with macOS system APIs, such as file
          timestamps, to provide its features.
        </p>
      </section>
      <section v-else>
        <h2>Informationen, die wir sammeln</h2>
        <p>
          <strong>Daten, die Sie bereitstellen:</strong> Wenn Sie Ihr Jira-Konto verbinden, erfassen wir Ihre
          Kontoinformationen, einschließlich Authentifizierungstokens, um die App-Funktionalität zu ermöglichen.
        </p>
        <p>
          <strong>Automatisch erfasste Daten:</strong> Die App ruft Jira-Vorgänge ab und synchronisiert
          Arbeitsprotokolle, einschließlich Details wie aufgewendeter Zeit und Vorgangsbeschreibungen. Die App
          interagiert auch mit macOS-System-APIs, wie Dateizeitstempeln, um ihre Funktionen bereitzustellen.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>How We Use Information</h2>
        <ul>
          <li>To authenticate your Jira account and enable API interactions.</li>
          <li>To sync worklogs and fetch Jira issues.</li>
          <li>To manage user preferences for tracking and notifications.</li>
          <li>To provide macOS-specific features, such as notifications and system API access.</li>
        </ul>
      </section>
      <section v-else>
        <h2>Wie wir Informationen verwenden</h2>
        <ul>
          <li>Um Ihr Jira-Konto zu authentifizieren und API-Interaktionen zu ermöglichen.</li>
          <li>Um Arbeitsprotokolle zu synchronisieren und Jira-Vorgänge abzurufen.</li>
          <li>Um Benutzereinstellungen für Tracking und Benachrichtigungen zu verwalten.</li>
          <li>
            Um macOS-spezifische Funktionen bereitzustellen, wie Benachrichtigungen und den Zugriff auf System-APIs.
          </li>
        </ul>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>Data Storage</h2>
        <p>
          All user data, including OAuth tokens, login information, and preferences, is stored locally on your device
          using AsyncStorage. No data is stored on external servers beyond what is shared with Jira.
        </p>
      </section>
      <section v-else>
        <h2>Datenaufbewahrung</h2>
        <p>
          Alle Benutzerdaten, einschließlich OAuth-Tokens, Anmeldeinformationen und Einstellungen, werden lokal auf
          Ihrem Gerät mit AsyncStorage gespeichert. Es werden keine Daten auf externen Servern gespeichert, außer
          denjenigen, die mit Jira geteilt werden.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>Data Sharing</h2>
        <p>
          The app shares data exclusively with Jira servers for syncing worklogs and fetching issues. No data is shared
          with third parties beyond Jira.
        </p>
      </section>
      <section v-else>
        <h2>Datenweitergabe</h2>
        <p>
          Die App teilt Daten ausschließlich mit Jira-Servern, um Arbeitsprotokolle zu synchronisieren und Vorgänge
          abzurufen. Es werden keine Daten mit Dritten außerhalb von Jira geteilt.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>OAuth URL Requests</h2>
        <p>
          The app communicates with our website to generate OAuth URLs for login. These requests are sent to our website
          hosted on Vercel. As part of its server-side analytics, Vercel may log these requests, including details such
          as IP addresses and request metadata. For more information, please review Vercel's privacy policy
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Vercel's privacy policy"
            >here</a
          >.
        </p>
      </section>
      <section v-else>
        <h2>OAuth-URL-Anfragen</h2>
        <p>
          Die App kommuniziert mit unserer Website, um OAuth-URLs für die Anmeldung zu generieren. Diese Anfragen werden
          an unsere auf Vercel gehostete Website gesendet. Im Rahmen seiner serverseitigen Analysen kann Vercel diese
          Anfragen protokollieren, einschließlich Details wie IP-Adressen und Anfragemetadaten. Weitere Informationen
          finden Sie in der Datenschutzrichtlinie von Vercel
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Vercel's privacy policy"
            >hier</a
          >.
        </p>
      </section>

      <section v-if="$i18n.locale === 'en'">
        <h2>User Consent</h2>
        <p>
          The app includes user-facing prompts to obtain your consent for connecting your Jira account and enabling
          notifications.
        </p>
      </section>
      <section v-else>
        <h2>Benutzereinwilligung</h2>
        <p>
          Die App enthält benutzerorientierte Aufforderungen, um Ihre Zustimmung zur Verbindung Ihres Jira-Kontos und
          zur Aktivierung von Benachrichtigungen einzuholen.
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
    en: '/privacy-policy-app',
    de: '/datenschutzerklaerung-app',
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
        '@id': '/privacy-policy-app',
        name: t('global.privacyPolicyApp'),
      },
    },
  ],
});
</script>

<style lang="scss" src="~/assets/styles/legal-page.scss" scoped />
