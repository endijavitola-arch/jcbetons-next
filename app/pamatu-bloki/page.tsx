import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Pamatu Bloki Rīgā | Piegāde ar Manipulatoru",
  description:
    "Pamatu bloki 90/120/240 × 60 cm. Dzelzsbetona konstrukcijas ar piegādi Rīgā un Pierīgā. Manipulators pieejams. Pasūtiet: +371 24 209 209",
  alternates: { canonical: "/pamatu-bloki" },
  openGraph: {
    title: "Pamatu Bloki Rīgā | Piegāde ar Manipulatoru | JC Betons",
    description: "Pamatu bloki 90/120/240 × 60 cm. Dzelzsbetona konstrukcijas ar piegādi un uzstādīšanu ar manipulatoru Rīgā un Pierīgā.",
    url: "https://jcbetons.lv/pamatu-bloki",
    images: [{ url: "/hero-truck.jpg", width: 1440, height: 960 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Pamatu bloki", item: "https://jcbetons.lv/pamatu-bloki" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Kādi pamatu bloku izmēri ir pieejami?", acceptedAnswer: { "@type": "Answer", text: "Standarta dzelzsbetona pamatu bloki garumā 90 / 120 / 240 cm, platumā 60 cm, augstumā 30 vai 40 cm. Pēc projekta izgatavojam arī nestandarta izmērus jebkurai konstrukcijai." } },
    { "@type": "Question", name: "Vai pamatu bloki tiek piegādāti ar manipulatoru?", acceptedAnswer: { "@type": "Answer", text: "Jā. Visi bloki tiek piegādāti ar kravas auto un manipulatoru, kas uzstāda tos vietā — nav vajadzīgs atsevišķs celtnis vai speciāls aprīkojums." } },
    { "@type": "Question", name: "Vai var pasūtīt nestandarta pamatu blokus?", acceptedAnswer: { "@type": "Answer", text: "Jā. Pēc projekta izgatavojam nestandarta izmērus un formas. Sazinieties ar mums, un mēs apspriedīsim iespējas un termiņus." } },
  ],
};

const sizes = [
  { length: "90 cm", width: "60 cm", height: "30 / 40 cm", use: "Vieglas konstrukcijas" },
  { length: "120 cm", width: "60 cm", height: "30 / 40 cm", use: "Standarta pamati" },
  { length: "240 cm", width: "60 cm", height: "30 / 40 cm", use: "Lielāki pamati" },
  { length: "Nestandarts", width: "—", height: "—", use: "Pēc projekta" },
];

export default function PamatuBloki() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#0F1115] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/foundation-blocks.jpg" alt="Dzelzsbetona pamatu bloki" fill className="object-cover" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Pamatu bloki</span>
            </nav>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Pamatu Bloki Rīgā.
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              Dzelzsbetona pamatu bloki 90/120/240 cm garumā ar piegādi un uzstādīšanu ar manipulatoru. Piegādājam visā Rīgā un Pierīgā.
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

        {/* Sizes table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Pieejamie izmēri
            </h2>
            <div className="overflow-x-auto rounded-xl border border-black/10">
              <table className="w-full text-sm">
                <thead className="bg-[#0F1115] text-white">
                  <tr>
                    {["Garums", "Platums", "Augstums", "Piemērojums"].map((h) => (
                      <th key={h} className="px-6 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F4F0]"}>
                      <td className="px-6 py-4 font-bold text-[#0F1115]" style={{ fontFamily: "var(--font-jetbrains)" }}>{s.length}</td>
                      <td className="px-6 py-4 text-[#0F1115]/70">{s.width}</td>
                      <td className="px-6 py-4 text-[#0F1115]/70">{s.height}</td>
                      <td className="px-6 py-4 text-[#0F1115]/70">{s.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#0F1115]/50 text-xs mt-3">* Pēc projekta izgatavojam arī citus izmērus. Sazinieties ar mums.</p>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                { icon: "🏗️", title: "Ražotājs tiešs", desc: "Pārdodam tieši no ražotnes — nav starpnieku, labākas cenas." },
                { icon: "🚛", title: "Manipulators", desc: "Piegāde ar kravas auto + manipulatoru. Uzstādām blokus vietā." },
                { icon: "📐", title: "Nestandarts", desc: "Pēc projekta izgatavojam nestandarta izmērus jebkurai konstrukcijai." },
              ].map((f) => (
                <div key={f.title} className="bg-[#F5F4F0] rounded-xl p-6">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-[#0F1115] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>{f.title}</h3>
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
