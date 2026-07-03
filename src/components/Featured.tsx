const projects = [
  {
    title: "Hyperlink.os",
    year: 2024,
    description:
      "A tiny web desktop for creative devs — draggable windows, pixel icons, live shaders.",
    technologies: ["React", "WebGL", "ASCII"],
  },
  {
    title: "Bayer Studio",
    year: 2023,
    description:
      "Real-time dithering engine that turns any image into a 1-bit poster in the browser.",
    technologies: ["GLSL", "WASM"],
  },
  {
    title: "VoidSynth",
    year: 2024,
    description:
      "Experimental synth mapping gravitational-wave data to FM voices.",
    technologies: ["WebAudio", "TS"],
  },
  {
    title: "Zine Machine",
    year: 2022,
    description:
      "CLI + web tool that generates printable pixel-art zines from markdown.",
    technologies: ["Node", "Canvas"],
  },
];

export default function SelectedWork() {
  return (
    <section className="md:col-span-12 mt-12">
      <h2 className="mb-12 flex items-center gap-4 font-pixel text-3xl">
        <span className="inline-block size-4 bg-accent"></span>
        SELECTED_WORK
        <span className="flex-1 border-b-2 border-dashed border-ink/30"></span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="window-shadow-sm border-4 border-ink bg-paper p-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <div className="mb-3 flex items-baseline justify-between">
              <h3 className="hover-glitch font-pixel text-xl">
                {project.title}
              </h3>

              <span className="font-mono text-xs opacity-60">
                [{project.year}]
              </span>
            </div>

            <p className="mb-4 text-sm opacity-80">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-ink px-2 py-0.5 font-pixel text-[10px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}