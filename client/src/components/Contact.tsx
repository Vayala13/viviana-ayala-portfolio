/**
 * Contact / Footer Section — Plaster & Stone Design
 * Hairline contact details + underline-only form + quiet footer.
 */
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

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
    <footer id="contact" className="bg-plaster">
      <div className="container pt-28 lg:pt-40 pb-12">
        <SectionHeader
          index="06"
          label="Contact"
          title="Ready to Build?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left */}
          <div className="lg:col-start-4 lg:col-span-4">
            <p className="text-lg text-smoke leading-relaxed mb-12">
              Open to internships, research collaborations, and projects worth shipping.
              If you have a hard problem — I want to hear it.
            </p>
            <dl className="border-t border-sand">
              {[
                { label: "Email", value: <a href="mailto:viviayalaperez@gmail.com" className="link-quiet">viviayalaperez@gmail.com</a> },
                { label: "Based", value: "United States · Remote-friendly" },
                { label: "GitHub", value: <a href="https://github.com/Vayala13" target="_blank" rel="noopener noreferrer" className="link-quiet">github.com/Vayala13</a> },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-6 py-4 border-b border-sand">
                  <dt className="eyebrow">{row.label}</dt>
                  <dd className="text-sm text-ink text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="lg:col-start-9 lg:col-span-4 space-y-8">
            <label className="block">
              <span className="eyebrow">Name</span>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="field" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="eyebrow">Email</span>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="field" placeholder="your@email.com" />
            </label>
            <label className="block">
              <span className="eyebrow">Message</span>
              <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="field resize-none" placeholder="What are you building?" />
            </label>
            <button type="submit" className="btn-solid w-full justify-center">
              {submitted ? "Message queued — check your email client" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="mt-32 pt-8 border-t border-sand flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[0.72rem] tracking-[0.34em] uppercase text-ink">Viviana Ayala</span>
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-ash">
            Systems that scale. Code that ships. · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
