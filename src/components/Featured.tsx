import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function SelectedWork({ dict }: { dict: Dictionary }) {
  const t = dict.featured;

  return (
    <section className='md:col-span-12 mt-12'>
      <h2 className='mb-12 flex items-center gap-4 font-pixel text-3xl'>
        <span className='inline-block size-4 bg-accent'></span>
        {t.heading}
        <span className='flex-1 border-b-2 border-dashed border-ink/30'></span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {t.items.map((project) => (
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
