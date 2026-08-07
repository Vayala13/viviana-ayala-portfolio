/**
 * Certifications Section — Bioluminescent Grid Design
 * Anthropic Academy credentials with verify links.
 */
import { ArrowUpRight, Award } from "lucide-react";

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
    <section id="certifications" className="py-24 bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255, 183, 197,0.01) 3px, rgba(255, 183, 197,0.01) 4px)" }} />

      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-3">03 / Certifications</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight">
              Certifications
            </h2>
          </div>
          <p className="text-[#64748b] max-w-xs text-sm leading-relaxed lg:text-right">
            Anthropic Academy credentials — click any card to verify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <a
              key={cert.href}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#111827] border border-[#1e2d3d] rounded-lg p-6 hover:border-[#FFB7C5]/40 transition-all duration-200 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFB7C5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded border border-[#FFB7C5]/30 bg-[#FFB7C5]/10 text-[#FFB7C5]">
                  <Award size={16} />
                </div>
                <span className="flex items-center gap-1 text-xs text-[#FFB7C5] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  Verify <ArrowUpRight size={12} />
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cert.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-[#1e2d3d]/60 text-[#475569] font-mono text-[10px] rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-[#e2e8f0] group-hover:text-[#FFB7C5] transition-colors duration-150 mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-[#64748b] mb-4">{cert.issuer}</p>
              <div className="font-mono text-xs text-[#475569]">{cert.date}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
