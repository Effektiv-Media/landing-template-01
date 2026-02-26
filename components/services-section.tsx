"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  { tag: "{{ service_1_tag }}", title: "{{ service_1_title }}", desc: "{{ service_1_desc }}", image: "{{ service_1_image }}" },
  { tag: "{{ service_2_tag }}", title: "{{ service_2_title }}", desc: "{{ service_2_desc }}", image: "{{ service_2_image }}" },
  { tag: "{{ service_3_tag }}", title: "{{ service_3_title }}", desc: "{{ service_3_desc }}", image: "{{ service_3_image }}" },
  { tag: "{{ service_4_tag }}", title: "{{ service_4_title }}", desc: "{{ service_4_desc }}", image: "{{ service_4_image }}" },
  { tag: "{{ service_5_tag }}", title: "{{ service_5_title }}", desc: "{{ service_5_desc }}", image: "{{ service_5_image }}" },
  { tag: "{{ service_6_tag }}", title: "{{ service_6_title }}", desc: "{{ service_6_desc }}", image: "{{ service_6_image }}" },
]

export default function ServicesSection() {
  const scrollToContact = () => {
    document.querySelector("#section-5")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="section-3" className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
            {"{{ services_eyebrow }}"}
          </span>
          <h2
            id="services-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mt-3 mb-5 text-balance"
          >
            {"{{ services_heading }}"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            {"{{ services_subheading }}"}
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-[var(--brand-surface)]">
                {service.image && !service.image.startsWith("{{") ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs font-sans">
                    {"{{ service_image }}"}
                  </div>
                )}
                <div className="absolute inset-0 bg-[var(--brand-navy)]/40 group-hover:bg-[var(--brand-navy)]/20 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[var(--brand-amber)] text-[var(--brand-navy)] text-xs font-bold uppercase tracking-wider rounded-sm">
                    {service.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-[var(--brand-navy)] mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans flex-1">
                  {service.desc}
                </p>
                <button
                  onClick={scrollToContact}
                  className="mt-5 flex items-center gap-2 text-[var(--brand-amber)] font-semibold text-sm group/btn"
                  aria-label={"{{ service_cta_aria_prefix }} " + service.title}
                >
                  <span className="group-hover/btn:underline">{"{{ service_card_cta }}"}</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
