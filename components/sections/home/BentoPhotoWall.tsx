import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { VideoTile } from "@/components/composites/VideoTile";
import { Watermark } from "@/components/brand/Watermark";
import { cn } from "@/lib/utils/cn";

interface ImageTile {
  kind: "image";
  src: string;
  alt: string;
  spanClass: string;
}

interface VideoTileSpec {
  kind: "video";
  src: string;
  poster: string;
  alt: string;
  spanClass: string;
}

type BentoTile = ImageTile | VideoTileSpec;

/**
 * Visual "inside Keynu" wall — asymmetric bento grid mixing real
 * photography and silent autoplay reels.
 *
 * Layout intent: vertical videos (9:16 source) always span 2 grid rows so
 * they're shown tall and uncropped; landscape photos span 1 row.
 * Tile counts and spans add up to exactly two grid rows of 12 columns so
 * the layout never has gaps or orphan tiles at common breakpoints.
 */
const tiles: BentoTile[] = [
  {
    kind: "image",
    src: "/images/bento/kinu-partition.jpg",
    alt: "Patient in champagne satin in front of the etched kinu motif partition",
    spanClass: "md:col-span-5 md:row-span-2",
  },
  {
    kind: "video",
    src: "/videos/bento-treatment.mp4",
    poster: "/videos/bento-treatment.jpg",
    alt: "A treatment in progress at the clinic",
    spanClass: "md:col-span-3 md:row-span-2",
  },
  {
    kind: "image",
    src: "/images/bento/reception-detail.jpg",
    alt: "Reception interior — wood, soft lighting, illuminated KEYNU signage",
    spanClass: "md:col-span-4 md:row-span-1",
  },
  {
    kind: "image",
    src: "/images/bento/consult-room.jpg",
    alt: "Consultation moment — patient on a cream sofa, floral partition behind",
    spanClass: "md:col-span-4 md:row-span-1",
  },
  {
    kind: "video",
    src: "/videos/bento-ritual.mp4",
    poster: "/videos/bento-ritual.jpg",
    alt: "A ritual moment from the patient experience",
    spanClass: "md:col-span-3 md:row-span-2",
  },
  {
    kind: "image",
    src: "/images/bento/dinner-citrus.jpg",
    alt: "Editorial still — saffron tabletop, kinnow citrus tones",
    spanClass: "md:col-span-3 md:row-span-1",
  },
  {
    kind: "image",
    src: "/images/bento/posters-legs.jpg",
    alt: "Treatment-room wall with Keynu service posters",
    spanClass: "md:col-span-3 md:row-span-1",
  },
];

export function BentoPhotoWall() {
  return (
    <Section spacing="loose">
      <Watermark symbol="mountain" position="top-left" size={360} opacity={0.08} rotation={-8} tone="dark" />
      <Container width="wide">
        <FadeIn from="bottom" distance={12}>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              Inside Keynu
            </span>
            <Heading as="h2" size="h1" className="mt-5">
              The clinic that doesn&apos;t look like one.
            </Heading>
            <Text size="lg" className="mt-5 text-ink/85">
              Warm wood, soft golden light, an etched kinu emblem on glass. We
              built the room before we wrote the menu.
            </Text>
          </div>
        </FadeIn>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-3 md:mt-16 md:auto-rows-[260px] md:grid-cols-12 md:gap-4 lg:auto-rows-[320px]">
          {tiles.map((tile, index) => (
            <FadeIn
              key={tile.kind === "image" ? tile.src : tile.src + tile.poster}
              from="bottom"
              delay={index * 0.05}
              className={cn("h-full w-full", tile.spanClass)}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-lg bg-sandalwood/30">
                {tile.kind === "image" ? (
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-slow ease-keynu group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="h-full w-full transition-transform duration-slow ease-keynu group-hover:scale-[1.04]">
                    <VideoTile src={tile.src} poster={tile.poster} alt={tile.alt} />
                  </div>
                )}
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
