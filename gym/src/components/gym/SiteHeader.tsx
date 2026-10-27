import { brand, navLinks } from "@/data/gym";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-display text-xl uppercase tracking-wide text-foreground">
          {brand.name} <span className="text-primary">{brand.suffix}</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
        >
          {brand.ctaPrimary}
        </a>
      </div>
    </header>
  );
}
