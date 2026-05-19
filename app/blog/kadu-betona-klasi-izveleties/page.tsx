import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Kādu Betona Klasi Izvēlēties? Pamats, Pārsegums, Grīda",
  description:
    "C20/25, C25/30 vai C30/37? Uzziniet, kura betona klase der pamatam, pārsegumam, rūpnieciskai grīdai un citiem darbiem. Praktisks ceļvedis no JC Betons.",
  alternates: { canonical: "/blog/kadu-betona-klasi-izveleties" },
  openGraph: {
    title: "Kādu Betona Klasi Izvēlēties? | JC Betons Blogs",
    description: "Pilns ceļvedis betona klasēm — kura der pamatam, kura grīdai, kura rūpnieciskai ēkai.",
    url: "https://jcbetons.lv/blog/kadu-betona-klasi-izveleties",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Blogs", item: "https://jcbetons.lv/blog" },
    { "@type": "ListItem", position: 3, name: "Kādu betona klasi izvēlēties?", item: "https://jcbetons.lv/blog/kadu-betona-klasi-izveleties" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kādu betona klasi izvēlēties pamatam, pārsegumam un grīdai?",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Organization", name: "JC Betons", url: "https://jcbetons.lv" },
  publisher: { "@type": "Organization", name: "JC Betons", logo: { "@type": "ImageObject", url: "https://jcbetons.lv/logo-symbol.png" } },
  description: "Pilns ceļvedis betona klasēm C8/10 līdz C35/45 — ko tās nozīmē un kuru klasi izvēlēties dažādiem celtniecības darbiem.",
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
              <span className="text-[#0F1115]/70">Betona klases</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#EE7E1A] bg-[#EE7E1A]/10 px-2.5 py-1 rounded-full">Betona klases</span>
              <span className="text-xs text-[#0F1115]/40" style={{ fontFamily: "var(--font-jetbrains)" }}>4 min lasīšana · 2026-05-17</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
              Kādu betona klasi izvēlēties pamatam, pārsegumam un grīdai?
            </h1>
            <p className="text-[#0F1115]/60 text-lg leading-relaxed mb-10 pb-10 border-b border-black/10">
              Viens no biežākajiem jautājumiem, ko dzirdam no klientiem pirms betona pasūtīšanas. Atbilde ir atkarīga no trim lietām: <strong className="text-[#0F1115]">kur betons nonāks, cik liela būs slodze un vai ir projekts</strong>. Šajā rakstā izskaidrojam praktiski.
            </p>

            <div className="prose-custom space-y-8 text-[#0F1115]/70 leading-relaxed">
              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Ko nozīmē betona klase?</h2>
                <p>Betona klase — piemēram, C20/25 — ir tā saucamā <strong className="text-[#0F1115]">raksturīgā spiedes stiprība</strong>. Skaitlis pēc burta C ir minimālā stiprība megapaskalos (MPa) pēc 28 dienām cietēšanas.</p>
                <p className="mt-3">C20/25 nozīmē: vismaz 20 MPa uz cilindrisko paraugu, vismaz 25 MPa uz kubisko paraugu. Testē laboratorijā ar standartizētiem paraugiem.</p>
                <p className="mt-3">Augstāka klase = vairāk cementa = lielāka stiprība = augstāka cena. Tas gan nenozīmē, ka vienmēr jāizvēlas augstākā klase — privātmājas pamatam C35/45 ir liekums un tērēts nauda.</p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Praktiskais ceļvedis: kura klase kuram darbam</h2>
                <div className="overflow-x-auto rounded-xl border border-black/10 not-prose">
                  <table className="w-full text-sm">
                    <thead className="bg-[#0F1115] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Darbs</th>
                        <th className="px-4 py-3 text-left font-semibold">Ieteicamā klase</th>
                        <th className="px-4 py-3 text-left font-semibold">Piezīme</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Lentveida pamats (zem zemes)", "C16/20 – C20/25", "Augstā gruntsūdens līmenī — C25/30"],
                        ["Pamatplātne privātmājai", "C25/30", "Ar PP fibrām mikroplaisas novēršanai"],
                        ["Starpstāvu pārsegums", "C20/25 – C25/30", "Pēc projekta"],
                        ["Rūpnieciskā grīda / noliktava", "C25/30 – C30/37", "Ar tērauda fibru smagai slodzei"],
                        ["Kāpnes un balkons", "C20/25", "Sala izturīgs (XF klase)"],
                        ["Autostāvvieta", "C30/37", "Sāls iedarbība — nepieciešams XF2 klase"],
                        ["Betona celiņš ārā", "C20/25", "PP fibras samazina plaisāšanu no sala"],
                      ].map(([work, cls, note], i) => (
                        <tr key={work} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F4F0]"}>
                          <td className="px-4 py-3 text-[#0F1115]/80">{work}</td>
                          <td className="px-4 py-3 font-bold text-[#EE7E1A]" style={{ fontFamily: "var(--font-jetbrains)" }}>{cls}</td>
                          <td className="px-4 py-3 text-[#0F1115]/50 text-xs">{note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Trīs lielākās kļūdas betona klases izvēlē</h2>
                <div className="space-y-4">
                  {[
                    { n: "1", title: "Ņem augstāku klasi \"uz drošo pusi\"", desc: "C30/37 privātmājas pamatam ir pārmaksāšana. Augstāka klase nenozīmē \"labāk\" — tā nozīmē \"dārgāk un nevajadzīgi\"." },
                    { n: "2", title: "Neskaita sala izturīgumu", desc: "Betona klase ir stiprība — bet ārtelpu darbiem nepieciešama arī XF (sala izturīguma) klase. Par to vaicājiet mums brīdī, kad pasūtāt." },
                    { n: "3", title: "Betonē ziemā bez siltuma piedevām", desc: "Zem +5°C betons cietē nepareizi. Ziemā pievienojam antifrīzus un termiskas piedevas — tas nedaudz ietekmē cenu, bet pasargā no kļūmēm." },
                  ].map(({ n, title, desc }) => (
                    <div key={n} className="flex gap-4 bg-[#F5F4F0] rounded-xl p-5">
                      <span className="w-8 h-8 rounded-full bg-[#EE7E1A] text-white font-black text-sm flex items-center justify-center flex-shrink-0">{n}</span>
                      <div>
                        <div className="font-bold text-[#0F1115] mb-1">{title}</div>
                        <p className="text-sm text-[#0F1115]/60">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#0F1115] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>Ko darīt, ja nav projekta?</h2>
                <p>Daudzi privātie pasūtītāji betonē bez arhitekta projekta. Tas ir pieļaujami mazām konstrukcijām, taču betona klasi izvēlas, balstoties uz vispārpieņemtiem standartiem. Vai arī — vienkārši pajautājiet mums. Mūsu speciālisti ir palīdzējuši tūkstošiem klientu izvēlēties pareizo klasi un aprēķināt daudzumu.</p>
              </section>
            </div>

            <div className="mt-12 bg-[#EE7E1A]/10 border border-[#EE7E1A]/30 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <div className="font-bold text-[#0F1115] mb-1">Aprēķiniet betona daudzumu</div>
                <p className="text-[#0F1115]/60 text-sm">Izmantojiet mūsu kalkulatoru — ievadiet izmērus un iegūstiet m³.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/betona-kalkulators" className="bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-5 py-2.5 rounded transition-colors text-sm whitespace-nowrap">
                  Betona kalkulators
                </Link>
                <Link href="/betona-klases" className="border border-black/20 text-[#0F1115] font-semibold px-5 py-2.5 rounded transition-colors text-sm whitespace-nowrap hover:bg-black/5">
                  Visas klases →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
