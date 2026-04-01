"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import AnimateOnScroll from "@/components/animate-on-scroll"

const faqs = [
  { q: "{{ faq_1_question }}", a: "{{ faq_1_answer }}" },
  { q: "{{ faq_2_question }}", a: "{{ faq_2_answer }}" },
  { q: "{{ faq_3_question }}", a: "{{ faq_3_answer }}" },
  { q: "{{ faq_4_question }}", a: "{{ faq_4_answer }}" },
  { q: "{{ faq_5_question }}", a: "{{ faq_5_answer }}" },
  { q: "{{ faq_6_question }}", a: "{{ faq_6_answer }}" },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="section-4b" className="py-24 bg-background" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-heading-eyebrow">{"{{ faq_eyebrow }}"}</span>
          <h2 id="faq-heading" className="section-heading">
            {"{{ faq_heading }}"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans text-pretty">
            {"{{ faq_subheading }}"}
          </p>
        </AnimateOnScroll>

        {/* FAQ accordion */}
        <AnimateOnScroll delay={0.1}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  open === i
                    ? "border-(--brand-amber)/60 shadow-lg shadow-(--brand-amber)/8"
                    : "border-border hover:border-(--brand-navy)/25"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-serif text-lg font-semibold text-(--brand-navy) leading-snug">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      open === i
                        ? "bg-(--brand-amber) text-(--brand-navy)"
                        : "bg-(--brand-surface) text-(--brand-navy)"
                    }`}
                    aria-hidden="true"
                  >
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-sans border-t border-border/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
