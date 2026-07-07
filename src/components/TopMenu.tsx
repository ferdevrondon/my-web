import React from 'react';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import type { Locale } from '@/i18n/config';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const TopMenu = ({ dict, lang }: { dict: Dictionary; lang: Locale }) => {
  return (
    <nav className='relative max-w-6xl mx-auto flex justify-between items-center px-6 py-8'>
      <a
        href='#top'
        className='font-pixel text-2xl tracking-tighter flex items-center gap-3'>
        <span className='size-8 bg-primary  text-terminal rounded-sm inline-block'>
          FR
        </span>
        <span>FERNANDA.EXE</span>
        <span className='animate-blink text-terminal'>_</span>
      </a>
      <div className='hidden md:flex gap-8 text-sm font-bold uppercase items-center'>
        <a href='#about' className='hover:text-accent transition-colors'>
          {dict.nav.about}
        </a>
        <a href='#work' className='hover:text-accent transition-colors'>
          {dict.nav.work}
        </a>

        <a
          href='#contact'
          className='bg-ink text-white px-4 py-1 hover:bg-accent transition-colors font-pixel'>
          {dict.nav.contact}
        </a>
        <LanguageSwitcher current={lang} />
      </div>
      <span className='md:hidden font-mono text-xs'>22:16:48</span>
    </nav>
  );
};
