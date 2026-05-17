"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Kā pasūtīt transportbetonu Rīgā?",
    a: "Vienkāršākais veids ir zvanīt +371 24 209 209 vai aizpildīt kontaktformu šajā lapā. Norādiet kubikmetru daudzumu, vajadzīgo betona klasi (piemēram, C20/25), piegādes adresi un vēlamo datumu. Atbildam parasti tās pašas darba dienas laikā ar cenu un grafiku.",
  },
  {
    q: "Kas ir fibrobetons un kad to izmanto?",
    a: "Fibrobetons ir betons ar pievienotām tērauda vai polipropilēna (PP) šķiedrām, kas palielina materiāla izturību pret triecieniem, plaisāšanu un slodzi. Tērauda fibras nodrošina lielāku nestspēju un izmanto rūpnieciskām grīdām, ceļiem un industriāliem laukumiem. PP šķiedras samazina mikroplaisas un labi der pārsegumiem un mazākiem objektiem.",
  },
  {
    q: "Cik gara ir betona sūkņa strēla?",
    a: "Mūsu betona sūknis ar 41 metru strēli sasniedz augstas un grūti pieejamas vietas — daudzstāvu būves, objektus aiz žogiem, šauras teritorijas. Tas nozīmē, ka betona maisītājam nav jāstāv pie pašas liešanas vietas. Minimālais ekonomiskais apjoms sūkņa izsaukumam parasti ir no 6 m³.",
  },
  {
    q: "Kādi izmēri pamatu blokiem ir pieejami?",
    a: "Standarta dzelzsbetona pamatu bloki garumā 90 / 120 / 240 cm, platumā 60 cm, augstumā 30 vai 40 cm. Pēc projekta izgatavojam arī nestandarta izmērus. Visi bloki tiek piegādāti ar manipulatoru, kas tos uzstāda vietā — nav vajadzīgs atsevišķs celtnis.",
  },
  {
    q: "Vai piedāvājat grodus ar dibeniem un vākiem?",
    a: "Jā. Akas un kanalizācijas grodi pieejami diametrā Ø 45 un Ø 90 cm, augstumā 100 / 150 / 200 cm. Komplektā ar visu veidu dibeniem un vākiem. Piegāde ar manipulatoru visā Rīgā un Pierīgā — uzstādām vietā.",
  },
  {
    q: "Kāds ir piegādes rādiuss un minimālais pasūtījums?",
    a: "Strādājam Rīgā un Pierīgā. Minimālais pasūtījums ir viens autobetonmaisītāja krāvums (no aptuveni 5 m³). Lielākiem objektiem un nepārtrauktām piegādēm vienojamies par grafiku un cenu individuāli — bieži strādājam ar būvuzņēmumiem mēnešu garumā.",
  },
  {
    q: "Kāpēc izvēlēties JC Betons?",
    a: "21 gads betona ražošanā kopš 2005. gada. Strādājam uz modernas LIEBHERR LCM 1.0 betona rūpnīcas, ko regulāri pārbauda Kiwa INSPECTA Latvia (sertifikāts Nr. 3528). Mums ir sava 15 vienību autoflote, tāpēc piegādes laiks ir mūsu pašu rokās — nevis īrēts no trešās puses.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span className="font-bold text-[#EE7E1A]">05</span>
            <span className="text-[#0F1115]/40">Biežāk uzdotie jautājumi</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
            Atbildes uz<br />biežākajiem jautājumiem.
          </h2>
          <p className="text-[#0F1115]/60 max-w-xl">
            Ko klienti parasti vaicā pirms pasūtīt betonu. Ja jūsu jautājums nav atrodams — zvaniet vai rakstiet, atbildam darba dienas laikā.
          </p>
        </header>

        <div className="max-w-3xl space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="border border-black/10 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-[#0F1115] hover:bg-black/2 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-[#EE7E1A] transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#0F1115]/65 leading-relaxed text-sm border-t border-black/5 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
