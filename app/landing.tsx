import Link from "next/link";
import { profile } from "./content";
import { Arrow, ContactCta, SectionTitle } from "./ui";

const SITE = "https://adjetei-martey.vercel.app";

/** Everything a search landing page says. Keep every line backed by a real demo or offer.md. */
export type Landing = {
  path: string;
  crumb: string;
  service: string; // schema.org Service name
  description: string; // meta description, also used in structured data
  h1: string;
  intro: string;
  mailSubject: string;
  askLabel: string;
  problemsTitle?: string;
  problems: [string, string][];
  doesTitle: string;
  does: string[];
  demo: { href: string; label: string; text: string };
  faqs: [string, string][];
};

export function LandingPage({ l }: { l: Landing }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: l.service,
        provider: { "@id": `${SITE}/#person` },
        areaServed: ["United Kingdom", "Worldwide"],
        url: SITE + l.path,
        description: l.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: l.faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pb-14 pt-14 sm:pt-20">
        <p className="text-sm text-muted">
          <Link href="/services" className="hover:text-foreground">Services</Link> / {l.crumb}
        </p>
        <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-5xl">{l.h1}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{l.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={l.demo.href}
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Try the live demo
          </a>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(l.mailSubject)}`}
            className="inline-block rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:bg-card"
          >
            {l.askLabel}
          </a>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>{l.problemsTitle ?? "Sound familiar?"}</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {l.problems.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-line bg-card p-6">
              <h2 className="font-serif text-2xl">{t}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>{l.doesTitle}</SectionTitle>
        <ul className="mt-8 space-y-4">
          {l.does.map((d) => (
            <li key={d} className="flex gap-3 text-[15px] leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>See it working</SectionTitle>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">{l.demo.text}</p>
        <a href={l.demo.href} className="group mt-5 inline-block text-sm font-medium text-accent">
          {l.demo.label} <Arrow />
        </a>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>Questions</SectionTitle>
        <div className="mt-8 space-y-6">
          {l.faqs.map(([q, a]) => (
            <div key={q}>
              <h3 className="font-medium">{q}</h3>
              <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-muted">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}

/** Same where-and-how-much answers on every landing page. */
export const commonFaqs: [string, string][] = [
  [
    "Where are you based? Do you work with businesses elsewhere?",
    "I'm in London, and everything is set up and run remotely, so I work with businesses anywhere in the UK and abroad.",
  ],
  [
    "How much does it cost?",
    "It depends on what you need, so we agree a fixed price on a free call before any work starts.",
  ],
];
