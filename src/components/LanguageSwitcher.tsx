'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  const hrefFor = (locale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/') || `/${locale}`;
  };

  return (
    <span className='flex items-center gap-1 font-pixel text-xs'>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={hrefFor(locale)}
          aria-current={locale === current ? 'true' : undefined}
          className={
            locale === current
              ? 'text-accent'
              : 'opacity-60 hover:text-accent transition-colors'
          }>
          {localeNames[locale]}
        </Link>
      ))}
    </span>
  );
}
