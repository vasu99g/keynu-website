import { concerns } from "@/lib/content-sources/local";
import type { Concern } from "./types";

export function getAllConcerns(): Concern[] {
  return concerns;
}
