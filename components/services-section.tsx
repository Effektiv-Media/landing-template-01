"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import AnimateOnScroll from "@/components/animate-on-scroll"

const services = [
  { tag: "{{ service_1_tag }}", title: "{{ service_1_title }}", desc: "{{ service_1_desc }}", image: "{{ service_1_image }}" },
  { tag: "{{ service_2_tag }}", title: "{{ service_2_title }}", desc: "{{ service_2_desc }}", image: "{{ service_2_image }}" },
  { tag: "{{ service_3_tag }}", title: "{{ service_3_title }}", desc: "{{ service_3_desc }}", image: "{{ service_3_image }}" },
  { tag: "{{ service_4_tag }}", title: "{{ service_4_title }}", desc: "{{ service_4_desc }}", image: "{{ service_4_image }}" },
  { tag: "{{ service_5_tag }}", title: "{{ service_5_title }}", desc: "{{ service_5_desc }}", image: "{{ service_5_image }}" },
  { tag: "{{ service_6_tag }}", title: "{{ service_6_title }}", desc: "{{ service_6_desc }}", image: "{{ service_6_image }}" },
]

export default function ServicesSection() {
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" })

  const scrollToContact = () => {
    document.querySelector("#section-5")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="section-3" className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-heading-eyebrow">{"{{ services_eyebrow }}"}</span>
          <h2 id="services-heading" className="section-heading">
            {"{{ services_heading }}"}
          </h2>
          <p className="section-subheading">{"{{ services_subheading }}"}</p>
        </AnimateOnScroll>

        {/* Service cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-(--brand-surface)">
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
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-(--brand-navy)/60 via-(--brand-navy)/20 to-transparent group-hover:from-(--brand-navy)/40 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-(--brand-amber) text-(--brand-navy) text-xs font-bold uppercase tracking-wider rounded-lg shadow-md">
                    {service.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-(--brand-navy) mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans flex-1">
                  {service.desc}
                </p>
                <button
                  onClick={scrollToContact}
                  className="mt-5 flex items-center gap-2 text-(--brand-amber) font-semibold text-sm group/btn w-fit"
                  aria-label={"{{ service_cta_aria_prefix }} " + service.title}
                >
                  <span className="group-hover/btn:underline">{"{{ service_card_cta }}"}</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
