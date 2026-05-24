import { Fraunces, Nunito_Sans } from "next/font/google";

/**
 * Body font.
 *
 * Brand-locked typeface is Avenir (proprietary, requires Adobe Fonts or
 * licensed self-host). For local development we use Nunito Sans as the closest
 * free analog — same geometric-humanist character. When Avenir license + WOFF2
 * files are supplied, swap this for a `next/font/local` declaration; consumers
 * read the CSS variable so nothing downstream needs to change.
 */
export const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito-sans",
});

/**
 * Heading font — Fraunces.
 *
 * Locked in by the user after previewing Fraunces vs Cormorant Garamond vs
 * Instrument Serif. Modern humanist serif with optical sizing and SOFT axis;
 * carries the warm, premium-yet-grounded mood of the brand.
 *
 * The `KEYNU` wordmark itself is rendered from the brand SVG lockup (see
 * components/brand/Logo.tsx) — Fraunces is for body headings only.
 */
export const headingFont = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});
