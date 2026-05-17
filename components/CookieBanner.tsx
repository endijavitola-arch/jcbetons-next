"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "jcbetons_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Sīkdatņu piekrišana"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F1115] border-t border-white/10 px-4 py-5 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-white/70 text-sm leading-relaxed max-w-xl">
          Mēs izmantojam sīkdatnes, lai analizētu vietnes apmeklētību un uzlabotu lietotāja pieredzi. Turpinot lietot vietni, jūs piekrītat sīkdatņu izmantošanai. Uzziniet vairāk:{" "}
          <Link href="/sikdatnes" className="text-[#EE7E1A] underline hover:text-[#EE7E1A]/80">
            Sīkdatņu politika
          </Link>
          {" "}·{" "}
          <Link href="/privatuma-politika" className="text-[#EE7E1A] underline hover:text-[#EE7E1A]/80">
            Privātuma politika
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-white/50 hover:text-white text-sm px-4 py-2 border border-white/20 rounded transition-colors"
          >
            Noraidīt
          </button>
          <button
            onClick={accept}
            className="bg-[#EE7E1A] hover:bg-[#d06e14] text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
          >
            Piekrist
          </button>
        </div>
      </div>
    </div>
  );
}
