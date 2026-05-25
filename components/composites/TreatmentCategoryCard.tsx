import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { TreatmentCategory } from "@/lib/content/types";
import { cn } from "@/lib/utils/cn";

interface TreatmentCategoryCardProps {
  category: TreatmentCategory;
  treatmentCount: number;
  /** Optional tonal accent. Cards alternate visually in grids. */
  tone?: "default" | "muted";
}

/**
 * Compact, hoverable card representing a treatment category. Used on the home
 * page categories grid and the /treatments index page.
 */
export function TreatmentCategoryCard({
  category,
  treatmentCount,
  tone = "default",
}: TreatmentCategoryCardProps) {
  const href = `/treatments/${category.slug}`;

  return (
    <Link
      href={href}
      aria-label={`Explore ${category.name} treatments`}
      className={cn(
        "group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-xl border border-walnut/10 p-6 transition-all duration-base ease-keynu",
        "hover:-translate-y-0.5 hover:border-walnut/30 hover:shadow-[0_24px_60px_-30px_rgba(86,46,38,0.35)]",
        tone === "default" ? "bg-mogra" : "bg-sandalwood/40",
        "md:p-8",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-saffron/0 blur-3xl transition-colors duration-slow ease-keynu group-hover:bg-saffron/30"
      />

      <div className="relative">
        <span className="inline-flex items-center gap-2 font-body text-micro uppercase tracking-widest text-walnut/60">
          <span className="block h-px w-6 bg-walnut/40" aria-hidden="true" />
          {treatmentCount} treatment{treatmentCount === 1 ? "" : "s"}
        </span>
        <h3 className="mt-4 font-heading text-h3 tracking-tight text-walnut">{category.name}</h3>
        <p className="mt-3 font-body text-body text-walnut/70">{category.summary}</p>
      </div>

      <div className="relative flex items-center justify-between">
        <span className="font-body text-sm font-medium tracking-tight text-walnut">Explore</span>
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-walnut/15 text-walnut transition-all duration-base ease-keynu",
            "group-hover:border-walnut/40 group-hover:bg-walnut group-hover:text-mogra",
          )}
          aria-hidden="true"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
