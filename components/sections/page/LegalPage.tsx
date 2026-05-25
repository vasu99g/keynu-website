import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { PageHero } from "@/components/sections/page/PageHero";

interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  lastUpdated: string;
  sections: LegalSection[];
}

/**
 * Reusable wrapper for legal pages (Privacy, Terms, Disclaimer).
 * Renders the standard page hero on top, then a single-column long-form
 * layout of numbered sections. Keeps every legal page on-brand without
 * duplicating boilerplate.
 */
export function LegalPage({ eyebrow = "Legal", title, lead, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} meta={`Last updated: ${lastUpdated}`} />
      <Section spacing="default">
        <Container>
          <div className="mx-auto max-w-2xl">
            <ol className="space-y-12">
              {sections.map((section, index) => (
                <li key={section.heading}>
                  <p className="font-body text-micro uppercase tracking-widest text-walnut/55">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-heading text-h3 leading-tight tracking-tight text-walnut">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-3 font-body text-body leading-relaxed text-ink/85">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
}
