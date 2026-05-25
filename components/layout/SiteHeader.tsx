"use client";

import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { AudioToggle } from "@/components/audio/AudioToggle";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "./MobileMenu";
import { useHeaderTone } from "@/lib/hooks/useHeaderTone";
import { cn } from "@/lib/utils/cn";

interface NavLink {
  href: string;
  label: string;
}

const primaryNav: NavLink[] = [
  { href: "/treatments", label: "Treatments" },
  { href: "/story", label: "Our Story" },
  { href: "/doctors", label: "Doctors" },
  { href: "/experience", label: "Experience" },
  { href: "/results", label: "Results" },
  { href: "/journal", label: "Journal" },
];

/**
 * Top-of-page site header. Sticky with a translucent backdrop blur.
 * Automatically re-tones (light ↔ dark) when scrolling past any section
 * marked with `data-header-tone="dark"` so the header always reads against
 * the surface beneath it.
 */
export function SiteHeader() {
  const tone = useHeaderTone();
  const isDark = tone === "dark";

  return (
    <header
      data-tone={tone}
      className={cn(
        "sticky top-0 z-30 border-b backdrop-blur transition-colors duration-base ease-keynu",
        isDark
          ? "border-mogra/15 bg-forest/85 text-mogra supports-[backdrop-filter]:bg-forest/65"
          : "border-walnut/10 bg-mogra/85 text-walnut supports-[backdrop-filter]:bg-mogra/65",
      )}
    >
      <Container width="wide">
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            className="text-current transition-opacity hover:opacity-80"
            aria-label="Keynu — return to homepage"
          >
            <Logo variant="wordmark" size="sm" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {primaryNav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm tracking-tight text-current opacity-80 transition-opacity duration-base ease-keynu hover:opacity-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <AudioToggle />
            <Link
              href="/contact"
              className="hidden font-body text-sm text-current opacity-80 transition-opacity hover:opacity-100 lg:inline"
            >
              Contact
            </Link>
            <Button
              asChild
              size="sm"
              variant="primary"
              className={cn(
                "hidden md:inline-flex",
                isDark && "bg-mogra text-forest hover:bg-mogra/90",
              )}
            >
              <Link href="/book">Book a visit</Link>
            </Button>
            <MobileMenu links={primaryNav} />
          </div>
        </div>
      </Container>
    </header>
  );
}
