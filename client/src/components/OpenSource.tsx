/**
 * Open Source Section — Plaster & Stone Design
 * Hairline stats grid and an editorial list of contributions.
 */
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const contributions = [
  {
    project: "LLM-COST-Autopilot",
    org: "Vayala13",
    description: "Authored an intelligent LLM routing layer — dynamically selects the cheapest capable model per request, reducing API costs while maintaining quality thresholds.",
    type: "Author",
    url: "https://github.com/Vayala13/LLM-COST-Autopilot",
    impact: "Cost optimization",
  },
  {
    project: "excalidraw-mcp-diagram-agent",
    org: "Vayala13",
    description: "Built an MCP agent that bridges natural language to Excalidraw diagram generation — enabling AI assistants to create and modify diagrams programmatically.",
    type: "Author",
    url: "https://github.com/Vayala13/excalidraw-mcp-diagram-agent",
    impact: "AI tooling",
  },
  {
    project: "vocal-isolator",
    org: "Vayala13",
    description: "Open-sourced a vocal isolation tool using audio ML models — professional-grade stem separation accessible to developers and musicians via a clean CLI.",
    type: "Author",
    url: "https://github.com/Vayala13/vocal-isolator",
    impact: "Audio ML",
  },
  {
    project: "world_cup_predictions",
    org: "Community Fork",
    description: "Extended a 2026 FIFA World Cup prediction script with improved simulation logic and updated match datasets for higher bracket prediction accuracy.",
    type: "Contributor",
    url: "https://github.com/Vayala13/world_cup_predictions",
    impact: "Sports data science",
  },
];

const stats = [
  { value: "18+", label: "Public Repos" },
  { value: "4+", label: "OSS Tools" },
  { value: "2026", label: "Active Since" },
  { value: "UTRGV", label: "CS Student" },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-28 lg:py-40 bg-plaster">
      <div className="container">
        <SectionHeader
          index="05"
          label="Open Source"
          title="Open by Default"
          aside="Every tool I author is public. Code that helps one developer should help all of them."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-sand mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-b border-sand p-8 lg:p-10">
              <div className="display text-4xl md:text-5xl text-ink mb-4">{stat.value}</div>
              <div className="eyebrow">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contributions */}
        <div className="border-t border-ink">
          {contributions.map((contrib) => (
            <a
              key={contrib.project}
              href={contrib.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-sand hover:bg-limestone transition-colors duration-500"
            >
              <div className="md:col-span-4">
                <div className="eyebrow mb-2">{contrib.org} · {contrib.type}</div>
                <h3 className="text-xl font-light tracking-tight text-ink">{contrib.project}</h3>
              </div>
              <p className="md:col-span-6 text-sm text-smoke leading-relaxed">{contrib.description}</p>
              <div className="md:col-span-2 flex md:justify-end items-start gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-ash">
                {contrib.impact}
                <ArrowUpRight size={14} strokeWidth={1.25} className="group-hover:text-ink transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer" className="btn-line">
            Full activity on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
