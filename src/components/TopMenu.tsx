import React from 'react';

export const TopMenu = () => {
  return (
    <nav className='relative max-w-6xl mx-auto flex justify-between items-center px-6 py-8'>
      <a
        href='#top'
        className='font-pixel text-2xl tracking-tighter flex items-center gap-3'>
        <span className='size-8 bg-terminal rounded-sm inline-block'></span>
        <span>FERNANDA.EXE</span>
        <span className='animate-blink text-terminal'>_</span>
      </a>
      <div className='hidden md:flex gap-8 text-sm font-bold uppercase items-center'>
        <a href='#work' className='hover:text-accent transition-colors'>
          Work
        </a>
        <a href='#gallery' className='hover:text-accent transition-colors'>
          Gallery
        </a>
        <a href='#about' className='hover:text-accent transition-colors'>
          About
        </a>
        <a
          href='#contact'
          className='bg-ink text-white px-4 py-1 hover:bg-accent transition-colors font-pixel'>
          CONTACT
        </a>
      </div>
      <span className='md:hidden font-mono text-xs'>22:16:48</span>
    </nav>
  );
};
