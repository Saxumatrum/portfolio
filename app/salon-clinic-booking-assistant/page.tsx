import type { Metadata } from "next";
import { commonFaqs, LandingPage, type Landing } from "../landing";

const l: Landing = {
  path: "/salon-clinic-booking-assistant",
  crumb: "Salons and clinics",
  service: "AI appointment booking assistant for salons and clinics",
  description:
    "An AI receptionist for your salon, barbers, beauty or private clinic: answers questions about treatments, prices and opening hours, books appointments online or on WhatsApp, and passes anything unusual to your team. Try the live demo.",
  h1: "An AI receptionist for your salon or clinic.",
  intro:
    "A receptionist on your website or WhatsApp that answers clients' questions and books appointments while you're with a client, or after you've closed. It works from your own price list and rules, and passes anything it shouldn't handle to you.",
  mailSubject: "Booking assistant for my salon or clinic",
  askLabel: "Ask about your business",
  problems: [
    ["You can't answer mid-appointment", "Your hands are busy, the phone rings out, and the client books somewhere that picked up."],
    ["The same questions, every day", "How much is a full head of highlights? Do you do patch tests? Is there parking? Are you open Saturday?"],
    ["Booking means a call or a DM", "Clients who think of it at 10pm have to wait until morning, and some forget."],
    ["Some questions need a person", "Medical history, skin reactions, complaints and refunds should go to you, not be guessed at."],
  ],
  doesTitle: "What the receptionist does",
  does: [
    "Answers questions about your treatments, prices, opening hours, location and policies, using only the information you give it.",
    "Checks free slots for the treatment and day the client wants, and offers the nearest times if one is taken.",
    "Books the appointment once the client confirms, with their name, phone and any notes.",
    "Follows your rules: closed days, how far ahead people can book, which treatments need a consultation or a patch test first.",
    "Passes health questions, complaints, refunds and anything unusual to you with a one-line summary, instead of answering them itself.",
    "Shows you every booking and hand-off, and what it looked up to answer each question.",
  ],
  demo: {
    href: "/play/frontdesk/salon",
    label: "Open the salon and clinic demo",
    text: "The demo is set up for Willow Room, a made-up hair, beauty and skin clinic with four team members. Ask for a cut with a particular stylist, book a colour and watch it check for a patch test, ask for microneedling and see it offer a consultation first, or ask a pregnancy question and watch it pass you to the nurse instead of guessing. The owner's view shows each appointment and every step the AI took.",
  },
  faqs: [
    [
      "Will it give clients medical or treatment advice?",
      "No. It answers factual questions from your own information, like prices, times and what a treatment involves as you describe it. Anything about someone's health, skin or suitability goes to you.",
    ],
    [
      "Where does it live?",
      "On your website as a chat window, and on WhatsApp if you want it there too. Clients don't need to download anything.",
    ],
    [
      "Can it use the booking system I already have?",
      "Often, depending on the system. We look at what you use on the first call and I'll tell you plainly what's possible.",
    ],
    [
      "Does it work for barbers, nail bars, physios and dentists?",
      "The same approach works for any business that books appointments and answers the same questions every day. We set it up around your own services and rules.",
    ],
    ...commonFaqs,
  ],
};

export const metadata: Metadata = {
  title: "AI Booking Assistant for Salons and Clinics — Adjetei Martey",
  description: l.description,
  alternates: { canonical: l.path },
  openGraph: { url: l.path },
};

export default function Page() {
  return <LandingPage l={l} />;
}
