import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#par-mums", label: "Par mums" },
  { href: "/#produkti", label: "Produkti" },
  { href: "/#piegade", label: "Piegāde" },
  { href: "/#darbi", label: "Mūsu darbi" },
  { href: "/#kontakti", label: "Kontakti" },
];

const serviceLinks = [
  { href: "/fibrobetons", label: "Fibrobetons" },
  { href: "/pamatu-bloki", label: "Pamatu bloki" },
  { href: "/grodi", label: "Grodi" },
  { href: "/betona-suknis", label: "Betona sūknis" },
  { href: "/cementa-java", label: "Cementa java" },
];

const legalLinks = [
  { href: "/privatuma-politika", label: "Privātuma politika" },
  { href: "/sikdatnes", label: "Sīkdatņu politika" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1115] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-4" aria-label="JC Betons">
            <Image src="/logo-symbol.png" alt="JC Betons logo" width={36} height={36} className="rounded" />
            <span className="flex flex-col leading-none">
              <span className="font-black text-white tracking-widest text-sm" style={{ fontFamily: "var(--font-archivo)" }}>JC&nbsp;BETONS</span>
              <span className="text-white/40 text-[10px] tracking-wider">Betona ražotne · Rīga</span>
            </span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed">
            Sertificēta betona ražotne Rīgā kopš 2005. gada. Transportbetons, fibrobetons, java, pamatu bloki un grodi ar piegādi.
          </p>
        </div>

        {/* Nav */}
        <div>
          <div className="text-white/30 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-jetbrains)" }}>Navigācija</div>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">{l.label}</Link>
              </li>
            ))}
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Rekvizīti */}
        <div>
          <div className="text-white/30 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-jetbrains)" }}>Rekvizīti</div>
          <dl className="space-y-1.5 text-sm">
            {[
              ["Nosaukums", "SIA \"JC BETONS\""],
              ["Reģ. Nr.", "40003691098"],
              ["PVN Nr.", "LV40003691098"],
              ["Jurid. adrese", "Krustpils iela 54F, Rīga, LV-1057"],
              ["Banka", "SwedBank AS · HABALV22"],
              ["Konts", "LV19HABA0551040946479"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col">
                <dt className="text-white/30 text-xs">{k}</dt>
                <dd className="text-white/70">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact */}
        <div>
          <div className="text-white/30 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-jetbrains)" }}>Sazināties</div>
          <Link href="tel:+37124209209" className="block text-xl font-bold text-white hover:text-[#EE7E1A] transition-colors mb-2">
            +371 24 209 209
          </Link>
          <Link href="mailto:info@jcbetons.lv" className="block text-white/60 hover:text-white text-sm mb-5 transition-colors">
            info@jcbetons.lv
          </Link>
          <div className="text-white/40 text-xs space-y-1" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <div>Pr. – Pk.: 8:00 – 17:00</div>
            <div>Sestd.: 8:00 – 17:00</div>
            <div>Svētd.: slēgts</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© 2026 JC Betons — visas tiesības aizsargātas.</span>
          <div className="flex items-center gap-4">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/60 transition-colors">{l.label}</Link>
            ))}
            <span className="text-[#EE7E1A]/70">Kiwa INSPECTA Latvia · Nr. 3528</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
