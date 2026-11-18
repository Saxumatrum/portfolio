import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { profile } from "../content";

export const metadata: Metadata = {
  title: "Book a Free Call — Adjetei Martey",
  alternates: { canonical: "/book" },
  description:
    "Book a free 30-minute call about AI for your business: booking assistants, document assistants, automated data entry or a custom AI product.",
};

// Google Calendar appointment schedule, embedded. `gv=true` is Google's embeddable view of the booking page.
export default function Book() {
  if (!profile.booking) notFound();
  const src = profile.booking + (profile.booking.includes("?") ? "&" : "?") + "gv=true";
  return (
    <>
      <section className="pb-8 pt-14 sm:pt-20">
        <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-5xl">
          Book a free <span className="italic text-accent">30-minute call.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Tell me what you&apos;re trying to do and I&apos;ll tell you honestly whether AI is the right fit, and roughly
          what it would take. No obligation. Times are shown in your own time zone.
        </p>
      </section>

      <section className="overflow-hidden rounded-2xl border border-line bg-white">
        <iframe src={src} title="Booking calendar" className="block h-[720px] w-full border-0" loading="lazy" />
      </section>

      <p className="mb-16 mt-6 text-[15px] text-muted">
        None of the times work?{" "}
        <a href={`mailto:${profile.email}?subject=Call`} className="text-accent hover:underline">
          Email {profile.email}
        </a>{" "}
        and we&apos;ll find one.
      </p>
    </>
  );
}
