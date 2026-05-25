import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageCTA } from "@/components/sections/page/PageCTA";
import { journalPosts } from "@/lib/content-sources/local";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Journal" };
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        {/* Hero */}
        <Section spacing="default" className="pb-12 pt-32 md:pb-16 md:pt-40">
          <Container width="wide">
            <FadeIn from="bottom">
              <Link
                href="/journal"
                className="font-body text-micro uppercase tracking-widest text-walnut/55 hover:text-walnut"
              >
                ← Journal
              </Link>
              <span className="ml-3 font-body text-micro uppercase tracking-widest text-marigold">
                {post.category}
              </span>
              <h1 className="mt-5 max-w-4xl font-heading text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-walnut">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl font-body text-body-lg italic text-ink/80">
                {post.excerpt}
              </p>
              <p className="mt-6 font-body text-caption text-walnut/55">
                {post.author} · {post.readingMinutes} min read ·{" "}
                {new Date(post.publishedOn).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </FadeIn>

            <FadeIn from="bottom" delay={0.1}>
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm shadow-[0_32px_64px_-20px_rgba(86,46,38,0.32)]">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Body */}
        <Section spacing="default">
          <Container>
            <div className="mx-auto max-w-2xl space-y-6 font-body text-body-lg leading-relaxed text-ink">
              {post.body.map((paragraph) => (
                <FadeIn key={paragraph} from="bottom">
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      </article>

      {related.length > 0 && (
        <Section spacing="default" tone="secondary">
          <Container width="wide">
            <h2 className="font-heading text-h2 text-walnut">Keep reading</h2>
            <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/journal/${p.slug}`}
                    className="group block rounded-xl border border-walnut/12 bg-mogra p-6 transition-colors duration-base ease-keynu hover:border-walnut/30"
                  >
                    <span className="font-body text-micro uppercase tracking-widest text-marigold">
                      {p.category}
                    </span>
                    <h3 className="mt-2 font-heading text-h3 leading-tight tracking-tight text-walnut">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-body text-body text-ink/80">{p.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <PageCTA />
    </>
  );
}
