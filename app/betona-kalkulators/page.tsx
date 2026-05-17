import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Betona Kalkulators | Aprēķiniet Betona Daudzumu",
  description:
    "Bezmaksas betona daudzuma kalkulators. Aprēķiniet kubikmetrus plātnei, lentveida pamatam vai kolonnai. JC Betons — transportbetons Rīgā.",
  alternates: { canonical: "/betona-kalkulators" },
  openGraph: {
    title: "Betona Kalkulators | Aprēķiniet Betona Daudzumu | JC Betons",
    description: "Aprēķiniet nepieciešamo betona daudzumu plātnei, pamatam vai kolonnai. Transportbetons Rīgā ar piegādi.",
    url: "https://jcbetons.lv/betona-kalkulators",
    images: [{ url: "/hero-truck.jpg", width: 1440, height: 960 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Betona kalkulators", item: "https://jcbetons.lv/betona-kalkulators" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kā aprēķināt betona daudzumu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Betona daudzumu aprēķina, reizinot konstrukcijas garumu × platumu × augstumu (vai biezumu) metros. Rezultāts ir kubikmetri (m³). Praktiski ieteicams pieskaitīt 10% rezervi izšļakstīšanai, formas neregularitātei un atlikumam betonmaisītājā.",
      },
    },
    {
      "@type": "Question",
      name: "Kāda betona klase vajadzīga pamatam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Privātmājas pamatiem parasti lieto C20/25 vai C25/30. Lentveida pamatiem zemāk par zemes līmeni bieži lieto C16/20. Smagākiem rūpnieciskiem objektiem nepieciešams C30/37 vai C35/45. Precīzu klasi nosaka projekts — sazinieties ar mums.",
      },
    },
    {
      "@type": "Question",
      name: "Kāds ir minimālais betona pasūtījums?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimālais pasūtījums ir viens autobetonmaisītāja krāvums — no aptuveni 5 m³. Lielākiem objektiem piegādājam ar vairākiem maisītājiem pēc grafika.",
      },
    },
  ],
};

export default function BetonaKalkulators() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#0F1115]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <a href="/" className="hover:text-white transition-colors">Sākums</a>
              <span>/</span>
              <span className="text-white/70">Betona kalkulators</span>
            </nav>
            <div className="text-xs tracking-widest text-[#EE7E1A] font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              Bezmaksas rīks
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Betona Kalkulators.
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Ievadiet izmērus — iegūstiet kubikmetrus. Ieskaitot 10% rezervi izšļakstīšanai un atlikumam.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Calculator />
          </div>
        </section>

        {/* Concrete classes reference */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Kādu betona klasi izvēlēties?
            </h2>
            <div className="overflow-x-auto rounded-xl border border-black/10">
              <table className="w-full text-sm">
                <thead className="bg-[#0F1115] text-white">
                  <tr>
                    {["Klase", "Stiprība", "Tipiskais pielietojums"].map((h) => (
                      <th key={h} className="px-6 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["C8/10", "10 MPa", "Bērtnes kārtas, vieglas izbēršanas"],
                    ["C12/15", "15 MPa", "Neceltspējīgi pamati, betona celiņi"],
                    ["C16/20", "20 MPa", "Lentveida pamati zem zemes līmeņa"],
                    ["C20/25", "25 MPa", "Privātmāju pamati, pārsegumi, kāpnes"],
                    ["C25/30", "30 MPa", "Nesošas plātnes, rūpnieciskas grīdas"],
                    ["C30/37", "37 MPa", "Tilti, stāvvietas, intensīvi izmantoti laukumi"],
                    ["C35/45", "45 MPa", "Augstas slodzes konstrukcijas, rūpniecība"],
                  ].map(([cls, mpa, use], i) => (
                    <tr key={cls} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F4F0]"}>
                      <td className="px-6 py-4 font-bold text-[#EE7E1A]" style={{ fontFamily: "var(--font-jetbrains)" }}>{cls}</td>
                      <td className="px-6 py-4 text-[#0F1115]/60">{mpa}</td>
                      <td className="px-6 py-4 text-[#0F1115]/70">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#0F1115]/40 text-xs mt-3">
              * Konkrēto klasi nosaka projekts un inženieris. Šī tabula ir orientējoša.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Biežāk uzdotie jautājumi
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="bg-white rounded-xl p-6 border border-black/10">
                  <h3 className="font-bold text-[#0F1115] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>
                    {item.name}
                  </h3>
                  <p className="text-[#0F1115]/65 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
