"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

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
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
            {"{{ faq_eyebrow }}"}
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mt-3 mb-5 text-balance"
          >
            {"{{ faq_heading }}"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans text-pretty">
            {"{{ faq_subheading }}"}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? "border-[var(--brand-amber)] shadow-md"
                  : "border-border hover:border-[var(--brand-navy)]/30"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-serif text-lg font-semibold text-[var(--brand-navy)] leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    open === i
                      ? "bg-[var(--brand-amber)] text-[var(--brand-navy)]"
                      : "bg-[var(--brand-surface)] text-[var(--brand-navy)]"
                  }`}
                  aria-hidden="true"
                >
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-6 pb-6 text-muted-foreground leading-relaxed font-sans"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
