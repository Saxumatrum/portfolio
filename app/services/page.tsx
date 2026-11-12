import type { Metadata } from "next";
import Link from "next/link";
import { profile, services, steps } from "../content";
import { Arrow, AvailabilityBadge, ContactCta, SectionTitle } from "../ui";

export const metadata: Metadata = {
  title: "Services — Adjetei Martey",
  description:
    "Freelance AI development: document assistants, automated data entry, support triage and full AI products. Remote, worldwide.",
};

export default function Services() {
  return (
    <>
      <section className="pb-14 pt-14 sm:pt-20">
        <AvailabilityBadge />
        <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-5xl">
          AI that does real work for your business.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          I design and build AI tools for teams that want the hours back, not a science project. Every service
          below has a working demo you can try before we talk.
        </p>
        <a
          href={`mailto:${profile.email}?subject=Project enquiry`}
          className="mt-8 inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-85"
        >
          Tell me about your project
        </a>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>What I can build for you</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col rounded-2xl border border-line bg-card p-6">
              <h2 className="font-serif text-2xl">{s.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{s.pitch}</p>
              <Link href={s.proof.href} className="group mt-5 text-sm font-medium text-accent">
                See it working: {s.proof.name} <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>How it works</SectionTitle>
        <ol className="mt-8 grid gap-6 sm:grid-cols-4">
          {steps.map((p, i) => (
            <li key={p.step}>
              <p className="font-serif text-3xl text-muted">{i + 1}</p>
              <h3 className="mt-2 font-medium">{p.step}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-muted">
          Pricing depends on what you need, so we&apos;ll agree it on the call before any work starts.
        </p>
      </section>

      <ContactCta />
    </>
  );
}
