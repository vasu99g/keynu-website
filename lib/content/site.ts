import { siteSettings } from "@/lib/content-sources/local";
import type { SiteSettings } from "./types";

/**
 * Returns the global site settings (brand info, contact, hours, social).
 *
 * Synchronous today because content lives in TypeScript modules; when Sanity
 * is wired up this becomes async and consumers update accordingly.
 */
export function getSiteSettings(): SiteSettings {
  return siteSettings;
}
