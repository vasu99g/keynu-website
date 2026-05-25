import type { SiteSettings } from "@/lib/content/types";

/**
 * Stubbed site settings used while content lives locally.
 *
 * When Sanity is wired up (CONTENT_SOURCE=sanity), this file is no longer
 * read — the Sanity client takes over via the shape declared in
 * lib/content/types.ts.
 */
export const siteSettings: SiteSettings = {
  brandName: "Keynu",
  tagline: "Beyond beauty",
  description:
    "An aesthetics and wellness clinic in Paschim Vihar, New Delhi. Doctor-led care across face, skin, hair, body and smile. A unit of BDC.",
  contact: {
    addressLines: ["B-2/11, Basement", "Paschim Vihar"],
    city: "New Delhi",
    pincode: "110063",
    country: "India",
    phones: ["+91 9311041404", "+91 9311301404"],
    email: "contact@keynu.com",
    whatsappNumber: "919311041404",
    mapUrl: "https://maps.google.com/?q=Keynu+Paschim+Vihar+New+Delhi",
  },
  hours: [
    { day: "Mon", open: "10:00", close: "20:00" },
    { day: "Tue", open: "10:00", close: "20:00" },
    { day: "Wed", open: "10:00", close: "20:00" },
    { day: "Thu", open: "10:00", close: "20:00" },
    { day: "Fri", open: "10:00", close: "20:00" },
    { day: "Sat", open: "10:00", close: "20:00" },
    { day: "Sun", open: "11:00", close: "18:00" },
  ],
  social: [
    {
      platform: "instagram",
      handle: "@keynu",
      url: "https://instagram.com/keynu",
    },
  ],
  founded: 2021,
};
