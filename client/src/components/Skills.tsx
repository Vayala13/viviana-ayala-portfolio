/**
 * Skills Section — Bioluminescent Grid Design
 * Skills matrix with proficiency bars, topology left-rail, category grouping.
 */
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 75 },
      { name: "Bash / Shell", level: 65 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "HTML / CSS", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Vite", level: 70 },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "LLM Integration", level: 85 },
      { name: "Prompt Engineering", level: 80 },
      { name: "Data Analysis", level: 75 },
      { name: "PyTorch (basics)", level: 55 },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Linux", level: 70 },
      { name: "CI/CD", level: 60 },
    ],
  },
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-sm text-[#e2e8f0]">{name}</span>
        <span className="font-mono text-xs text-[#00ff88]">{level}%</span>
      </div>
      <div className="h-px bg-[#1e2d3d] rounded-full overflow-hidden">
        <div className="h-full skill-bar-fill rounded-full" style={{ width: animate ? `${level}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setAnimated(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Scanline texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,136,0.012) 3px, rgba(0,255,136,0.012) 4px)" }} />

      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-3">03 / Skills</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight">
              Proficiency Map
            </h2>
          </div>
          <p className="text-[#64748b] max-w-xs text-sm leading-relaxed lg:text-right">
            Rated by hands-on production experience, not certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="bg-[#111827] border border-[#1e2d3d] rounded-lg p-6 hover:border-[#00ff88]/20 transition-colors duration-200 relative">
              {/* Topology node */}
              <div className="absolute -top-1.5 left-6 w-3 h-3 rounded-full bg-[#0d1117] border border-[#00ff88]/40 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#00ff88]/60" />
              </div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-0.5 h-4 bg-[#00ff88] rounded-full" />
                <span className="font-mono text-xs tracking-widest uppercase text-[#00ff88]">{cat.label}</span>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animated} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
