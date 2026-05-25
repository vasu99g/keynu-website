import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { cn } from "@/lib/utils/cn";

interface PageHeroProps {
  /** Eyebrow above the headline. Accepts plain string or JSX (e.g. with links). */
  eyebrow?: React.ReactNode;
  title: string;
  /** Optional Cormorant italic word to highlight inside the title. */
  highlight?: string;
  /** Where the highlight word lives in the title (replaces __highlight__). */
  lead?: string;
  /** Optional meta (e.g. "37 treatments · 11 categories") */
  meta?: string;
  /** Soft warm radial-gradient backdrop on Mogra (default true) */
  warmBackdrop?: boolean;
  className?: string;
}

/**
 * Reusable page hero — the standard opening band for every interior page.
 * Keeps the brand's heading + Cormorant italic + eyebrow rhythm consistent
 * across /treatments, /story, /doctors, /results etc.
 *
 * Pass `title` with a literal `__HL__` placeholder where the italic
 * `highlight` should be inserted, or just pass a plain title.
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  meta,
  warmBackdrop = true,
  className,
}: PageHeroProps) {
  const renderTitle = () => {
    if (!highlight || !title.includes("__HL__")) {
      return title;
    }
    const [before, after] = title.split("__HL__");
    return (
      <>
        {before}
        <em className="font-editorial italic text-marigold">{highlight}</em>
        {after}
      </>
    );
  };

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40",
        className,
      )}
      style={
        warmBackdrop
          ? {
              background: [
                "radial-gradient(60% 80% at 88% 18%, rgba(251, 176, 76, 0.28) 0%, transparent 60%)",
                "radial-gradient(50% 70% at 8% 92%, rgba(234, 219, 183, 0.55) 0%, transparent 65%)",
                "var(--color-mogra)",
              ].join(", "),
            }
          : undefined
      }
    >
      <Container width="wide">
        {eyebrow && (
          <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
            <span aria-hidden="true" className="text-saffron">
              +
            </span>
            {eyebrow}
          </span>
        )}
        <Heading as="h1" size="display" className="mt-5 max-w-4xl">
          {renderTitle()}
        </Heading>
        {lead && (
          <Text size="lg" className="mt-6 max-w-2xl text-ink/85">
            {lead}
          </Text>
        )}
        {meta && (
          <p className="mt-6 font-body text-micro uppercase tracking-widest text-walnut/55">
            {meta}
          </p>
        )}
      </Container>
    </section>
  );
}
