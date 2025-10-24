import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-US', 'el-GR'],
  localePrefix: 'as-needed',
  defaultLocale: 'en-US',
  pathnames: {
    '/': '/',
    '/movies': {
      'el-GR': '/tainies',
    },
  },
});
