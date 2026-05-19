import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Товарный бетон в Риге | Доставка бетона | JC Betons",
  description:
    "Производство и доставка товарного бетона в Риге и Пририге. Сертифицированное качество, 21 год опыта. Заказывайте: +371 24 209 209",
  alternates: { canonical: "/ru" },
  openGraph: {
    title: "Товарный бетон в Риге | JC Betons",
    description: "Сертифицированный завод ЖБИ в Риге с 2005 года. Товарный бетон, фибробетон, цементный раствор, фундаментные блоки с доставкой.",
    url: "https://jcbetons.lv/ru",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
