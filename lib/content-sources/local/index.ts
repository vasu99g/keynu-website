/**
 * Local content source — barrel exports for the stub data.
 *
 * The content abstraction in `lib/content/*` reads from this module when
 * `CONTENT_SOURCE` is unset or equals `"local"`. When Sanity is wired up,
 * the abstraction switches to `lib/content-sources/sanity/index.ts` instead;
 * page-level code doesn't change.
 */
export { siteSettings } from "./data/site";
export { treatmentCategories } from "./data/categories";
export { treatments } from "./data/treatments";
export { doctors } from "./data/doctors";
export { testimonials } from "./data/testimonials";
export { experiencePillars, type ExperiencePillar } from "./data/experience-pillars";
export { pillars } from "./data/pillars";
export { concerns } from "./data/concerns";
export { rituals, type Ritual, type RitualSymbol } from "./data/rituals";
export { devices, accreditations, type Device, type Accreditation } from "./data/devices";
export {
  sambhalPillars,
  sambhalTiers,
  type SambhalPillar,
  type SambhalTier,
} from "./data/sambhal";
export { faqs, type FAQItem } from "./data/faqs";
export { results, type BeforeAfterResult } from "./data/results";
export { journalPosts, type JournalPost } from "./data/journal-posts";
export { jobOpenings, type JobOpening } from "./data/job-openings";
