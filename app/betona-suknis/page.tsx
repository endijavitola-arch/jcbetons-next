import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Betona Sūknis Rīgā | 41m Strēla",
  description:
    "Betona sūknis ar 41 metru strēlu. Betona pumpēšana Rīgā un Pierīgā. Grūti pieejami objekti. Pasūtiet: +371 24 209 209",
  alternates: { canonical: "/betona-suknis" },
};

export default function BetonaSuknis() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#0F1115] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/house-pump.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Betona sūknis</span>
            </nav>
            <div className="text-[#EE7E1A] text-7xl font-black leading-none mb-2" style={{ fontFamily: "var(--font-archivo)" }}>
              41 m
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Betona Sūknis Rīgā.
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              Mūsu betona sūknis ar 41 metru strēli sasniedz daudzstāvu ēkas, objektus aiz žogiem un šauras teritorijas, kur maisītājs nevar piekļūt.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#kontakti" className="bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-6 py-3 rounded transition-colors">
                Pieprasīt cenu
              </Link>
              <Link href="tel:+37124209209" className="border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded transition-colors">
                +371 24 209 209
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-black text-[#0F1115] mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
                  Kad ir vajadzīgs betona sūknis?
                </h2>
                <p className="text-[#0F1115]/65 leading-relaxed mb-4">
                  Betona sūknis ir nepieciešams, kad betons jāpiegādā vietā, kur betona maisītājs nevar piebraukt — augstumā, aiz žogiem vai šaurās vietās.
                </p>
                <p className="text-[#0F1115]/65 leading-relaxed mb-6">
                  Minimālais ekonomiski pamatotais apjoms sūkņa izsaukumam ir no <strong className="text-[#0F1115]">6 m³</strong>. Mazākos apjomus var apspriest individuāli.
                </p>
                <ul className="space-y-3">
                  {[
                    "Daudzstāvu ēku pārsegumi",
                    "Pamatu plātnes ar ierobežotu piekļuvi",
                    "Objekti aiz celtņiem vai žogiem",
                    "Šauras pilsētas iecirkņi",
                    "Grūti piekļūstami lauku objekti",
                  ].map((u) => (
                    <li key={u} className="flex items-center gap-3 text-[#0F1115]/70 text-sm">
                      <span className="w-6 h-6 rounded-full bg-[#EE7E1A]/15 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A]" />
                      </span>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Strēlas garums", value: "41 m", note: "Sasniedz 10–12 stāvus" },
                  { label: "Minimālais apjoms", value: "≥ 6 m³", note: "Ekonomiski pamatotais pasūtījums" },
                  { label: "Piegādes zona", value: "Rīga + Pierīga", note: "Lielākiem projektiem — individuāli" },
                  { label: "Betona klases", value: "C8/10 – C35/45", note: "Arī fibrobetons ar sūkni" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#F5F4F0] rounded-xl p-5 flex items-center justify-between">
                    <div>
                      <div className="text-[#0F1115]/50 text-xs mb-0.5">{s.label}</div>
                      <div className="font-bold text-[#0F1115]">{s.value}</div>
                    </div>
                    <div className="text-[#0F1115]/40 text-xs text-right max-w-[140px]">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTAStrip />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
