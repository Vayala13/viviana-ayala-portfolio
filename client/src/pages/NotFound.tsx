import { Link } from "wouter";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="container min-h-[80vh] flex flex-col justify-center">
        <div className="eyebrow mb-8">404 — Not Found</div>
        <h1 className="display text-6xl md:text-8xl text-ink mb-10">
          Nothing here.
        </h1>
        <p className="text-smoke mb-12 max-w-md">The page you're looking for doesn't exist. It may have been moved or deleted.</p>
        <div>
          <Link href="/" className="btn-solid">Go Home</Link>
        </div>
      </section>
    </PageShell>
  );
}
