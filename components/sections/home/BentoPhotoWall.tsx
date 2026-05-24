import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils/cn";

interface BentoTile {
  src: string;
  alt: string;
  /** Tailwind classes for col/row span within the 12-column grid. */
  spanClass: string;
}

/**
 * Visual "inside Keynu" wall — an asymmetric, bento-style photo grid that
 * gives the homepage its sensory midsection. Echoes the moodboard's collage
 * energy: clinic interiors, patient editorial shots, and the recurring kinu
 * motif side-by-side.
 *
 * Tiles are laid out on a 12-column / variable-row grid so the same row can
 * contain tiles of different sizes (a 2:3 portrait alongside a 3:2 landscape).
 * On mobile the grid simplifies to a single column.
 */
const tiles: BentoTile[] = [
  {
    src: "/images/bento/kinu-partition.jpg",
    alt: "Patient in champagne satin in front of the etched kinu motif partition",
    spanClass: "md:col-span-5 md:row-span-2",
  },
  {
    src: "/images/bento/reception-detail.jpg",
    alt: "Reception interior — wood, soft lighting, illuminated KEYNU signage",
    spanClass: "md:col-span-7 md:row-span-1",
  },
  {
    src: "/images/bento/gloved-portrait.jpg",
    alt: "Editorial portrait — patient with a saffron clinical glove",
    spanClass: "md:col-span-4 md:row-span-1",
  },
  {
    src: "/images/bento/posters-legs.jpg",
    alt: "Treatment-room wall with KEYNU service posters",
    spanClass: "md:col-span-3 md:row-span-1",
  },
  {
    src: "/images/bento/consult-room.jpg",
    alt: "Consultation moment — patient on a cream sofa, floral partition behind",
    spanClass: "md:col-span-5 md:row-span-2",
  },
  {
    src: "/images/bento/emerald-machine.jpg",
    alt: "Emerald laser machine in a treatment room",
    spanClass: "md:col-span-4 md:row-span-1",
  },
  {
    src: "/images/bento/dinner-citrus.jpg",
    alt: "Editorial still — saffron tabletop, kinnow tones",
    spanClass: "md:col-span-3 md:row-span-1",
  },
];

export function BentoPhotoWall() {
  return (
    <Section spacing="loose">
      <Container width="wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <FadeIn from="bottom" distance={12}>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/60">
                <span aria-hidden="true" className="text-saffron">
                  <Logo variant="emblem" size="sm" label="" />
                </span>
                Inside Keynu
              </span>
              <Heading as="h2" size="h1" className="mt-4">
                A space that holds, before it heals.
              </Heading>
              <Text size="lg" className="mt-5 text-walnut/70">
                Warm wood, soft golden light, and quiet rituals. Every detail of the clinic — the rugs underfoot, the kinu emblem etched on glass, the scent of mogra at the door — was chosen so you feel cared for before treatment begins.
              </Text>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-3 md:mt-16 md:auto-rows-[220px] md:grid-cols-12 md:gap-4 lg:auto-rows-[260px]">
          {tiles.map((tile, index) => (
            <FadeIn
              key={tile.src}
              from="bottom"
              delay={index * 0.05}
              className={cn("h-full w-full", tile.spanClass)}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-2xl bg-sandalwood/30">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-slow ease-keynu group-hover:scale-[1.03]"
                />
                {/* Subtle bottom-edge gradient for tonal cohesion */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-walnut/25 to-transparent"
                />
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
