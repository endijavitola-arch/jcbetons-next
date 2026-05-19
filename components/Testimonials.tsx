import Link from "next/link";

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/57vKLxFWWnZ2Uto48";

const reviews = [
  {
    name: "Простой Парень",
    badge: null,
    date: "Pirms 2 gadiem",
    text: "Šodien betonejām pamatu pēdu ar JC Betons kompāniju — betonu pasūtījām spontāni. Ātra piegāde, profesionāli operatori, kas padeva betonu pāri žogam, jo nevarēja iebraukt objektā, un nežēlojās, ka ir grūti vai neiespējami. Jaunas un koptas mašīnas. Paldies!",
  },
  {
    name: "Eugene Sergeyev",
    badge: null,
    date: "Pirms 4 mēnešiem",
    text: "Uzticams un labs uzņēmums. Kvalitāte un ātra piegāde.",
  },
  {
    name: "Normunds Pulkstenis",
    badge: "Local Guide",
    date: "Pirms 4 gadiem",
    text: "Kvalitātatīvs betons un izstrādājumi.",
  },
  {
    name: "Jurij Tatra",
    badge: "Local Guide",
    date: "Pirms 3 gadiem",
    text: "Visa veida betons, piegāde, betona sūknis, pumi.",
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} no 5 zvaigznēm`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24">
            {partial ? (
              <>
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="#EE7E1A" />
                    <stop offset="50%" stopColor="#4B5563" />
                  </linearGradient>
                </defs>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#half-${i})`} />
              </>
            ) : (
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={filled ? "#EE7E1A" : "#4B5563"} />
            )}
          </svg>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <span className="font-bold text-[#EE7E1A]">05</span>
              <span className="text-white/40">Atsauksmes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight" style={{ fontFamily: "var(--font-archivo)" }}>
              Ko saka mūsu klienti.
            </h2>
          </div>
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors flex-shrink-0"
          >
            <GoogleIcon />
            Skatīt visas atsauksmes Google
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:bg-white/8 transition-colors"
            >
              <Stars />
              <p className="text-white/75 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-white">{r.name}</span>
                  {r.badge && (
                    <span className="text-[10px] text-[#EE7E1A] font-mono tracking-wide">{r.badge}</span>
                  )}
                </div>
                <span className="text-xs text-white/35">{r.date} · Google</span>
              </div>
            </article>
          ))}
        </div>

        {/* Overall rating strip */}
        <div className="mt-8 flex items-center gap-3 justify-center">
          <Stars rating={4.2} />
          <span className="text-white/60 text-sm">4.2 · 42 atsauksmes Google</span>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
