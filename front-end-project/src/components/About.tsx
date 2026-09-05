import { about } from "../content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading index="02" title="About" />
      </Reveal>

      <div className="grid gap-12 pt-10 md:grid-cols-[1fr_18rem] md:gap-16">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted text-pretty">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="space-y-5">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs tracking-widest text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 border-t border-line pt-6">
            <p className="font-mono text-xs tracking-widest text-muted uppercase">Stack</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.stack.core.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                >
                  {tech}
                </li>
              ))}
              {about.stack.also.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
