import Image from "next/image";
import { brand, heroGym, stats } from "@/data/gym";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src={heroGym}
        alt="GRINDHAUS gym floor at night"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <p className="section-kicker">
          <span aria-hidden className="h-px w-10 bg-primary" />
          {brand.tagline}
        </p>
        <h1 className="mt-6 font-display text-[clamp(3.75rem,11vw,10rem)] uppercase leading-[0.9] text-foreground">
          {brand.heroLine}
          <br />
          <span className="text-primary">{brand.heroLineAccent}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {brand.heroText}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            {brand.ctaPrimary}
          </a>
          <a
            href="#training"
            className="border border-border px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {brand.ctaSecondary}
          </a>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-3xl text-primary">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
