/**
 * Hero Section — Zurich / Bern Design
 * Oversized name on a visible 12-column grid, beside an abstract
 * Bern old-town scene: tiled roofline, sandstone arcades, the Aare,
 * and the gilded clock tower.
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
      {/* Layout-sheet grid guides */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 container grid-guides" />

      <div className="container relative flex-1 flex flex-col justify-center pt-36 pb-16">
        <div className="eyebrow mb-10 animate-fade-in-up">Full-Stack Developer</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <h1
            className="lg:col-span-8 display text-[18vw] md:text-[13vw] lg:text-[11.5rem] text-ink animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            Viviana
            <br />
            Ayala<span className="text-aare">.</span>
          </h1>

          {/* Bern old town, abstracted */}
          <div
            aria-hidden="true"
            className="hidden lg:block lg:col-span-4 relative h-[22rem] animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            {/* Zytglogge clock */}
            <div className="absolute left-[8%] top-0 w-14 h-14 rounded-full border border-gold flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gold" />
            </div>
            {/* tiled roofline */}
            <div
              className="absolute left-0 right-0 top-[20%] h-[20%] bg-roof"
              style={{ clipPath: "polygon(8% 100%, 22% 0, 78% 0, 92% 100%)" }}
            />
            {/* sandstone facade with arcades */}
            <div className="absolute left-0 right-0 top-[40%] h-[38%] bg-sandstone-light flex items-end justify-around px-[6%] pt-[6%]">
              {[0, 1, 2].map((n) => (
                <div key={n} className="w-[24%] h-full bg-sandstone" style={{ borderRadius: "999px 999px 0 0" }} />
              ))}
            </div>
            {/* the Aare */}
            <div className="absolute left-0 right-0 bottom-0 h-[22%] bg-aare" />
            <div className="absolute left-[10%] right-[30%] bottom-[9%] h-px bg-plaster/60" />
            <div className="absolute left-[40%] right-[8%] bottom-[14%] h-px bg-plaster/40" />
          </div>
        </div>

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
