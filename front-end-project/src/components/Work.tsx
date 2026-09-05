import { projects } from "../content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading index="01" title="Selected work" />
      </Reveal>

      <ol>
        {projects.map((project, index) => (
          <li key={project.title}>
            <Reveal delay={index * 80}>
              <article className="grid gap-4 border-b border-line py-10 md:grid-cols-[7rem_1fr] md:gap-8">
                <p className="font-mono text-xs text-muted md:pt-1.5">
                  {String(index + 1).padStart(2, "0")} — {project.year}
                </p>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>

                  <p className="mt-3 max-w-2xl leading-relaxed text-muted text-pretty">
                    {project.summary}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent"
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <a
          href="https://github.com/NoHop3?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Everything else on GitHub ↗
        </a>
      </Reveal>
    </section>
  );
}
