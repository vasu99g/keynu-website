import Image from "next/image";
import type { Doctor } from "@/lib/content/types";
import { cn } from "@/lib/utils/cn";

interface DoctorCardProps {
  doctor: Doctor;
  /** Hero treatment (large) shows extra detail; "default" is the listing form. */
  variant?: "default" | "hero";
  /** Optional path to portrait image (public-relative). When omitted, a stylized initials tile renders. */
  imageSrc?: string;
  /** Optional className override for layout positioning by parent. */
  className?: string;
}

/**
 * Doctor profile card. The `hero` variant is used once on the home page to
 * spotlight Dr. Sonia as the face of the brand; the `default` variant repeats
 * on the /doctors index.
 *
 * When an `imageSrc` is provided it renders a real portrait; otherwise it
 * falls back to a stylized initials tile (used during early prototyping).
 */
export function DoctorCard({ doctor, variant = "default", imageSrc, className }: DoctorCardProps) {
  const isHero = variant === "hero";

  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-3xl border border-walnut/10 bg-mogra p-6",
        isHero && "md:flex-row md:gap-10 md:p-8 lg:p-10",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-sandalwood/70",
          isHero && "md:max-w-sm md:shrink-0",
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`Portrait of ${doctor.name}`}
            width={1200}
            height={1500}
            sizes={isHero ? "(min-width: 768px) 24rem, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(251,176,76,0.35),transparent_65%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sandalwood to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-4 font-heading text-3xl text-walnut/80"
            >
              {doctor.name
                .split(" ")
                .slice(-2)
                .map((part) => part[0])
                .join("")}
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6">
        <div>
          <span className="font-body text-micro uppercase tracking-widest text-walnut/60">
            {doctor.role}
          </span>
          <h3
            className={cn(
              "mt-3 font-heading tracking-tight text-walnut",
              isHero ? "text-h2" : "text-h3",
            )}
          >
            {doctor.name}
          </h3>
          <p className="mt-4 font-body text-body text-walnut/70">{doctor.bio}</p>
        </div>

        {doctor.qualifications.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {doctor.qualifications.map((qualification) => (
              <li
                key={qualification}
                className="rounded-full border border-walnut/15 px-3 py-1 font-body text-caption text-walnut/70"
              >
                {qualification}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
