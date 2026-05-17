import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ParallaxHero from "@/components/ParallaxHero";

export default function Hero() {
  return (
    <>
      {/* Preload the LCP hero image — hoisted to <head> by Next.js App Router */}
      <link
        rel="preload"
        as="image"
        href="/hero-truck.jpg"
        fetchPriority="high"
      />
    <section className="relative min-h-screen flex items-center overflow-hidden" id="top">
      <ParallaxHero />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <AnimateIn direction="down" delay={0}>
          <div className="flex items-center gap-3 text-white/50 text-xs tracking-widest font-mono mb-6" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span className="w-2 h-2 rounded-full bg-[#EE7E1A] animate-pulse" />
            <span>SIA · Reģ. Nr. 40003691098</span>
            <span className="text-white/30">/</span>
            <span>Krustpils iela 54F, Rīga</span>
          </div>
        </AnimateIn>

        <AnimateIn direction="down" delay={100}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6 max-w-2xl" style={{ fontFamily: "var(--font-archivo)" }}>
            <span className="block">Transportbetons Rīgā.</span>
            <span className="block text-[#EE7E1A] mt-2">No rūpnīcas līdz<br />jūsu būvlaukumam.</span>
          </h1>
        </AnimateIn>

        <AnimateIn direction="down" delay={200}>
          <p className="text-white/75 text-lg max-w-xl mb-8 leading-relaxed">
            Transportbetons, fibrobetons, cementa java, pamatu bloki un akas grodi ar piegādi Rīgā un Pierīgā. Sertificēta kvalitāte uz LIEBHERR LCM 1.0 betona rūpnīcas — 21 gads tirgū.
          </p>
        </AnimateIn>

        <AnimateIn direction="down" delay={300}>
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/#kontakti" className="inline-flex items-center gap-2 bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-6 py-3.5 rounded text-base transition-colors">
              Pasūtīt betonu
              <ArrowIcon />
            </Link>
            <Link href="tel:+37124209209" className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3.5 rounded text-base transition-colors">
              <PhoneIcon />
              +371 24 209 209
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn direction="down" delay={400}>
          <div className="flex flex-wrap gap-2">
            {["C8/10 → C35/45", "Tērauda & PP fibras", "Sūknis ar 41 m strēli", "Manipulators 25 t"].map((t) => (
              <span key={t} className="text-xs text-white/60 border border-white/20 px-3 py-1 rounded-full font-mono" style={{ fontFamily: "var(--font-jetbrains)" }}>
                {t}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Cert badge */}
      <AnimateIn direction="left" delay={500} className="absolute top-24 right-6 hidden lg:block">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
          <svg viewBox="0 0 80 80" width="44" height="44" className="text-[#EE7E1A]">
            <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M24 41 l11 11 22-26" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <div className="text-white font-semibold text-sm leading-tight">Kiwa INSPECTA</div>
            <div className="text-white/50 text-xs" style={{ fontFamily: "var(--font-jetbrains)" }}>Nr. 3528</div>
          </div>
        </div>
      </AnimateIn>

      <Link href="/#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-xs tracking-widest" aria-label="Ritināt zemāk">
        <span>Ritināt</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="7" cy="7" r="2" fill="currentColor" className="animate-bounce"/>
        </svg>
      </Link>
    </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
