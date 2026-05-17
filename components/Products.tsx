import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const products = [
  {
    tag: "01 / Betons",
    img: "/foundation-pour.jpg",
    alt: "Pamatu betonēšana",
    title: "Transportbetons un fibrobetons",
    desc: "Klases C8/10 līdz C35/45. Fibrobetons ar tērauda vai polipropilēna fibrām. Java un cementa risinājumi. Pielāgojam receptūru pēc pasūtījuma.",
    specs: [
      ["C8/10 – C35/45", "Transportbetons"],
      ["Fibrobetons", "Tērauda / PP"],
      ["Cementa java", "Mūrjava, sausā"],
      ["Speciālas receptes", "Pēc projekta"],
    ],
    cta: { href: "/cementa-java", label: "Skatīt cementa javu" },
  },
  {
    tag: "02 / Piegāde",
    img: "/house-pump.jpg",
    alt: "Betona sūknis ar 41 m strēli",
    title: "Piegāde un transporta noma",
    desc: "15 specializētu tehnikas vienību autoflote — no betona maisītājiem līdz sūkņiem un kravas auto ar manipulatoru. Strādājam ar SIA \"TRANSNOMA\".",
    specs: [
      ["Betona maisītāji", "5 – 9 m³"],
      ["Betona sūknis", "41 m strēle"],
      ["Pašizgāzēji", "2 – 20 m³"],
      ["Manipulators + greifers", "25 t"],
    ],
    cta: { href: "/#piegade", label: "Skatīt visu floti" },
  },
  {
    tag: "03 / Izstrādājumi",
    img: "/well-rings.jpg",
    alt: "Akas grodi un pamatu bloki",
    title: "Pamatu bloki un grodi",
    desc: "Standarta un nestandarta izmēru pamatu bloki, akas grodi ar dibeniem un visu veidu vākiem. Piegāde ar manipulatoru — uzstādīsim vietā.",
    specs: [
      ["Pamatu bloki", "90/120/240 × 60 × 30/40 cm"],
      ["Akas grodi", "Ø 45 / 90"],
      ["Augstums", "100 / 150 / 200 cm"],
      ["Vāki & dibeni", "Visu veidu"],
    ],
    cta: { href: "/#kontakti", label: "Pasūtīt" },
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-[#F5F4F0]" id="produkti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <AnimateIn direction="down">
            <div className="flex items-center gap-3 text-xs tracking-widest text-[#EE7E1A] font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <span className="font-bold">01</span>
              <span className="text-[#0F1115]/40">Produkti un pakalpojumi</span>
            </div>
          </AnimateIn>
          <AnimateIn direction="down" delay={100}>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Transportbetons, fibrobetons<br />un viss betonēšanas darbiem.
            </h2>
          </AnimateIn>
          <AnimateIn direction="down" delay={200}>
            <p className="text-[#0F1115]/60 text-lg max-w-2xl">
              No viena maisītāja krāvuma līdz daudzu kubikmetru piegādēm. Mēs maisām, vedam un sūknējam — ar savu tehniku un savu komandu.
            </p>
          </AnimateIn>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <AnimateIn key={p.tag} delay={i * 120}>
              <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 flex flex-col h-full">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-[#0F1115]/80 text-white/70 text-xs px-2 py-1 rounded font-mono" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-[#0F1115] text-lg mb-2" style={{ fontFamily: "var(--font-archivo)" }}>{p.title}</h3>
                  <p className="text-[#0F1115]/60 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {p.specs.map(([k, v]) => (
                      <li key={k} className="flex justify-between items-center text-sm border-b border-black/5 pb-2">
                        <span className="text-[#0F1115]/50">{k}</span>
                        <span className="font-semibold text-[#0F1115]">{v}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={p.cta.href} className="inline-flex items-center gap-1.5 text-[#EE7E1A] font-semibold text-sm hover:gap-3 transition-all">
                    {p.cta.label}
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  );
}
