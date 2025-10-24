'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  const t = useTranslations();

  useEffect(() => {
    setNow(new Date());
  }, []);

  if (!now) {
    return null;
  }

  return <p>{t('Clock.theTimeIs', { time: now })}</p>;
}
