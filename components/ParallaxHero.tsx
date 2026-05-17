"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip parallax on mobile — no benefit on touch, saves CPU on low-power devices
    if (window.matchMedia("(max-width: 768px)").matches) return;

    let raf: number;
    let lastScrollY = 0;
    let ticking = false;

    const onScroll = () => {
      // Read scroll position in the scroll handler (not inside rAF) to avoid forced reflow
      lastScrollY = window.scrollY;
      if (!ticking) {
        raf = requestAnimationFrame(() => {
          // Write-only inside rAF — no reads here, no forced reflow
          if (imgRef.current) {
            imgRef.current.style.transform = `translateY(${lastScrollY * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Extra height top/bottom gives room for the parallax translateY without layout shifts */}
      <div
        ref={imgRef}
        className="absolute will-change-transform"
        style={{ top: "-15%", bottom: "-15%", left: 0, right: 0 }}
      >
        <Image
          src="/hero-truck.jpg"
          alt="JC Betons betona maisītājs un sūknis būvlaukumā"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}
