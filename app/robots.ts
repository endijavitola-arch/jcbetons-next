import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/privatuma-politika", "/sikdatnes"] },
    sitemap: "https://jcbetons.lv/sitemap.xml",
  };
}
