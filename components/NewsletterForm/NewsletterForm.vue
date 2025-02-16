<template>
  <div>
    <h2 :class="newsletterForm.headline">{{ t('newsletter.headline') }}</h2>
    <template v-if="!isSuccess">
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
          :class="[newsletterForm.submitButton, { [newsletterForm.isLoading]: isLoading }]"
          type="submit"
          :aria-label="t('newsletter.submitAriaLabel')"
          :disabled="!emailIsValid || isLoading"
          @click.prevent="submitForm">
          <svg v-if="!isLoading" width="16" height="16" fill="currentColor">
            <path
              d="M.503 8.35L3.41 9.623l8.378-4.57-5.053 5.894 7.243 3.298a.843.843 0 0 0 1.178-.716L15.998.898A.845.845 0 0 0 14.8.079L.482 6.816A.844.844 0 0 0 .503 8.35zM5.051 16l4.022-1.95-4.022-1.877V16z" />
          </svg>
        </button>
      </form>
    </template>
    <div v-else :class="newsletterForm.successMessage">
      <svg width="16" height="16" viewBox="0 0 256 256">
        <polyline
          points="40 144 96 200 224 72"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24" />
      </svg>
      <p :class="newsletterForm.description">{{ t('newsletter.successMessage') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import { useI18n } from '#imports';

const email = ref('');
const $input = useTemplateRef('input');
const emailIsValid = ref(false);
const isLoading = ref(false);
const isSuccess = ref(false);

const { t } = useI18n();

function submitForm() {
  console.log('Submit form');
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    isSuccess.value = true;
  }, 3000);
}

function validateEmail() {
  emailIsValid.value = !!$input.value?.validity.valid;
}
</script>

<style module="newsletterForm" lang="scss" src="./NewsletterForm.scss" />
