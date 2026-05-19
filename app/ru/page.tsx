import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Начало", item: "https://jcbetons.lv/ru" },
  ],
};

const services = [
  {
    title: "Товарный бетон",
    desc: "Бетон классов C8/10–C35/45. Доставка миксером по всей Риге и Пририге. Минимальный заказ — 5 м³.",
    href: "/",
  },
  {
    title: "Фибробетон",
    desc: "Бетон со стальной или полипропиленовой фиброй для промышленных полов, парковок и нагруженных конструкций.",
    href: "/fibrobetons",
  },
  {
    title: "Цементный раствор",
    desc: "Кладочный, штукатурный и стяжечный растворы под заказ.",
    href: "/cementa-java",
  },
  {
    title: "Фундаментные блоки",
    desc: "Железобетонные блоки 90/120/240 см с доставкой манипулятором. Монтаж на месте.",
    href: "/pamatu-bloki",
  },
  {
    title: "Кольца для колодцев",
    desc: "Кольца Ø45 и Ø90 см высотой 100/150/200 см. Комплектация дном и крышкой.",
    href: "/grodi",
  },
  {
    title: "Бетонный насос",
    desc: "Насос со стрелой 41 м для высотных и труднодоступных объектов.",
    href: "/betona-suknis",
  },
];

const faqs = [
  {
    q: "Как заказать товарный бетон в Риге?",
    a: "Позвоните по номеру +371 24 209 209 или заполните форму на сайте. Укажите объём, класс бетона, адрес и желаемую дату. Ответим в тот же рабочий день.",
  },
  {
    q: "Какой минимальный заказ?",
    a: "Один заезд миксера — примерно 5 м³. Для небольших объёмов уточняйте индивидуально.",
  },
  {
    q: "Работаете ли в выходные?",
    a: "Работаем с понедельника по субботу с 8:00 до 17:00. В воскресенье — выходной.",
  },
  {
    q: "Какой класс бетона выбрать для фундаментной плиты?",
    a: "Для частного дома рекомендуем C25/30. Для промышленных полов — C25/30 или C30/37 с фиброй.",
  },
];

export default function RuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0F1115] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#EE7E1A] mb-6 border border-[#EE7E1A]/30 rounded-full px-4 py-1.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A] animate-pulse" />
              Производство бетона — Рига, Латвия
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
              Товарный<br />
              <span className="text-[#EE7E1A]">бетон</span><br />
              в Риге.
            </h1>
            <p className="text-white/60 text-xl max-w-xl mb-10">
              Сертифицированный бетонный завод с 2005 года. Собственный парк машин, доставка без посредников по всей Риге и Пририге.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:+37124209209" className="bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-8 py-4 rounded text-lg transition-colors text-center">
                +371 24 209 209
              </Link>
              <Link href="/#kontakti" className="border border-white/20 text-white font-semibold px-8 py-4 rounded text-lg hover:bg-white/10 transition-colors text-center">
                Запросить цену
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "21 г.", l: "Опыт" },
                { v: "15", l: "Машин" },
                { v: "C8–C35", l: "Классы бетона" },
              ].map(({ v, l }) => (
                <div key={l}>
                  <div className="text-3xl font-black text-[#EE7E1A]" style={{ fontFamily: "var(--font-archivo)" }}>{v}</div>
                  <div className="text-white/40 text-sm mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <span className="font-bold text-[#EE7E1A]">01</span>
              <span className="text-[#0F1115]/40">Продукция и услуги</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-12" style={{ fontFamily: "var(--font-archivo)" }}>
              Что мы производим.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ title, desc, href }) => (
                <Link key={title} href={href} className="bg-white rounded-xl border border-black/10 p-6 hover:border-[#EE7E1A]/50 hover:shadow-sm transition-all group">
                  <h3 className="text-lg font-black text-[#0F1115] mb-2 group-hover:text-[#EE7E1A] transition-colors" style={{ fontFamily: "var(--font-archivo)" }}>
                    {title}
                  </h3>
                  <p className="text-[#0F1115]/60 text-sm leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery zone */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <span className="font-bold text-[#EE7E1A]">02</span>
              <span className="text-[#0F1115]/40">Зона доставки</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Доставляем по всей<br />Риге и Пририге.
            </h2>
            <p className="text-[#0F1115]/60 text-lg max-w-xl mb-10">
              Завод — ул. Крустпилс 54F, Рига. Доставка собственным автопарком без посредников.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { zone: "Рига", places: ["Центр", "Задвинье", "Иманта", "Пурвциемс", "Югла", "Болдерая"], color: "bg-[#EE7E1A] text-white" },
                { zone: "Пририга — до 30 км", places: ["Марупский край", "Кекава", "Саласпилс", "Олайне", "Адажи", "Стопини"], color: "bg-[#0F1115] text-white" },
                { zone: "Дальше — по договорённости", places: ["Юрмала", "Огре", "Сигулда", "Елгава", "Крупные объекты — индивидуально"], color: "bg-[#F5F4F0] text-[#0F1115]" },
              ].map(({ zone, places, color }) => (
                <div key={zone} className="rounded-xl overflow-hidden border border-black/10">
                  <div className={`${color} px-5 py-3 font-bold text-sm`}>{zone}</div>
                  <div className="bg-white p-5">
                    <ul className="space-y-2">
                      {places.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-[#0F1115]/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EE7E1A] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#F5F4F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl font-black text-[#0F1115] mb-10" style={{ fontFamily: "var(--font-archivo)" }}>
              Частые вопросы.
            </h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl border border-black/10 p-6">
                  <h3 className="font-bold text-[#0F1115] mb-2">{q}</h3>
                  <p className="text-[#0F1115]/60 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0F1115]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Готовы к заказу?
            </h2>
            <p className="text-white/60 text-lg mb-8">Звоните или пишите — ответим быстро.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+37124209209" className="bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-8 py-4 rounded text-lg transition-colors">
                +371 24 209 209
              </Link>
              <Link href="mailto:info@jcbetons.lv" className="border border-white/20 text-white font-semibold px-8 py-4 rounded text-lg hover:bg-white/10 transition-colors">
                info@jcbetons.lv
              </Link>
              <Link href="https://wa.me/37124209209" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded text-lg transition-colors">
                WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
