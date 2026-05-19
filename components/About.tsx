import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const whyList = [
  "Moderna LIEBHERR LCM 1.0 rūpnīca",
  "Sertificēta kvalitāte ar pārbaudēm",
  "Elastīga cenu politika",
  "Maziem un lieliem pasūtījumiem",
  "Pieredzējuša komanda",
  "Uzticama piegāde, sava tehnika",
];

export default function About() {
  return (
    <section className="py-20 bg-white" id="par-mums">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <AnimateIn direction="left">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/vef-night.jpg"
                alt="JC Betons darbā uz VEF būvlaukuma"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-[#EE7E1A] text-white rounded-xl px-6 py-4 text-center shadow-xl">
              <div className="text-4xl font-black leading-none" style={{ fontFamily: "var(--font-archivo)" }}>21</div>
              <div className="text-sm font-medium opacity-90">gadi tirgū</div>
            </div>
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 flex items-center gap-3">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#EE7E1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <div>
                <div className="text-white text-xs font-semibold">Kiwa INSPECTA Latvia</div>
                <div className="text-white/50 text-[10px]" style={{ fontFamily: "var(--font-jetbrains)" }}>Nr. 3528</div>
              </div>
            </div>
          </div>
        </AnimateIn>

        <div>
          <AnimateIn direction="down">
            <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <span className="font-bold text-[#EE7E1A]">03</span>
              <span className="text-[#0F1115]/40">Par mums</span>
            </div>
          </AnimateIn>
          <AnimateIn direction="down" delay={100}>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
              21 gads betona darbā.<br />Bez tukšiem solījumiem.
            </h2>
          </AnimateIn>
          <AnimateIn direction="down" delay={200}>
            <p className="text-[#0F1115]/65 leading-relaxed mb-4">
              JC Betons SIA ir betona ražotne Rīgā, kas darbojas kopš 2005. gada. Strādājam gan ar lielajiem būvuzņēmumiem, gan ar privātajiem klientiem — vienam pasūtam vienu maisītāju pamatu liešanai, otram nodrošinām nepārtrauktu piegādi mēnešu garumā.
            </p>
            <p className="text-[#0F1115]/65 leading-relaxed mb-8">
              Ražojam uz <strong className="text-[#0F1115]">LIEBHERR LCM 1.0</strong> betona rūpnīcas — Vācijas iekārtas, kas tur recepti precīzi katrā partijā. Kvalitāti regulāri pārbauda <strong className="text-[#0F1115]">Kiwa INSPECTA Latvia</strong>, sertifikāts Nr. 3528.
            </p>
          </AnimateIn>
          <ul className="grid sm:grid-cols-2 gap-3">
            {whyList.map((item, i) => (
              <li key={item}>
                <AnimateIn delay={300 + i * 60}>
                  <span className="flex items-center gap-2.5 text-sm text-[#0F1115]/80">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE7E1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    {item}
                  </span>
                </AnimateIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
