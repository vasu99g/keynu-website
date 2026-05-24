import { doctors } from "@/lib/content-sources/local";
import type { Doctor } from "./types";

export function getAllDoctors(): Doctor[] {
  return [...doctors].sort((a, b) => a.order - b.order);
}

export function getLeadDoctor(): Doctor | undefined {
  return doctors.find((doctor) => doctor.isLead);
}

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}
