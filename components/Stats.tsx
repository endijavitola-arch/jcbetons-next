"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number | string;
  label: string;
  note: string;
  isGlyph?: boolean;
}

const stats: StatItem[] = [
  { value: 21, label: "Gadi tirgū", note: "Kopš 2005. gada" },
  { value: 15, label: "Tehnikas vienības", note: "Sava autoflote" },
  { value: "✓", label: "Sertificēta kvalitāte", note: "Kiwa INSPECTA Nr. 3528", isGlyph: true },
  { value: "1:1", label: "Individuāla pieeja", note: "Liels vai mazs pasūtījums", isGlyph: true },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.round(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="bg-[#0F1115] border-t-4 border-[#EE7E1A]" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div
              className="text-5xl font-black text-[#EE7E1A] mb-1"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              {s.isGlyph ? s.value : <Counter target={s.value as number} />}
            </div>
            <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
            <div className="text-white/40 text-xs" style={{ fontFamily: "var(--font-jetbrains)" }}>{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
