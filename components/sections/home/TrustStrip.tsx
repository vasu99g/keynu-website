import Image from "next/image";
import { Marquee } from "@/components/primitives/Marquee";

interface MarqueeTile {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Photo marquee that stitches together stills of the clinic interior,
 * treatment rooms, and patient moments. A handful of tiles carry text
 * overlays ("Est. 1996", "Dermat-led", etc.) so credibility cues still
 * land for visitors who don't recognise the imagery.
 *
 * Sits directly under the hero as a quiet, sensory section break.
 */
const tiles: MarqueeTile[] = [
  { src: "/images/marquee/DSC04222.jpg", alt: "Keynu reception" },
  { src: "/images/marquee/DSC04246.jpg", alt: "Clinic interior" },
  { src: "/images/marquee/DSC04363.jpg", alt: "Treatment room with Emerald laser" },
  { src: "/images/marquee/DSC04501.jpg", alt: "Consultation moment" },
  { src: "/images/marquee/DSC04434.jpg", alt: "Patient experience" },
  { src: "/images/marquee/DSC04263.jpg", alt: "Clinic detail" },
  { src: "/images/marquee/DSC04309.jpg", alt: "Warm clinic interior" },
  { src: "/images/marquee/DSC04574.jpg", alt: "Patient" },
  { src: "/images/marquee/DSC04622.jpg", alt: "Clinic detail" },
  { src: "/images/marquee/DSC05175.jpg", alt: "Patient moment" },
];

const credibilityCues = [
  "Est. 1996",
  "Family-run since day one",
  "Dermatologist-led protocols",
  "FDA-approved devices",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Glimpses inside Keynu"
      className="overflow-hidden border-y border-walnut/10 bg-sandalwood/30 py-6 md:py-8"
    >
      <Marquee durationSeconds={90} itemGapClassName="gap-4">
        {tiles.map((tile, index) => (
          <PhotoTile key={tile.src} tile={tile} caption={credibilityCues[index % credibilityCues.length]} />
        ))}
      </Marquee>
    </section>
  );
}

function PhotoTile({ tile, caption }: { tile: MarqueeTile; caption?: string }) {
  return (
    <div className="relative h-24 w-40 overflow-hidden rounded-xl md:h-32 md:w-52">
      <Image
        src={tile.src}
        alt={tile.alt}
        width={600}
        height={400}
        sizes="(min-width: 768px) 208px, 160px"
        className="h-full w-full object-cover"
      />
      {caption && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-walnut/65 via-walnut/15 to-transparent"
          />
          <p className="absolute bottom-2 left-3 right-3 font-body text-micro uppercase tracking-widest text-mogra">
            {caption}
          </p>
        </>
      )}
    </div>
  );
}
