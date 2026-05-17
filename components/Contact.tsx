"use client";

import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "REPLACE_WITH_FORMSPREE_ID";

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <section className="py-20 bg-[#F5F4F0]" id="kontakti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <div className="flex items-center gap-3 text-xs tracking-widest font-mono mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span className="font-bold text-[#EE7E1A]">06</span>
            <span className="text-[#0F1115]/40">Kontakti</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1115] leading-tight mb-3" style={{ fontFamily: "var(--font-archivo)" }}>
            Pieprasiet cenu vai pasūtiet betonu.
          </h2>
          <p className="text-[#0F1115]/60 mb-8">
            Atbildam parasti tās pašas darba dienas laikā. Steidzamiem pasūtījumiem zvaniet pa tālruni.
          </p>

          {state.succeeded ? (
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <div>
                <strong className="text-green-800">Paldies! Ziņojums saņemts.</strong>
                <p className="text-green-700 text-sm mt-0.5">Sazināsimies tuvāko stundu laikā darba dienās.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Vārds *" name="vards" type="text" placeholder="Jānis Bērziņš" required state={state} />
                <Field label="Uzņēmums" name="uznemums" type="text" placeholder="SIA / privātpersona" state={state} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Tālrunis *" name="talrunis" type="tel" placeholder="+371" required state={state} />
                <Field label="E-pasts *" name="epasts" type="email" placeholder="jusu@epasts.lv" required state={state} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F1115]/70 mb-1.5">Ziņojums</label>
                <textarea
                  name="zinojums"
                  rows={4}
                  placeholder="Cik m³, kāda betona klase, adrese, vēlamais datums…"
                  className="w-full border border-black/15 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#EE7E1A]/40 focus:border-[#EE7E1A] transition-colors resize-none"
                />
                <ValidationError prefix="Zinojums" field="zinojums" errors={state.errors} className="text-red-600 text-xs mt-1" />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                <p className="text-[#0F1115]/40 text-xs">
                  Nospiežot "Nosūtīt", piekrītat{" "}
                  <a href="/privatuma-politika" className="underline hover:text-[#0F1115]/70">datu apstrādei</a>{" "}
                  saziņai par pasūtījumu.
                </p>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center gap-2 bg-[#EE7E1A] hover:bg-[#d06e14] disabled:opacity-50 text-white font-bold px-6 py-3 rounded transition-colors"
                >
                  {state.submitting ? "Sūta…" : "Nosūtīt"}
                  {!state.submitting && <ArrowIcon />}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Info */}
        <aside className="space-y-6">
          <ContactBlock label="Tālrunis">
            <a href="tel:+37124209209" className="text-2xl font-bold text-[#0F1115] hover:text-[#EE7E1A] transition-colors">
              +371 24 209 209
            </a>
          </ContactBlock>
          <ContactBlock label="E-pasts">
            <a href="mailto:info@jcbetons.lv" className="text-[#0F1115] hover:text-[#EE7E1A] transition-colors font-medium">
              info@jcbetons.lv
            </a>
          </ContactBlock>
          <ContactBlock label="Adrese">
            <address className="not-italic text-[#0F1115]/70 leading-relaxed">
              Krustpils iela 54F<br />Rīga, LV-1057<br />Latvija
            </address>
          </ContactBlock>
          <ContactBlock label="Darba laiks">
            <table className="text-sm text-[#0F1115]/70">
              <tbody>
                <tr><td className="pr-6">Pirmd. – Piektd.</td><td className="font-medium text-[#0F1115]">8:00 – 17:00</td></tr>
                <tr><td className="pr-6">Sestdiena</td><td className="font-medium text-[#0F1115]">8:00 – 17:00</td></tr>
                <tr><td className="pr-6">Svētdiena</td><td className="text-red-500 font-medium">Slēgts</td></tr>
              </tbody>
            </table>
          </ContactBlock>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-black/10">
            <iframe
              title="Krustpils iela 54F, Rīga karte"
              src="https://www.openstreetmap.org/export/embed.html?bbox=24.169%2C56.929%2C24.219%2C56.949&layer=mapnik&marker=56.939%2C24.194"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-52"
            />
            <a
              className="block text-center text-xs text-[#0F1115]/50 hover:text-[#EE7E1A] py-2 bg-white transition-colors"
              href="https://www.openstreetmap.org/?mlat=56.939&mlon=24.194#map=15/56.939/24.194"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atvērt karti →
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ContactBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs tracking-widest text-[#0F1115]/40 uppercase mb-1.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  state,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  state: ReturnType<typeof useForm>[0];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#0F1115]/70 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-black/15 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#EE7E1A]/40 focus:border-[#EE7E1A] transition-colors"
      />
      <ValidationError prefix={label} field={name} errors={state.errors} className="text-red-600 text-xs mt-1" />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  );
}
