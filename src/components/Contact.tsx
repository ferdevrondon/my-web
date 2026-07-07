import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Contact({ dict }: { dict: Dictionary }) {
  const t = dict.contact;

  return (
    <section id='contact' className='md:col-span-12 mt-16'>
      <div className='window-shadow relative overflow-hidden border-4 border-ink bg-paper p-8 md:p-12'>
        <header className='mb-6 flex items-center gap-2 border-b-2 border-ink pb-4'>
          <span className='size-3 rounded-full bg-ink'></span>
          <span className='size-3 rounded-full bg-ink'></span>
          <span className='size-3 rounded-full border-2 border-ink'></span>

          <span className='ml-2 font-pixel text-xs uppercase'>{t.fileName}</span>
        </header>

        <div className='grid items-center gap-8 md:grid-cols-2'>
          <div>
            <h2 className='mb-4 font-pixel text-4xl leading-tight md:text-5xl'>
              {t.title1}
              <br />
              <span className='text-accent'>{t.title2}</span>
              <span className='animate-blink text-accent'>_</span>
            </h2>

            <p className='max-w-sm text-sm opacity-80'>{t.description}</p>
          </div>

          <div className='space-y-2 font-mono text-sm'>
            <div>
              <span className='opacity-50'>$ mail </span>
              <a
                href='mailto:hello@fernanda.dev'
                className='underline decoration-2 underline-offset-4 hover:text-accent'>
                ferdevrondon@gmail.com
              </a>
            </div>

            <div>
              <span className='opacity-50'>$ git </span>
              <a
                href='https://github.com/ferdevrondon'
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-2 underline-offset-4 hover:text-accent'>
                github.com/ferdevrondon
              </a>
            </div>

            <div>
              <span className='opacity-50'>$ photo </span>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://instagram.com/fernandxrondon_/'
                className='underline decoration-2 underline-offset-4 hover:text-accent'>
                instagram.com/fernandxrondon_
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
