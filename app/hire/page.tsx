import type { Metadata } from "next";
import Link from "next/link";
import { featured, profile, projects } from "../content";
import { Arrow, AvailabilityBadge, BookButton, ContactCta, ExperienceList, ResearchList, SectionTitle } from "../ui";

// For recruiters and hiring managers. Linked from the CV and job applications, not from the
// nav, so business visitors only ever see "taking on freelance projects".
export const metadata: Metadata = {
  title: "Hire Adjetei Martey — AI Engineer",
  alternates: { canonical: "/hire" },
  description:
    "AI engineer open to roles: CTO at Rumate, seven years shipping production software, MSc AI (Distinction). LLM apps, agents, RAG and production ML.",
};

export default function Hire() {
  const demos = projects.filter((p) => p.demo);
  return (
    <>
      <section className="pb-14 pt-14 sm:pt-20">
        <AvailabilityBadge hiring />
        <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-5xl">
          AI engineer. <span className="italic text-accent">Ships things people use.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a href={profile.cv} className="rounded-full bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90">
            Download CV
          </a>
          <a href={profile.github} className="rounded-full border border-line bg-card px-5 py-2.5 hover:border-accent">
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}?subject=Role`}
            className="rounded-full border border-line bg-card px-5 py-2.5 hover:border-accent"
          >
            Email me
          </a>
          <BookButton label="Book a call" />
        </div>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>Experience</SectionTitle>
        <ExperienceList />
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>What I&apos;ve built</SectionTitle>
        <ul className="mt-8 space-y-4 text-[15px] leading-relaxed">
          <li>
            <Link href="/work#unstuck" className="group font-medium text-accent">
              {featured.name} <Arrow />
            </Link>{" "}
            <span className="text-muted">{featured.tagline}</span>
          </li>
          {demos.map((p) => (
            <li key={p.name}>
              <a href={p.demo} className="group font-medium text-accent">
                {p.name} <Arrow />
              </a>{" "}
              <span className="text-muted">
                {p.kind}. {p.forBusiness}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>Research &amp; ML</SectionTitle>
        <div className="mt-8">
          <ResearchList items={projects.filter((p) => !p.demo)} />
        </div>
      </section>

      <ContactCta hiring />
    </>
  );
}
