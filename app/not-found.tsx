import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="flex min-h-[60vh] flex-col items-start justify-center gap-6">
          <span className="font-body text-micro uppercase tracking-widest text-walnut/60">
            404 · Page not found
          </span>
          <Heading as="h1" size="h1" className="max-w-2xl">
            That page seems to have wandered off.
          </Heading>
          <Text size="lg" className="max-w-xl text-walnut/70">
            Let us guide you back to where you were headed.
          </Text>
          <Button asChild>
            <Link href="/">Return home</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
