/**
 * Projects Section — Bioluminescent Grid Design
 * Asymmetric grid with topology node accents, sharp copy, real GitHub repos.
 */
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "AI Calendar Assistant",
    description: "Intelligent scheduling layer powered by LLMs. Parses natural language, resolves conflicts, and optimizes time blocks — calendar management that thinks.",
    language: "TypeScript",
    langColor: "#3178c6",
    tags: ["AI", "TypeScript", "LLM", "Productivity"],
    repo: "https://github.com/Vayala13/Ai-Calendar-Assistant",
    demo: null,
    featured: true,
  },
  {
    name: "LLM Cost Autopilot",
    description: "Routing layer that sits in front of multiple LLM providers. Analyzes request complexity, selects the cheapest capable model, and validates routing quality continuously.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["Python", "LLM", "Cost Optimization", "AI"],
    repo: "https://github.com/Vayala13/LLM-COST-Autopilot",
    demo: null,
    featured: true,
  },
  {
    name: "Vocal Isolator",
    description: "Deep learning audio separation — strip vocals from any track. Clean CLI, fast inference, production-ready output for developers and producers.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["Python", "Audio ML", "Deep Learning"],
    repo: "https://github.com/Vayala13/vocal-isolator",
    demo: null,
    featured: false,
  },
  {
    name: "Excalidraw MCP Agent",
    description: "MCP agent that generates and manipulates Excalidraw diagrams from natural language. Bridges AI assistants to visual diagramming tools programmatically.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["Python", "MCP", "Diagrams", "AI Agent"],
    repo: "https://github.com/Vayala13/excalidraw-mcp-diagram-agent",
    demo: null,
    featured: false,
  },
  {
    name: "Retention Analysis",
    description: "Cohort retention pipeline in Python. Visualizes user retention curves, churn patterns, and engagement decay — the metrics that actually predict product health.",
    language: "Jupyter Notebook",
    langColor: "#DA5B0B",
    tags: ["Data Science", "Python", "Analytics"],
    repo: "https://github.com/Vayala13/retention-analysis",
    demo: null,
    featured: false,
  },
  {
    name: "World Cup Predictions",
    description: "Statistical model for 2026 FIFA World Cup match outcomes. Historical data, Elo ratings, and Monte Carlo simulation for tournament bracket prediction.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["Python", "ML", "Sports Analytics"],
    repo: "https://github.com/Vayala13/world_cup_predictions",
    demo: null,
    featured: false,
  },
];

const allTags = ["All", "AI", "Python", "TypeScript", "Data Science", "ML"];

// Subtle topology node decoration
function NodeAccent() {
  return (
    <div className="absolute -left-3 top-6 w-1.5 h-1.5 rounded-full bg-[#FFB7C5]/40 ring-2 ring-[#FFB7C5]/10" />
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(255, 183, 197,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 183, 197,0.5) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

      <div className="container relative">
        {/* Asymmetric header: label left, title large */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-3">02 / Projects</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight">
              Systems I've Shipped
            </h2>
          </div>
          <p className="text-[#64748b] max-w-xs text-sm leading-relaxed lg:text-right">
            AI tooling, data pipelines, and developer utilities — built to run in production.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10 pl-4 border-l border-[#1e2d3d]">
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 font-mono text-xs tracking-wider rounded border transition-all duration-150 btn-press ${
                activeTag === tag
                  ? "bg-[#FFB7C5]/10 border-[#FFB7C5] text-[#FFB7C5]"
                  : "bg-transparent border-[#1e2d3d] text-[#64748b] hover:border-[#FFB7C5]/40 hover:text-[#e2e8f0]"
              }`}
            >{tag}</button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-4 border-l border-[#1e2d3d] relative">
          {filtered.map((project, i) => (
            <div key={project.name} className="project-card rounded-lg p-6 flex flex-col relative" style={{ animationDelay: `${i * 60}ms` }}>
              <NodeAccent />
              <div className="flex items-start justify-between mb-4">
                <div>
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-[#FFB7C5]/10 border border-[#FFB7C5]/30 text-[#FFB7C5] font-mono text-[10px] tracking-widest uppercase rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#FFB7C5] transition-colors" title="Live Demo">
                      <ExternalLink size={15} />
                    </a>
                  )}
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#FFB7C5] transition-colors" title="GitHub">
                    <Github size={15} />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#e2e8f0] mb-2 leading-snug">{project.name}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-5 flex-1">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.langColor }} />
                  <span className="font-mono text-xs text-[#64748b]">{project.language}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-[#1e2d3d]/60 text-[#475569] font-mono text-[10px] rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pl-4">
          <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#64748b] hover:text-[#FFB7C5] transition-colors border-b border-transparent hover:border-[#FFB7C5]/40 pb-0.5">
            All repositories on GitHub <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
