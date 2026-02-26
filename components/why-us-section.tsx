"use client"

import { Wrench, Users, Leaf, Award, BadgePercent, Layers } from "lucide-react"

const features = [
  { icon: Wrench,       title: "{{ feature_1_title }}", desc: "{{ feature_1_desc }}" },
  { icon: Users,        title: "{{ feature_2_title }}", desc: "{{ feature_2_desc }}" },
  { icon: Leaf,         title: "{{ feature_3_title }}", desc: "{{ feature_3_desc }}" },
  { icon: Award,        title: "{{ feature_4_title }}", desc: "{{ feature_4_desc }}" },
  { icon: BadgePercent, title: "{{ feature_5_title }}", desc: "{{ feature_5_desc }}" },
  { icon: Layers,       title: "{{ feature_6_title }}", desc: "{{ feature_6_desc }}" },
]

export default function WhyUsSection() {
  return (
    <section id="section-2" className="py-24 bg-[var(--brand-surface)]" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
            {"{{ why_us_eyebrow }}"}
          </span>
          <h2
            id="why-us-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mt-3 mb-5 text-balance"
          >
            {"{{ why_us_heading }}"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            {"{{ why_us_subheading }}"}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background rounded-lg p-8 border border-border hover:border-[var(--brand-amber)] hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--brand-navy)] flex items-center justify-center mb-5 group-hover:bg-[var(--brand-amber)] transition-colors">
                <f.icon size={22} className="text-[var(--brand-amber)] group-hover:text-[var(--brand-navy)] transition-colors" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[var(--brand-navy)] mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 rounded-xl bg-[var(--brand-navy)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 text-balance">
              {"{{ why_us_cta_heading }}"}
            </h3>
            <p className="text-white/70 font-sans leading-relaxed">
              {"{{ why_us_cta_subtext }}"}
            </p>
          </div>
          <a
            href="#section-5"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#section-5")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="shrink-0 px-8 py-4 bg-[var(--brand-amber)] text-[var(--brand-navy)] font-bold uppercase tracking-wider text-sm rounded hover:bg-[var(--brand-amber-light)] transition-all whitespace-nowrap"
          >
            {"{{ why_us_cta_button }}"}
          </a>
        </div>
      </div>
    </section>
  )
}
