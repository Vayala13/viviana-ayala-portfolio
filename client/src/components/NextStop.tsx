/**
 * Next stop — closes each section page with a link onward to the next
 * line on the departure board, so no page is a dead end.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { stops } from "@/components/ExploreBoard";

export default function NextStop({ current }: { current: string }) {
  const index = stops.findIndex((stop) => stop.href === current);
  const next = index >= 0 ? stops[index + 1] : undefined;
  if (!next) return null;

  return (
    <nav aria-label="Next page" className="container pb-24">
      <Link
        href={next.href}
        className="group flex items-center gap-6 py-10 border-t border-ink hover:bg-limestone transition-colors duration-300"
      >
        <span className="eyebrow shrink-0">Next stop</span>
        <span
          className={`${next.color} w-11 h-9 shrink-0 rounded-md flex items-center justify-center font-medium tabular-nums`}
        >
          {next.line}
        </span>
        <span className="flex-1 min-w-0 display text-4xl md:text-6xl text-ink">{next.label}</span>
        <ArrowRight
          size={28}
          strokeWidth={1}
          className="shrink-0 text-ash group-hover:text-ink group-hover:translate-x-2 transition-all duration-300"
        />
      </Link>
    </nav>
  );
}
