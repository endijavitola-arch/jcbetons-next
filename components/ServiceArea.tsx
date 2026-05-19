import Link from "next/link";

const zones = [
  {
    label: "Rīga",
    color: "bg-[#EE7E1A]",
    textColor: "text-white",
    places: ["Rīga centrs", "Pārdaugava", "Ziemeļu rajons", "Dienvidu rajons", "Imanta", "Purvciems", "Jugla", "Bolderāja"],
  },
  {
    label: "Pierīga — līdz 30 km",
    color: "bg-[#0F1115]",
    textColor: "text-white",
    places: ["Mārupes novads", "Ķekava", "Salaspils", "Olaine", "Carnikava", "Ādaži", "Stopiņi", "Babīte"],
  },
  {
    label: "Tālāk — pēc vienošanās",
    color: "bg-[#F5F4F0]",
    textColor: "text-[#0F1115]",
    places: ["Jūrmala", "Ogre", "Sigulda", "Saulkrasti", "Jelgava", "Lielāki projekti — individuāli"],
  },
];

export default function ServiceArea() {
  return (
    <section className="py-20 bg-white" id="piegade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
          <span className="font-bold text-[#EE7E1A]">03</span>
          <span className="text-[#0F1115]/40">Piegādes zona</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
          Piegādājam visā Rīgā<br />un Pierīgā.
        </h2>
        <p className="text-[#0F1115]/60 text-lg max-w-xl mb-12">
          Ražotne — Krustpils iela 54F, Rīga. Piegādājam ar pašu autofloti bez starpniekiem.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <div key={zone.label} className={`rounded-xl overflow-hidden border border-black/10`}>
              <div className={`${zone.color} ${zone.textColor} px-5 py-3`}>
                <span className="font-bold text-sm">{zone.label}</span>
              </div>
              <div className="bg-white p-5">
                <ul className="space-y-2">
                  {zone.places.map((place) => (
                    <li key={place} className="flex items-center gap-2 text-sm text-[#0F1115]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A] flex-shrink-0" />
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { stat: "5 m³", label: "Minimālais pasūtījums", note: "1 autobetonmaisītāja krāvums" },
            { stat: "21 g.", label: "Pieredze piegādēs", note: "Kopš 2005. gada Rīgā" },
            { stat: "15", label: "Tehnikas vienības", note: "Pašu autoflote bez atkarības" },
          ].map(({ stat, label, note }) => (
            <div key={label} className="bg-[#F5F4F0] rounded-xl p-5 flex items-center gap-4">
              <div className="text-3xl font-black text-[#EE7E1A]" style={{ fontFamily: "var(--font-archivo)" }}>{stat}</div>
              <div>
                <div className="font-semibold text-[#0F1115] text-sm">{label}</div>
                <div className="text-[#0F1115]/40 text-xs">{note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl overflow-hidden border border-black/10">
          <iframe
            title="JC Betons piegādes zona Rīgā un Pierīgā"
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.8%2C56.8%2C24.6%2C57.1&layer=mapnik&marker=56.939%2C24.194"
            loading="lazy"
            referrerPolicy="no-referrer"
            allowFullScreen
            className="w-full h-64"
          />
          <a
            href="https://www.openstreetmap.org/?mlat=56.939&mlon=24.194#map=11/56.939/24.194"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-[#0F1115]/50 hover:text-[#EE7E1A] py-2 bg-white transition-colors"
          >
            Atvērt karti →
          </a>
        </div>

        <div className="mt-6 text-center">
          <Link href="/#kontakti" className="inline-flex items-center gap-2 bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-8 py-3.5 rounded transition-colors">
            Pieprasīt piegādi
          </Link>
        </div>
      </div>
    </section>
  );
}
