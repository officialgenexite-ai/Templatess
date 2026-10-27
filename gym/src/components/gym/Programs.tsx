import Image from "next/image";
import { programs } from "@/data/gym";

export function Programs() {
  return (
    <section id="training" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-kicker">01 — Training</p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
          Pick Your <span className="text-primary">Battle</span>
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Three tracks, one standard. Every program is coach-led and periodised — no random
          workouts, no wasted sessions.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group overflow-hidden border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-2xl uppercase text-foreground transition-colors group-hover:text-primary">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
