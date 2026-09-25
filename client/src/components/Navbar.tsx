/**
 * Navbar — Zurich / Bern Design
 * Wordmark left, spaced uppercase links right. Transparent over the hero,
 * plaster with a hairline once scrolled.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Skills", href: "/skills" },
  { label: "Open Source", href: "/open-source" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = alwaysSolid || scrolled || mobileOpen;

  const linkClass = (href: string) =>
    `text-[0.68rem] tracking-[0.24em] uppercase transition-colors duration-300 ${
      location === href ? "text-ink" : "text-ash hover:text-ink"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid ? "bg-plaster/95 backdrop-blur-md border-b border-sand" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="text-[0.78rem] tracking-[0.34em] uppercase font-normal text-ink">
          Viviana Ayala
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/Vayala13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.68rem] tracking-[0.24em] uppercase text-ink link-quiet"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-plaster border-t border-sand px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
