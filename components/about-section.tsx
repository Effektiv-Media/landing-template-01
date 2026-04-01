"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

const highlights = [
  "{{ highlight_1 }}",
  "{{ highlight_2 }}",
  "{{ highlight_3 }}",
  "{{ highlight_4 }}",
  "{{ highlight_5 }}",
  "{{ highlight_6 }}",
]

export default function AboutSection() {
  return (
    <section id="section-4" className="py-24 bg-(--brand-surface)" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side — slides in from left */}
          <AnimateOnScroll direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-2xl shadow-black/20">
              <Image
                src="/images/about-bg.jpg"
                alt="{{ about_image_alt }}"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle tint */}
              <div className="absolute inset-0 bg-(--brand-navy)/10" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-(--brand-amber) rounded-2xl p-6 shadow-2xl shadow-(--brand-amber)/30 max-w-50">
              <div className="font-serif text-4xl font-bold text-(--brand-navy)">{"{{ about_badge_value }}"}</div>
              <div className="text-(--brand-navy) font-semibold text-sm mt-1 leading-tight">
                {"{{ about_badge_label }}"}
              </div>
            </div>

            {/* Amber accent bar */}
            <div className="absolute top-6 -left-3 w-1.5 h-24 bg-linear-to-b from-(--brand-amber) to-(--brand-amber)/30 rounded-full" aria-hidden="true" />
          </AnimateOnScroll>

          {/* Text side — slides in from right */}
          <AnimateOnScroll direction="right" delay={0.1}>
            <span className="section-heading-eyebrow">{"{{ about_eyebrow }}"}</span>
            <h2
              id="about-heading"
              className="section-heading"
            >
              {"{{ about_heading }}"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 font-sans text-pretty">
              {"{{ about_paragraph_1 }}"}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-sans text-pretty">
              {"{{ about_paragraph_2 }}"}
            </p>

            {/* Highlights list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-(--brand-amber) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-foreground text-sm font-medium font-sans">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#section-5"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#section-5")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-(--brand-navy) text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-(--brand-navy-light) hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {"{{ about_cta_button }}"}
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
