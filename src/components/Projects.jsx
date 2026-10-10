import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-3 text-4xl font-extrabold">Projects</h2>
        <p className="mb-10 text-white/75">A few of the projects I've built and improved while learning.</p>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-red-400/60 hover:bg-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 h-40 w-full rounded-xl object-cover"
              />
              <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-white/75">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
