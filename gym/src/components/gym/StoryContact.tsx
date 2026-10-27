"use client";

import { brand, contactInfo, navLinks, storyPoints } from "@/data/gym";
import { useState, type FormEvent } from "react";

export function Story() {
  return (
    <section id="story" className="scroll-mt-16 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="section-kicker">05 — Our Story</p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
            Built On <span className="text-primary">Sweat</span>, Not Hype
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            We opened in 2018 with three racks, one punching bag and a simple rule: nobody trains
            alone. Eight years later the floor is bigger, but the rule hasn't changed.
          </p>
          <p className="mt-4 max-w-lg font-display text-2xl uppercase leading-snug text-foreground">
            "Show up. Do the work. <span className="text-primary">Repeat.</span>"
          </p>
        </div>
        <div className="space-y-6">
          {storyPoints.map((point, index) => (
            <div key={point.title} className="flex gap-5 border border-border bg-card p-6 shadow-card">
              <span className="font-display text-3xl text-primary">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-lg uppercase text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "warning" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = (await response.json()) as { emailSent?: boolean };

      if (!response.ok) {
        throw new Error("The request could not be saved.");
      }

      setSubmissionState(result.emailSent ? "success" : "warning");
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="section-kicker">06 — Contact</p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
            Claim Your <span className="text-primary">Free Week</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Seven days, full access, a coach-led first session. No card required — just bring
            shoes.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Address</dt>
              <dd className="mt-1 text-muted-foreground">{contactInfo.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Hours</dt>
              <dd className="mt-1 text-muted-foreground">{contactInfo.hours}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Phone</dt>
              <dd className="mt-1 text-muted-foreground">{contactInfo.phone}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Email</dt>
              <dd className="mt-1 text-muted-foreground">{contactInfo.email}</dd>
            </div>
          </dl>
        </div>

        {submissionState === "success" || submissionState === "warning" ? (
          <div className="flex items-center border border-primary bg-card p-10 shadow-glow">
            <div>
              <h3 className="font-display text-3xl uppercase text-primary">
                {submissionState === "success" ? "You're In." : "Request Saved."}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {submissionState === "success"
                  ? "We'll inform you within 24 hours about the program you applied for."
                  : "Your request is saved, but we couldn't confirm the email notification. Please call us to follow up."}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 border border-border bg-card p-8 shadow-card">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  name="name"
                  placeholder="Your full name"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </span>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="03xx xxx xxxx"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Goal
              </span>
              <select
                name="goal"
                className="mt-2 w-full border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
              >
                <option>Build strength</option>
                <option>Lose weight</option>
                <option>Learn boxing</option>
                <option>General fitness</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Message (optional)
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Anything we should know?"
                className="mt-2 w-full resize-none border border-input bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </label>
            {submissionState === "error" && (
              <p role="alert" className="text-sm text-destructive">
                We couldn't submit your request. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={submissionState === "sending"}
              className="w-full bg-primary py-4 text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
            >
              {submissionState === "sending" ? "Sending..." : "Send Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#top" className="font-display text-lg uppercase text-foreground">
            {brand.name} <span className="text-primary">{brand.suffix}</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {brand.tagline}. Expert coaching, honest work, and a crew that keeps showing up.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-xs uppercase text-foreground">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="transition-colors hover:text-primary" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="transition-colors hover:text-primary" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xs uppercase text-foreground">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
            <p>{contactInfo.address}</p>
            <p>
              <a className="transition-colors hover:text-primary" href={`tel:${contactInfo.phone}`}>
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a className="transition-colors hover:text-primary" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </p>
            <p className="text-xs leading-relaxed">{contactInfo.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {brand.name} {brand.suffix}. All rights reserved.</p>
          <p>{contactInfo.address}</p>
        </div>
      </div>
    </footer>
  );
}
