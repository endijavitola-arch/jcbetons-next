"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Menu data ─────────────────────────────────────────────────────────── */

const MENUS = {
  produkti: {
    cols: [
      {
        heading: "Betona veidi",
        links: [
          { href: "/#produkti", label: "Transportbetons", desc: "Klases C8/10 – C35/45 ar piegādi" },
          { href: "/fibrobetons", label: "Fibrobetons", desc: "Ar tērauda vai PP šķiedrām" },
          { href: "/cementa-java", label: "Cementa java", desc: "Mūra, apmetuma, grīdas java" },
        ],
      },
      {
        heading: "Elementi un tehnika",
        links: [
          { href: "/pamatu-bloki", label: "Pamatu bloki", desc: "90/120/240 cm, piegāde ar manipulatoru" },
          { href: "/grodi", label: "Grodi", desc: "Ø45 un Ø90 cm akas un kanalizācija" },
          { href: "/betona-suknis", label: "Betona sūknis", desc: "41 m strēle, grūti pieejamas vietas" },
        ],
      },
      {
        heading: "Rīki un padomi",
        links: [
          { href: "/betona-kalkulators", label: "Betona kalkulators", desc: "Aprēķiniet m³ uzreiz" },
          { href: "/betona-klases", label: "Betona klases", desc: "C8/10 – C35/45 praktiskais ceļvedis" },
          { href: "/cenas", label: "Cenas", desc: "Indikatīvās cenas un ietekmējošie faktori" },
          { href: "/blog", label: "Blogs", desc: "Padomi par betona izvēli un betonēšanu" },
        ],
      },
    ],
    featured: {
      label: "Sāciet ar kalkulatoru",
      desc: "Ievadiet izmērus — aprēķinām m³ un rezervi automātiski.",
      href: "/betona-kalkulators",
      cta: "Atvērt kalkulatoru →",
    },
  },
  piegade: {
    cols: [
      {
        heading: "Rīga un tuvā Pierīga",
        links: [
          { href: "/#piegade", label: "Visa Rīga", desc: "Visi rajoni, minimums ~5 m³" },
          { href: "/transportbetons-adazi", label: "Ādaži", desc: "~25 min no ražotnes" },
          { href: "/transportbetons-kekava", label: "Ķekava", desc: "~15 min no ražotnes" },
          { href: "/transportbetons-marupe", label: "Mārupe", desc: "~15 min no ražotnes" },
          { href: "/transportbetons-salaspils", label: "Salaspils", desc: "~20 min no ražotnes" },
        ],
      },
      {
        heading: "Pēc vienošanās",
        links: [
          { href: "/transportbetons-jurmala", label: "Jūrmala", desc: "~35 min, lieli objekti" },
          { href: "/#kontakti", label: "Citas teritorijas", desc: "Sazinieties — vērtēsim individuāli" },
        ],
      },
    ],
    featured: {
      label: "Ražotne — Krustpils 54F, Rīga",
      desc: "Piegādājam ar pašu autofloti bez starpniekiem. 15 autobetonmaisītāji.",
      href: "/#piegade",
      cta: "Skatīt piegādes zonu →",
    },
  },
} as const;

type MenuKey = keyof typeof MENUS;

const simpleLinks = [
  { href: "/#par-mums", label: "Par mums" },
  { href: "/#darbi", label: "Mūsu darbi" },
  { href: "/#kontakti", label: "Kontakti" },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeMenu ? "bg-[#0F1115]/97 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="JC Betons" onClick={() => setActiveMenu(null)}>
          <Image src="/logo-symbol.png" alt="JC Betons logo" width={36} height={36} className="rounded" priority />
          <span className="flex flex-col leading-none">
            <span className="font-black text-white tracking-widest text-sm" style={{ fontFamily: "var(--font-archivo)" }}>
              JC&nbsp;BETONS
            </span>
            <span className="text-white/50 text-[10px] tracking-wider">Betona ražotne · Rīga</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Galvenā navigācija">

          {/* Mega items */}
          {(["produkti", "piegade"] as MenuKey[]).map((key) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => openMenu(key)}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeMenu === key ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={activeMenu === key}
                aria-haspopup="true"
              >
                {key === "produkti" ? "Produkti" : "Piegāde"}
                <ChevronIcon open={activeMenu === key} />
              </button>

              {/* Invisible bridge — prevents gap between trigger and panel from triggering mouseLeave */}
              <div className="absolute top-full left-0 w-full h-3" />

              {/* Mega panel — conditionally rendered so content is not in DOM when closed */}
              {activeMenu === key && (
                <div
                  className="absolute top-[calc(100%+0.75rem)] left-1/2"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                  role="dialog"
                  aria-label={`${key === "produkti" ? "Produkti" : "Piegāde"} izvēlne`}
                >
                  <MegaPanel menuKey={key} onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </div>
          ))}

          {/* Simple links */}
          {simpleLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              onMouseEnter={() => scheduleClose()}
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
          aria-label={mobileOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-[#0F1115] border-t border-white/10 transition-all duration-300 ${
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          <MobileSection label="Produkti">
            <MobileLink href="/#produkti" label="Transportbetons" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/fibrobetons" label="Fibrobetons" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/cementa-java" label="Cementa java" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/pamatu-bloki" label="Pamatu bloki" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/grodi" label="Grodi" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/betona-suknis" label="Betona sūknis" onClick={() => setMobileOpen(false)} />
          </MobileSection>
          <MobileSection label="Piegāde">
            <MobileLink href="/#piegade" label="Visa Rīga" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/transportbetons-adazi" label="Ādaži" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/transportbetons-kekava" label="Ķekava" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/transportbetons-marupe" label="Mārupe" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/transportbetons-salaspils" label="Salaspils" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/transportbetons-jurmala" label="Jūrmala" onClick={() => setMobileOpen(false)} />
          </MobileSection>
          {[
            { href: "/betona-kalkulators", label: "Betona kalkulators" },
            { href: "/betona-klases", label: "Betona klases" },
            { href: "/cenas", label: "Cenas" },
            { href: "/blog", label: "Blogs" },
            { href: "/#par-mums", label: "Par mums" },
            { href: "/#darbi", label: "Mūsu darbi" },
            { href: "/#kontakti", label: "Kontakti" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white text-sm font-medium py-2.5 border-b border-white/5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="tel:+37124209209"
            className="mt-2 text-[#EE7E1A] font-semibold text-base"
            onClick={() => setMobileOpen(false)}
          >
            +371 24 209 209
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ─── Mega panel ─────────────────────────────────────────────────────────── */

function MegaPanel({ menuKey, onClose }: { menuKey: MenuKey; onClose: () => void }) {
  const menu = MENUS[menuKey];

  return (
    <div className="bg-[#0F1115] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
      style={{ width: menuKey === "produkti" ? "780px" : "560px" }}>
      <div className="flex">
        {/* Columns */}
        <div className={`flex-1 grid gap-0 divide-x divide-white/5 ${
          menu.cols.length === 3 ? "grid-cols-3" : "grid-cols-2"
        }`}>
          {menu.cols.map((col) => (
            <div key={col.heading} className="p-5">
              <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-3"
                style={{ fontFamily: "var(--font-jetbrains)" }}>
                {col.heading}
              </p>
              <ul className="space-y-0.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex flex-col px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#EE7E1A] transition-colors leading-tight">
                        {link.label}
                      </span>
                      <span className="text-xs text-white/40 leading-tight mt-0.5">{link.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured aside */}
        <div className="w-44 flex-shrink-0 bg-[#EE7E1A]/10 border-l border-white/5 p-5 flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold text-white leading-snug mb-2">{menu.featured.label}</p>
            <p className="text-xs text-white/50 leading-relaxed">{menu.featured.desc}</p>
          </div>
          <Link
            href={menu.featured.href}
            onClick={onClose}
            className="mt-4 text-xs font-semibold text-[#EE7E1A] hover:text-[#f59840] transition-colors"
          >
            {menu.featured.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile helpers ─────────────────────────────────────────────────────── */

function MobileSection({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        className="w-full flex items-center justify-between text-white/80 text-sm font-medium py-2.5 hover:text-white transition-colors"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      {open && <div className="pl-3 pb-2 space-y-0.5">{children}</div>}
    </div>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick}
      className="block text-white/60 hover:text-white text-sm py-1.5 transition-colors">
      {label}
    </Link>
  );
}

/* ─── Icons ──────────────────────────────────────────────────────────────── */

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
