import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export default function CTAStrip() {
  return (
    <section className="bg-[#EE7E1A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <AnimateIn direction="down">
            <div className="text-white/70 text-sm font-semibold tracking-widest mb-2 uppercase">
              Vai vajag betonu šonedēļ?
            </div>
          </AnimateIn>
          <AnimateIn direction="down" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: "var(--font-archivo)" }}>
              Pasakiet kubikmetrus un adresi —<br />mēs jums atzvanam ar cenu un grafiku.
            </h2>
          </AnimateIn>
        </div>
        <AnimateIn delay={200}>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="tel:+37124209209" className="inline-flex items-center gap-2 bg-white text-[#EE7E1A] font-bold px-6 py-3.5 rounded hover:bg-white/90 transition-colors">
              <PhoneIcon />
              +371 24 209 209
            </Link>
            <Link href="/#kontakti" className="inline-flex items-center justify-center bg-[#0F1115] text-white font-bold px-6 py-3.5 rounded hover:bg-black transition-colors">
              Rakstīt mums
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
