import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { profile, services } from "./content";
import { SiteHeader } from "./nav";
import { themeScript } from "./theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const SITE = "https://adjetei-martey.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL("https://adjetei-martey.vercel.app"),
  title: "Adjetei Martey — Freelance AI Developer, UK and Remote",
  description:
    "Freelance AI developer (MSc AI) based in London, working with businesses across the UK and worldwide. Booking and enquiry assistants, chat-with-your-documents, automated data entry and custom AI products. Live demos you can try.",
  alternates: { canonical: "/" },
  verification: { google: "wkxFf1V5pUDHT69Ic93KtjsTPeXyX-uoFXWEQ39bdsI" },
  openGraph: { type: "website", url: "/", siteName: "Adjetei Martey", locale: "en_GB" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data so search engines know who this is, where, and what's offered.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        name: profile.name,
        jobTitle: "AI Engineer",
        url: SITE,
        email: `mailto:${profile.email}`,
        address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "University of Kent" },
        knowsAbout: ["Artificial intelligence", "Large language models", "AI agents", "Machine learning", "Next.js", "Python"],
        sameAs: [profile.github],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE}/#service`,
        name: "Adjetei Martey — Freelance AI Development",
        url: `${SITE}/services`,
        founder: { "@id": `${SITE}/#person` },
        email: profile.email,
        address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
        areaServed: [{ "@type": "Country", name: "United Kingdom" }, "Worldwide"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.pitch },
          })),
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SiteHeader />
          <main>{children}</main>
          <footer className="flex flex-wrap justify-between gap-2 border-t border-line py-8 text-sm text-muted">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span>
              <a href={profile.github} className="hover:text-foreground">GitHub</a>
              {" · "}
              <a href={profile.cv} className="hover:text-foreground">CV</a>
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
