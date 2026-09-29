// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, Phone, Lightbulb } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <Lightbulb className="w-8 h-8 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-lg font-extrabold uppercase tracking-wide text-transparent sm:text-xl">
            Kaytees Top Electrician
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-300 transition hover:text-amber-400"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2 text-sm font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105 hover:shadow-amber-500/50"
            >
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-amber-400 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {menuOpen && (
        <ul className="space-y-1 border-t border-cyan-500/20 bg-black/95 px-4 py-4 backdrop-blur-md lg:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-gray-300 transition hover:bg-cyan-500/10 hover:text-amber-400"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={PHONE_TEL}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 text-center font-bold text-black"
            >
              <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

