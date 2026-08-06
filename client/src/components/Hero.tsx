/**
 * Hero Section — Bioluminescent Grid Design
 * Full-viewport hero with animated particle network, asymmetric left-anchored layout.
 * Design: Black canvas, phosphor green (#00ff88), Space Grotesk + JetBrains Mono.
 */
import { useEffect, useRef } from "react";

const techStack = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const NODES = 60;
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.4,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < NODES; i++) {
        for (let j = i + 1; j < NODES; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,255,136,${0.15 * (1 - dist / 150)})`; ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,136,0.55)"; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 60%, #0a0f1a 100%)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url(/manus-storage/hero-bg_969f2676.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.65 }} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `linear-gradient(rgba(0,255,136,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.6) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      {/* Left accent rail */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00ff88]/20 to-transparent hidden lg:block" />

      <div className="container relative z-10 pt-24 pb-20">
        {/* Asymmetric layout: wide left content + right metadata column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-center">
          {/* Main content */}
          <div>
            <div className="section-label mb-5 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              01 / Hello, World
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-[#e2e8f0] leading-[1.0] mb-5 animate-fade-in-up" style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: "80ms" }}>
              Marcus<br />
              <span className="text-[#00ff88] neon-text-glow">Chen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#64748b] font-light mb-3 animate-fade-in-up cursor-blink" style={{ animationDelay: "160ms" }}>
              Full-Stack Developer
            </p>
            <p className="text-base text-[#475569] max-w-lg mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              CS Student at UTRGV. I build AI-powered tools, scalable systems,
              and open-source software that ships — not just demos.
            </p>
            <div className="flex flex-wrap gap-4 mb-14 animate-fade-in-up" style={{ animationDelay: "320ms" }}>
              <a href="#projects" className="px-6 py-3 bg-[#00ff88] text-[#0a0a0f] font-semibold text-sm rounded hover:bg-[#00e87a] transition-colors duration-150 btn-press">
                See My Work
              </a>
              <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#1e2d3d] text-[#e2e8f0] font-semibold text-sm rounded hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-all duration-150 btn-press flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                github.com/Vayala13
              </a>
            </div>
            {/* Tech stack */}
            <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <p className="section-label mb-4">Core Stack</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 px-3 py-2 bg-[#111827]/80 border border-[#1e2d3d] rounded hover:border-[#00ff88]/40 transition-colors duration-150 group">
                    <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                    <span className="font-mono text-xs text-[#64748b] group-hover:text-[#e2e8f0] transition-colors duration-150">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right metadata column */}
          <div className="hidden lg:flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: "480ms" }}>
            {[
              { label: "Status", value: "Open to Opportunities", accent: true },
              { label: "Location", value: "United States" },
              { label: "Focus", value: "AI / Full-Stack" },
              { label: "Education", value: "CS @ UTRGV" },
              { label: "Repos", value: "18+ Public" },
            ].map((item) => (
              <div key={item.label} className={`p-4 rounded border ${item.accent ? "bg-[#00ff88]/5 border-[#00ff88]/20" : "bg-[#111827]/60 border-[#1e2d3d]"}`}>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#475569] mb-1">{item.label}</div>
                <div className={`font-mono text-sm ${item.accent ? "text-[#00ff88]" : "text-[#e2e8f0]"}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-[#00ff88] to-transparent" />
        <span className="font-mono text-[9px] tracking-widest uppercase text-[#64748b] rotate-90 origin-left translate-x-3">Scroll</span>
      </div>
    </section>
  );
}
