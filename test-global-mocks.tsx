import { afterEach, expect, mock } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';

expect.extend({ ...matchers });

afterEach(() => {
  cleanup();
  document.body.innerHTML = '';
});

mock.module('next/image', () => ({
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => (
    // biome-ignore lint/performance/noImgElement: next/image should get mocked.
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid="next-image"
    />
  ),
}));

mock.module('next/link', () => ({
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  ),
}));

mock.module('next-intl', () => ({
  useFormatter: () => ({
    dateTime: (date: Date, options: any) => {
      return new Intl.DateTimeFormat('en-US', options).format(date);
    },
  }),
  useTranslations: () => (key: string) => key,
}));
