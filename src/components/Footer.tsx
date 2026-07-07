import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Footer({ dict }: { dict: Dictionary }) {
  const t = dict.footer;

  return (
    <footer className='relative mt-24 border-t-4 border-ink bg-paper px-6 py-10'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row'>
        <div className='text-center md:text-left'>
          <div className='mb-1 font-pixel text-xl'>{t.stayConnected}</div>

          <p className='text-sm opacity-60'>{t.tagline}</p>
        </div>

        <div className='flex gap-6 font-pixel text-xs'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/ferdevrondon'
            className='bg-terminal'>
            {t.github}
          </a>

          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/fernandaron/'
            className='bg-terminal'>
            {t.linkedin}
          </a>
        </div>

        <div className='font-mono text-[10px] opacity-40'>{t.copyright}</div>
      </div>
    </footer>
  );
}
