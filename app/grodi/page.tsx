import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Grodi Rīgā | Ar Dibeniem un Vākiem",
  description:
    "Kanalizācijas grodi 45/90 x 100/150/200. Ar dibeniem un vākiem. Piegāde ar manipulatoru Rīgā un Pierīgā. Pasūtiet: +371 24 209 209",
  alternates: { canonical: "/grodi" },
  openGraph: {
    title: "Grodi Rīgā | Ar Dibeniem un Vākiem | JC Betons",
    description: "Kanalizācijas un akas grodi Ø45 un Ø90 cm ar dibeniem un vākiem. Piegāde ar manipulatoru — uzstādām vietā Rīgā un Pierīgā.",
    url: "https://jcbetons.lv/grodi",
    images: [{ url: "/hero-truck.jpg", width: 1440, height: 960 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Grodi", item: "https://jcbetons.lv/grodi" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Kādi grodu diametri ir pieejami?", acceptedAnswer: { "@type": "Answer", text: "Piedāvājam grodus divos standarta diametros: Ø 45 cm (mazākas akas un drenāža) un Ø 90 cm (standarta akas un kanalizācija). Pieejamie augstumi — 100, 150 un 200 cm." } },
    { "@type": "Question", name: "Vai grodi tiek piegādāti ar dibeniem un vākiem?", acceptedAnswer: { "@type": "Answer", text: "Jā. Komplektā piedāvājam visus nepieciešamos elementus — dibeni groda apakšai, kā arī betona un čuguna vākus atbilstoši A15, B125 vai C250 slodzes klasei." } },
    { "@type": "Question", name: "Kā notiek grodu piegāde un uzstādīšana?", acceptedAnswer: { "@type": "Answer", text: "Piegādājam ar kravas auto un manipulatoru — uzstādām grodus vietā Rīgā un Pierīgā. Nav vajadzīgs atsevišķs celtnis vai papildu tehnika." } },
  ],
};

const grodTypes = [
  { diameter: "Ø 45 cm", heights: ["100 cm", "150 cm", "200 cm"], use: "Mazākas akas, drenāža" },
  { diameter: "Ø 90 cm", heights: ["100 cm", "150 cm", "200 cm"], use: "Standarta akas, kanalizācija" },
];

export default function Grodi() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#0F1115] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/well-rings.jpg" alt="Betona akas grodi" fill className="object-cover" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Grodi</span>
            </nav>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Grodi Rīgā.
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              Kanalizācijas un akas grodi Ø45 un Ø90 cm ar dibeniem un vākiem. Piegāde ar manipulatoru — uzstādām vietā Rīgā un Pierīgā.
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
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Betona Grodi: Izmēri un Komplektācija
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {grodTypes.map((g) => (
                <div key={g.diameter} className="bg-[#F5F4F0] rounded-xl p-6 border border-black/10">
                  <div className="text-4xl font-black text-[#EE7E1A] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>{g.diameter}</div>
                  <p className="text-[#0F1115]/60 text-sm mb-4">{g.use}</p>
                  <div className="text-xs text-[#0F1115]/40 mb-2 font-semibold uppercase tracking-wider">Pieejamie augstumi</div>
                  <div className="flex gap-2">
                    {g.heights.map((h) => (
                      <span key={h} className="bg-[#0F1115] text-white text-xs font-mono px-3 py-1.5 rounded" style={{ fontFamily: "var(--font-jetbrains)" }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-[#0F1115] mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
              Komplektācija
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Dibeni", desc: "Visu veidu dibeni groda apakšai — hermētiskai uzstādīšanai." },
                { title: "Vāki", desc: "Betona un čuguna vāki; atbilstoši A15, B125, C250 klasēm." },
                { title: "Manipulators", desc: "Piegāde ar kravas auto un manipulatoru. Uzstādām vietā." },
              ].map((f) => (
                <div key={f.title} className="border border-black/10 rounded-xl p-5">
                  <h4 className="font-bold text-[#0F1115] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>{f.title}</h4>
                  <p className="text-[#0F1115]/60 text-sm">{f.desc}</p>
                </div>
              ))}
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
