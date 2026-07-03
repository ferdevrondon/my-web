export default function Contact() {
  return (
    <section id='contact' className='md:col-span-12 mt-16'>
      <div className='window-shadow relative overflow-hidden border-4 border-ink bg-paper p-8 md:p-12'>
        <header className='mb-6 flex items-center gap-2 border-b-2 border-ink pb-4'>
          <span className='size-3 rounded-full bg-ink'></span>
          <span className='size-3 rounded-full bg-ink'></span>
          <span className='size-3 rounded-full border-2 border-ink'></span>

          <span className='ml-2 font-pixel text-xs uppercase'>contact.sh</span>
        </header>

        <div className='grid items-center gap-8 md:grid-cols-2'>
          <div>
            <h2 className='mb-4 font-pixel text-4xl leading-tight md:text-5xl'>
              LET&apos;S BUILD SOMETHING
              <br />
              <span className='text-accent'>STRANGELY BEAUTIFUL</span>
              <span className='animate-blink text-accent'>_</span>
            </h2>

            <p className='max-w-sm text-sm opacity-80'>
              Open for freelance frontend, full-stack, and creative-tech
              collaborations. Also: illustration commissions.
            </p>
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
                  href='https://github.com/fernandaron/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-2 underline-offset-4 hover:text-accent'>
                github.com/fernandaron
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
