import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Transportbetona Cenas Rīgā | Betona Piegāde",
  description:
    "Transportbetona cenas Rīgā. Indikatīvas cenas C16/20–C35/45. Fibrobetons, betona sūknis, pamatu bloki. Pieprasiet individuālu tāmi: +371 24 209 209",
  alternates: { canonical: "/cenas" },
  openGraph: {
    title: "Transportbetona Cenas Rīgā | JC Betons",
    description: "Indikatīvas transportbetona cenas Rīgā un Pierīgā. Fibrobetons, betona sūknis, pamatu bloki. Pieprasiet tāmi.",
    url: "https://jcbetons.lv/cenas",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sākums", item: "https://jcbetons.lv" },
    { "@type": "ListItem", position: 2, name: "Cenas", item: "https://jcbetons.lv/cenas" },
  ],
};

const concreteRows = [
  { cls: "C16/20", use: "Lentveida pamati, neceltspējīgas plātnes", note: "Bieži izmanto zem zemes līmeņa" },
  { cls: "C20/25", use: "Privātmāju pamati, pārsegumi, kāpnes", note: "Visbiežāk pieprasītā klase" },
  { cls: "C25/30", use: "Nesošas plātnes, rūpnieciskas grīdas", note: "Augstāka nestspēja" },
  { cls: "C30/37", use: "Stāvvietas, tilti, intensīvi laukumi", note: "Pastiprināta izturība" },
  { cls: "C35/45", use: "Rūpnieciskas konstrukcijas, augsta slodze", note: "Premium klase" },
];

const services = [
  {
    title: "Transportbetons",
    price: "Sākot no ~€80/m³",
    note: "Atkarīgs no betona klases, apjoma un piegādes attāluma.",
    href: "/#kontakti",
    items: [
      "Cena ietver ražošanu un piegādi",
      "Minimālais pasūtījums — no 5 m³",
      "Liela apjoma atlaides pieejamas",
      "Cena izsludināta bez PVN",
    ],
  },
  {
    title: "Fibrobetons",
    price: "No ~€95/m³",
    note: "Tērauda fibra dārgāka par PP fibru. Cena atkarīga no fibras veida un devas.",
    href: "/fibrobetons",
    items: [
      "Tērauda fibras pieaugums ~€10–20/m³",
      "PP fibras pieaugums ~€5–12/m³",
      "Ideāls rūpnieciskām grīdām",
      "Samazina armēšanas izmaksas",
    ],
  },
  {
    title: "Betona sūknis",
    price: "Izsaukums no ~€350",
    note: "Ietver izsaukumu + stundu nomas maksu. Minimāli 6 m³ betona.",
    href: "/betona-suknis",
    items: [
      "41 m strēle — sasniedz 10–12 stāvus",
      "Kombinācijā ar betona pasūtījumu",
      "Grūti pieejami objekti",
      "Stundu nomas maksa pēc vienošanās",
    ],
  },
  {
    title: "Cementa java",
    price: "Pēc pieprasījuma",
    note: "Cena atkarīga no javas veida, konsistences un apjoma.",
    href: "/cementa-java",
    items: [
      "Mūra, apmetuma, grīdas java",
      "Ražojam pēc projekta vajadzībām",
      "Minimālais apjoms no 1 m³",
      "Piegāde ar autobetonmaisītāju",
    ],
  },
];

export default function Cenas() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0F1115]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Cenas</span>
            </nav>
            <div className="text-xs tracking-widest text-[#EE7E1A] font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              Indikatīvas cenas
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Transportbetona Cenas.
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Cenas ir indikatīvas un atkarīgas no betona klases, pasūtītā apjoma un piegādes attāluma. Precīzu tāmi sagatavosim 1 darba dienas laikā.
            </p>
          </div>
        </section>

        {/* Service price cards */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-[#0F1115] mb-8" style={{ fontFamily: "var(--font-archivo)" }}>
              Pakalpojumu Cenas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-xl border border-black/10 p-6 flex flex-col">
                  <div className="text-xs tracking-widest text-[#0F1115]/40 uppercase mb-2" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    {s.title}
                  </div>
                  <div className="text-2xl font-black text-[#EE7E1A] mb-1" style={{ fontFamily: "var(--font-archivo)" }}>
                    {s.price}
                  </div>
                  <p className="text-[#0F1115]/50 text-xs mb-4 leading-relaxed">{s.note}</p>
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#0F1115]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A] flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="text-sm font-semibold text-[#EE7E1A] hover:underline">
                    Uzzināt vairāk →
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-[#0F1115]/40 text-xs mt-6">
              * Visas cenas bez PVN 21%. Piegāde iekļauta cenā Rīgā. Pierīgai — iespējama papildu izmaksa.
            </p>
          </div>
        </section>

        {/* What affects price */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-[#0F1115] mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
                No kā atkarīga betona cena?
              </h2>
              {[
                { factor: "Betona klase", desc: "C16/20 ir lētāks par C35/45. Katra klase augstāk — augstākas izmaksas cementam un papildinājumiem." },
                { factor: "Pasūtījuma apjoms", desc: "Lielāki apjomi — zemāka cena par m³. Viena maisītāja (5–9 m³) un 10+ m³ cena atšķiras." },
                { factor: "Piegādes attālums", desc: "Rīgā cena zemāka. Pierīgai tālākām vietām var pievienoties piegādes maksa." },
                { factor: "Papildinājumi", desc: "Fibras (tērauda vai PP), plastifikatorus, gaisa iesvilšanas piedevas — katrs iespaido beigu cenu." },
                { factor: "Sezonalitāte", desc: "Ziemas betonu (ar siltuma piedevām) ir nedaudz dārgāk ražot." },
              ].map(({ factor, desc }) => (
                <div key={factor} className="mb-5 pb-5 border-b border-black/8 last:border-0 last:mb-0 last:pb-0">
                  <div className="font-bold text-[#0F1115] mb-1">{factor}</div>
                  <p className="text-[#0F1115]/60 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Concrete class table */}
            <div>
              <h2 className="text-3xl font-black text-[#0F1115] mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
                Betona Klases un Pielietojums
              </h2>
              <div className="overflow-x-auto rounded-xl border border-black/10">
                <table className="w-full text-sm">
                  <thead className="bg-[#0F1115] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Klase</th>
                      <th className="px-4 py-3 text-left font-semibold">Pielietojums</th>
                    </tr>
                  </thead>
                  <tbody>
                    {concreteRows.map(({ cls, use, note }, i) => (
                      <tr key={cls} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F4F0]"}>
                        <td className="px-4 py-3 font-bold text-[#EE7E1A] align-top whitespace-nowrap" style={{ fontFamily: "var(--font-jetbrains)" }}>{cls}</td>
                        <td className="px-4 py-3 text-[#0F1115]/70">
                          <div>{use}</div>
                          <div className="text-xs text-[#0F1115]/40 mt-0.5">{note}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-[#EE7E1A]/10 border border-[#EE7E1A]/30 rounded-xl p-5">
                <p className="text-sm text-[#0F1115]/70 leading-relaxed">
                  <strong className="text-[#0F1115]">Vajag palīdzību ar klasi?</strong> Izmantojiet mūsu{" "}
                  <Link href="/betona-kalkulators" className="text-[#EE7E1A] font-semibold hover:underline">betona kalkulatoru</Link>
                  {" "}vai sazinieties — palīdzēsim izvēlēties pareizo klasi un aprēķināt daudzumu.
                </p>
              </div>
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
