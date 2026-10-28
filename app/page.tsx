import Image from "next/image";
import { education, experience, featured, profile, projects, skills } from "./content";

function SectionTitle({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-xs font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </h2>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}

function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
      →
    </span>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="flex items-center justify-between py-6">
        <a href="#top" className="font-serif text-lg">
          {profile.name}
        </a>
        <nav className="flex gap-5 text-sm text-muted">
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#experience" className="hover:text-foreground">Experience</a>
          <a href={profile.cv} className="hover:text-foreground">CV</a>
        </nav>
      </header>

      <main id="top">
        {/* Intro */}
        <section className="pb-20 pt-14 sm:pt-24">
          <p className="text-sm text-muted">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-foreground px-5 py-2.5 font-medium text-background hover:opacity-85"
            >
              Get in touch
            </a>
            <a href={profile.github} className="rounded-full border border-line px-5 py-2.5 hover:border-foreground">
              GitHub
            </a>
            <a href={profile.cv} className="rounded-full border border-line px-5 py-2.5 hover:border-foreground">
              Download CV
            </a>
          </div>
        </section>

        {/* Featured */}
        <section className="border-t border-line py-16">
          <SectionTitle id="work">Featured project</SectionTitle>
          <div className="mt-8 grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h3 className="font-serif text-4xl">{featured.name}</h3>
              <p className="mt-2 text-lg">{featured.tagline}</p>
              <p className="mt-1 text-sm text-accent">{featured.status}</p>
              <p className="mt-5 leading-relaxed text-muted">{featured.summary}</p>
              <h4 className="mt-6 text-sm font-medium">What I built</h4>
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
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            {featured.images.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl border border-line bg-card">
                <Image src={img.src} alt={img.alt} width={780} height={1688} className="h-auto w-full" />
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="border-t border-line py-16">
          <SectionTitle>More projects</SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-foreground/40"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-muted">{p.kind}</p>
                <h3 className="mt-2 font-serif text-2xl">{p.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{p.summary}</p>
                <div className="mt-5">
                  <Chips items={p.stack} />
                </div>
                <div className="mt-5 flex items-center gap-5 text-sm">
                  {p.demo && (
                    <a href={p.demo} className="group font-medium text-accent">
                      Try it live <Arrow />
                    </a>
                  )}
                  <a
                    href={p.repo}
                    className={p.demo ? "group text-muted hover:text-foreground" : "group text-accent"}
                  >
                    Code <Arrow />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-line py-16">
          <SectionTitle id="experience">Experience</SectionTitle>
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
        </section>

        {/* Education + skills */}
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

        {/* Contact */}
        <section className="border-t border-line py-20">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Hiring for an AI engineer?
            <br />
            <span className="italic text-muted">Let&apos;s talk.</span>
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-2 text-lg text-accent"
          >
            {profile.email} <Arrow />
          </a>
        </section>
      </main>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-line py-8 text-sm text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          <a href={profile.github} className="hover:text-foreground">GitHub</a>
          {" · "}
          <a href={profile.cv} className="hover:text-foreground">CV</a>
        </span>
      </footer>
    </div>
  );
}
