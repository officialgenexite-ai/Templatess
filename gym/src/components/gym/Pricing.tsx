import { plans } from "@/data/gym";

export function Pricing() {
  return (
    <section id="membership" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-kicker">03 — Membership</p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
          Pay For <span className="text-primary">Results</span>
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Transparent monthly rates in PKR. No joining fee, cancel anytime with 14 days' notice.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.highlight
                  ? "relative border-2 border-primary bg-card p-8 shadow-glow"
                  : "border border-border bg-card p-8 shadow-card"
              }
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl uppercase text-foreground">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-sm font-semibold text-muted-foreground">PKR</span>
                <span
                  className={plan.highlight ? "font-display text-5xl text-primary" : "font-display text-5xl text-foreground"}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span aria-hidden className="mt-0.5 font-bold text-primary">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  plan.highlight
                    ? "mt-8 block bg-primary py-3 text-center text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                    : "mt-8 block border border-border py-3 text-center text-sm font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary hover:text-primary"
                }
              >
                Start {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
