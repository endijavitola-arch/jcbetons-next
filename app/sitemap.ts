import type { MetadataRoute } from "next";

const BASE = "https://jcbetons.lv";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/fibrobetons`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pamatu-bloki`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/grodi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/betona-suknis`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
