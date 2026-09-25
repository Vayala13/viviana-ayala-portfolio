/**
 * Hero Section — Plaster & Stone Design
 * Full-viewport, oversized light name set against empty plaster.
 * Content left, a quiet hairline index of facts right.
 */
import { Link } from "wouter";

const techStack = ["TypeScript", "Python", "React", "Node.js", "PostgreSQL", "Docker", "Git", "Linux"];

const facts = [
  { label: "Status", value: "Open to Opportunities" },
  { label: "Location", value: "United States" },
  { label: "Focus", value: "AI / Full-Stack" },
  { label: "Education", value: "CS @ UTRGV" },
  { label: "Repos", value: "18+ Public" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-plaster">
      <div className="container flex-1 flex flex-col justify-center pt-36 pb-16">
        <div className="eyebrow mb-10 animate-fade-in-up">Full-Stack Developer</div>

        <h1
          className="display text-[18vw] md:text-[13vw] lg:text-[11.5rem] text-ink mb-16 animate-fade-in-up"
          style={{ animationDelay: "120ms" }}
        >
          Viviana
          <br />
          <span className="font-serif italic font-light tracking-[-0.02em]">Ayala</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">
          <div className="lg:col-span-6 animate-fade-in-up" style={{ animationDelay: "260ms" }}>
            <p className="text-lg md:text-xl leading-relaxed text-smoke max-w-xl mb-12">
              Current AI-Agent Engineering Teaching Assistant for the Department
              of Computer Science at UTRGV.
              One of nine students hand-picked to lead the inaugural SIG AI
              pilot (2026). Former Software Engineering Intern at Region One ESC
              (2025). Volunteering to build automation solutions for MBMT Law Firm.
            </p>
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

          <dl
            className="lg:col-start-9 lg:col-span-4 border-t border-sand animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            {facts.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between gap-6 py-4 border-b border-sand">
                <dt className="eyebrow">{item.label}</dt>
                <dd className="text-sm text-ink text-right">{item.value}</dd>
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
