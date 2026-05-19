import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Kā Aprēķināt Betona Daudzumu — Formula un Piemēri",
  description:
    "Vienkārša formula betona daudzuma aprēķinam plātnei, lentveida pamatam un kolonnai. Kāpēc jāpieskaita 10% rezerve. JC Betons kalkulators.",
  alternates: { canonical: "/blog/ka-aprekinat-betona-daudzumu" },
  openGraph: {
    title: "Kā Aprēķināt Betona Daudzumu | JC Betons Blogs",
    description: "Formula ar piemēriem plātnei, pamatam un kolonnai. Kāpēc pasūtīt ar 10% rezervi.",
    url: "https://jcbetons.lv/blog/ka-aprekinat-betona-daudzumu",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Blogs", item: "https://jcbetons.lv/blog" },
    { "@type": "ListItem", position: 3, name: "Kā aprēķināt betona daudzumu", item: "https://jcbetons.lv/blog/ka-aprekinat-betona-daudzumu" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kā aprēķināt betona daudzumu — formula un piemēri",
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
              <span className="text-[#0F1115]/70">Betona aprēķins</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#EE7E1A] bg-[#EE7E1A]/10 px-2.5 py-1 rounded-full">Kalkulators</span>
              <span className="text-xs text-[#0F1115]/40" style={{ fontFamily: "var(--font-jetbrains)" }}>3 min lasīšana · 2026-05-17</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
              Kā aprēķināt betona daudzumu — formula un piemēri
            </h1>
            <p className="text-[#0F1115]/60 text-lg leading-relaxed mb-10 pb-10 border-b border-black/10">
              Viens m³ = 1000 litri betona = aptuveni 2,4 tonnas. Pareizs aprēķins ļauj izvairīties no situācijām, kad betons beidzas pa vidu darbam — vai pasūtāt pārāk daudz un maksājat par nevajadzīgo.
            </p>

            <div className="space-y-8 text-[#0F1115]/70 leading-relaxed">
              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Pamata formula</h2>
                <div className="bg-[#0F1115] text-white rounded-xl p-6 font-mono text-center" style={{ fontFamily: "var(--font-jetbrains)" }}>
                  <div className="text-[#EE7E1A] text-sm mb-2 font-sans" style={{ fontFamily: "inherit" }}>Betona daudzums</div>
                  <div className="text-2xl font-bold">Garums × Platums × Augstums = m³</div>
                  <div className="text-white/50 text-sm mt-2">Visi izmēri metros</div>
                </div>
                <p className="mt-4">Tas ir viss. Trīs izmēru reizinājums metros dod jums kubikmetrus. Pēc tam pieskaita 10% rezervi.</p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Piemēri pa konstrukciju veidiem</h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "Pamatplātne",
                      formula: "10 m × 8 m × 0.15 m = 12 m³",
                      ar10: "12 × 1.1 = 13.2 m³",
                      note: "Tipiska privātmājas plātne. Biezums 15 cm = 0.15 m.",
                    },
                    {
                      title: "Lentveida pamats",
                      formula: "40 m × 0.4 m × 0.6 m = 9.6 m³",
                      ar10: "9.6 × 1.1 = 10.6 m³",
                      note: "Kopgarums 40 m, platums 40 cm, dziļums 60 cm.",
                    },
                    {
                      title: "12 kolonnas",
                      formula: "0.3 m × 0.3 m × 3 m × 12 = 3.24 m³",
                      ar10: "3.24 × 1.1 = 3.6 m³",
                      note: "Katra kolonna 30×30 cm, 3 m augsta. 12 kolonnas.",
                    },
                  ].map(({ title, formula, ar10, note }) => (
                    <div key={title} className="bg-[#F5F4F0] rounded-xl p-5 border border-black/10">
                      <div className="font-bold text-[#0F1115] mb-3">{title}</div>
                      <div className="font-mono text-sm bg-white rounded-lg p-3 mb-2" style={{ fontFamily: "var(--font-jetbrains)" }}>
                        <div className="text-[#0F1115]/60">Tīrs: {formula}</div>
                        <div className="text-[#EE7E1A] font-bold mt-1">+ 10%: {ar10}</div>
                      </div>
                      <p className="text-xs text-[#0F1115]/50">{note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Kāpēc 10% rezerve?</h2>
                <p>Pat precīzā aprēķinā reālā dzīvē betons "pazūd" vairākos veidos:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Veidņi nav ideāli taisni — betons aizpilda negaidītas spraugas",
                    "Zemes virsma nav perfekti plakana — platnes biezums var atšķirties",
                    "Betona maisītājā paliek atlikums",
                    "Izšļakstīšana un darba gaitā radušies zudumi",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A] flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">10% nav "rezerve gadījumam" — tas ir reālistisks pieaugums, ko pierāda gadu pieredze.</p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Ko darīt ar neregulārām formām?</h2>
                <p>Sarežģītākas formas (L-veida māja, trapeces veida laukums, gredzenu pamats) jāsadala vienkāršākos taisnstūros un jāsaskaita.</p>
                <p className="mt-3">Vai arī izmantojiet mūsu kalkulatoru — tas aprēķina arī apaļas kolonnas un lentveida pamatus ar vienu klikšķi.</p>
              </section>
            </div>

            <div className="mt-12 bg-[#EE7E1A] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <div className="font-bold text-white mb-1">Aprēķiniet uzreiz</div>
                <p className="text-white/80 text-sm">Ievadiet izmērus — kalkulators aprēķina m³ un +10% rezervi automātiski.</p>
              </div>
              <Link href="/betona-kalkulators" className="flex-shrink-0 bg-white text-[#EE7E1A] font-bold px-6 py-3 rounded hover:bg-white/90 transition-colors text-sm whitespace-nowrap">
                Atvērt kalkulatoru
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
