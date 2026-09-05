import { site } from "../content/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="grid items-center gap-12 sm:gap-16 md:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            {site.role} — {site.location}
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {site.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            {site.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={"mailto:" + site.email}
              className="rounded-full bg-ink px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-85"
            >
              Get in touch
            </a>
            {site.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <img
            src="/images/stefan.jpg"
            srcSet="/images/stefan-sm.jpg 500w, /images/stefan.jpg 1000w"
            sizes="(min-width: 768px) 260px, 180px"
            width={1000}
            height={1000}
            alt={"Portrait of " + site.name}
            className="size-44 rounded-2xl object-cover ring-1 ring-line md:size-65"
          />
        </Reveal>
      </div>
    </section>
  );
}
