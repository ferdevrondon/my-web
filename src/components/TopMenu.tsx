'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import type { Locale } from '@/i18n/config';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Clock from './Clock';

export const TopMenu = ({ dict, lang }: { dict: Dictionary; lang: Locale }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative max-w-6xl mx-auto px-6 py-8'>
      <nav className='flex justify-between items-center'>
        <a
          href='#top'
          className='font-pixel text-2xl tracking-tighter flex items-center gap-3'
        >
          <span className='size-8 bg-primary text-terminal rounded-sm inline-block'>
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
            className='bg-ink text-white px-4 py-1 hover:bg-accent transition-colors font-pixel'
          >
            {dict.nav.contact}
          </a>
          <LanguageSwitcher current={lang} />
        </div>

        {!open && (
          <button
            className='md:hidden'
            onClick={() => setOpen(true)}
            aria-label='Open menu'
          >
            <Menu size={24} />
          </button>
        )}
      </nav>

      {open && (
        <div className='md:hidden fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center gap-10'>
          <button
            className='absolute top-8 right-6'
            onClick={() => setOpen(false)}
            aria-label='Close menu'
          >
            <X size={24} />
          </button>

          <a
            href='#about'
            onClick={() => setOpen(false)}
            className='font-pixel text-2xl uppercase hover:text-accent transition-colors'
          >
            {dict.nav.about}
          </a>
          <a
            href='#work'
            onClick={() => setOpen(false)}
            className='font-pixel text-2xl uppercase hover:text-accent transition-colors'
          >
            {dict.nav.work}
          </a>
          <a
            href='#contact'
            onClick={() => setOpen(false)}
            className='bg-ink text-white px-6 py-2 hover:bg-accent transition-colors font-pixel text-xl uppercase'
          >
            {dict.nav.contact}
          </a>

          <div className='flex items-center gap-4'>
            <Clock />
            <LanguageSwitcher current={lang} />
          </div>
        </div>
      )}
    </div>
  );
};
