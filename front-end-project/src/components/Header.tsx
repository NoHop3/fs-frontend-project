import ThemeToggle from "./ThemeToggle";

const sections = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm tracking-tight transition-colors hover:text-accent">
          stefan<span className="text-accent">.</span>georgiev
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {sections.map((section) => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
