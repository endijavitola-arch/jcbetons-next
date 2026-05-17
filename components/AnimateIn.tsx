"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** "down" = slides in from above (headings), "up" = slides in from below (cards), "left" = slides in from left */
  direction?: "up" | "down" | "left";
  threshold?: number;
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setup = () => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
        { threshold }
      );
      observer.observe(el);
      return () => observer.disconnect();
    };

    // Defer observer setup until browser is idle so it doesn't block LCP/FID
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(setup);
      return () => cancelIdleCallback(id);
    }
    return setup();
  }, [threshold]);

  const hidden =
    direction === "down" ? "-translate-y-7" :
    direction === "left" ? "-translate-x-6" :
    "translate-y-8";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out duration-700 ${
        visible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${hidden}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
