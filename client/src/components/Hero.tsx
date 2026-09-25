/**
 * Hero Section — Zurich / Bern Design
 * Oversized name on a visible 12-column grid, beside a tram departure
 * board that links visitors into the rest of the site.
 */
import { Link } from "wouter";
import ExploreBoard from "@/components/ExploreBoard";

const techStack = ["TypeScript", "Python", "React", "Node.js", "PostgreSQL", "Docker", "Git", "Linux"];

// Bio as a short timeline — one statement per row
const highlights = [
  { when: "Now", text: "AI-Agent Engineering Teaching Assistant for the Department of Computer Science at UTRGV." },
  { when: "Summer 2026", text: "One of nine students hand-picked to lead the inaugural SIG AI pilot program." },
  { when: "Summer 2025", text: "Software Engineering Intern at Region One ESC." },
  { when: "Volunteer", text: "Building automation solutions for MBMT Law Firm." },
];

const facts = [
  { label: "Status", value: "Open to Opportunities" },
  { label: "Location", value: "United States" },
  { label: "Focus", value: "AI / Full-Stack" },
  { label: "Education", value: "Computer Science @ UTRGV", note: "Minor in Business Management" },
  { label: "Repos", value: "18+ Public" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-plaster">
      {/* Layout-sheet grid guides */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 container grid-guides" />

      <div className="container relative flex-1 flex flex-col justify-center pt-36 pb-16">
        <div className="text-[0.8rem] tracking-[0.22em] uppercase text-smoke mb-10 animate-fade-in-up">Full-Stack Developer</div>

        {/* One grid: on phones the order is name → bio → departures → facts,
            so who you are and the résumé button come before the departure board. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14 lg:gap-y-16">
          <h1
            className="lg:col-span-8 lg:row-start-1 lg:self-end display text-[15vw] md:text-[11vw] lg:text-[9.75rem] text-ink animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            Viviana
            <br />
            Ayala
          </h1>

          <div className="lg:col-span-6 lg:row-start-2 animate-fade-in-up" style={{ animationDelay: "260ms" }}>
            <ul className="max-w-xl mb-12 border-t border-sand">
              {highlights.map((item) => (
                <li key={item.when + item.text} className="grid grid-cols-[6.5rem_1fr] gap-4 py-4 border-b border-sand">
                  <span className="eyebrow pt-1.5">{item.when}</span>
                  <span className="text-base md:text-lg leading-relaxed text-smoke">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-solid">
                See My Work
              </Link>
              <a
                href={`${import.meta.env.BASE_URL}Viviana-Ayala-Resume.pdf`}
                download="Viviana-Ayala-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Explore board — invites visitors into the rest of the site */}
          <div
            className="lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:self-end animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <ExploreBoard />
          </div>

          <dl
            className="lg:col-start-9 lg:col-span-4 lg:row-start-2 border-t border-sand animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            {facts.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between gap-6 py-4 border-b border-sand">
                <dt className="eyebrow">{item.label}</dt>
                <dd className="text-sm text-ink text-right">
                  {item.value}
                  {item.note && <span className="block text-xs text-ash mt-0.5">{item.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Core stack — a single quiet line along the floor */}
      <div className="border-t border-sand animate-fade-in-up" style={{ animationDelay: "520ms" }}>
        <div className="container py-6 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="eyebrow text-ink">Core Stack</span>
          {techStack.map((tech) => (
            <span key={tech} className="text-xs tracking-[0.14em] uppercase text-ash">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
