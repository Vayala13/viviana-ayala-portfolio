/**
 * Certifications Section — Plaster & Stone Design
 * Numbered, hairline-ruled index of credentials.
 * Anthropic Academy credentials with verify links.
 */
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const certifications = [
  {
    title: "AI Fluency for Builders",
    issuer: "Anthropic Education",
    date: "Jul 29, 2026",
    tags: ["AI Fluency", "Builders"],
    href: "https://verify.skilljar.com/c/68ipk6i95got",
    course: "https://anthropic.skilljar.com/ai-fluency-for-builders",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic Education",
    date: "Jul 29, 2026",
    tags: ["Claude Code", "Agents"],
    href: "https://verify.skilljar.com/c/bwdycjafxz3m",
    course: "https://anthropic.skilljar.com/claude-code-in-action",
  },
  {
    title: "Claude Platform 101",
    issuer: "Anthropic Education",
    date: "Jul 29, 2026",
    tags: ["Claude", "Platform"],
    href: "https://verify.skilljar.com/c/b8rvovzquugx",
    course: "https://anthropic.skilljar.com/claude-platform-101",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic Education",
    date: "Jul 29, 2026",
    tags: ["Claude Code"],
    href: "https://verify.skilljar.com/c/phtjpr5o5c37",
    course: "https://anthropic.skilljar.com/claude-code-101",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Education",
    date: "Jul 17, 2026",
    tags: ["AI Fluency", "Foundations"],
    href: "https://verify.skilljar.com/c/9p33uybitumr",
    course: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Education",
    date: "Jul 14, 2026",
    tags: ["Claude"],
    href: "https://verify.skilljar.com/c/myvwsgdyhfau",
    course: "https://anthropic.skilljar.com/claude-101",
  },
];

export default function Blog() {
  return (
    <section id="certifications" className="py-28 lg:py-40 bg-plaster">
      <div className="container">
        <SectionHeader
          index="03"
          label="Certifications"
          title="Certifications"
          aside="Anthropic Academy credentials — select any to verify."
        />

        <div className="border-t border-ink">
          {certifications.map((cert, i) => (
            <a
              key={cert.href}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-12 items-baseline gap-4 py-8 border-b border-sand hover:bg-limestone transition-colors duration-500"
            >
              <span className="col-span-2 md:col-span-1 font-serif italic text-2xl text-ash">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 md:col-span-6">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-ink leading-snug">{cert.title}</h3>
                <p className="text-sm text-ash mt-1">{cert.issuer}</p>
              </div>
              <div className="hidden md:flex col-span-3 flex-wrap gap-x-4 gap-y-1">
                {cert.tags.map((tag) => (
                  <span key={tag} className="text-[0.65rem] tracking-[0.2em] uppercase text-ash">{tag}</span>
                ))}
              </div>
              <span className="col-start-3 col-span-10 md:col-start-auto md:col-span-2 flex items-center md:justify-end gap-2 text-xs tracking-[0.14em] uppercase text-smoke">
                {cert.date}
                <ArrowUpRight size={14} strokeWidth={1.25} className="text-ash group-hover:text-ink transition-colors duration-300" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
