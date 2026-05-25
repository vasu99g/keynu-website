import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import { journalPosts } from "@/lib/content-sources/local";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the clinic — plain-spoken articles on skin, hair, body and the brand.",
};

export default function JournalIndex() {
  const featured = journalPosts[0];
  const rest = journalPosts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes from the __HL__."
        highlight="clinic"
        lead="Plain-spoken articles on skin, hair, body and the brand. Written by the people who run the practice."
      />

      <Section spacing="default">
        <Container width="wide">
          {featured && (
            <FadeIn from="bottom">
              <Link
                href={`/journal/${featured.slug}`}
                className="group grid items-stretch gap-8 overflow-hidden rounded-xl border border-walnut/12 bg-mogra md:grid-cols-12 md:gap-0"
              >
                <div className="relative aspect-[16/10] md:col-span-7 md:aspect-auto">
                  <Image
                    src={featured.heroImage}
                    alt={featured.title}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover transition-transform duration-slow ease-keynu group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 p-6 md:col-span-5 md:p-10">
                  <span className="inline-flex items-center gap-2 font-body text-micro uppercase tracking-widest text-marigold">
                    <span aria-hidden="true">+</span>
                    {featured.category} · Featured
                  </span>
                  <h2 className="font-heading text-h2 leading-tight tracking-tight text-walnut">
                    {featured.title}
                  </h2>
                  <p className="font-body text-body-lg leading-relaxed text-ink/85">
                    {featured.excerpt}
                  </p>
                  <p className="font-body text-caption text-walnut/55">
                    {featured.author} · {featured.readingMinutes} min read
                  </p>
                </div>
              </Link>
            </FadeIn>
          )}

          {rest.length > 0 && (
            <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              {rest.map((post, index) => (
                <FadeIn key={post.slug} from="bottom" delay={index * 0.06}>
                  <li>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="group block overflow-hidden rounded-xl border border-walnut/12 bg-mogra transition-colors duration-base ease-keynu hover:border-walnut/30"
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={post.heroImage}
                          alt={post.title}
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="object-cover transition-transform duration-slow ease-keynu group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="space-y-3 p-6">
                        <span className="font-body text-micro uppercase tracking-widest text-marigold">
                          {post.category}
                        </span>
                        <h3 className="font-heading text-h3 leading-tight tracking-tight text-walnut">
                          {post.title}
                        </h3>
                        <p className="font-body text-body leading-relaxed text-ink/80">
                          {post.excerpt}
                        </p>
                        <p className="font-body text-caption text-walnut/55">
                          {post.author} · {post.readingMinutes} min read
                        </p>
                      </div>
                    </Link>
                  </li>
                </FadeIn>
              ))}
            </ul>
          )}
        </Container>
      </Section>

      <PageCTA
        title="Want a question answered?"
        lead="Drop us a note and we may turn your question into the next post."
      />
    </>
  );
}
