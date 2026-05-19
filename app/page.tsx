import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Fleet from "@/components/Fleet";
import About from "@/components/About";
import Works from "@/components/Works";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
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
    { "@type": "Question", name: "Kā pasūtīt transportbetonu Rīgā?", acceptedAnswer: { "@type": "Answer", text: "Zvaniet +371 24 209 209 vai aizpildiet kontaktformu. Norādiet m³ daudzumu, betona klasi, adresi un datumu. Atbildam tās pašas darba dienas laikā." } },
    { "@type": "Question", name: "Kas ir fibrobetons?", acceptedAnswer: { "@type": "Answer", text: "Betons ar tērauda vai PP šķiedrām. Tērauda fibras — rūpnieciskas grīdas un ceļi. PP šķiedras — mikroplaisas novēršana pārsegumiem un plātnēm." } },
    { "@type": "Question", name: "Cik gara ir betona sūkņa strēla?", acceptedAnswer: { "@type": "Answer", text: "41 metrs. Piemērots daudzstāvu ēkām un grūti pieejamiem objektiem. Minimums no 6 m³." } },
    { "@type": "Question", name: "Kādi pamatu bloki ir pieejami?", acceptedAnswer: { "@type": "Answer", text: "Garumā 90/120/240 cm, platumā 60 cm, augstumā 30 vai 40 cm. Piegāde un uzstādīšana ar manipulatoru." } },
    { "@type": "Question", name: "Vai piedāvājat grodus ar dibeniem?", acceptedAnswer: { "@type": "Answer", text: "Jā. Ø45 un Ø90 cm, augstumā 100/150/200 cm. Komplektā ar dibeniem un vākiem. Piegāde ar manipulatoru." } },
    { "@type": "Question", name: "Kāds ir minimālais pasūtījums?", acceptedAnswer: { "@type": "Answer", text: "Viens autobetonmaisītāja krāvums — aptuveni 5 m³. Piegāde Rīgā un Pierīgā." } },
    { "@type": "Question", name: "Kāpēc izvēlēties JC Betons?", acceptedAnswer: { "@type": "Answer", text: "21 gads tirgū kopš 2005. gada. LIEBHERR LCM 1.0 betona rūpnīca. Kiwa INSPECTA Latvia sertifikāts Nr. 3528. 15 autobetonmaisītāju flote." } },
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
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
