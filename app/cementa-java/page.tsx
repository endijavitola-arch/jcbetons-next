import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Cementa Java Rīgā | Mūra un Apmetuma Java",
  description:
    "Cementa java mūrim, apmetumam un grīdas izlīdzināšanai. Ražošana un piegāde Rīgā un Pierīgā. Pasūtiet: +371 24 209 209",
  alternates: { canonical: "/cementa-java" },
  openGraph: {
    title: "Cementa Java Rīgā | Mūra un Apmetuma Java | JC Betons",
    description: "Cementa java mūrim, apmetumam un grīdas izlīdzināšanai. Ražošana un piegāde Rīgā un Pierīgā.",
    url: "https://jcbetons.lv/cementa-java",
    images: [{ url: "/hero-truck.jpg", width: 1440, height: 960 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Cementa java", item: "https://jcbetons.lv/cementa-java" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kas ir cementa java un kur to izmanto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cementa java ir maisījums no cementa, smiltīm un ūdens, ko izmanto mūrim, iekšējai un ārējai apmetumam, grīdas izlīdzināšanai un dažādiem apdares darbiem. Atšķirībā no betona, java nesatur rupjo granulu, tāpēc ir maigāka un vieglāk apstrādājama.",
      },
    },
    {
      "@type": "Question",
      name: "Kāda ir atšķirība starp cementa javu un betonu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Betons satur rupjo pildvielu (šķembas vai grants) un ir paredzēts konstrukcijām — pamatiem, plātnēm, kolonnām. Cementa java sastāv tikai no cementa, smiltīm un ūdens, un ir paredzēta mūrim, apmetumam un plānākām kārtām. Java ir elastīgāka un vieglāk uzklājama ar rokām vai sūkni.",
      },
    },
    {
      "@type": "Question",
      name: "Vai cementa javu var pasūtīt ar piegādi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jā. Cementa javu piegādājam ar autobetonmaisītāju Rīgā un Pierīgā. Minimālais pasūtījums — no aptuveni 1 m³. Zvaniet +371 24 209 209 vai aizpildiet kontaktformu, lai uzzinātu cenu un grafiku.",
      },
    },
    {
      "@type": "Question",
      name: "Kādu javu izvēlēties mūrim un kādu apmetumam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mūra javai parasti izmanto maisījumu M5–M10 (proporcija cementa: smiltis 1:4 līdz 1:6). Apmetuma javai piemērotāka ir plānāka konsistence ar mazāku cementa saturu. Precīzu recepti varam pielāgot jūsu objekta vajadzībām — sazinieties ar mums.",
      },
    },
  ],
};

const javaTypes = [
  {
    title: "Mūra java",
    desc: "Ķieģeļu, bloku un akmens mūrim. M5–M10 klase. Augsta saistviela un ilgmūžība.",
    uses: ["Ķieģeļu mūris", "Silikāta bloki", "Akmens mūris", "Remonts un papildināšana"],
  },
  {
    title: "Apmetuma java",
    desc: "Iekšējai un ārējai apmetumam. Gluda konsistence, laba pielipšana pie dažādām virsmām.",
    uses: ["Iekšsienas apmetums", "Fasādes apmetums", "Virsmu izlīdzināšana", "Remonts"],
  },
  {
    title: "Grīdas java",
    desc: "Grīdas izlīdzināšanai un stāvvietām. Biezāka konsistence, liela pretestība pret slodzi.",
    uses: ["Grīdas izlīdzināšana", "Techniskās telpas", "Garažas un pagrabi", "Noliktavas"],
  },
];

export default function CementaJava() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#0F1115] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/foundation-pour.jpg" alt="Cementa javas liešana" fill className="object-cover" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Cementa java</span>
            </nav>
            <div className="text-xs tracking-widest text-[#EE7E1A] font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              Produkts
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Cementa Java Rīgā.
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              Mūra java, apmetuma java un grīdas izlīdzināšanas java ar piegādi Rīgā un Pierīgā. Ražojam pēc jūsu objekta vajadzībām — svaiga, gatava lietošanai.
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

        {/* Java types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Cementa Javas Veidi un Pielietojums
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {javaTypes.map((t) => (
                <div key={t.title} className="bg-[#F5F4F0] rounded-xl p-6 border border-black/10">
                  <h3 className="text-xl font-black text-[#0F1115] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>
                    {t.title}
                  </h3>
                  <p className="text-[#0F1115]/60 text-sm mb-4 leading-relaxed">{t.desc}</p>
                  <ul className="space-y-1.5">
                    {t.uses.map((u) => (
                      <li key={u} className="flex items-center gap-2 text-sm text-[#0F1115]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A] flex-shrink-0" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Explainer */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-black text-[#0F1115] mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
                  Kas ir cementa java un kāpēc pasūtīt gatavu?
                </h2>
                <p className="text-[#0F1115]/65 leading-relaxed mb-4">
                  Cementa java ir maisījums no <strong>cementa, smiltīm un ūdens</strong>. To izmanto tur, kur betons ir par rupju — mūrim, apmetumam, grīdas izlīdzināšanai un apdares darbiem.
                </p>
                <p className="text-[#0F1115]/65 leading-relaxed mb-4">
                  Gatavu javu ražotnes apstākļos ir būtiskas priekšrocības pār maisīšanu uz vietas: precīza proporcija katrā partijā, vienmērīga konsistence un ietaupīts laiks. Maisot rokām, bieži tiek pārkāpta cementa un smilšu attiecība — tas ietekmē izturību un pielipšanu.
                </p>
                <p className="text-[#0F1115]/65 leading-relaxed mb-6">
                  Mēs ražojam javu uz <strong>LIEBHERR LCM 1.0</strong> betona rūpnīcas — tās pašas iekārtas, uz kurām ražojam sertificētu transportbetonu. Tas nozīmē stabilu kvalitāti un kontrolētu recepti katrā krāvumā.
                </p>
                <h3 className="text-xl font-bold text-[#0F1115] mb-3" style={{ fontFamily: "var(--font-archivo)" }}>
                  Kā pasūtīt
                </h3>
                <ol className="space-y-2">
                  {[
                    "Zvaniet +371 24 209 209 vai aizpildiet kontaktformu",
                    "Norādiet javas veidu, apjomu un piegādes adresi",
                    "Vienojamies par datumu un cenu",
                    "Piegādājam ar autobetonmaisītāju — java gatava lietošanai",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#0F1115]/70 text-sm">
                      <span className="w-6 h-6 rounded-full bg-[#EE7E1A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Piegādes zona", value: "Rīga + Pierīga", note: "Lielākiem projektiem — individuāli" },
                  { label: "Minimālais apjoms", value: "no 1 m³", note: "Atkarībā no objekta veida" },
                  { label: "Ražotājs", value: "LIEBHERR LCM 1.0", note: "Sertificēta betona rūpnīca" },
                  { label: "Pieredze", value: "21 gads", note: "Kopš 2005. gada Rīgā" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#F5F4F0] rounded-xl p-5 flex items-center justify-between">
                    <div>
                      <div className="text-[#0F1115]/50 text-xs mb-0.5">{s.label}</div>
                      <div className="font-bold text-[#0F1115]">{s.value}</div>
                    </div>
                    <div className="text-[#0F1115]/40 text-xs text-right max-w-[160px]">{s.note}</div>
                  </div>
                ))}

                <div className="bg-[#EE7E1A]/10 border border-[#EE7E1A]/30 rounded-xl p-5">
                  <h4 className="font-bold text-[#0F1115] mb-1" style={{ fontFamily: "var(--font-archivo)" }}>
                    Arī transportbetons un fibrobetons
                  </h4>
                  <p className="text-[#0F1115]/60 text-sm">
                    No vienas rūpnīcas varat pasūtīt visu — javu, transportbetonu, fibrobetonu un sūkņa pakalpojumus. Vienkāršāk koordinēt, mazāk piegādātāju.
                  </p>
                  <Link href="/#kontakti" className="inline-block mt-3 text-[#EE7E1A] font-semibold text-sm hover:underline">
                    Pieprasīt visu vienā →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Biežāk uzdotie jautājumi par cementa javu
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

        <CTAStrip />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
