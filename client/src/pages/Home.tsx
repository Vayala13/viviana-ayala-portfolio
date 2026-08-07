/**
 * Home Page — hero only; other sections live on their own routes.
 */
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <PageShell overlayNav>
      <Hero />
    </PageShell>
  );
}
