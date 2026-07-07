import 'server-only';

import type { Locale } from '@/i18n/config';

const dictionaries = {
  en: () => import('@/app/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/app/dictionaries/es.json').then((module) => module.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['en']>>;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]() as Promise<Dictionary>;
