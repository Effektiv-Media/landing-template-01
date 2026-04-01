"use client"

import { motion } from "framer-motion"
import { ChevronDown, Phone } from "lucide-react"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.75 } },
}

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="section-1"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-25"
      aria-label="{{ hero_section_aria_label }}"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('{{ hero_background_image_url }}')" }}
        aria-hidden="true"
      />
      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-(--brand-navy)/90 via-(--brand-navy)/65 to-(--brand-navy)/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent,oklch(0.24_0.04_240)/50)]" aria-hidden="true" />

      {/* Amber accent glow bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--brand-amber) to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-16 bg-(--brand-amber)/10 blur-2xl" aria-hidden="true" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow label */}
        <motion.div variants={item} className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-linear-to-r from-transparent to-(--brand-amber)" aria-hidden="true" />
          <span className="text-(--brand-amber) text-sm uppercase tracking-[0.2em] font-medium font-sans">
            {"{{ hero_eyebrow_label }}"}
          </span>
          <span className="h-px w-12 bg-linear-to-l from-transparent to-(--brand-amber)" aria-hidden="true" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6"
        >
          {"{{ hero_heading }}"}
          <span className="block text-(--brand-amber) mt-2">{"{{ hero_heading_accent }}"}</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-pretty font-sans"
        >
          {"{{ hero_subheading }}"}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("#section-5")}
            className="px-8 py-4 bg-(--brand-amber) text-(--brand-navy) font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-(--brand-amber-light) hover:shadow-xl hover:shadow-(--brand-amber)/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {"{{ hero_primary_cta }}"}
          </button>
          <a
            href="tel:{{ phone_number }}"
            className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white/15 hover:border-white/60 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} aria-hidden="true" />
            {"{{ phone_number }}"}
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={item} className="mt-16 grid grid-cols-3 gap-0 max-w-md mx-auto">
          {[
            { value: "{{ stat_1_value }}", label: "{{ stat_1_label }}" },
            { value: "{{ stat_2_value }}", label: "{{ stat_2_label }}" },
            { value: "{{ stat_3_value }}", label: "{{ stat_3_label }}" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center px-4 relative">
              {i > 0 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/20" aria-hidden="true" />
              )}
              <div className="font-serif text-3xl md:text-4xl font-bold text-(--brand-amber)">{stat.value}</div>
              <div className="text-white/55 text-xs uppercase tracking-wider mt-1 font-sans">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => scrollToSection("#section-2")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-(--brand-amber) transition-colors animate-bounce"
        aria-label="{{ scroll_down_aria_label }}"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}
