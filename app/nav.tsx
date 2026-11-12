"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "./content";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const path = usePathname();
  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="font-serif text-lg">
        {profile.name}
      </Link>
      <nav className="flex gap-4 text-sm text-muted sm:gap-5">
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
      </nav>
    </header>
  );
}
