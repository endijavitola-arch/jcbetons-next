"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#produkti", label: "Produkti" },
  { href: "/#piegade", label: "Piegāde" },
  { href: "/#par-mums", label: "Par mums" },
  { href: "/#darbi", label: "Mūsu darbi" },
  { href: "/#faq", label: "BUJ" },
  { href: "/#kontakti", label: "Kontakti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F1115]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="JC Betons">
          <Image src="/logo-symbol.png" alt="" width={36} height={36} className="rounded" />
          <span className="flex flex-col leading-none">
            <span
              className="font-black text-white tracking-widest text-sm"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              JC&nbsp;BETONS
            </span>
            <span className="text-white/50 text-[10px] tracking-wider">Betona ražotne · Rīga</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Galvenā navigācija">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            href="tel:+37124209209"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <PhoneIcon />
            <span>+371 24 209 209</span>
          </Link>
          <Link
            href="/#kontakti"
            className="bg-[#EE7E1A] hover:bg-[#d06e14] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            Pasūtīt betonu
          </Link>
        </div>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
          aria-label={open ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-[#0F1115] border-t border-white/10 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-4 py-4 gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white text-base font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="tel:+37124209209"
            className="text-[#EE7E1A] font-semibold text-base"
            onClick={() => setOpen(false)}
          >
            +371 24 209 209
          </Link>
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
