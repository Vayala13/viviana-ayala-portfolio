/**
 * Blog / Writing Section — Bioluminescent Grid Design
 * Technical articles with scanline texture and topology accents.
 */
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "How I Cut LLM API Costs by 60% with Intelligent Routing",
    excerpt: "Request complexity analysis, model capability mapping, and the feedback loop that keeps routing decisions accurate over time.",
    date: "Aug 2026",
    readTime: "8 min",
    tags: ["LLM", "Cost Optimization", "Python"],
    href: "https://github.com/Vayala13/LLM-COST-Autopilot",
  },
  {
    title: "MCP Agents: Connecting AI to Real Tools",
    excerpt: "The Model Context Protocol is changing how AI assistants interact with external systems. Here's how I built a diagram-generation agent from scratch.",
    date: "Jul 2026",
    readTime: "6 min",
    tags: ["MCP", "AI Agents", "TypeScript"],
    href: "https://github.com/Vayala13/excalidraw-mcp-diagram-agent",
  },
  {
    title: "Vocal Isolation with Python: From Prototype to CLI",
    excerpt: "Audio source separation using deep learning — picking the right model, handling edge cases, and shipping a clean tool that anyone can run.",
    date: "Jul 2026",
    readTime: "5 min",
    tags: ["Python", "Audio ML", "Open Source"],
    href: "https://github.com/Vayala13/vocal-isolator",
  },
  {
    title: "Retention Curves: The Metric That Actually Predicts Churn",
    excerpt: "Using pandas and matplotlib to build cohort retention curves that reveal real user behavior — not just vanity metrics.",
    date: "Jul 2026",
    readTime: "4 min",
    tags: ["Data Science", "Python", "Analytics"],
    href: "https://github.com/Vayala13/retention-analysis",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,136,0.01) 3px, rgba(0,255,136,0.01) 4px)" }} />

      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-3">05 / Writing</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight">
              Technical Dispatches
            </h2>
          </div>
          <p className="text-[#64748b] max-w-xs text-sm leading-relaxed lg:text-right">
            Writing about AI systems, developer tooling, and the craft of building software that lasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.map((article, i) => (
            <a key={i} href={article.href} target="_blank" rel="noopener noreferrer"
              className="group block bg-[#111827] border border-[#1e2d3d] rounded-lg p-6 hover:border-[#00ff88]/40 transition-all duration-200 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-[#1e2d3d]/60 text-[#475569] font-mono text-[10px] rounded">{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-[#e2e8f0] group-hover:text-[#00ff88] transition-colors duration-150 mb-3 leading-snug">{article.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-5">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-[#475569] font-mono">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-[#00ff88] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  Read <ArrowRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
