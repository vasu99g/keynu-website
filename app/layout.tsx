import type { Metadata, Viewport } from "next";
import { bodyFont, headingFont } from "@/styles/fonts";
import { cn } from "@/lib/utils/cn";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BackgroundAudioProvider } from "@/components/audio/BackgroundAudio";
import { getSiteSettings } from "@/lib/content/site";

import "./globals.css";

const siteSettings = getSiteSettings();

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${siteSettings.brandName} — ${siteSettings.tagline}`,
    template: `%s · ${siteSettings.brandName}`,
  },
  description: siteSettings.description,
  applicationName: siteSettings.brandName,
  authors: [{ name: siteSettings.brandName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteSettings.brandName,
    title: `${siteSettings.brandName} — ${siteSettings.tagline}`,
    description: siteSettings.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.brandName} — ${siteSettings.tagline}`,
    description: siteSettings.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFEF0",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={cn(bodyFont.variable, headingFont.variable)}
    >
      <body className="min-h-screen bg-mogra text-walnut antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-walnut focus:px-4 focus:py-2 focus:text-mogra"
        >
          Skip to main content
        </a>
        <BackgroundAudioProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </BackgroundAudioProvider>
      </body>
    </html>
  );
}
