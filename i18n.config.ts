import en from './locales/en.json';
import de from './locales/de.json';
import { defineI18nConfig } from '#imports';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    de,
  },
  warnHtmlMessage: false,
}));
