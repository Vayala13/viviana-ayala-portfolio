/**
 * Open Source Section — Bioluminescent Grid Design
 * Contributions list with topology line accents and stats grid.
 */

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
    <section id="opensource" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(255, 183, 197,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 183, 197,0.5) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-3">05 / Open Source</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight">
              Open by Default
            </h2>
          </div>
          <p className="text-[#64748b] max-w-xs text-sm leading-relaxed lg:text-right">
            Every tool I author is public. Code that helps one developer should help all of them.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#111827] border border-[#1e2d3d] rounded-lg p-5 text-center hover:border-[#FFB7C5]/30 transition-colors duration-200 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFB7C5]/30 to-transparent" />
              <div className="text-2xl font-bold text-[#FFB7C5] neon-text-glow mb-1">{stat.value}</div>
              <div className="font-mono text-xs text-[#64748b] tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contributions */}
        <div className="space-y-3 pl-4 border-l border-[#1e2d3d] relative">
          {contributions.map((contrib, i) => (
            <a key={i} href={contrib.url} target="_blank" rel="noopener noreferrer"
              className="block bg-[#111827] border border-[#1e2d3d] rounded-lg p-6 hover:border-[#FFB7C5]/40 transition-all duration-200 group relative">
              {/* Node */}
              <div className="absolute -left-[1.1rem] top-6 w-2 h-2 rounded-full bg-[#0a0a0f] border border-[#FFB7C5]/40 group-hover:border-[#FFB7C5] transition-colors" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-[#475569]">{contrib.org} /</span>
                    <span className="font-semibold text-[#e2e8f0] group-hover:text-[#FFB7C5] transition-colors duration-150">{contrib.project}</span>
                    <span className={`px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase rounded border ${
                      contrib.type === "Author"
                        ? "bg-[#FFB7C5]/10 border-[#FFB7C5]/30 text-[#FFB7C5]"
                        : "bg-[#1e2d3d] border-[#2d3f55] text-[#64748b]"
                    }`}>{contrib.type}</span>
                  </div>
                  <p className="text-sm text-[#64748b] leading-relaxed">{contrib.description}</p>
                </div>
                <div className="shrink-0">
                  <span className="inline-block px-3 py-1 bg-[#0d1117] border border-[#1e2d3d] text-[#475569] font-mono text-xs rounded">{contrib.impact}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 pl-4">
          <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 w-fit px-6 py-3 border border-[#1e2d3d] text-[#64748b] font-mono text-sm rounded hover:border-[#FFB7C5]/50 hover:text-[#FFB7C5] transition-all duration-150 btn-press">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            Full activity on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
