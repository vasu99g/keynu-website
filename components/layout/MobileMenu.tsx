"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/primitives/Button";
import { cn } from "@/lib/utils/cn";

interface NavLinkSpec {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLinkSpec[];
  /** Class for positioning the trigger button. */
  triggerClassName?: string;
}

/**
 * Mobile / tablet navigation drawer. Hidden on `lg` and above where the
 * SiteHeader renders the inline nav directly. A hamburger button toggles a
 * full-height drawer with the primary nav, contact link, and book CTA.
 *
 * Closes on link navigation, on ESC, and on overlay click. Locks body scroll
 * while open.
 */
export function MobileMenu({ links, triggerClassName }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Lock page scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full border border-walnut/15 text-walnut transition-colors duration-base ease-keynu hover:border-walnut/40 hover:bg-walnut/5 lg:hidden",
          triggerClassName,
        )}
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
              className="fixed inset-0 z-40 bg-walnut/40 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-mogra px-6 py-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between gap-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  aria-label="Keynu — return to homepage"
                  className="text-walnut"
                >
                  <Logo variant="wordmark" size="md" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-walnut/15 text-walnut transition-colors duration-base ease-keynu hover:border-walnut/40 hover:bg-walnut/5"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Primary mobile" className="mt-10 flex-1">
                <ul className="flex flex-col gap-4">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 font-heading text-h3 tracking-tight text-walnut transition-opacity hover:opacity-70"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 flex flex-col gap-3 border-t border-walnut/10 pt-6">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="font-body text-body text-walnut/80 transition-colors hover:text-walnut"
                >
                  Contact
                </Link>
                <Button asChild variant="primary" size="default" className="w-full">
                  <Link href="/book" onClick={() => setIsOpen(false)}>
                    Book a visit
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
