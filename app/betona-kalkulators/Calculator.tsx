"use client";

import { useState } from "react";
import Link from "next/link";

type Shape = "plate" | "strip" | "column" | "cylinder" | "stairs";

interface Dims {
  length: string;
  width: string;
  height: string;
  diameter: string;
  steps: string;
  count: string;
}

const shapes: { id: Shape; label: string; desc: string; icon: string }[] = [
  { id: "plate", label: "Plātne / grīda", desc: "Pamatu plātne, grīdas stiepe, laukums", icon: "▭" },
  { id: "strip", label: "Lentveida pamats", desc: "Sienu pamati, slokšņveida pamats", icon: "⊏" },
  { id: "column", label: "Taisnstūra kolonna", desc: "Kolonna, sija, siena", icon: "▯" },
  { id: "cylinder", label: "Apaļa kolonna", desc: "Apaļa kolonna, caurule, urbums", icon: "○" },
  { id: "stairs", label: "Kāpnes", desc: "Betona kāpnes, platforma", icon: "⌐" },
];

const concreteClasses = ["C8/10", "C12/15", "C16/20", "C20/25", "C25/30", "C30/37", "C35/45"];

function numVal(s: string): number {
  const v = parseFloat(s.replace(",", "."));
  return isNaN(v) || v < 0 ? 0 : v;
}

function calcVolume(shape: Shape, dims: Dims): number {
  const l = numVal(dims.length);
  const w = numVal(dims.width);
  const h = numVal(dims.height);
  const d = numVal(dims.diameter);
  const s = Math.max(1, Math.round(numVal(dims.steps)));
  const n = Math.max(1, Math.round(numVal(dims.count)));

  switch (shape) {
    case "plate":
      return l * w * h * n;
    case "strip":
      return l * w * h * n;
    case "column":
      return l * w * h * n;
    case "cylinder":
      return Math.PI * Math.pow(d / 2, 2) * h * n;
    case "stairs":
      // Wedge formula: 0.5 × steps × tread × riser × width
      // l = tread depth per step, w = stair width, h = riser height per step
      return 0.5 * s * l * h * w * n;
    default:
      return 0;
  }
}

function NumInput({
  label,
  unit,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  unit: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#0F1115]/70 mb-1.5">
        {label} <span className="text-[#0F1115]/40 font-normal">({unit})</span>
      </label>
      <input
        type="number"
        inputMode="decimal"
        min="0"
        step="0.01"
        value={value}
        placeholder={placeholder ?? "0.00"}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-black/15 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#EE7E1A]/40 focus:border-[#EE7E1A] transition-colors"
      />
    </div>
  );
}

export default function Calculator() {
  const [shape, setShape] = useState<Shape>("plate");
  const [concreteClass, setConcreteClass] = useState("C20/25");
  const [dims, setDims] = useState<Dims>({ length: "", width: "", height: "", diameter: "", steps: "10", count: "1" });

  const set = (key: keyof Dims) => (v: string) => setDims((d) => ({ ...d, [key]: v }));

  const volume = calcVolume(shape, dims);
  const withWaste = volume * 1.1;
  const hasResult = volume > 0;

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 space-y-8">

        {/* Shape selector */}
        <div>
          <p className="text-sm font-semibold text-[#0F1115]/70 mb-3">1. Izvēlieties konstrukcijas veidu</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {shapes.map((s) => (
              <button
                key={s.id}
                onClick={() => setShape(s.id)}
                className={`rounded-xl p-4 text-left border-2 transition-all ${
                  shape === s.id
                    ? "border-[#EE7E1A] bg-[#EE7E1A]/5"
                    : "border-black/10 hover:border-black/25"
                }`}
              >
                <div className="text-2xl mb-2 leading-none">{s.icon}</div>
                <div className="font-semibold text-[#0F1115] text-sm leading-tight">{s.label}</div>
                <div className="text-[#0F1115]/45 text-xs mt-0.5">{s.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Dimensions */}
        <div>
          <p className="text-sm font-semibold text-[#0F1115]/70 mb-3">2. Ievadiet izmērus</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {shape === "cylinder" ? (
              <>
                <NumInput label="Diametrs" unit="m" value={dims.diameter} onChange={set("diameter")} placeholder="0.30" />
                <NumInput label="Augstums / garums" unit="m" value={dims.height} onChange={set("height")} placeholder="3.00" />
              </>
            ) : shape === "strip" ? (
              <>
                <NumInput label="Kopgarums" unit="m" value={dims.length} onChange={set("length")} placeholder="20.00" />
                <NumInput label="Platums" unit="m" value={dims.width} onChange={set("width")} placeholder="0.40" />
                <NumInput label="Dziļums / augstums" unit="m" value={dims.height} onChange={set("height")} placeholder="0.60" />
              </>
            ) : shape === "stairs" ? (
              <>
                <NumInput label="Pakāpienu skaits" unit="gab." value={dims.steps} onChange={set("steps")} placeholder="10" />
                <NumInput label="Pakāpiena dziļums" unit="m" value={dims.length} onChange={set("length")} placeholder="0.28" />
                <NumInput label="Pakāpiena augstums" unit="m" value={dims.height} onChange={set("height")} placeholder="0.17" />
                <NumInput label="Kāpņu platums" unit="m" value={dims.width} onChange={set("width")} placeholder="1.20" />
              </>
            ) : (
              <>
                <NumInput label={shape === "column" ? "Garums / augstums" : "Garums"} unit="m" value={dims.length} onChange={set("length")} placeholder={shape === "plate" ? "10.00" : "3.00"} />
                <NumInput label="Platums" unit="m" value={dims.width} onChange={set("width")} placeholder={shape === "plate" ? "8.00" : "0.40"} />
                <NumInput label={shape === "plate" ? "Biezums" : "Augstums"} unit="m" value={dims.height} onChange={set("height")} placeholder={shape === "plate" ? "0.15" : "3.00"} />
              </>
            )}
            <NumInput label="Daudzums" unit="gab." value={dims.count} onChange={set("count")} placeholder="1" />
          </div>
        </div>

        {/* Concrete class */}
        <div>
          <p className="text-sm font-semibold text-[#0F1115]/70 mb-3">3. Betona klase (informatīvi)</p>
          <div className="flex flex-wrap gap-2">
            {concreteClasses.map((c) => (
              <button
                key={c}
                onClick={() => setConcreteClass(c)}
                className={`px-3 py-1.5 rounded-lg text-sm font-mono border-2 transition-all ${
                  concreteClass === c
                    ? "border-[#EE7E1A] bg-[#EE7E1A] text-white"
                    : "border-black/15 text-[#0F1115]/70 hover:border-black/30"
                }`}
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="text-[#0F1115]/40 text-xs mt-2">Privātmāju pamatiem un pārsegumiem parasti pietiek ar C20/25.</p>
        </div>
      </div>

      {/* Result */}
      <div className="space-y-4 lg:sticky lg:top-24">
        <div className={`rounded-2xl border-2 p-6 sm:p-8 transition-all ${hasResult ? "border-[#EE7E1A] bg-[#EE7E1A]/5" : "border-black/10 bg-white"}`}>
          <p className="text-sm font-semibold text-[#0F1115]/50 mb-4 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains)" }}>
            Rezultāts
          </p>

          <div className="mb-6">
            <div className="text-sm text-[#0F1115]/50 mb-1">Tīrs apjoms</div>
            <div className="text-5xl font-black text-[#0F1115]" style={{ fontFamily: "var(--font-archivo)" }}>
              {hasResult ? volume.toFixed(2) : "—"}
              <span className="text-2xl ml-2 font-semibold text-[#0F1115]/50">m³</span>
            </div>
          </div>

          <div className={`rounded-xl p-4 mb-6 ${hasResult ? "bg-[#EE7E1A]/15" : "bg-black/5"}`}>
            <div className="text-sm text-[#0F1115]/60 mb-0.5">Ar 10% rezervi</div>
            <div className="text-3xl font-black text-[#EE7E1A]" style={{ fontFamily: "var(--font-archivo)" }}>
              {hasResult ? withWaste.toFixed(2) : "—"}
              <span className="text-lg ml-1.5 font-semibold">m³</span>
            </div>
            <p className="text-[#0F1115]/50 text-xs mt-1">Ieteicam pasūtīt ar rezervi izšļakstīšanai un atlikumam.</p>
          </div>

          {hasResult && (
            <div className="bg-white rounded-xl p-4 mb-6 border border-black/10 text-sm space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#0F1115]/50">Konstrukcija</span>
                <span className="font-semibold text-[#0F1115]">{shapes.find((s) => s.id === shape)?.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0F1115]/50">Betona klase</span>
                <span className="font-semibold text-[#EE7E1A]" style={{ fontFamily: "var(--font-jetbrains)" }}>{concreteClass}</span>
              </div>
              {numVal(dims.count) > 1 && (
                <div className="flex justify-between">
                  <span className="text-[#0F1115]/50">Elemenu skaits</span>
                  <span className="font-semibold text-[#0F1115]">{dims.count} gab.</span>
                </div>
              )}
            </div>
          )}

          <Link
            href="/#kontakti"
            className="block w-full text-center bg-[#EE7E1A] hover:bg-[#d06e14] text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
          >
            Pasūtīt {hasResult ? `${withWaste.toFixed(1)} m³` : "betonu"}
          </Link>
          <Link
            href="tel:+37124209209"
            className="block w-full text-center mt-2 border border-black/15 text-[#0F1115] hover:bg-black/5 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Zvanīt: +371 24 209 209
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-black/10 p-5 text-sm text-[#0F1115]/60 leading-relaxed">
          <strong className="text-[#0F1115]">Minimālais pasūtījums</strong> — viens maisītāja krāvums no aptuveni 5 m³. Ja jūsu aprēķins ir mazāks, joprojām var pasūtīt — jautājiet mums par iespējām.
        </div>
      </div>
    </div>
  );
}
