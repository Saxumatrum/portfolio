import Link from "next/link";
import { AboutMotif, HeroArt, ServicesMotif, WorkMotif } from "./art";
import { experience, featured, profile, projects } from "./content";
import { Arrow, AvailabilityBadge } from "./ui";

// Home is a front door: who I am, then three ways in. Detail lives on the
// other pages so this one never turns into a long scroll.
export default function Home() {
  const demos = projects.filter((p) => p.demo).length;
  const now = experience[0];

  const doors = [
    {
      href: "/work",
      title: "Work",
      text: `${featured.name} plus ${demos} AI apps you can try live in your browser.`,
      Motif: WorkMotif,
      tint: "bg-sun/15",
    },
    {
      href: "/services",
      title: "Services",
      text: "Booking assistants, document assistants, automated data entry and full AI products for your business.",
      Motif: ServicesMotif,
      tint: "bg-rose/15",
    },
    {
      href: "/about",
      title: "About",
      text: `${now.role} at ${now.org}. Before that, seven years shipping production software. MSc AI, Distinction.`,
      Motif: AboutMotif,
      tint: "bg-sage/15",
    },
  ];

  return (
    <>
      <section className="grid items-center gap-10 pb-16 pt-10 sm:pt-16 md:grid-cols-[1.15fr_1fr]">
        <div>
          <AvailabilityBadge />
          <p className="mt-6 text-sm text-muted">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl">
            I build AI products that people <span className="italic text-accent">actually use.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90"
            >
              Get in touch
            </a>
            <Link href="/services" className="rounded-full border border-line bg-card px-5 py-2.5 hover:border-accent">
              Work with me
            </Link>
          </div>
        </div>
        <HeroArt className="mx-auto w-full max-w-[22rem] md:max-w-none" />
      </section>

      <section className="grid gap-4 pb-20 sm:grid-cols-3">
        {doors.map(({ href, title, text, Motif, tint }) => (
          <Link
            key={href}
            href={href}
            className={`group flex flex-col rounded-3xl border border-line ${tint} p-6 transition hover:-translate-y-0.5 hover:border-accent/50`}
          >
            <Motif className="h-16 w-16" />
            <h2 className="mt-5 font-serif text-3xl">{title}</h2>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{text}</p>
            <p className="mt-5 text-sm font-medium text-accent">
              Open <Arrow />
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
