const updatedProjects = [
  {
    title: 'Archival Horizons',
    description:
      'A semi open source map where the (hi)stories and perspectives of the ABCSSS (Diaspora) are at the center.',
    isPublic: true,
    technologies: ['JavaScript', 'PHP', 'Wordpress', 'HTML', 'CSS'],
    url: 'https://archivalhorizonsmap.com/',
  },
  {
    title: 'Gato Verde',
    description:
      'Landing page for a holistic wellness brand, featuring service and product catalogs with direct WhatsApp contact for bookings and purchases.',
    isPublic: true,
    technologies: ['React', 'Next', 'Typescript'],
    url: 'https://clickdraw-sigma.vercel.app/',
  },
  {
    title: 'click-and-draw',
    description: 'This is a web tool to help you build drawing ideas! by giving you a escene to draw,  ( caracther + place + action )',
    isPublic: true,
    technologies: ['JavaScript', 'HTML', 'CSS'],
     url: 'https://clickdraw-sigma.vercel.app/',
  },
  {
    title: 'mxn-to-jpn',
    description:
      'A simple app to help converte MXN to JPN in case your travel to JAPAN! to make more easy keep update of the exchange rates!',
    isPublic: true,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://ferdevrondon.github.io/converter_app/',
  },
  {
    title: 'pixel-piano',
    description:
      'This is a fun, interactive virtual piano you can play right in your browser using your computer keyboard!',
    isPublic: true,
    technologies: ['JavaScript', 'HTML', 'CSS'],

    url: 'https://ferdevrondon.github.io/pixel_piano/',
  },
  {
    title: 'tetris-game',
    description: 'fun nostalgic website to play tetris',
    isPublic: true,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://ferdevrondon.github.io/tetris-rush/',
  },
];


export default function SelectedWork() {
  return (
    <section className='md:col-span-12 mt-12'>
      <h2 className='mb-12 flex items-center gap-4 font-pixel text-3xl'>
        <span className='inline-block size-4 bg-accent'></span>
        SELECTED_WORK
        <span className='flex-1 border-b-2 border-dashed border-ink/30'></span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
  {updatedProjects.map((project) => (
    <a
      key={project.title}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block">
      <article className="window-shadow-sm cursor-pointer border-4 border-ink bg-paper p-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
        <div className="mb-3 flex items-baseline justify-between">
          <h3 className="hover-glitch font-pixel text-xl">
            {project.title}
          </h3>
        </div>

        <p className="mb-4 text-sm opacity-80">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="border border-ink px-2 py-0.5 font-pixel text-[10px]">
              {tech}
            </span>
          ))}
        </div>
      </article>
    </a>
  ))}
</div>
    </section>
  );
}
