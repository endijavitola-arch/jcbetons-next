import Image from "next/image";

const works = [
  { src: "/vef-night.jpg", alt: "Pamatu betonēšana VEF teritorijā", tag: "Komerciālais objekts", title: "VEF kvartāls · pamati", cls: "col-span-2 row-span-2" },
  { src: "/house-pump.jpg", alt: "Privātmājas betonēšana ar sūkni", tag: "Privātmāja", title: "Pārsegums ar 41 m sūkni", cls: "" },
  { src: "/foundation-pour.jpg", alt: "Pamatu sienas ar veidņiem", tag: "Pamati", title: "Veidņu betonēšana", cls: "" },
  { src: "/foundation-blocks.jpg", alt: "Pamatu bloku uzstādīšana", tag: "Bloki", title: "FBS pamatu bloki", cls: "" },
  { src: "/darbi-1.jpg", alt: "Daudzstāvu objekta būvniecība", tag: "Daudzstāvu", title: "Pārsegums ar sūkni", cls: "" },
  { src: "/darbi-2.jpg", alt: "Privātmājas pamati lauku apvidū", tag: "Lauku objekts", title: "Pamati ar piegādi", cls: "" },
];

export default function Works() {
  return (
    <section className="py-20 bg-[#F5F4F0]" id="darbi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span className="font-bold text-[#EE7E1A]">04</span>
            <span className="text-[#0F1115]/40">Mūsu darbi</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight" style={{ fontFamily: "var(--font-archivo)" }}>
            No privātmājas pamata<br />līdz daudzstāvu objektam Rīgā.
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {works.map((w, i) => (
            <figure
              key={w.src}
              className={`relative overflow-hidden rounded-xl group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <Image
                src={w.src}
                alt={w.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-4">
                <span className="text-[#EE7E1A] text-xs font-mono block mb-0.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
                  {w.tag}
                </span>
                <span className="text-white font-semibold text-sm">{w.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
