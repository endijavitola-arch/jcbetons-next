import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Betona Klases | C8/10 līdz C35/45 | Kuru Izvēlēties?",
  description:
    "Betona klases C8/10 līdz C35/45 — kas tās nozīmē un kuru izvēlēties pamatiem, pārsegumiem vai rūpnieciskām grīdām. Transportbetons Rīgā.",
  alternates: { canonical: "/betona-klases" },
  openGraph: {
    title: "Betona Klases C8/10–C35/45 | Kuru Izvēlēties? | JC Betons",
    description: "Pilns ceļvedis betona klasēm. Kura klase der pamatam, kura grīdai un kura rūpnieciskai celtnei. JC Betons — transportbetons Rīgā.",
    url: "https://jcbetons.lv/betona-klases",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Betona klases", item: "https://jcbetons.lv/betona-klases" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Ko nozīmē betona klase C20/25?", acceptedAnswer: { "@type": "Answer", text: "C20/25 nozīmē, ka betons spiedes stiprības testā sasniedz vismaz 20 MPa uz cilindrisko paraugu un 25 MPa uz kubisko paraugu. Skaitlis pēc C ir stiprība, ne sastāvs." } },
    { "@type": "Question", name: "Kādu betona klasi vajag privātmājas pamatam?", acceptedAnswer: { "@type": "Answer", text: "Privātmājas lentveida pamatiem parasti pietiek ar C20/25. Ja pamats atrodas zem ūdens līmeņa vai augstā mitrumā, ieteicams C25/30 ar ūdensizturīgumu. Konkrētu klasi nosaka projekts." } },
    { "@type": "Question", name: "Kāda betona klase vajadzīga pamatplātnei?", acceptedAnswer: { "@type": "Answer", text: "Privātmājas pamatplātnei parasti lieto C25/30. Rūpnieciskai vai smagākai ēkai — C30/37. Plātnēm ar silto grīdu sistēmu ieteicams fibrobetons ar PP šķiedrām, lai samazinātu mikroplaisas." } },
    { "@type": "Question", name: "Vai augstāka betona klase vienmēr ir labāka?", acceptedAnswer: { "@type": "Answer", text: "Nē. Augstāka klase nozīmē augstākas izmaksas un bieži ir liekums privātbūvniecībā. C35/45 privātmājas pamatam ir pārmērīgs un dārgāks. Jāizvēlas klase, ko nosaka projekts un slodze." } },
  ],
};

const classes = [
  { cls: "C8/10", mpa: "10 MPa", color: "bg-gray-100", uses: ["Bērtnes izlīdzināšanas kārtas", "Vieglas nebūtiskas izbēršanas", "Pagaidu konstrukcijas"] },
  { cls: "C12/15", mpa: "15 MPa", color: "bg-gray-100", uses: ["Neceltspējīgi pamati", "Betona celiņi privātmājās", "Mazas slodzes plātnes"] },
  { cls: "C16/20", mpa: "20 MPa", color: "bg-blue-50", uses: ["Lentveida pamati zem zemes", "Pagraba sienas", "Mazāki stāvvadīklu pamati"] },
  { cls: "C20/25", mpa: "25 MPa", color: "bg-orange-50", uses: ["Privātmāju pamati ✓", "Starpstāvu pārsegumi", "Kāpnes un balkoni", "Vispārīgas lietošanas plātnes"] },
  { cls: "C25/30", mpa: "30 MPa", color: "bg-orange-50", uses: ["Nesošas plātnes", "Rūpnieciskas grīdas", "Daudzdzīvokļu ēku pamati", "Smagas slodzes konstrukcijas"] },
  { cls: "C30/37", mpa: "37 MPa", color: "bg-red-50", uses: ["Stāvvietas un parkings", "Intensīvi izmantoti laukumi", "Tiltu konstrukcijas", "Rūpnieciskā infrastruktūra"] },
  { cls: "C35/45", mpa: "45 MPa", color: "bg-red-50", uses: ["Augsta slodze rūpniecībā", "Atsauksmes pret agresīvu vidi", "Specializētas inženiertehniskās būves"] },
];

const scenarios = [
  { title: "Privātmājas pamati", cls: "C20/25", icon: "🏡", notes: "Standarta zemes apstākļos. Augstā gruntsūdens līmenī — C25/30." },
  { title: "Pamatplātne", cls: "C25/30", icon: "⬛", notes: "Ar PP fibrām mikroplaisas novēršanai. Smagākām ēkām — C30/37." },
  { title: "Starpstāvu pārsegums", cls: "C20/25", icon: "🏢", notes: "Monolītam pārsegumam. Saskaņā ar projektu — var būt C25/30." },
  { title: "Rūpnieciskā grīda", cls: "C25/30", icon: "🏭", notes: "Ar tērauda fibru. Intensīvai foridklift slodzei — C30/37." },
  { title: "Autostāvvieta", cls: "C30/37", icon: "🚗", notes: "Sāls un sala iedarbība. Bieži ar ūdensizturīguma piedevu." },
  { title: "Ārtelpu celiņš", cls: "C20/25", icon: "🌿", notes: "Ar sala izturīgumu (XF2 klase). PP fibras samazina plaisāšanu." },
];

export default function BetonaKlases() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section className="pt-32 pb-16 bg-[#0F1115]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Betona klases</span>
            </nav>
            <div className="text-xs tracking-widest text-[#EE7E1A] font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              Ceļvedis
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Betona Klases:<br />Kuru Izvēlēties?
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Pilns ceļvedis betona klasēm no C8/10 līdz C35/45 — ko tās nozīmē, kura klase der kādam objektam un kāpēc augstāka klase ne vienmēr ir labāka.
            </p>
          </div>
        </section>

        {/* Class table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Visas Betona Klases un to Pielietojums
            </h2>
            <div className="space-y-3">
              {classes.map(({ cls, mpa, uses }) => (
                <div key={cls} className="rounded-xl border border-black/10 overflow-hidden">
                  <div className="flex flex-wrap items-center gap-4 p-4 bg-white">
                    <div className="flex items-center gap-3 min-w-[120px]">
                      <span className="text-xl font-black text-[#EE7E1A]" style={{ fontFamily: "var(--font-jetbrains)" }}>{cls}</span>
                      <span className="text-xs text-[#0F1115]/40 font-mono bg-[#F5F4F0] px-2 py-0.5 rounded">{mpa}</span>
                    </div>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                      {uses.map((u) => (
                        <li key={u} className="flex items-center gap-1.5 text-sm text-[#0F1115]/65">
                          <span className="w-1 h-1 rounded-full bg-[#EE7E1A] flex-shrink-0" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenario guide */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Kādu Klasi Izvēlēties Manai Situācijai?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {scenarios.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-5 border border-black/10">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="font-bold text-[#0F1115] mb-1">{s.title}</div>
                  <div className="text-[#EE7E1A] font-black text-lg mb-2" style={{ fontFamily: "var(--font-jetbrains)" }}>{s.cls}</div>
                  <p className="text-[#0F1115]/55 text-sm leading-relaxed">{s.notes}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-xl border border-black/10 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <div className="font-bold text-[#0F1115] mb-1">Aprēķiniet nepieciešamo daudzumu</div>
                <p className="text-[#0F1115]/60 text-sm">Izmantojiet mūsu kalkulatoru, lai uzzinātu, cik m³ betona vajadzīgs jūsu objektam.</p>
              </div>
              <Link href="/betona-kalkulators" className="flex-shrink-0 bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-6 py-3 rounded transition-colors">
                Atvērt kalkulatoru
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Biežāk uzdotie jautājumi
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="bg-[#F5F4F0] rounded-xl p-6 border border-black/10">
                  <h3 className="font-bold text-[#0F1115] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>{item.name}</h3>
                  <p className="text-[#0F1115]/65 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
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
