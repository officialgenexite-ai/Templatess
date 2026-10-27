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
              className="border border-border bg-card p-6 text-center shadow-card transition-colors hover:border-primary"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary font-display text-2xl text-primary">
                {coach.initials}
              </div>
              <h3 className="mt-5 font-display text-xl uppercase text-foreground">{coach.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {coach.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{coach.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
