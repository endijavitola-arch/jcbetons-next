import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Transportbetons Ķekavā | Betona Piegāde Ķekavas Novadā | JC Betons",
  description:
    "Transportbetons ar piegādi Ķekavā un Ķekavas novadā. Sertificēta betona ražotne Rīgā. C16/20–C30/37. Minimālais pasūtījums 5 m³. Zvaniet: +371 24 209 209",
  alternates: { canonical: "/transportbetons-kekava" },
  openGraph: {
    title: "Transportbetons Ķekavā | JC Betons",
    description: "Betona piegāde Ķekavas novadā no sertificētas ražotnes Rīgā. C16/20–C30/37, fibrobetons, piegāde ar pašu autofloti.",
    url: "https://jcbetons.lv/transportbetons-kekava",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Transportbetons Ķekavā", item: "https://jcbetons.lv/transportbetons-kekava" },
  ],
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Transportbetons Ķekavā",
  provider: { "@type": "Organization", name: "JC Betons", url: "https://jcbetons.lv" },
  areaServed: { "@type": "AdministrativeArea", name: "Ķekavas novads" },
  description: "Transportbetona piegāde Ķekavas novadā no sertificētas ražotnes Rīgā.",
};

export default function KekavaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-[#0F1115]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Transportbetons Ķekavā</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#EE7E1A] mb-6 border border-[#EE7E1A]/30 rounded-full px-4 py-1.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A]" />
              Piegāde Ķekavas novadā
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
              Transportbetons<br />
              <span className="text-[#EE7E1A]">Ķekavā.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl mb-8">
              Betona piegāde Ķekavā, Daugmalē, Baldonē un visā Ķekavas novadā. Aptuveni 15–25 km no mūsu ražotnes Rīgā.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:+37124209209" className="bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-8 py-4 rounded text-lg transition-colors text-center">
                Zvanīt: +371 24 209 209
              </Link>
              <Link href="/#kontakti" className="border border-white/20 text-white font-semibold px-8 py-4 rounded text-lg hover:bg-white/10 transition-colors text-center">
                Pieprasīt cenu
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-black text-[#0F1115] mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
                  Betona piegāde Ķekavas novadā
                </h2>
                <p className="text-[#0F1115]/70 leading-relaxed mb-4">
                  Ķekavas novads ir viens no aktīvāk apbūvētajiem rajoniem Pierīgā — privātmājas, saimniecības ēkas, rūpnieciskās noliktavas. JC Betons piegādā transportbetonu visā Ķekavas novadā ar īsiem brauciena laikiem no Rīgas ražotnes.
                </p>
                <p className="text-[#0F1115]/70 leading-relaxed mb-6">
                  Piegādājam arī Daugmalē, Baldonē, Ķekavas pagastā un apkārtējos ciemos.
                </p>
                <ul className="space-y-3">
                  {[
                    "Betona klases C8/10 līdz C35/45",
                    "Fibrobetons ar tērauda vai PP šķiedrām",
                    "Lentveida pamatiem — C16/20 un C20/25",
                    "Piegāde ar pašu autobetonmaisītājiem",
                    "Sertificēta kvalitāte — Kiwa INSPECTA Nr. 3528",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#0F1115]/70">
                      <span className="w-5 h-5 rounded-full bg-[#EE7E1A] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-black/10 p-6">
                  <h3 className="font-black text-[#0F1115] mb-4 text-lg" style={{ fontFamily: "var(--font-archivo)" }}>
                    Populārākās klases Ķekavā
                  </h3>
                  <div className="space-y-3">
                    {[
                      { cls: "C16/20", use: "Lentveida pamati zemē standarta apstākļos" },
                      { cls: "C25/30", use: "Pamatplātne, kāpnes, ārtelpu konstrukcijas" },
                      { cls: "C25/30 fibro", use: "Rūpnieciskās grīdas noliktavām" },
                    ].map(({ cls, use }) => (
                      <div key={cls} className="flex items-start gap-3 p-3 rounded-lg bg-[#F5F4F0]">
                        <span className="font-black text-[#EE7E1A] font-mono text-sm flex-shrink-0" style={{ fontFamily: "var(--font-jetbrains)" }}>{cls}</span>
                        <span className="text-[#0F1115]/60 text-sm">{use}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/betona-klases" className="mt-4 inline-block text-sm text-[#EE7E1A] font-semibold hover:underline">
                    Visas betona klases →
                  </Link>
                </div>
                <div className="bg-[#EE7E1A] rounded-xl p-6">
                  <p className="text-white font-bold mb-1">Aprēķiniet betona daudzumu</p>
                  <p className="text-white/80 text-sm mb-4">Ievadiet izmērus — kalkulators aprēķina m³ un +10% rezervi.</p>
                  <Link href="/betona-kalkulators" className="inline-block bg-white text-[#EE7E1A] font-bold px-5 py-2.5 rounded text-sm hover:bg-white/90 transition-colors">
                    Atvērt kalkulatoru
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
