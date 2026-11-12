import Link from "next/link";
import { experience, featured, profile, projects, services } from "./content";
import { Arrow, AvailabilityBadge, ContactCta, MoreLink, ProjectCard, SectionTitle } from "./ui";

export default function Home() {
  const live = projects.filter((p) => p.demo);
  const now = experience[0];

  return (
    <>
      {/* Intro */}
      <section className="pb-20 pt-14 sm:pt-24">
        <AvailabilityBadge />
        <p className="mt-6 text-sm text-muted">
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
          <Link href="/services" className="rounded-full border border-line px-5 py-2.5 hover:border-foreground">
            Work with me
          </Link>
          <a href={profile.cv} className="rounded-full border border-line px-5 py-2.5 hover:border-foreground">
            Download CV
          </a>
        </div>
      </section>

      {/* Featured, short version: the full write-up is on /work */}
      <section className="border-t border-line py-16">
        <SectionTitle>Featured project</SectionTitle>
        <Link
          href="/work#unstuck"
          className="group mt-8 block rounded-2xl border border-line bg-card p-6 transition-colors hover:border-foreground/40 sm:p-8"
        >
          <p className="text-sm text-accent">{featured.status}</p>
          <h3 className="mt-2 font-serif text-4xl">{featured.name}</h3>
          <p className="mt-2 text-lg">{featured.tagline}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">{featured.summary}</p>
          <p className="mt-6 text-sm font-medium text-accent">
            How it works <Arrow />
          </p>
        </Link>
      </section>

      {/* Live demos */}
      <section className="border-t border-line py-16">
        <div className="flex items-baseline justify-between gap-4">
          <SectionTitle>Try them live</SectionTitle>
          <MoreLink href="/work">All projects</MoreLink>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {live.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* Services teaser for freelance clients */}
      <section className="border-t border-line py-16">
        <div className="flex items-baseline justify-between gap-4">
          <SectionTitle>For businesses</SectionTitle>
          <MoreLink href="/services">Services</MoreLink>
        </div>
        <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.title}>
              <h3 className="font-medium">{s.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{s.pitch}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Now */}
      <section className="border-t border-line py-16">
        <SectionTitle>Now</SectionTitle>
        <p className="mt-6 text-lg">
          {now.role} at {now.org} <span className="text-muted">· {now.period}</span>
        </p>
        <p className="mt-2 max-w-xl leading-relaxed text-muted">{now.points[0]}.</p>
        <div className="mt-6">
          <MoreLink href="/about">Experience, education and skills</MoreLink>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
