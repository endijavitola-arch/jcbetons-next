import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Kas ir Fibrobetons un Vai tas ir Vajadzīgs Jūsu Objektam?",
  description:
    "Tērauda vai PP šķiedras? Kad fibrobetons ir vērts savu cenu un kad parasts betons pietiek. Praktisks salīdzinājums no JC Betons.",
  alternates: { canonical: "/blog/kas-ir-fibrobetons" },
  openGraph: {
    title: "Kas ir Fibrobetons? | JC Betons Blogs",
    description: "Tērauda vai PP fibras? Kad fibrobetons palīdz un kad nav vajadzīgs. Praktisks salīdzinājums.",
    url: "https://jcbetons.lv/blog/kas-ir-fibrobetons",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Blogs", item: "https://jcbetons.lv/blog" },
    { "@type": "ListItem", position: 3, name: "Kas ir fibrobetons?", item: "https://jcbetons.lv/blog/kas-ir-fibrobetons" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kas ir fibrobetons un vai tas ir vajadzīgs jūsu objektam?",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Organization", name: "JC Betons", url: "https://jcbetons.lv" },
  publisher: { "@type": "Organization", name: "JC Betons", logo: { "@type": "ImageObject", url: "https://jcbetons.lv/logo-symbol.png" } },
};

export default function Article() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

        <article className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-[#0F1115]/40 mb-8 flex items-center gap-2">
              <Link href="/" className="hover:text-[#0F1115] transition-colors">Sākums</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#0F1115] transition-colors">Blogs</Link>
              <span>/</span>
              <span className="text-[#0F1115]/70">Fibrobetons</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#EE7E1A] bg-[#EE7E1A]/10 px-2.5 py-1 rounded-full">Fibrobetons</span>
              <span className="text-xs text-[#0F1115]/40" style={{ fontFamily: "var(--font-jetbrains)" }}>5 min lasīšana · 2026-05-17</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
              Kas ir fibrobetons un vai tas ir vajadzīgs jūsu objektam?
            </h1>
            <p className="text-[#0F1115]/60 text-lg leading-relaxed mb-10 pb-10 border-b border-black/10">
              Fibrobetons ir parasts betons ar vienu atšķirību — tajā ir pievienotas <strong className="text-[#0F1115]">tērauda vai polipropilēna (PP) šķiedras</strong>. Tas izklausās vienkārši, bet iespaids uz gatavā betona īpašībām var būt ievērojams. Vai tas attaisno augstāku cenu? Atbilde: atkarīgs no objekta.
            </p>

            <div className="space-y-8 text-[#0F1115]/70 leading-relaxed">
              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Kā darbojas fibras?</h2>
                <p>Parasts betons ir stiprs spiedes slodzē, bet salīdzinoši vājš stiepē un triecienos. Kad plātne lieca vai plaisā, plaisas izplatās ātri — nav nekas, kas tās saturētu.</p>
                <p className="mt-3">Fibras darbojas kā mikro-armējums visā betona masā. Kad rodas mikroplaisas, fibras tās saturē — neļauj tām izplatīties. Tērauda fibras to dara labāk ar lielāku slodzi, PP fibras galvenokārt novērš plaisāšanu betona cietēšanas laikā.</p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-6" style={{ fontFamily: "var(--font-archivo)" }}>Tērauda vs PP šķiedras — kura kuram?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      type: "Tērauda fibras",
                      color: "border-[#EE7E1A] bg-[#EE7E1A]/5",
                      badgeColor: "bg-[#EE7E1A] text-white",
                      pros: ["Augsta nestspēja un plastiskums", "Aizstāj vai papildina armējumu", "Ideāls rūpnieciskai grīdai", "Palielina triecienu izturību"],
                      when: "Rūpnieciskās grīdas, parkings, noliktavas, ceļi",
                    },
                    {
                      type: "PP (polipropilēna) fibras",
                      color: "border-black/10 bg-[#F5F4F0]",
                      badgeColor: "bg-[#0F1115] text-white",
                      pros: ["Novērš mikroplaisas cietēšanā", "Uzlabo sala izturīgumu", "Vieglākas un lētākas par tēraudu", "Piemērotas plātnēm ar silto grīdu"],
                      when: "Pamatplātnes, ārtelpu grīdas, terasas, pārsegumi",
                    },
                  ].map(({ type, color, badgeColor, pros, when }) => (
                    <div key={type} className={`rounded-xl border-2 p-5 ${color}`}>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeColor} inline-block mb-3`}>{type}</span>
                      <ul className="space-y-1.5 mb-3">
                        {pros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-[#0F1115]/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A] flex-shrink-0 mt-1.5" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-[#0F1115]/50 border-t border-black/10 pt-3 mt-3">
                        <strong className="text-[#0F1115]">Izmanto:</strong> {when}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Kad fibrobetons nav vajadzīgs?</h2>
                <p>Fibrobetons nav maģisks risinājums visam. Šajos gadījumos parasts betons ar tradicionālo armējumu ir labāka izvēle:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Nesošas kolonnas un sienas — tur vajag pilnu armētā betona tērauda konstrukciju",
                    "Lentveida pamati ar standarta slodzi — C20/25 ar armējumu ir pietiekams",
                    "Mazi apjomi, kur fibras izmaksas nav attaisnotas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F1115]/30 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Cik tas maksā vairāk?</h2>
                <p>PP fibras pievieno aptuveni €5–12/m³ pie betona cenas. Tērauda fibras — €10–20/m³ atkarībā no devas. Šķiet daudz, bet salīdziniet ar alternatīvu: armēšanas darba stundas un papildu tērauds.</p>
                <p className="mt-3">Rūpnieciskai grīdai 500 m² (75 m³ betona) tērauda fibrobetons var aizstāt ievērojamu daļu no armējuma — un kopējā izmaksu starpība var strādāt par labu firobetona variantam.</p>
              </section>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <Link href="/fibrobetons" className="flex-1 text-center bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-6 py-3.5 rounded transition-colors">
                Uzzināt vairāk par fibrobetonu
              </Link>
              <Link href="/#kontakti" className="flex-1 text-center border border-black/20 text-[#0F1115] font-semibold px-6 py-3.5 rounded hover:bg-black/5 transition-colors">
                Pieprasīt cenu
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
