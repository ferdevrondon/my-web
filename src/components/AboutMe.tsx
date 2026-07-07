import React from 'react';
import Clock from './Clock';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export const AboutMe = ({ dict }: { dict: Dictionary }) => {
  const t = dict.about;

  return (
    <section className='md:col-span-7 space-y-8'>
      <div className='bg-paper border-4 border-ink p-8 window-shadow'>
        <header className='flex items-center gap-2 mb-6 border-b-2 border-ink pb-4'>
          <span className='size-3 rounded-full bg-ink'></span>
          <span className='size-3 rounded-full bg-ink'></span>
          <span className='size-3 rounded-full border-2 border-ink'></span>
          <span className='ml-2 font-pixel text-xs uppercase'>
            {t.fileName}
          </span>
          <Clock />
        </header>
        <h1 className='text-5xl md:text-7xl font-pixel leading-[1.1] mb-6'>
          {t.titleLead} <span className='text-accent italic'>{t.titleAccent}</span>
          <span className='animate-blink'>.</span>
        </h1>
        <p className='text-lg max-w-md leading-relaxed'>
          {t.bio}
        </p>
        <div className='mt-8 flex flex-wrap gap-4'>
          <a
            href='#work'
            className='bg-accent text-white font-pixel px-6 py-3 border-2 border-ink hover:translate-x-1 hover:translate-y-1 transition-transform'>
            {t.viewWork}
          </a>
          <a
            href='#contact'
            className='border-2 border-ink font-pixel px-6 py-3 hover:bg-ink hover:text-white transition-colors'>
            {t.sayHi}
          </a>
        </div>
      </div>
    </section>
  );
};
