import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const fleet = [
  { num: "9 m³", name: "Betona maisītāji", desc: "Standarta autobetonmaisītāji no 5 līdz 9 m³ tilpumam. Pamatpiegāde lielākajai daļai pasūtījumu.", featured: true },
  { num: "41 m", name: "Betona sūknis", desc: "Sūknis ar 41 metru strēli — sasniedz augstas un grūti piekļūstamas vietas." },
  { num: "25 t", name: "Manipulators + greifers", desc: "Kravas auto ar manipulatoru un greifera ķeramo — bloki un grodi vietā." },
  { num: "20 m³", name: "Pašizgāzēji", desc: "No 2 līdz 20 m³ — smiltis, šķembas, grunts, būvgruži." },
  { num: "4CX", name: "JCB ekskavators-iekrāvējs", desc: "Universāla mašīna grunts darbiem un mazākiem rakšanas projektiem." },
  { num: "B", name: "Bobcat", desc: "Kompakta tehnika šaurām vietām un ātrai materiālu pārvietošanai." },
];

export default function Fleet() {
  return (
    <section className="py-20 bg-[#0F1115]" id="piegade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <AnimateIn direction="down">
              <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
                <span className="font-bold text-[#EE7E1A]">02</span>
                <span className="text-white/30">Tehnika un piegāde</span>
              </div>
            </AnimateIn>
            <AnimateIn direction="down" delay={100}>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight" style={{ fontFamily: "var(--font-archivo)" }}>
                Betona sūknis 41 m,<br />15 vienību autoflote.
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn direction="down" delay={200}>
            <p className="text-white/50 text-base max-w-sm leading-relaxed">
              Mēs paši kontrolējam piegādes laiku, jo tehnika ir mūsu pašu rokās — nevis īrēta. Tāpēc bedres dažas stundas pēc zvana var sākt aizpildīt.
            </p>
          </AnimateIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {fleet.map((f, i) => (
            <AnimateIn key={f.num} delay={i * 80}>
              <div className={`rounded-xl p-6 border h-full ${f.featured ? "bg-[#EE7E1A]/10 border-[#EE7E1A]/30" : "bg-white/5 border-white/10"}`}>
                <div className={`text-4xl font-black mb-2 ${f.featured ? "text-[#EE7E1A]" : "text-white"}`} style={{ fontFamily: "var(--font-archivo)" }}>
                  {f.num}
                </div>
                <div className="text-white font-semibold mb-1">{f.name}</div>
                <div className="text-white/40 text-sm leading-relaxed">{f.desc}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8">
            <p className="text-white/50 text-sm max-w-lg">
              <strong className="text-white">Partnerība ar SIA "TRANSNOMA".</strong>{" "}
              Loģistika tiek koordinēta vienuviet — viens zvans, viens grafiks, viens kontaktpunkts.
            </p>
            <Link href="/#kontakti" className="flex-shrink-0 bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-6 py-3 rounded transition-colors">
              Pieprasīt cenu
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
