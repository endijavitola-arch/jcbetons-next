import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const siteUrl = "https://jcbetons.lv";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Transportbetons Rīgā | Betona Piegāde | JC Betons",
    template: "%s | JC Betons",
  },
  description:
    "Transportbetons un betona piegāde Rīgā un Pierīgā. Sertificēta kvalitāte, 21 gadu pieredze. Liebherr iekārtas. Pasūtiet: +371 24 209 209",
  keywords: [
    "transportbetons Rīgā",
    "betona piegāde",
    "fibrobetons",
    "pamatu bloki",
    "grodi",
    "betona sūknis",
    "betona ražotne",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "lv_LV",
    url: siteUrl,
    siteName: "JC Betons",
    title: "Transportbetons Rīgā | Betona Piegāde | JC Betons",
    description:
      "Sertificēta betona ražotne Rīgā kopš 2005. gada. Transportbetons, fibrobetons, java, pamatu bloki un grodi ar piegādi.",
    images: [{ url: "/hero-truck.png", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${siteUrl}/#business`,
  name: "JC Betons",
  legalName: "SIA JC BETONS",
  description:
    "Sertificēta betona ražotne Rīgā. Transportbetons, fibrobetons, cementa java, pamatu bloki un grodi ar piegādi.",
  url: siteUrl,
  telephone: "+37124209209",
  email: "info@jcbetons.lv",
  image: `${siteUrl}/hero-truck.png`,
  logo: `${siteUrl}/logo-symbol.png`,
  priceRange: "€€",
  foundingDate: "2005",
  vatID: "LV40003691098",
  taxID: "40003691098",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Krustpils iela 54F",
    addressLocality: "Rīga",
    postalCode: "LV-1057",
    addressCountry: "LV",
  },
  geo: { "@type": "GeoCoordinates", latitude: 56.939, longitude: 24.194 },
  areaServed: [
    { "@type": "City", name: "Rīga" },
    { "@type": "AdministrativeArea", name: "Pierīga" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="lv"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="icon" href="/logo-symbol.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <CookieBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
