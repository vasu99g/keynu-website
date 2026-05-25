import { Cormorant_Garamond, Marcellus, Noto_Serif_Devanagari, Work_Sans } from "next/font/google";

/**
 * Body font — Work Sans.
 *
 * Adopted from the brand design refresh (design handoff bundle). Replaces
 * the earlier Nunito Sans stand-in. Geometric, modern, readable at any
 * size, and pairs cleanly with the classical Marcellus display face.
 *
 * The brand-locked typeface is still Avenir (proprietary, licensed self-host).
 * When licensed Avenir WOFF2 files are provided, swap this for a
 * `next/font/local` declaration; consumers read the CSS variable so nothing
 * downstream needs to change.
 */
export const bodyFont = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body-sans",
});

/**
 * Display / heading font — Marcellus.
 *
 * Classical roman serif with the engraved-capital authority the brand
 * design refresh asked for. Used uppercase with wide letter-spacing for
 * h1/h2 to feel editorial and timeless. Single weight (400) — Marcellus
 * is a display face and shouldn't need bolder cuts.
 */
export const headingFont = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading-display",
});

/**
 * Editorial italic font — Cormorant Garamond.
 *
 * Used for `<em>` inside display headings (e.g. *kinnow*, *concern*,
 * *practice*) and for "lead" paragraphs that want extra warmth. Resets
 * from uppercase + wide-tracked to mixed-case italic for the contrast
 * the design refresh leans on.
 */
export const editorialFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-heading-editorial",
});

/**
 * Devanagari font — Noto Serif Devanagari.
 *
 * For the Hindi numerals (एक, दो, तीन, चार, पाँच, छह) and motif words
 * (षट् संस्कार, सम्भाल) used in the Six Rituals + Sambhal sections.
 * Pairs cleanly with Marcellus by sharing roman/classical proportions.
 */
export const devanagariFont = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-devanagari-noto",
});
