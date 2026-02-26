"use client"

import { ChevronDown, Phone } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[100px]"
      aria-label="Introduktion"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--brand-navy)]/70" aria-hidden="true" />
      {/* Amber accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--brand-amber)]" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-[var(--brand-amber)]" aria-hidden="true" />
          <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
            Din pålitliga byggfirma
          </span>
          <span className="h-px w-12 bg-[var(--brand-amber)]" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
          Lucas Bygger AB
          <span className="block text-[var(--brand-amber)] mt-2">Snickare & Byggfirma</span>
        </h1>

        {/* Subheading */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-pretty font-sans">
          Välkommen till Lucas Bygger AB – en pålitlig byggfirma som erbjuder professionella
          bygg- och snickeritjänster med hög noggrannhet, tydlig kommunikation och ett starkt
          fokus på kvalitet i varje uppdrag.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("#kontakt")}
            className="px-8 py-4 bg-[var(--brand-amber)] text-[var(--brand-navy)] font-bold uppercase tracking-wider text-sm rounded hover:bg-[var(--brand-amber-light)] transition-all hover:scale-105 active:scale-95"
          >
            Kostnadsfri offert
          </button>
          <a
            href="tel:+46701234567"
            className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-white hover:text-[var(--brand-navy)] transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} aria-hidden="true" />
            070-123 45 67
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Års erfarenhet" },
            { value: "200+", label: "Nöjda kunder" },
            { value: "100%", label: "Kvalitetsgaranti" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-[var(--brand-amber)]">{stat.value}</div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1 font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#tjanster")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[var(--brand-amber)] transition-colors animate-bounce"
        aria-label="Scrolla ned"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
