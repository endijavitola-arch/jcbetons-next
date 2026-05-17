import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Fibrobetons Rīgā | Tērauda un PP Šķiedras",
  description:
    "Fibrobetons ar tērauda vai PP šķiedrām. Ideāls grīdām un industriāliem objektiem. Ražošana un piegāde Rīgā. Pasūtiet: +371 24 209 209",
  alternates: { canonical: "/fibrobetons" },
  openGraph: {
    title: "Fibrobetons Rīgā | Tērauda un PP Šķiedras | JC Betons",
    description: "Fibrobetons ar tērauda vai PP šķiedrām. Ideāls grīdām un industriāliem objektiem.",
    url: "https://jcbetons.lv/fibrobetons",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Fibrobetons", item: "https://jcbetons.lv/fibrobetons" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Kas ir fibrobetons?", acceptedAnswer: { "@type": "Answer", text: "Fibrobetons ir betons ar pievienotām tērauda vai polipropilēna (PP) šķiedrām, kas palielina materiāla izturību pret triecieniem, plaisāšanu un slodzi." } },
    { "@type": "Question", name: "Kādas ir fibrobetona priekšrocības?", acceptedAnswer: { "@type": "Answer", text: "Fibrobetona priekšrocības: lielāka izturība pret triecieniem, mazāk plaisāšanas, augstāka nestspēja (tērauda fibras), samazināta mikroplaisošana (PP fibras). Fibrobetonu nevar salīdzināt ar parastu betonu kritiskos lietojumos." } },
    { "@type": "Question", name: "Kāda ir atšķirība starp tērauda un PP šķiedrām?", acceptedAnswer: { "@type": "Answer", text: "Tērauda fibras nodrošina lielāku nestspēju un izmanto rūpnieciskām grīdām, ceļiem un industriāliem laukumiem ar lielu slodzi. PP (polipropilēna) šķiedras samazina mikroplaisas un der pārsegumiem, mazākiem objektiem un vietām ar mazāku slodzi." } },
  ],
};

export default function Fibrobetons() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#0F1115] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/foundation-pour.jpg" alt="Fibrobetona liešana pamatos" fill className="object-cover" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Fibrobetons</span>
            </nav>
            <div className="text-xs tracking-widest text-[#EE7E1A] font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              Produkts
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Fibrobetons Rīgā.
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              Betons ar tērauda vai polipropilēna šķiedrām. Ideāls rūpnieciskām grīdām, laukumiem un objektiem ar lielu slodzi.
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-[#0F1115] mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
                Kas ir fibrobetons un kad to izmanto?
              </h2>
              <p className="text-[#0F1115]/65 leading-relaxed mb-4">
                Fibrobetons ir betons ar pievienotām šķiedrām — <strong>tērauda</strong> vai <strong>polipropilēna (PP)</strong> — kas ievērojami palielina materiāla izturību pret triecieniem, plaisāšanu un mehānisko slodzi.
              </p>
              <p className="text-[#0F1115]/65 leading-relaxed mb-4">
                Tērauda fibras nodrošina lielāku nestspēju un plastiskumu, PP fibras galvenokārt novērš mikroplaisāšanu betona cietēšanas laikā. Abos gadījumos rezultāts ir izturīgāka un ilgmūžīgāka betonēšana.
              </p>
              <h3 className="text-xl font-bold text-[#0F1115] mt-8 mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Kur izmantot fibrobetonu</h3>
              <ul className="space-y-2">
                {[
                  "Rūpnieciskās grīdas un noliktavas",
                  "Autoceļi, pievedceļi un laukumi",
                  "Daudzstāvu stāvvietas",
                  "Pamatu plātnes ar lielu slodzi",
                  "Ārtelpu gājēju celiņi un terasas",
                  "Komunālie tuneļi un infrastruktūra",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[#0F1115]/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <CompareCard
                title="Tērauda fibras"
                color="orange"
                specs={[
                  ["Slodzes izturība", "Augsta"],
                  ["Plastiskums", "Labs"],
                  ["Izmantojums", "Rūpnieciskās grīdas, ceļi"],
                  ["Efekts", "Palielina nestspēju"],
                ]}
              />
              <CompareCard
                title="PP (polipropilēna) fibras"
                color="gray"
                specs={[
                  ["Mikroplaisāšana", "Novērš"],
                  ["Masa", "Vieglākas"],
                  ["Izmantojums", "Pārsegumi, mazāki objekti"],
                  ["Efekts", "Samazina plaisāšanu"],
                ]}
              />
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

function CompareCard({ title, color, specs }: { title: string; color: "orange" | "gray"; specs: [string, string][] }) {
  return (
    <div className={`rounded-xl p-6 ${color === "orange" ? "bg-[#EE7E1A]/10 border border-[#EE7E1A]/30" : "bg-[#0F1115]/5 border border-black/10"}`}>
      <h4 className="font-bold text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>{title}</h4>
      <dl className="space-y-2">
        {specs.map(([k, v]) => (
          <div key={k} className="flex justify-between text-sm border-b border-black/5 pb-2">
            <dt className="text-[#0F1115]/50">{k}</dt>
            <dd className="font-semibold text-[#0F1115]">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
