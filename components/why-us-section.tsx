"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wrench, Users, Leaf, Award, BadgePercent, Layers } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

const features = [
  { icon: Wrench,       title: "{{ feature_1_title }}", desc: "{{ feature_1_desc }}" },
  { icon: Users,        title: "{{ feature_2_title }}", desc: "{{ feature_2_desc }}" },
  { icon: Leaf,         title: "{{ feature_3_title }}", desc: "{{ feature_3_desc }}" },
  { icon: Award,        title: "{{ feature_4_title }}", desc: "{{ feature_4_desc }}" },
  { icon: BadgePercent, title: "{{ feature_5_title }}", desc: "{{ feature_5_desc }}" },
  { icon: Layers,       title: "{{ feature_6_title }}", desc: "{{ feature_6_desc }}" },
]

export default function WhyUsSection() {
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" })

  return (
    <section id="section-2" className="py-24 bg-(--brand-surface)" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-heading-eyebrow">{"{{ why_us_eyebrow }}"}</span>
          <h2 id="why-us-heading" className="section-heading">
            {"{{ why_us_heading }}"}
          </h2>
          <p className="section-subheading">{"{{ why_us_subheading }}"}</p>
        </AnimateOnScroll>

        {/* Feature grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 36 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-(--brand-amber)/40 hover:shadow-2xl hover:shadow-black/8 transition-all duration-300 group overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-(--brand-amber)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-(--brand-navy) flex items-center justify-center mb-6 group-hover:bg-(--brand-amber) transition-colors duration-300 shadow-lg shadow-black/10">
                  <f.icon size={24} className="text-(--brand-amber) group-hover:text-(--brand-navy) transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-(--brand-navy) mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-14 rounded-2xl bg-linear-to-br from-(--brand-navy) to-(--brand-navy-dark) p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-black/20 border border-white/5">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 text-balance">
                {"{{ why_us_cta_heading }}"}
              </h3>
              <p className="text-white/65 font-sans leading-relaxed">
                {"{{ why_us_cta_subtext }}"}
              </p>
            </div>
            <a
              href="#section-5"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#section-5")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="shrink-0 px-8 py-4 bg-(--brand-amber) text-(--brand-navy) font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-(--brand-amber-light) hover:shadow-lg hover:shadow-(--brand-amber)/30 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              {"{{ why_us_cta_button }}"}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
