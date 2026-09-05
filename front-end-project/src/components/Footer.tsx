import { site } from "../content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading index="03" title="Contact" />

        <div className="pt-10">
          <p className="max-w-xl text-lg leading-relaxed text-muted text-pretty">
            Open to interesting problems, side projects and a good conversation about either.
          </p>

          <a
            href={"mailto:" + site.email}
            className="mt-6 inline-block text-2xl font-semibold tracking-tight break-all transition-colors hover:text-accent sm:text-4xl"
          >
            {site.email}
          </a>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {site.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <p className="mt-20 border-t border-line pt-6 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
