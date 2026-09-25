/**
 * Skills Section — Plaster & Stone Design
 * Numbered categories with hairline proficiency bars.
 */
import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

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
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm text-ink">{name}</span>
        <span className="text-xs tabular-nums text-ash">{level}</span>
      </div>
      <div className="h-px bg-sand overflow-hidden">
        <div className="h-full skill-bar-fill" style={{ width: animate ? `${level}%` : "0%" }} />
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
    <section id="skills" ref={sectionRef} className="py-28 lg:py-40 bg-plaster">
      <div className="container">
        <SectionHeader
          index="04"
          label="Skills"
          title="Proficiency Map"
          aside="Rated by hands-on production experience, not certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {skillCategories.map((cat, i) => (
            <div key={cat.label}>
              <div className="flex items-baseline gap-4 pb-5 mb-8 border-b border-ink">
                <span className="font-serif italic text-xl text-ash">{String(i + 1).padStart(2, "0")}</span>
                <span className="eyebrow text-ink">{cat.label}</span>
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
