import type { Metadata } from "next";
import { education, experience, profile, skills } from "../content";
import { ContactCta, PageIntro, SectionTitle } from "../ui";

export const metadata: Metadata = {
  title: "About — Adjetei Martey",
  description: "Experience, education and skills: CTO at Rumate, software engineer at Nguvu Global (2019–2026), MSc AI (Distinction).",
};

export default function About() {
  return (
    <>
      <PageIntro title="About">{profile.intro}</PageIntro>

      <section className="border-t border-line py-16">
        <SectionTitle>Experience</SectionTitle>
        <ol className="mt-8 space-y-10">
          {experience.map((e) => (
            <li key={e.role} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <p className="text-sm text-muted">{e.period}</p>
              <div>
                <h3 className="font-medium">
                  {e.role} <span className="text-muted">· {e.org}</span>
                </h3>
                <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <a href={profile.cv} className="mt-10 inline-block rounded-full border border-line px-5 py-2.5 text-sm hover:border-foreground">
          Download CV
        </a>
      </section>

      <section className="grid gap-12 border-t border-line py-16 sm:grid-cols-2">
        <div>
          <SectionTitle>Education</SectionTitle>
          <ul className="mt-8 space-y-6">
            {education.map((ed) => (
              <li key={ed.degree}>
                <h3 className="font-medium">{ed.degree}</h3>
                <p className="text-sm text-muted">
                  {ed.org} · {ed.year}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{ed.note}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle>Skills</SectionTitle>
          <dl className="mt-8 space-y-5">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="font-medium">{s.group}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-muted">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
