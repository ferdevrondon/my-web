import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export const ProfilePicture = ({ dict }: { dict: Dictionary }) => {
  const t = dict.profile;

  return (
    <aside id='about' className='md:col-span-5 flex flex-col gap-8'>
      <div className='relative'>
        <figure className='group border-2 border-ink bg-paper p-2 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:window-shadow-sm'>
          <div className='relative aspect-square overflow-hidden border-2 border-ink bg-accent-soft'>
            <div
              className='absolute inset-0 opacity-25'
              style={{
                backgroundImage:
                  'radial-gradient(circle, #121212 1px, transparent 1px)',
                backgroundSize: '4px 4px',
              }}
            />

            <div className='absolute inset-0 flex items-center justify-center px-2 text-center font-pixel text-xs text-ink opacity-70'>
              <Image
                src={'/fer.png'}
                alt={t.alt}
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <figcaption className='mt-2 flex items-center justify-between px-1'>
            <span className='font-mono text-[10px] opacity-60'>
              {t.imgLabel}
            </span>

            <span className='font-pixel text-[10px] text-accent'>
              {t.photoLabel}
            </span>
          </figcaption>
        </figure>
      </div>
    </aside>
  );
};
