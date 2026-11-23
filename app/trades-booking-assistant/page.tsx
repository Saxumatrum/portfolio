import type { Metadata } from "next";
import { commonFaqs, LandingPage, type Landing } from "../landing";

const l: Landing = {
  path: "/trades-booking-assistant",
  crumb: "Trades",
  service: "AI booking and enquiry assistant for plumbers, electricians and trades",
  description:
    "An AI office manager for plumbers, heating engineers, electricians and other trades: answers enquiries with your own prices, checks the postcode is in your area, books visits into your diary, and flags emergencies to you straight away. Try the live demo.",
  h1: "An AI office manager for your trade business.",
  intro:
    "An assistant on your website or WhatsApp that answers enquiries while you're on a job. It quotes only your own prices, checks you cover the postcode, books a morning or afternoon visit, and passes emergencies and big quotes to you with the details already taken.",
  mailSubject: "Booking assistant for my trade business",
  askLabel: "Ask about your business",
  problems: [
    ["You can't answer from under a sink", "The phone rings while your hands are full, and the customer rings the next firm on the list."],
    ["The same questions, all day", "How much is a boiler service? Do you cover my area? Can you come Thursday? Do you do bathrooms?"],
    ["Evenings go on admin", "Calling back missed numbers, texting times and chasing details eats the hours after a full day on site."],
    ["Some calls can't wait", "A gas smell or a burst pipe needs the right advice at once and a call back from you, not a booking next week."],
  ],
  doesTitle: "What the assistant does",
  does: [
    "Answers questions about your services, prices, call-out fees, hours and guarantees, using only the information you give it.",
    "Checks the customer's postcode against the area you cover, and passes out-of-area jobs to you instead of turning them away.",
    "Takes the details you need (what's wrong, address, phone, access notes) and books a visit window that's actually free in your diary.",
    "Offers a free survey visit for bigger jobs like new boilers, rewires and bathrooms, instead of guessing a price.",
    "Treats emergencies as emergencies: gives the safety steps you set (like the gas emergency number) and flags the job to you as urgent.",
    "Shows you every job and hand-off, and what it looked up to answer each question.",
  ],
  demo: {
    href: "/play/frontdesk/trades",
    label: "Open the trades demo",
    text: "The demo is set up for Brightwell, a made-up plumbing and heating firm. Ask for a price, give a postcode and book a visit, ask for a quote on a new bathroom, or say you can smell gas and watch it go straight to the safety advice and an urgent hand-off. The owner's view shows each job and every step the AI took.",
  },
  faqs: [
    [
      "Will it quote prices I haven't agreed?",
      "No. It only gives the prices and call-out fees you list. Anything else gets a survey visit or goes to you, so you never get held to a number you didn't set.",
    ],
    [
      "What happens with emergencies?",
      "You decide the rules. For example, a gas smell gets the safety steps and the gas emergency number straight away and lands with you marked urgent, and a vulnerable customer with no heating is flagged and offered the earliest visit.",
    ],
    [
      "Does it work for electricians, roofers and other trades?",
      "Yes. The demo is a plumber, but the same set-up works for any trade that books visits and answers the same questions every day. We set it up around your own jobs, prices and area.",
    ],
    [
      "Can it use the diary or job software I already have?",
      "Often, depending on the system. We look at what you use on the first call and I'll tell you plainly what's possible.",
    ],
    ...commonFaqs,
  ],
};

export const metadata: Metadata = {
  title: "AI Booking Assistant for Plumbers and Trades — Adjetei Martey",
  description: l.description,
  alternates: { canonical: l.path },
  openGraph: { url: l.path },
};

export default function Page() {
  return <LandingPage l={l} />;
}
