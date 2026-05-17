import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privātuma politika",
  description: "SIA JC BETONS privātuma politika — kā mēs apstrādājam jūsu personas datus.",
  robots: { index: false, follow: false },
};

export default function PrivatumaPolitika() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-[#0F1115]/40 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#0F1115] transition-colors">Sākums</Link>
            <span>/</span>
            <span>Privātuma politika</span>
          </nav>

          <h1 className="text-4xl font-black text-[#0F1115] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>
            Privātuma politika
          </h1>
          <p className="text-[#0F1115]/40 text-sm mb-10">Pēdējo reizi atjaunota: 2026. gada 17. maijā</p>

          <div className="prose prose-sm max-w-none text-[#0F1115]/75 space-y-8">
            <Section title="1. Pārzinis">
              <p>
                Personas datu pārzinis ir <strong>SIA &quot;JC BETONS&quot;</strong>, reģistrācijas numurs 40003691098, juridiskā adrese Krustpils iela 54F, Rīga, LV-1057.
                Kontakts datu aizsardzības jautājumos: <a href="mailto:info@jcbetons.lv" className="text-[#EE7E1A]">info@jcbetons.lv</a> vai +371 24 209 209.
              </p>
            </Section>

            <Section title="2. Kādi dati tiek vākti">
              <p>Mēs vācam personas datus, ko jūs brīvprātīgi iesniedzat, izmantojot kontaktformu:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vārds, uzvārds</li>
                <li>Tālruņa numurs</li>
                <li>E-pasta adrese</li>
                <li>Uzņēmuma nosaukums (pēc izvēles)</li>
                <li>Ziņojuma saturs (pasūtījuma informācija)</li>
              </ul>
              <p className="mt-3">
                Mēs arī automātiski vācam tehniskus datus: IP adrese, pārlūkprogramma, apmeklēšanas laiks — vietnes darbības nodrošināšanai un analīzei.
              </p>
            </Section>

            <Section title="3. Apstrādes mērķis un tiesiskais pamats">
              <p>Dati tiek apstrādāti šādiem mērķiem:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Līguma izpilde</strong> — lai atbildētu uz jūsu pasūtījuma pieprasījumu un sniegtu pakalpojumus (VDAR 6(1)(b) pants).</li>
                <li><strong>Leģitīmās intereses</strong> — vietnes darbības uzlabošanai un apmeklētību analīzei (VDAR 6(1)(f) pants).</li>
                <li><strong>Piekrišana</strong> — sīkdatņu analītikai, ja dodat piekrišanu (VDAR 6(1)(a) pants).</li>
              </ul>
            </Section>

            <Section title="4. Datu glabāšana">
              <p>
                Kontaktformas dati tiek glabāti ne ilgāk kā <strong>3 gadus</strong> no pēdējās saziņas vai līdz jūsu pieprasījumam dzēst datus.
                Analītiskās sīkdatnes — saskaņā ar attiecīgā pakalpojumu sniedzēja noteikumiem.
              </p>
            </Section>

            <Section title="5. Datu saņēmēji">
              <p>Jūsu dati var tikt nodoti:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Formspree Inc.</strong> — kontaktformas apstrāde (ASV; aizsardzība saskaņā ar ES–ASV datu privātuma sistēmu).</li>
                <li><strong>Vercel Inc.</strong> — vietnes mitināšana un analītika.</li>
              </ul>
              <p className="mt-2">Dati netiek nodoti trešajām personām komerciāliem mērķiem.</p>
            </Section>

            <Section title="6. Jūsu tiesības">
              <p>Saskaņā ar VDAR jums ir tiesības:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Piekļuves tiesības</strong> — pieprasīt informāciju par saviem datiem.</li>
                <li><strong>Labošanas tiesības</strong> — labot neprecīzus datus.</li>
                <li><strong>Dzēšanas tiesības</strong> — &quot;tikt aizmirstam&quot;.</li>
                <li><strong>Ierobežošanas tiesības</strong> — ierobežot apstrādi.</li>
                <li><strong>Iebilšanas tiesības</strong> — iebilst pret leģitīmo interešu apstrādi.</li>
                <li><strong>Datu pārnesamības tiesības</strong> — saņemt datus mašīnlasāmā formātā.</li>
              </ul>
              <p className="mt-3">
                Lai izmantotu šīs tiesības, rakstiet uz <a href="mailto:info@jcbetons.lv" className="text-[#EE7E1A]">info@jcbetons.lv</a>.
                Jums arī ir tiesības iesniegt sūdzību <strong>Datu valsts inspekcijā</strong> (<a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="text-[#EE7E1A]">www.dvi.gov.lv</a>).
              </p>
            </Section>

            <Section title="7. Sīkdatnes">
              <p>
                Mēs izmantojam analītiskās sīkdatnes (Vercel Analytics). Sīkdatņu izmantošana paskaidrota{" "}
                <Link href="/sikdatnes" className="text-[#EE7E1A]">Sīkdatņu politikā</Link>.
              </p>
            </Section>

            <Section title="8. Izmaiņas">
              <p>
                Mēs paturam tiesības atjaunināt šo politiku. Par būtiskām izmaiņām informēsim vietnē. Turpinot izmantot vietni pēc izmaiņu publicēšanas, jūs piekrītat atjauninātajai politikai.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#0F1115] mb-3" style={{ fontFamily: "var(--font-archivo)" }}>{title}</h2>
      {children}
    </div>
  );
}
