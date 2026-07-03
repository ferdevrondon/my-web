export const WorkSection = () => {
  return (
       <section id='work' className='md:col-span-12 mt-8'>
          <h2 className='font-pixel text-3xl mb-12 flex items-center gap-4'>
            <span className='size-4 bg-accent inline-block'></span>WORK_HISTORY
            <span className='flex-1 border-b-2 border-dashed border-ink/30'></span>
            <span className='font-mono text-xs opacity-60'>03 entries</span>
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <article className='border-2 border-ink p-6 bg-paper group hover:window-shadow-sm hover:-translate-x-1 hover:-translate-y-1 transition-all'>
              <div className='flex justify-between items-start mb-4'>
                <span className='text-accent font-bold text-xs'>
                  2022 — NOW
                </span>
                <span className='text-[10px] font-pixel border border-ink px-2 py-0.5 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors'>
                  REMOTE
                </span>
              </div>
              <h3 className='font-pixel text-lg leading-none mb-1'>
                LEAD FRONTEND
              </h3>
              <p className='text-sm font-bold opacity-60 mb-4'>
                Vaporwave Studios
              </p>
              <ul className='text-xs space-y-2 opacity-80'>
                <li>Built reactive web apps for the music industry</li>
                <li>
                  · Optimized WebGL shader pipelines and 60fps interactions
                </li>
                <li>
                  · Led design system + component architecture from scratch
                </li>
              </ul>
            </article>
            <article className='border-2 border-ink p-6 bg-paper group hover:window-shadow-sm hover:-translate-x-1 hover:-translate-y-1 transition-all'>
              <div className='flex justify-between items-start mb-4'>
                <span className='text-accent font-bold text-xs'>
                  2020 — 2022
                </span>
                <span className='text-[10px] font-pixel border border-ink px-2 py-0.5 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors'>
                  NYC
                </span>
              </div>
              <h3 className='font-pixel text-lg leading-none mb-1'>
                FULLSTACK DEV
              </h3>
              <p className='text-sm font-bold opacity-60 mb-4'>
                Pixel Dynamics
              </p>
              <ul className='text-xs space-y-2 opacity-80'>
                <li>· Developed a custom CMS for digital artists</li>
                <li>· Scaled AWS infra to serve 50k monthly users</li>
                <li>· Implemented a real-time collaborative canvas engine</li>
              </ul>
            </article>
            <article className='border-2 border-ink p-6 bg-paper group hover:window-shadow-sm hover:-translate-x-1 hover:-translate-y-1 transition-all'>
              <div className='flex justify-between items-start mb-4'>
                <span className='text-accent font-bold text-xs'>
                  2018 — 2020
                </span>
                <span className='text-[10px] font-pixel border border-ink px-2 py-0.5 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors'>
                  GLOBAL
                </span>
              </div>
              <h3 className='font-pixel text-lg leading-none mb-1'>
                FREELANCE ARTIST
              </h3>
              <p className='text-sm font-bold opacity-60 mb-4'>Self-employed</p>
              <ul className='text-xs space-y-2 opacity-80'>
                <li>· Character design commissions for indie RPGs</li>
                <li>· UI/UX consulting for niche creative web tools</li>
                <li>· Self-published the {`'8-Bit Dreams'`} art zine</li>
              </ul>
            </article>
          </div>
        </section>
  )
}
