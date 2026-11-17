import Image from "next/image";
import Link from "next/link";
import { experience, featured, privacy, profile, projects } from "./content";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">{children}</h2>;
}

export function PageIntro({
  title,
  art,
  children,
}: {
  title: string;
  art?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-between gap-8 pb-14 pt-14 sm:pt-20">
      <div>
        <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{children}</p>
      </div>
      {art && <div className="hidden h-28 w-28 shrink-0 sm:block">{art}</div>}
    </section>
  );
}

export function Chips({ items }: { items: string[] }) {
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

export function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
      →
    </span>
  );
}

export function UnstuckImages() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {featured.images.map((img) => (
        <div key={img.src} className="overflow-hidden rounded-2xl border border-line bg-card">
          <Image src={img.src} alt={img.alt} width={780} height={1688} className="h-auto w-full" />
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-foreground/40">
      {p.image && (
        <a href={p.demo ?? p.repo} tabIndex={-1} className="block border-b border-line">
          <Image
            src={p.image.src}
            alt={p.image.alt}
            width={1280}
            height={800}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </a>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-muted">{p.kind}</p>
        <h3 className="mt-2 font-serif text-2xl">{p.name}</h3>
        {p.forBusiness && <p className="mt-3 text-[15px] leading-relaxed">{p.forBusiness}</p>}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-5">
          <Chips items={p.stack} />
        </div>
        <div className="mt-5 flex items-center gap-5 text-sm">
          {p.demo && (
            <a href={p.demo} className="group font-medium text-accent">
              Try it live <Arrow />
            </a>
          )}
          <a href={p.repo} className={p.demo ? "group text-muted hover:text-foreground" : "group text-accent"}>
            GitHub <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}

// Code-only projects: one compact row each instead of a full card.
export function ResearchList({ items }: { items: (typeof projects)[number][] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((p) => (
        <li key={p.name} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
          <div>
            <h3 className="font-medium">
              {p.name} <span className="text-muted">· {p.kind}</span>
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-3">
              <Chips items={p.stack} />
            </div>
          </div>
          <a href={p.repo} className="group text-sm text-accent sm:pt-0.5">
            GitHub <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function AvailabilityBadge({ hiring = false }: { hiring?: boolean }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
      {hiring ? profile.hiring : profile.availability}
    </p>
  );
}

export function ContactCta({ hiring = false }: { hiring?: boolean }) {
  return (
    <section className="my-16 rounded-3xl bg-sand px-6 py-14 sm:px-12">
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
        {hiring ? "Hiring an AI engineer?" : "Have a project in mind?"}
        <br />
        <span className="italic text-muted">Let&apos;s talk.</span>
      </h2>
      <p className="mt-5 max-w-lg leading-relaxed text-muted">
        {hiring
          ? "Send me the role and I'll come back to you quickly. My CV has the full detail."
          : "Tell me what you're trying to do and we'll set up a free call to talk it through, including cost."}
      </p>
      <a
        href={`mailto:${profile.email}${hiring ? "?subject=Role" : ""}`}
        className="group mt-6 inline-flex items-center gap-2 text-lg text-accent"
      >
        {profile.email} <Arrow />
      </a>
    </section>
  );
}

export function PrivacyNote() {
  return (
    <section className="border-t border-line py-16">
      <SectionTitle>Your data</SectionTitle>
      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {privacy.map((p) => (
          <div key={p.title}>
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExperienceList() {
  return (
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
  );
}

export function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent">
      {children} <Arrow />
    </Link>
  );
}
