import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Betona Blogs | Padomi un Ceļveži | JC Betons",
  description:
    "Padomi par betona klašu izvēli, daudzuma aprēķinu, fibrobetonu un betonēšanu. JC Betons — transportbetons Rīgā.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Betona Blogs | Padomi un Ceļveži | JC Betons",
    description: "Padomi par betonu — betona klases, daudzuma aprēķins, fibrobetons un betonēšanas ieteikumi.",
    url: "https://jcbetons.lv/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const posts = [
  {
    slug: "kadu-betona-klasi-izveleties",
    title: "Kādu betona klasi izvēlēties pamatam, pārsegumam un grīdai?",
    excerpt: "C20/25 vai C25/30? Kura klase der privātmājas pamatam un kura rūpnieciskai grīdai? Pilns ceļvedis ar praktisku piemēru tabulu.",
    date: "2026-05-17",
    readTime: "4 min",
    tag: "Betona klases",
  },
  {
    slug: "ka-aprekinat-betona-daudzumu",
    title: "Kā aprēķināt betona daudzumu — formula un piemēri",
    excerpt: "Vienkārša formula ar piemēriem plātnei, lentveida pamatam un kolonnai. Kāpēc jāpieskaita 10% rezerve un kā to izdarīt.",
    date: "2026-05-17",
    readTime: "3 min",
    tag: "Kalkulators",
  },
  {
    slug: "kas-ir-fibrobetons",
    title: "Kas ir fibrobetons un vai tas ir vajadzīgs jūsu objektam?",
    excerpt: "Tērauda vai PP šķiedras? Kad fibrobetons ir vērts savu cenu un kad parasts betons pietiek. Praktisks salīdzinājums.",
    date: "2026-05-17",
    readTime: "5 min",
    tag: "Fibrobetons",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-[#0F1115]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Sākums</Link>
              <span>/</span>
              <span className="text-white/70">Blogs</span>
            </nav>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
              Betona Blogs.
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Padomi par betona izvēli, betonēšanu un materiālu aprēķinu — no cilvēkiem, kas to dara 21 gadu.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white rounded-xl border border-black/10 p-6 sm:p-8 hover:border-[#EE7E1A]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-[#EE7E1A] bg-[#EE7E1A]/10 px-2.5 py-1 rounded-full">{post.tag}</span>
                      <span className="text-xs text-[#0F1115]/40" style={{ fontFamily: "var(--font-jetbrains)" }}>{post.readTime} lasīšana</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#0F1115] mb-3 group-hover:text-[#EE7E1A] transition-colors" style={{ fontFamily: "var(--font-archivo)" }}>
                      {post.title}
                    </h2>
                    <p className="text-[#0F1115]/60 leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-[#EE7E1A] font-semibold text-sm">Lasīt vairāk →</span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
