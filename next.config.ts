import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking — page cannot be embedded in iframes on other origins
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send origin in referrer, not full URL
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable unused browser features
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // Enable DNS prefetching for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Force HTTPS for 1 year once domain is live
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Content Security Policy
  // - 'unsafe-inline' for scripts is required for Next.js static JSON-LD and hydration scripts
  // - frame-src allows the OpenStreetMap embed
  // - connect-src allows Vercel Analytics, Speed Insights, and Formspree API calls
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://vitals.vercel-insights.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "frame-src https://www.openstreetmap.org",
      "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://formspree.io",
      "base-uri 'self'",
      "form-action 'self' https://formspree.io",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  // Transpile packages that ship legacy ES5 to reduce bundle size
  transpilePackages: ["@formspree/react", "@formspree/core"],
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
