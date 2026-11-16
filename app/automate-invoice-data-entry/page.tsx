import type { Metadata } from "next";
import { commonFaqs, LandingPage, type Landing } from "../landing";

const l: Landing = {
  path: "/automate-invoice-data-entry",
  crumb: "Invoice and receipt data entry",
  service: "Automated invoice and receipt data entry",
  description:
    "Stop retyping invoices and receipts. AI reads PDFs and photos, pulls out the supplier, dates, totals and line items, lets you check them, and exports clean data to a spreadsheet or your own system. Try the live demo.",
  h1: "Automate invoice and receipt data entry.",
  intro:
    "Upload a PDF or a photo of an invoice or receipt and get back clean, checked data: supplier, dates, totals, VAT and every line item, ready for your spreadsheet or your own system. No more retyping.",
  mailSubject: "Automating our invoice data entry",
  askLabel: "Ask about your paperwork",
  problems: [
    ["Hours of retyping every month", "Someone copies supplier names, dates and totals from PDFs into a spreadsheet, one invoice at a time."],
    ["Typos that cost money", "A misread total or a missed line item only turns up when the books don't balance."],
    ["Every supplier's layout is different", "Templates and rules break the moment a new supplier sends an invoice that looks different."],
    ["Photos of crumpled receipts", "Staff expenses arrive as phone photos, at an angle, in bad light."],
  ],
  doesTitle: "What it does",
  does: [
    "Reads invoices and receipts as PDFs or photos, whatever the layout, without a template for each supplier.",
    "Pulls out the fields you need: supplier, invoice number, dates, totals, VAT and every line item.",
    "Checks the result against a fixed structure, so you always get the same fields in the same format.",
    "Lets a person look over and fix any field before it's saved.",
    "Exports to CSV or JSON, or sends the data straight into your spreadsheet or system.",
    "Works the same way for other paperwork too, like CVs, order forms and delivery notes.",
  ],
  demo: {
    href: "/play/extractly",
    label: "Open the Extractly demo",
    text: "Extractly is a working demo. Upload an invoice, a receipt or a CV as a PDF or image, and it fills in an editable form with what it found. Fix anything you like, then export it as CSV or JSON.",
  },
  faqs: [
    [
      "How accurate is it?",
      "It handles clear documents well, but no system is perfect with every scan, so every result can be checked and edited before it's saved. We test it on a sample of your own documents before you rely on it.",
    ],
    [
      "Can it put the data into my accounting software?",
      "Often, depending on the software. We look at what you use on the first call and I'll tell you plainly what's possible. A spreadsheet export always works.",
    ],
    [
      "What about other documents, not just invoices?",
      "The same approach works for receipts, CVs, order forms, delivery notes and most paperwork with a regular set of fields. We set it up for the fields you actually need.",
    ],
    [
      "Do we need to change how we receive invoices?",
      "No. It works with the PDFs and photos you already get.",
    ],
    ...commonFaqs,
  ],
};

export const metadata: Metadata = {
  title: "Automate Invoice and Receipt Data Entry with AI — Adjetei Martey",
  description: l.description,
  alternates: { canonical: l.path },
  openGraph: { url: l.path },
};

export default function Page() {
  return <LandingPage l={l} />;
}
