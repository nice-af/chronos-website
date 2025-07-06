<template>
  <div>
    <h2 :class="newsletterForm.headline">{{ t('newsletter.headline') }}</h2>
    <template v-if="status === 'idle' || status === 'loading'">
      <p :class="newsletterForm.description">{{ t('newsletter.description') }}</p>
      <form :class="newsletterForm.form">
        <input
          ref="input"
          v-model="email"
          :class="newsletterForm.input"
          type="email"
          placeholder="bruce@wayne-enterprises.com"
          required
          @input="validateEmail" />
        <button
          :class="[newsletterForm.submitButton, { [newsletterForm.isLoading]: status === 'loading' }]"
          type="submit"
          :aria-label="t('newsletter.submitAriaLabel')"
          :disabled="!emailIsValid || status === 'loading'"
          @click.prevent="submitForm">
          <svg v-if="!(status === 'loading')" width="16" height="16" fill="currentColor">
            <path
              d="M.503 8.35L3.41 9.623l8.378-4.57-5.053 5.894 7.243 3.298a.843.843 0 0 0 1.178-.716L15.998.898A.845.845 0 0 0 14.8.079L.482 6.816A.844.844 0 0 0 .503 8.35zM5.051 16l4.022-1.95-4.022-1.877V16z" />
          </svg>
        </button>
      </form>
    </template>
    <div v-else-if="status === 'success'" :class="newsletterForm.messageContainer">
      <svg width="16" height="16" viewBox="0 0 256 256">
        <polyline
          points="40 144 96 200 224 72"
          fill="none"
          stroke="#32d74b"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24" />
      </svg>
      <p :class="newsletterForm.description">{{ t('newsletter.successMessage') }}</p>
    </div>
    <div v-else :class="newsletterForm.messageContainer">
      <svg width="16" height="16" viewBox="0 0 256 256">
        <line
          x1="200"
          y1="56"
          x2="56"
          y2="200"
          fill="none"
          stroke="#d73232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24" />
        <line
          x1="200"
          y1="200"
          x2="56"
          y2="56"
          fill="none"
          stroke="#d73232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24" />
      </svg>
      <p :class="newsletterForm.description">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
import { ref, useTemplateRef } from 'vue';

const email = ref('');
const $input = useTemplateRef('input');
const emailIsValid = ref(false);
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle');
const errorMessage = ref('');

const { t } = useI18n();

async function submitForm() {
  console.log('Submit form');
  status.value = 'loading';

  try {
    const res = await $fetch('/api/brevo-signup', {
      method: 'POST',
      body: JSON.stringify({ email: email.value }),
      headers: { 'Content-Type': 'application/json' },
      ignoreResponseError: true,
    });

    console.log(res);

    if (res.success) {
      status.value = 'success';
    } else {
      status.value = 'error';
      const errorKey = `newsletter.errorMessage.${res.code}`;
      const fallbackMessage = t('newsletter.errorMessage.badRequest');
      errorMessage.value = t(errorKey, fallbackMessage);
    }
  } catch (error) {
    console.error('Newsletter signup error:', error);
    status.value = 'error';
    errorMessage.value = t('newsletter.errorMessage.badRequest');
  }
}

function validateEmail() {
  emailIsValid.value = !!$input.value?.validity.valid;
}
</script>

<style module="newsletterForm" lang="scss" src="./NewsletterForm.scss" />
