"use client"

import { Phone } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function CtaBanner() {
  return (
    <section
      className="relative py-24 bg-(--brand-navy) overflow-hidden"
      aria-label="{{ cta_banner_aria_label }}"
    >
      {/* Decorative diagonal pattern */}
      <div
        className="absolute top-0 left-0 w-2/5 h-full opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.68 0.16 60) 0, oklch(0.68 0.16 60) 1px, transparent 0, transparent 50%)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden="true"
      />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-(--brand-amber)/8 blur-3xl rounded-full" aria-hidden="true" />
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--brand-amber) to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <span className="section-heading-eyebrow">{"{{ cta_banner_eyebrow }}"}</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 text-balance">
            {"{{ cta_banner_heading }}"}
          </h2>
          <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed mb-10 font-sans text-pretty">
            {"{{ cta_banner_subtext }}"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#section-5")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-(--brand-amber) text-(--brand-navy) font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-(--brand-amber-light) hover:shadow-xl hover:shadow-(--brand-amber)/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {"{{ cta_banner_primary_button }}"}
            </button>
            <a
              href="tel:{{ phone_number }}"
              className="px-8 py-4 border border-white/25 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white/15 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} aria-hidden="true" />
              {"{{ cta_banner_secondary_button }}"}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
