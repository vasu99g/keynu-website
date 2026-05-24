import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { AudioToggle } from "@/components/audio/AudioToggle";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "./MobileMenu";
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
 * On mobile (<lg) the inline nav is hidden and a `MobileMenu` drawer
 * provides access to all primary destinations.
 */
export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b border-walnut/10 bg-mogra/85 backdrop-blur",
        "supports-[backdrop-filter]:bg-mogra/65",
      )}
    >
      <Container width="wide">
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            className="text-walnut transition-opacity hover:opacity-80"
            aria-label="Keynu — return to homepage"
          >
            <Logo variant="wordmark" size="md" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {primaryNav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm tracking-tight text-walnut/80 transition-colors duration-base ease-keynu hover:text-walnut"
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
              className="hidden font-body text-sm text-walnut/80 transition-colors hover:text-walnut lg:inline"
            >
              Contact
            </Link>
            <Button asChild size="sm" variant="primary" className="hidden md:inline-flex">
              <Link href="/book">Book a visit</Link>
            </Button>
            <MobileMenu links={primaryNav} />
          </div>
        </div>
      </Container>
    </header>
  );
}
