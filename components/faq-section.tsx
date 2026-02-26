"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Vilka typer av byggprojekt kan ni hjälpa till med?",
    a: "Vi utför allt från mindre snickeriarbeten och renoveringar till större byggprojekt som nybyggnationer och ombyggnationer. Oavsett omfattning får du en erfaren snickare och byggfirma som tar ansvar hela vägen.",
  },
  {
    q: "Arbetar ni med både privatpersoner och företag?",
    a: "Ja, vi hjälper både privatpersoner och företag och anpassar alltid arbetet efter kundens behov och förutsättningar. Vi har lång erfarenhet av uppdrag för bostadsrättsföreningar, fastighetsägare och enskilda hushåll.",
  },
  {
    q: "Kan ni hjälpa till från planering till färdigt resultat?",
    a: "Absolut. Vi erbjuder kompletta byggtjänster där vi hanterar projektet från idé och planering till färdigt och godkänt resultat. Du behöver inte kontakta flera olika aktörer – vi tar hand om det hela.",
  },
  {
    q: "Vad är ROT-avdrag och hur fungerar det?",
    a: "ROT-avdraget är en skatteförmån som ger dig som kund rätt till 30% avdrag på arbetskostnaden för bygg- och renoveringstjänster. Vi hanterar allt administrativt åt dig, så du kan enkelt utnyttja denna förmån.",
  },
  {
    q: "Hur lång tid tar ett typiskt renoveringsprojekt?",
    a: "Tidsåtgången varierar beroende på projektets storlek och komplexitet. En badrumsrenovering tar vanligtvis 2–3 veckor, medan en större ombyggnation kan ta flera månader. Vi ger alltid en tydlig tidsplan i offerten.",
  },
  {
    q: "Hur får jag en offert på mitt byggprojekt?",
    a: "Det är enkelt – fyll i kontaktformuläret på vår sida eller ring oss direkt. Vi återkommer med en kostnadsfri offert inom 24 timmar, utan förpliktelser eller dolda kostnader.",
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-background" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
            Vanliga frågor
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mt-3 mb-5 text-balance"
          >
            Undrar du något? Hitta ditt svar här
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans text-pretty">
            Vi har samlat de vanligaste frågorna vi får från våra kunder. Hittar du inte svaret du
            söker? Kontakta oss gärna direkt.
          </p>
        </div>

        {/* FAQ list */}
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
