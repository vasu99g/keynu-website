import { experiencePillars, type ExperiencePillar } from "@/lib/content-sources/local";

export function getExperiencePillars(): ExperiencePillar[] {
  return experiencePillars;
}

export type { ExperiencePillar };
