const work = [
  {
    year: '2019 - 2025',
    title: 'Frontend Engineer – Product & Team Collaboration',
    company: 'Big Smart / Pinit ',
    location: 'Mexico City',
    description:
      'Developed key React-based frontend features and optimized workflows, worked closely with design and backend teams, collaborated across disciplines to shape product logic, and progressed into a product engineering lead role.',
  },
  {
    year: '2024',
    title: 'Web Developer',
    company: 'New Institute / NADD',
    location: 'Remote',
    description:
      'Development of a geolocated visual archive for the HOW DO WE REMEMBER project. Complementing the StoryMaps platform with content creation and interactive map configuration',
  },
  {
    year: '2023',
    title: 'Web Developer',
    company: 'Counter / Narratives Foundation',
    location: 'Remote',
    description:
      'Developed the Archival Horizons geolocated narrative archive—a digital mapping platform preserving the oral (hi)stories of the ABCSSS islands—using custom WordPress features with JavaScript, PHP.',
  },
  {
    year: '2019',
    title: 'Junior Web Developer',
    location: 'Mexico City',
    company: 'GAFA',
    description:
      'Support and maintenance of existing applications as part of the development team. Handle ticket handling, resolve issues, and collaborate on visual adjustments, functional improvements.',
  },
];

export const WorkSection = () => {
  return (
    <section id='work' className='md:col-span-12 mt-8'>
      <h2 className='font-pixel text-3xl mb-12 flex items-center gap-4'>
        <span className='size-4 bg-accent inline-block'></span>WORK_HISTORY
        <span className='flex-1 border-b-2 border-dashed border-ink/30'></span>
        <span className='font-mono text-xs opacity-60'>03 entries</span>
      </h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {work.map((item) => (
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
