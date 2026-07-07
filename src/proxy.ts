import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { defaultLocale, locales } from '@/i18n/config';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(',')
      .map((part) => part.split(';')[0].trim().split('-')[0]);

    for (const language of preferred) {
      if ((locales as readonly string[]).includes(language)) {
        return language;
      }
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = (locales as readonly string[]).some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return;

  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)'],
};
