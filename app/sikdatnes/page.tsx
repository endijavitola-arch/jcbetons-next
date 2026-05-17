import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sīkdatņu politika",
  description: "SIA JC BETONS sīkdatņu politika — kā mēs izmantojam sīkdatnes jūsu pārlūkprogrammā.",
  robots: { index: false, follow: false },
};

export default function Sikdatnes() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-[#0F1115]/40 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#0F1115] transition-colors">Sākums</Link>
            <span>/</span>
            <span>Sīkdatņu politika</span>
          </nav>

          <h1 className="text-4xl font-black text-[#0F1115] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>
            Sīkdatņu politika
          </h1>
          <p className="text-[#0F1115]/40 text-sm mb-10">Pēdējo reizi atjaunota: 2026. gada 17. maijā</p>

          <div className="text-[#0F1115]/75 space-y-8">
            <Section title="Kas ir sīkdatnes?">
              <p>
                Sīkdatnes (angļu: <em>cookies</em>) ir mazi teksta faili, ko vietne saglabā jūsu ierīcē, lai atcerētos jūsu preferences un analizētu vietnes lietošanu. Latvijā un ES sīkdatņu izmantošanu regulē Elektronisko sakaru likums un VDAR (Vispārīgā datu aizsardzības regula).
              </p>
            </Section>

            <Section title="Kādas sīkdatnes mēs izmantojam">
              <div className="overflow-x-auto rounded-xl border border-black/10">
                <table className="w-full text-sm">
                  <thead className="bg-[#0F1115] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Sīkdatne</th>
                      <th className="px-4 py-3 text-left font-semibold">Mērķis</th>
                      <th className="px-4 py-3 text-left font-semibold">Glabāšana</th>
                      <th className="px-4 py-3 text-left font-semibold">Veids</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-black/5">
                      <td className="px-4 py-3 font-mono text-xs">jcbetons_cookie_consent</td>
                      <td className="px-4 py-3">Piekrišanas statuss</td>
                      <td className="px-4 py-3">1 gads</td>
                      <td className="px-4 py-3 text-green-700 font-medium">Nepieciešamā</td>
                    </tr>
                    <tr className="bg-[#F5F4F0] border-b border-black/5">
                      <td className="px-4 py-3 font-mono text-xs">_vercel_insights</td>
                      <td className="px-4 py-3">Apmeklētību analīze (Vercel Analytics)</td>
                      <td className="px-4 py-3">Sesija</td>
                      <td className="px-4 py-3 text-orange-700 font-medium">Analītiskā</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="Nepieciešamās sīkdatnes">
              <p>
                Nepieciešamās sīkdatnes nodrošina vietnes pamatfunkcijas. Tās nevar atspējot. Tajās netiek saglabāta personiski identificējoša informācija.
              </p>
            </Section>

            <Section title="Analītiskās sīkdatnes">
              <p>
                Mēs izmantojam <strong>Vercel Analytics</strong>, lai saprastu, kā apmeklētāji izmanto vietni — kuras lapas ir populārākās, no kurienes nāk apmeklētāji, kādas ierīces tiek izmantotas. Šie dati ir anonimizēti un neidentificē konkrētus lietotājus.
              </p>
              <p className="mt-2">
                Analītiskās sīkdatnes tiek izmantotas tikai ar jūsu piekrišanu, ko var atsaukt jebkurā laikā, dzēšot pārlūkprogrammas sīkdatnes vai noklikšķinot uz &quot;Noraidīt&quot; piekrišanas joslā.
              </p>
            </Section>

            <Section title="Kā pārvaldīt sīkdatnes">
              <p>
                Jūs varat kontrolēt sīkdatnes savā pārlūkprogrammā:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Chrome:</strong> Iestatījumi → Privātums un drošība → Sīkdatnes</li>
                <li><strong>Firefox:</strong> Iestatījumi → Privātums un drošība</li>
                <li><strong>Safari:</strong> Preferences → Privātums</li>
                <li><strong>Edge:</strong> Iestatījumi → Sīkdatnes un vietnes atļaujas</li>
              </ul>
              <p className="mt-3 text-[#0F1115]/50 text-xs">
                Piezīme: daļu sīkdatņu atspējošana var ietekmēt vietnes funkcionalitāti.
              </p>
            </Section>

            <Section title="Sazinieties ar mums">
              <p>
                Jautājumu gadījumā par sīkdatnēm rakstiet uz{" "}
                <a href="mailto:info@jcbetons.lv" className="text-[#EE7E1A]">info@jcbetons.lv</a>.
                Plašāka informācija par personas datiem —{" "}
                <Link href="/privatuma-politika" className="text-[#EE7E1A]">Privātuma politikā</Link>.
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
