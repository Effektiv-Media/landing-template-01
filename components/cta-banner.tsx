"use client"

import { Phone } from "lucide-react"

export default function CtaBanner() {
  return (
    <section
      className="relative py-20 bg-[var(--brand-navy)] overflow-hidden"
      aria-label="{{ cta_banner_aria_label }}"
    >
      {/* Decorative pattern */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.68 0.16 60) 0, oklch(0.68 0.16 60) 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--brand-amber)]" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
          {"{{ cta_banner_eyebrow }}"}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 text-balance">
          {"{{ cta_banner_heading }}"}
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-10 font-sans text-pretty">
          {"{{ cta_banner_subtext }}"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector("#section-5")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-[var(--brand-amber)] text-[var(--brand-navy)] font-bold uppercase tracking-wider text-sm rounded hover:bg-[var(--brand-amber-light)] transition-all"
          >
            {"{{ cta_banner_primary_button }}"}
          </button>
          <a
            href="tel:{{ phone_number }}"
            className="px-8 py-4 border-2 border-white/40 text-white font-bold uppercase tracking-wider text-sm rounded hover:border-white hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} aria-hidden="true" />
            {"{{ cta_banner_secondary_button }}"}
          </a>
        </div>
      </div>
    </section>
  )
}
