import type { Metadata } from "next";
import { featured, projects } from "../content";
import {
  Arrow,
  Chips,
  ContactCta,
  PageIntro,
  ProjectCard,
  ResearchList,
  SectionTitle,
  UnstuckImages,
} from "../ui";
import { WorkMotif } from "../art";

export const metadata: Metadata = {
  title: "AI Projects and Live Demos — Adjetei Martey",
  alternates: { canonical: "/work" },
  description: "Unstuck, live LLM demos (agents, RAG, structured extraction) and computer vision projects.",
};

export default function Work() {
  return (
    <>
      <PageIntro title="Work" art={<WorkMotif className="h-full w-full" />}>
        One product in beta, three LLM apps you can try right here, and the computer vision projects behind them.
      </PageIntro>

      <section id="unstuck" className="scroll-mt-8 border-t border-line py-16">
        <SectionTitle>Featured project</SectionTitle>
        <div className="mt-8">
          <h2 className="font-serif text-4xl">{featured.name}</h2>
          <p className="mt-2 text-lg">{featured.tagline}</p>
          <p className="mt-1 text-sm text-accent">{featured.status}</p>
          <p className="mt-5 leading-relaxed text-muted">{featured.summary}</p>
          <h3 className="mt-6 text-sm font-medium">What I built</h3>
          <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-muted">
            {featured.built.map((b) => (
              <li key={b} className="flex gap-3">
                <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Chips items={featured.stack} />
          </div>
          <a href={featured.url} className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            letsunstuck.com <Arrow />
          </a>
        </div>
        <div className="mt-10">
          <UnstuckImages />
        </div>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>Live demos</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects
            .filter((p) => p.demo)
            .map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
        </div>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>Research &amp; ML</SectionTitle>
        <div className="mt-8">
          <ResearchList items={projects.filter((p) => !p.demo)} />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
