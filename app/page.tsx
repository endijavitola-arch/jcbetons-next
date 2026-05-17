import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Fleet from "@/components/Fleet";
import About from "@/components/About";
import Works from "@/components/Works";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

// Defer all Client Components that are below the fold — reduces initial JS parse/eval
const Stats = dynamic(() => import("@/components/Stats"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Kā pasūtīt transportbetonu Rīgā?", acceptedAnswer: { "@type": "Answer", text: "Vienkāršākais veids ir zvanīt +371 24 209 209 vai aizpildīt kontaktformu šajā lapā. Norādiet kubikmetru daudzumu, vajadzīgo betona klasi (piemēram, C20/25), piegādes adresi un vēlamo datumu. Atbildam parasti tās pašas darba dienas laikā ar cenu un grafiku." } },
    { "@type": "Question", name: "Kas ir fibrobetons un kad to izmanto?", acceptedAnswer: { "@type": "Answer", text: "Fibrobetons ir betons ar pievienotām tērauda vai polipropilēna (PP) šķiedrām, kas palielina materiāla izturību pret triecieniem, plaisāšanu un slodzi. Tērauda fibras nodrošina lielāku nestspēju un izmanto rūpnieciskām grīdām, ceļiem un industriāliem laukumiem. PP šķiedras samazina mikroplaisas un labi der pārsegumiem un mazākiem objektiem." } },
    { "@type": "Question", name: "Cik gara ir betona sūkņa strēla?", acceptedAnswer: { "@type": "Answer", text: "Mūsu betona sūknis ar 41 metru strēli sasniedz augstas un grūti pieejamas vietas — daudzstāvu būves, objektus aiz žogiem, šauras teritorijas. Minimālais ekonomiskais apjoms sūkņa izsaukumam parasti ir no 6 m³." } },
    { "@type": "Question", name: "Kādi izmēri pamatu blokiem ir pieejami?", acceptedAnswer: { "@type": "Answer", text: "Standarta dzelzsbetona pamatu bloki garumā 90 / 120 / 240 cm, platumā 60 cm, augstumā 30 vai 40 cm. Pēc projekta izgatavojam arī nestandarta izmērus. Visi bloki tiek piegādāti ar manipulatoru, kas tos uzstāda vietā." } },
    { "@type": "Question", name: "Vai piedāvājat grodus ar dibeniem un vākiem?", acceptedAnswer: { "@type": "Answer", text: "Jā. Akas un kanalizācijas grodi pieejami diametrā Ø 45 un Ø 90 cm, augstumā 100 / 150 / 200 cm. Komplektā ar visu veidu dibeniem un vākiem. Piegāde ar manipulatoru visā Rīgā un Pierīgā." } },
    { "@type": "Question", name: "Kāds ir piegādes rādiuss un minimālais pasūtījums?", acceptedAnswer: { "@type": "Answer", text: "Strādājam Rīgā un Pierīgā. Minimālais pasūtījums ir viens autobetonmaisītāja krāvums (no aptuveni 5 m³). Lielākiem objektiem vienojamies individuāli." } },
    { "@type": "Question", name: "Kāpēc izvēlēties JC Betons?", acceptedAnswer: { "@type": "Answer", text: "21 gads betona ražošanā kopš 2005. gada. Strādājam uz modernas LIEBHERR LCM 1.0 betona rūpnīcas, ko regulāri pārbauda Kiwa INSPECTA Latvia (sertifikāts Nr. 3528). Mums ir sava 15 vienību autoflote." } },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Fleet />
        <About />
        <Works />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
