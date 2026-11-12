import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { profile } from "./content";
import { SiteHeader } from "./nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adjetei-martey.vercel.app"),
  title: "Adjetei Martey — AI Engineer",
  description:
    "Software engineer in London with an MSc in AI. I build LLM products and production ML systems.",
  openGraph: { type: "website", url: "/" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
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
