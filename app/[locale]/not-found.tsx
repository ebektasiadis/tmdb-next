'use client';

import NextError from 'next/error';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

export default function NotFound() {
  const { resolvedTheme } = useTheme();
  const t = useTranslations();

  return (
    <div className="absolute top-0 left-0 h-full w-full bg-white dark:bg-black">
      <NextError
        statusCode={404}
        title={t('NotFoundPage.description')}
        withDarkMode={resolvedTheme === 'dark'}
      />
    </div>
  );
}
