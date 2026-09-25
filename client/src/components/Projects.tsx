/**
 * Projects Section — Plaster & Stone Design
 * Hairline-ruled gallery grid with numbered cards, real GitHub repos.
 */
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    name: "AI Calendar Assistant",
    description: "Intelligent scheduling layer powered by LLMs. Parses natural language, resolves conflicts, and optimizes time blocks — calendar management that thinks.",
    language: "TypeScript",
    tags: ["AI", "TypeScript", "LLM", "Productivity"],
    repo: "https://github.com/Vayala13/Ai-Calendar-Assistant",
    demo: null,
    featured: true,
  },
  {
    name: "LLM Cost Autopilot",
    description: "Routing layer that sits in front of multiple LLM providers. Analyzes request complexity, selects the cheapest capable model, and validates routing quality continuously.",
    language: "Python",
    tags: ["Python", "LLM", "Cost Optimization", "AI"],
    repo: "https://github.com/Vayala13/LLM-COST-Autopilot",
    demo: null,
    featured: true,
  },
  {
    name: "Vocal Isolator",
    description: "Deep learning audio separation — strip vocals from any track. Clean CLI, fast inference, production-ready output for developers and producers.",
    language: "Python",
    tags: ["Python", "Audio ML", "Deep Learning"],
    repo: "https://github.com/Vayala13/vocal-isolator",
    demo: null,
    featured: false,
  },
  {
    name: "Excalidraw MCP Agent",
    description: "MCP agent that generates and manipulates Excalidraw diagrams from natural language. Bridges AI assistants to visual diagramming tools programmatically.",
    language: "Python",
    tags: ["Python", "MCP", "Diagrams", "AI Agent"],
    repo: "https://github.com/Vayala13/excalidraw-mcp-diagram-agent",
    demo: null,
    featured: false,
  },
  {
    name: "Retention Analysis",
    description: "Cohort retention pipeline in Python. Visualizes user retention curves, churn patterns, and engagement decay — the metrics that actually predict product health.",
    language: "Jupyter Notebook",
    tags: ["Data Science", "Python", "Analytics"],
    repo: "https://github.com/Vayala13/retention-analysis",
    demo: null,
    featured: false,
  },
  {
    name: "World Cup Predictions",
    description: "Statistical model for 2026 FIFA World Cup match outcomes. Historical data, Elo ratings, and Monte Carlo simulation for tournament bracket prediction.",
    language: "Python",
    tags: ["Python", "ML", "Sports Analytics"],
    repo: "https://github.com/Vayala13/world_cup_predictions",
    demo: null,
    featured: false,
  },
];

const allTags = ["All", "AI", "Python", "TypeScript", "Data Science", "ML"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="py-28 lg:py-40 bg-plaster">
      <div className="container">
        <SectionHeader
          index="02"
          label="Projects"
          title="Systems I've Shipped"
          aside="AI tooling, data pipelines, and developer utilities — built to run in production."
        />

        {/* Filter */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12 pb-6 border-b border-sand">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-[0.68rem] tracking-[0.24em] uppercase transition-colors duration-300 ${
                activeTag === tag ? "text-ink border-b border-ink pb-1" : "text-ash hover:text-ink pb-1 border-b border-transparent"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-sand">
          {filtered.map((project, i) => (
            <a
              key={project.name}
              href={project.demo ?? project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-r border-b border-sand bg-plaster hover:bg-limestone transition-colors duration-500 p-8 lg:p-10 flex flex-col min-h-[22rem]"
            >
              <div className="flex items-start justify-between mb-16">
                <span className="font-serif italic text-3xl text-ash">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex items-center gap-3">
                  {project.featured && <span className="eyebrow">Featured</span>}
                  <ArrowUpRight size={16} strokeWidth={1.25} className="text-ash group-hover:text-ink transition-colors duration-300" />
                </span>
              </div>
              <h3 className="text-2xl font-light tracking-tight text-ink mb-4 leading-snug">{project.name}</h3>
              <p className="text-sm text-smoke leading-relaxed mb-8 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-5 border-t border-sand">
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ink">{project.language}</span>
                {project.tags.filter((t) => t !== project.language).slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[0.65rem] tracking-[0.2em] uppercase text-ash">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer" className="text-[0.7rem] tracking-[0.24em] uppercase text-ink link-quiet pb-1">
            All repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
