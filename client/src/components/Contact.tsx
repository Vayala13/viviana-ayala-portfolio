/**
 * Contact / Footer Section — Bioluminescent Grid Design
 * Contact form + resume download + social links + topology footer.
 */
import { useState } from "react";
import { Send, Github, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:viviayalaperez@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer id="contact" className="bg-[#0a0a0f] border-t border-[#1e2d3d] relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `linear-gradient(rgba(255, 183, 197,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 183, 197,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFB7C5]/30 to-transparent" />

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
                <Mail size={14} className="text-[#FFB7C5]" />
                <span className="font-mono text-sm">viviayalaperez@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#64748b]">
                <MapPin size={14} className="text-[#FFB7C5]" />
                <span className="font-mono text-sm">United States · Remote-friendly</span>
              </div>
              <div className="flex items-center gap-3 text-[#64748b]">
                <Github size={14} className="text-[#FFB7C5]" />
                <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer"
                  className="font-mono text-sm hover:text-[#FFB7C5] transition-colors">
                  github.com/Vayala13
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#64748b] mb-2">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#111827] border border-[#1e2d3d] rounded px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#2d3f55] focus:outline-none focus:border-[#FFB7C5]/50 focus:ring-1 focus:ring-[#FFB7C5]/10 transition-colors duration-150 font-mono"
                  placeholder="Your name" />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#64748b] mb-2">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#111827] border border-[#1e2d3d] rounded px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#2d3f55] focus:outline-none focus:border-[#FFB7C5]/50 focus:ring-1 focus:ring-[#FFB7C5]/10 transition-colors duration-150 font-mono"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#64748b] mb-2">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#111827] border border-[#1e2d3d] rounded px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#2d3f55] focus:outline-none focus:border-[#FFB7C5]/50 focus:ring-1 focus:ring-[#FFB7C5]/10 transition-colors duration-150 font-mono resize-none"
                  placeholder="What are you building?" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#FFB7C5] text-[#0a0a0f] font-semibold text-sm rounded hover:bg-[#F5A0B0] transition-colors duration-150 btn-press">
                {submitted ? "Message queued — check your email client." : <><Send size={14} />Transmit Message</>}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1e2d3d] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-5 w-5 items-center justify-center rounded border border-[#FFB7C5]/40 bg-[#FFB7C5]/10 font-mono text-[8px] font-bold text-[#FFB7C5]"
            >
              VA
            </span>
            <span className="font-mono text-xs text-[#475569]">
              viviana<span className="text-[#FFB7C5]">.</span>ayala — Systems that scale. Code that ships.
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

