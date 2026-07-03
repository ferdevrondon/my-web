import Image from 'next/image';
import React from 'react';

export const ProfilePicture = () => {
  return (
    <aside id='about' className='md:col-span-5 flex flex-col gap-8'>
      <div className='relative'>
        {/* playful terminal sticker frame */}
        <div className='absolute -top-4 -left-4 z-20 bg-terminal text-terminal-dark font-pixel text-[10px] px-2 py-1 border-2 border-ink rotate-6 window-shadow-sm'>
          HELLO :)
        </div>
        <div className='absolute -top-3 -right-3 z-20 bg-ink text-terminal font-pixel text-[10px] px-2 py-1 border-2 border-terminal rotate-[8deg]'>
          ★ PLAYER_1
        </div>
        <div className='absolute -bottom-3 -right-2 z-20 bg-terminal text-terminal-dark font-pixel text-[10px] px-2 py-1 border-2 border-ink rotate-[-4deg]'>
          LVL 32
        </div>

        <div className='relative w-full aspect-4/5 border-4 border-terminal bg-terminal-dark overflow-hidden window-shadow terminal-scanlines'>
          {/* terminal corners */}
          <div className='absolute top-0 left-0 size-4 bg-terminal z-10' />
          <div className='absolute top-0 right-0 size-4 bg-terminal z-10' />

          {/* green terminal tint overlay */}
          <div
            className='absolute inset-0 z-10 pointer-events-none'
            style={{
              background:
                'linear-gradient(180deg, rgba(0,255,85,0.18) 0%, rgba(0,204,68,0.06) 60%, rgba(5,45,20,0.25) 100%)',
              mixBlendMode: 'overlay',
            }}
          />

          <Image
                src={'/fer.png'}
                alt='Pixel-art portrait of Fernanda'
                width={700}
                height={500}
                className='w-full h-full object-cover terminal-image'
                style={{ imageRendering: 'pixelated' }}
              />

          {/* HUD bar */}
          <div className='absolute bottom-0 inset-x-0 bg-ink text-terminal px-3 py-2 flex items-center justify-between font-pixel text-[10px] border-t-2 border-terminal'>
            <span className='flex items-center gap-1'>
              HP
              <span className='inline-block w-16 h-2 bg-terminal/20 relative'>
                <span className='absolute inset-y-0 left-0 w-[85%] bg-terminal animate-blink' />
              </span>
            </span>
            <span className='flex gap-1'>
              <span className='text-terminal'>♥</span>
              <span className='text-terminal'>♥</span>
              <span className='text-terminal'>♥</span>
              <span className='opacity-40'>♥</span>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
