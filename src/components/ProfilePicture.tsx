import Image from 'next/image';


export const ProfilePicture = () => {
  return (
    <aside id='about' className='md:col-span-5 flex flex-col gap-8'>
      <div className='relative'>
        {/* playful terminal sticker frame */}
        <figure className='group border-2 border-ink bg-paper p-2 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:window-shadow-sm'>
          <div className='relative aspect-square overflow-hidden border-2 border-ink bg-accent-soft'>
            {/* Pixel pattern */}
            <div
              className='absolute inset-0 opacity-25'
              style={{
                backgroundImage:
                  'radial-gradient(circle, #121212 1px, transparent 1px)',
                backgroundSize: '4px 4px',
              }}
            />

            {/* Replace this with your image */}
            <div className='absolute inset-0 flex items-center justify-center px-2 text-center font-pixel text-xs text-ink opacity-70'>
           <Image 
           src={'/fer.png'}
           alt='life is boring'
           width={1000}
           height={1000}
           
           />
            </div>
          </div>

          <figcaption className='mt-2 flex items-center justify-between px-1'>
            <span className='font-mono text-[10px] opacity-60'>img_04.png</span>

            <span className='font-pixel text-[10px] text-accent'>PHOTO</span>
          </figcaption>
        </figure>
      </div>
    </aside>
  );
};
