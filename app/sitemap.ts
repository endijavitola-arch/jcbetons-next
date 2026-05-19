import type { MetadataRoute } from "next";

const BASE = "https://jcbetons.lv";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/fibrobetons`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pamatu-bloki`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/grodi`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/betona-suknis`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/cementa-java`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/betona-kalkulators`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/betona-klases`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/cenas`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: new Date("2026-05-17"), changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/blog/kadu-betona-klasi-izveleties`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/blog/ka-aprekinat-betona-daudzumu`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/blog/kas-ir-fibrobetons`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/transportbetons-adazi`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/transportbetons-jurmala`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/transportbetons-kekava`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/transportbetons-marupe`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/transportbetons-salaspils`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/ru`, lastModified: new Date("2026-05-17"), changeFrequency: "monthly", priority: 0.7 },
  ];
}
