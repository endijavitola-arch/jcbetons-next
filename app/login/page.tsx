"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/";
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0F1115] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-3 justify-center mb-10">
          <Image src="/logo-symbol.png" alt="JC Betons" width={40} height={40} className="rounded" />
          <span className="font-black text-white tracking-widest text-base" style={{ fontFamily: "var(--font-archivo)" }}>
            JC&nbsp;BETONS
          </span>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "var(--font-archivo)" }}>
            Demo piekļuve
          </h1>
          <p className="text-white/40 text-sm mb-6">Ievadiet paroli, lai skatītu vietni.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Parole"
                autoFocus
                required
                className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7E1A]/50 focus:border-[#EE7E1A] transition-colors"
              />
              {error && (
                <p className="text-red-400 text-xs mt-2">Nepareiza parole. Mēģiniet vēlreiz.</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EE7E1A] hover:bg-[#d06e14] disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              {loading ? "Pārbauda…" : "Ienākt"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
