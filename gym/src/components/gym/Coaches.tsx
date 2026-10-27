import Image from "next/image";
import { coaches } from "@/data/gym";

export function Coaches() {
  return (
    <section id="coaches" className="scroll-mt-16 border-y border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-kicker">02 — Coaches</p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
          Trained By <span className="text-primary">The Best</span>
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Certified, competitive and constantly on the floor with you — not behind a desk.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach) => (
            <article
              key={coach.name}
              className="group overflow-hidden border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {coach.role}
                </p>
                <h3 className="mt-2 font-display text-2xl uppercase text-foreground transition-colors group-hover:text-primary">
                  {coach.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{coach.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
