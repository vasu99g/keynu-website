import { pillars } from "@/lib/content-sources/local";
import type { Pillar } from "./types";

export function getAllPillars(): Pillar[] {
  return pillars;
}
