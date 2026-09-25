/**
 * Explore board — a Zurich tram departure board in the hero that invites
 * visitors into the rest of the site; each section is a numbered line.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

type Stop = {
  line: number;
  label: string;
  detail: string;
  href: string;
  /** Badge background + number color (dark numbers on light badges, like real tram signs) */
  color: string;
};

export const stops: Stop[] = [
  { line: 2, label: "Projects", detail: "6 systems shipped", href: "/projects", color: "bg-aare text-plaster" },
  { line: 3, label: "Certifications", detail: "6 credentials", href: "/certifications", color: "bg-roof text-plaster" },
  { line: 4, label: "Skills", detail: "5 disciplines", href: "/skills", color: "bg-gold text-ink" },
  { line: 5, label: "Open Source", detail: "4 public tools", href: "/open-source", color: "bg-navy text-plaster" },
  { line: 6, label: "Contact", detail: "Say hello", href: "/contact", color: "bg-sandstone text-ink" },
];

export default function ExploreBoard() {
  return (
    <div>
      <div className="flex items-baseline justify-between pb-4 border-b border-ink">
        <span className="eyebrow text-ink">Next departures</span>
        <span className="eyebrow">Explore</span>
      </div>
      <ul>
        {stops.map((stop, i) => (
          <li key={stop.href}>
            <Link
              href={stop.href}
              className="group flex items-center gap-4 py-4 border-b border-sand hover:bg-limestone transition-colors duration-300"
            >
              <span
                className={`${stop.color} w-9 h-7 shrink-0 rounded-md flex items-center justify-center text-sm font-medium tabular-nums`}
              >
                {stop.line}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-ink leading-tight">{stop.label}</span>
                <span className="block text-xs text-ash">{stop.detail}</span>
              </span>
              <span className="text-sm tabular-nums text-smoke">{i + 1}′</span>
              <ArrowRight
                size={16}
                strokeWidth={1.25}
                className="text-ash group-hover:text-ink group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
