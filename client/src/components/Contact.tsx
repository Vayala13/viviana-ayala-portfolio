/**
 * Contact / Footer Section — Bioluminescent Grid Design
 * Contact form + resume download + social links + topology footer.
 */
import { useState } from "react";
import { Send, Download, Github, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:contact@marcuschen.dev?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer id="contact" className="bg-[#0a0a0f] border-t border-[#1e2d3d] relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />

      <div className="container py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="section-label mb-3">06 / Contact</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] mb-4 leading-tight">
              Ready to Build?
            </h2>
            <p className="text-[#64748b] leading-relaxed mb-8 max-w-md">
              Open to internships, research collaborations, and projects worth shipping.
              If you have a hard problem — I want to hear it.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[#64748b]">
                <Mail size={14} className="text-[#00ff88]" />
                <span className="font-mono text-sm">contact@marcuschen.dev</span>
              </div>
              <div className="flex items-center gap-3 text-[#64748b]">
                <MapPin size={14} className="text-[#00ff88]" />
                <span className="font-mono text-sm">United States · Remote-friendly</span>
              </div>
              <div className="flex items-center gap-3 text-[#64748b]">
                <Github size={14} className="text-[#00ff88]" />
                <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer"
                  className="font-mono text-sm hover:text-[#00ff88] transition-colors">
                  github.com/Vayala13
                </a>
              </div>
            </div>
            <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] font-mono text-sm rounded hover:bg-[#00ff88]/20 hover:border-[#00ff88] transition-all duration-150 btn-press">
              <Download size={14} />
              Download Resume
            </a>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#64748b] mb-2">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#111827] border border-[#1e2d3d] rounded px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#2d3f55] focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/10 transition-colors duration-150 font-mono"
                  placeholder="Your name" />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#64748b] mb-2">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#111827] border border-[#1e2d3d] rounded px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#2d3f55] focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/10 transition-colors duration-150 font-mono"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#64748b] mb-2">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#111827] border border-[#1e2d3d] rounded px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#2d3f55] focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/10 transition-colors duration-150 font-mono resize-none"
                  placeholder="What are you building?" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00ff88] text-[#0a0a0f] font-semibold text-sm rounded hover:bg-[#00e87a] transition-colors duration-150 btn-press">
                {submitted ? "Message queued — check your email client." : <><Send size={14} />Transmit Message</>}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1e2d3d] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/logo-mc_701a4ec1.png" alt="MC" className="w-5 h-5 object-contain" />
            <span className="font-mono text-xs text-[#475569]">
              marcus<span className="text-[#00ff88]">.</span>chen — Systems that scale. Code that ships.
            </span>
          </div>
          <span className="font-mono text-xs text-[#2d3f55]">
            React + TypeScript · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}

