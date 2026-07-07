import type { Dictionary } from '@/app/[lang]/dictionaries';

export const WorkSection = ({ dict }: { dict: Dictionary }) => {
  const t = dict.work;

  return (
    <section id='work' className='md:col-span-12 mt-8'>
      <h2 className='font-pixel text-3xl mb-12 flex items-center gap-4'>
        <span className='size-4 bg-accent inline-block'></span>
        {t.heading}
        <span className='flex-1 border-b-2 border-dashed border-ink/30'></span>
        <span className='font-mono text-xs opacity-60'>{t.entries}</span>
      </h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {t.items.map((item) => (
          <article
            key={item.year}
            className='border-2 border-ink p-6 bg-paper group hover:window-shadow-sm hover:-translate-x-1 hover:-translate-y-1 transition-all'>
            <div className='flex justify-between items-start mb-4'>
              <span className='text-accent font-bold text-xs'>{item.year}</span>
              <span className='text-[10px] font-pixel border border-ink px-2 py-0.5 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors'>
                {item.location}
              </span>
            </div>
            <h3 className='font-pixel text-lg leading-none mb-1'>
              {item.title}
            </h3>
            <p className='text-sm font-bold opacity-60 mb-4'>{item.company}</p>
            <ul className='text-xs space-y-2 opacity-80'>
              <li>{item.description}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
