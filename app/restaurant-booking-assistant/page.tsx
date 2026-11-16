import type { Metadata } from "next";
import { commonFaqs, LandingPage, type Landing } from "../landing";

const l: Landing = {
  path: "/restaurant-booking-assistant",
  crumb: "Restaurants",
  service: "AI booking assistant for restaurants",
  description:
    "An AI host for your restaurant's website or WhatsApp: answers menu, allergen and opening-hours questions, books tables when you're busy or closed, and hands big groups and complaints to your team. Try the live demo.",
  h1: "An AI booking assistant for your restaurant.",
  intro:
    "A host on your website or WhatsApp that answers guests' questions and books tables while your team is busy, or after you've closed. It works from your own menu and rules, and passes anything unusual to you.",
  mailSubject: "Booking assistant for my restaurant",
  askLabel: "Ask about your restaurant",
  problems: [
    ["The phone rings during service", "Nobody can pick up at 8pm on a Friday, so the booking goes to whoever answers first."],
    ["The same questions, all day", "Are you open Monday? Is there parking? Is the lamb gluten-free? Can I bring the dog?"],
    ["Bookings only by phone or email", "Guests who find you at 11pm can't book until tomorrow, and many won't come back."],
    ["Allergen questions need care", "A guess is a risk. Answers have to come from your menu, with the right caveats, every time."],
  ],
  doesTitle: "What the assistant does",
  does: [
    "Answers questions about your menu, prices, opening hours, allergens, dogs, parking and anything else, using only the information you give it.",
    "Checks free tables for the date, time and party size, and suggests the nearest times if a slot is full.",
    "Takes the booking once the guest confirms, with name, phone and notes like high chairs or allergies.",
    "Follows your rules: closed days, last bookings, maximum party size online, deposits for large groups.",
    "Passes big groups, private hire, complaints and anything unusual to your team with a one-line summary, instead of making something up.",
    "Shows you every booking and every hand-off, and what it looked up to answer each question.",
  ],
  demo: {
    href: "/play/frontdesk",
    label: "Open the FrontDesk demo",
    text: "FrontDesk is a working demo for Ember & Fig, a made-up restaurant. Ask it whether the squash is vegan, book a table for Friday, or ask about a party of twelve and watch it hand you to the team. The owner's view shows each booking and every step the AI took.",
  },
  faqs: [
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
    ...commonFaqs,
  ],
};

export const metadata: Metadata = {
  title: "AI Booking Assistant for Restaurants — Adjetei Martey",
  description: l.description,
  alternates: { canonical: l.path },
  openGraph: { url: l.path },
};

export default function Page() {
  return <LandingPage l={l} />;
}
