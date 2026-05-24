import { treatments, treatmentCategories } from "@/lib/content-sources/local";
import type { Treatment, TreatmentCategory, TreatmentCategorySlug } from "./types";

export function getAllTreatmentCategories(): TreatmentCategory[] {
  return [...treatmentCategories].sort((a, b) => a.order - b.order);
}

export function getTreatmentCategoryBySlug(slug: string): TreatmentCategory | undefined {
  return treatmentCategories.find((category) => category.slug === slug);
}

export function getAllTreatments(): Treatment[] {
  return treatments;
}

export function getTreatmentsByCategory(categorySlug: TreatmentCategorySlug): Treatment[] {
  return treatments.filter((treatment) => treatment.categorySlug === categorySlug);
}

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((treatment) => treatment.slug === slug);
}
