"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "./content";
import { ThemeToggle } from "./theme";
import { Logo } from "./logo";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const path = usePathname();
  return (
    <header className="flex items-center justify-between gap-4 py-6">
      <Link href="/" className="flex shrink-0 items-center gap-2.5 font-serif text-lg">
        <Logo className="h-7 w-7" />
        <span className="sr-only min-[440px]:not-sr-only">{profile.name}</span>
      </Link>
      <nav className="flex items-center gap-3 text-sm text-muted sm:gap-5">
        {links.map((l) => {
          const active = path === l.href || path.startsWith(`${l.href}/`);
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={active ? "text-foreground" : "hover:text-foreground"}
            >
              {l.label}
            </Link>
          );
        })}
        <a href={profile.cv} className="hover:text-foreground">
          CV
        </a>
        {profile.booking && (
          <Link
            href="/book"
            className="hidden rounded-full bg-accent px-3.5 py-1.5 font-medium text-white hover:opacity-90 sm:inline-block"
          >
            Book a call
          </Link>
        )}
        <ThemeToggle />
      </nav>
    </header>
  );
}
