import type messages from '@/i18n/locales/en-US.json';
import type { routing } from '@/i18n/routing';

declare module 'next-intl' {
  interface AppConfig {
    Locale: routing.locales[number];
    Messages: typeof messages;
  }
}
