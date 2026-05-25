import type { Config } from "tailwindcss";

/**
 * Keynu design tokens.
 *
 * Brand palette per guidelines:
 *   - Hero pair: Saffron + Mogra
 *   - Surfaces: Mogra (default), Sandalwood (secondary)
 *   - Type/contrast: Walnut (body), Forest (accent)
 *
 * All values map to CSS custom properties declared in styles/tokens.css
 * so they can be themed and inspected via dev tools.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        // Warm orange family
        saffron: "var(--color-saffron)",
        marigold: "var(--color-marigold)",
        kinnow: "var(--color-kinnow)",
        // Editorial red
        madder: "var(--color-madder)",
        // Surfaces
        mogra: "var(--color-mogra)",
        sandalwood: "var(--color-sandalwood)",
        // Type / contrast
        ink: "var(--color-ink)",
        ash: "var(--color-ash)",
        walnut: "var(--color-walnut)",
        forest: "var(--color-forest)",
      },
      fontFamily: {
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        devanagari: ["var(--font-devanagari)", "serif"],
      },
      borderRadius: {
        // Editorial scale — small, intentional, never bubbly
        xs: "2px",
        sm: "4px",
        DEFAULT: "6px",
        md: "6px",
        lg: "10px",
        xl: "14px",
        "2xl": "18px",
        "3xl": "22px",
      },
      fontSize: {
        // Mobile-first; responsive overrides applied via Tailwind breakpoints
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        h2: ["2rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        h4: ["1.25rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      },
      spacing: {
        "section-y-mobile": "4rem",
        "section-y": "6rem",
        "section-y-lg": "8rem",
      },
      transitionTimingFunction: {
        // Brand motion easing — gentle, premium
        keynu: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        DEFAULT: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
