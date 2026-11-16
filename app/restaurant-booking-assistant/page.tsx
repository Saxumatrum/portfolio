import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "../content";
import { Arrow, ContactCta, SectionTitle } from "../ui";

const PATH = "/restaurant-booking-assistant";
const DESCRIPTION =
  "An AI host for your restaurant's website or WhatsApp: answers menu, allergen and opening-hours questions, books tables when you're busy or closed, and hands big groups and complaints to your team. Try the live demo.";

export const metadata: Metadata = {
  title: "AI Booking Assistant for Restaurants — Adjetei Martey",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { url: PATH },
};

const problems = [
  ["The phone rings during service", "Nobody can pick up at 8pm on a Friday, so the booking goes to whoever answers first."],
  ["The same questions, all day", "Are you open Monday? Is there parking? Is the lamb gluten-free? Can I bring the dog?"],
  ["Bookings only by phone or email", "Guests who find you at 11pm can't book until tomorrow, and many won't come back."],
  ["Allergen questions need care", "A guess is a risk. Answers have to come from your menu, with the right caveats, every time."],
];

const does = [
  "Answers questions about your menu, prices, opening hours, allergens, dogs, parking and anything else, using only the information you give it.",
  "Checks free tables for the date, time and party size, and suggests the nearest times if a slot is full.",
  "Takes the booking once the guest confirms, with name, phone and notes like high chairs or allergies.",
  "Follows your rules: closed days, last bookings, maximum party size online, deposits for large groups.",
  "Passes big groups, private hire, complaints and anything unusual to your team with a one-line summary, instead of making something up.",
  "Shows you every booking and every hand-off, and what it looked up to answer each question.",
];

const faqs: [string, string][] = [
  [
    "Will it make things up about my menu or allergens?",
    "It answers only from the menu, policies and allergen list you provide. If something isn't in there, it says so and offers to pass the question to your team. For allergens it repeats your kitchen's own caveats.",
  ],
  [
    "Where does it live?",
    "On your website as a chat window, and on WhatsApp if you want it there too. Guests don't need to download anything.",
  ],
  [
    "Can it use the booking system I already have?",
    "Often, depending on the system. We look at what you use on the first call and I'll tell you plainly what's possible.",
  ],
  [
    "What happens with big groups or complaints?",
    "It doesn't try to handle them. It collects the details and hands them to your team with a short summary, so you can get back to the guest.",
  ],
  [
    "Is it only for restaurants?",
    "No. The same approach works for cafes, salons, clinics, garages and anyone who takes bookings or answers the same questions every day.",
  ],
  [
    "Where are you based? Do you work with restaurants elsewhere?",
    "I'm in London, and everything is set up and run remotely, so I work with businesses anywhere in the UK and abroad.",
  ],
  [
    "How much does it cost?",
    "It depends on what you need, so we agree a fixed price on a free call before any work starts.",
  ],
];

export default function RestaurantBookingAssistant() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AI booking assistant for restaurants",
        serviceType: "AI booking and enquiry assistant",
        provider: { "@id": "https://adjetei-martey.vercel.app/#person" },
        areaServed: ["United Kingdom", "Worldwide"],
        url: `https://adjetei-martey.vercel.app${PATH}`,
        description: DESCRIPTION,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
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
          <Link href="/services" className="hover:text-foreground">Services</Link> / Restaurants
        </p>
        <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-5xl">
          An AI booking assistant for your restaurant.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          A host on your website or WhatsApp that answers guests&apos; questions and books tables while your team is
          busy, or after you&apos;ve closed. It works from your own menu and rules, and passes anything unusual to you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/play/frontdesk"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Try the live demo
          </a>
          <a
            href={`mailto:${profile.email}?subject=Booking assistant for my restaurant`}
            className="inline-block rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:bg-card"
          >
            Ask about your restaurant
          </a>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>Sound familiar?</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {problems.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-line bg-card p-6">
              <h2 className="font-serif text-2xl">{t}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>What the assistant does</SectionTitle>
        <ul className="mt-8 space-y-4">
          {does.map((d) => (
            <li key={d} className="flex gap-3 text-[15px] leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>See it working</SectionTitle>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
          FrontDesk is a working demo for Ember &amp; Fig, a made-up restaurant. Ask it whether the squash is vegan, book
          a table for Friday, or ask about a party of twelve and watch it hand you to the team. The owner&apos;s view
          shows each booking and every step the AI took.
        </p>
        <a href="/play/frontdesk" className="group mt-5 inline-block text-sm font-medium text-accent">
          Open the FrontDesk demo <Arrow />
        </a>
      </section>

      <section className="border-t border-line py-16">
        <SectionTitle>Questions</SectionTitle>
        <div className="mt-8 space-y-6">
          {faqs.map(([q, a]) => (
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
