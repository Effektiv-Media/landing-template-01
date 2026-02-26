"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  {
    tag: "Förnya ditt hem",
    title: "Renovering",
    desc: "Vi utför renoveringar av alla storlekar – från badrum och kök till hela hus. Med precision och omsorg om detaljer förvandlar vi ditt hem till precis det du drömt om.",
    image: "/images/service-renovation.jpg",
    highlight: true,
  },
  {
    tag: "Bygg nytt",
    title: "Nybyggnation",
    desc: "Vi följer dig från ritning till nyckelklar bostad. Vår erfarenhet av nybyggnation garanterar ett tryggt och smidigt byggprojekt av högsta kvalitet.",
    image: "/images/service-construction.jpg",
  },
  {
    tag: "Hjärtat av hemmet",
    title: "Köksrenovering",
    desc: "Drömmer du om ett nytt kök? Vi skapar skräddarsydda kökslösningar med fokus på funktion, estetik och hållbara material som håller länge.",
    image: "/images/service-renovation.jpg",
  },
  {
    tag: "En plats att njuta på",
    title: "Altanbyggen",
    desc: "Låt oss bygga den perfekta altan för dina utomhustillfällen. Vi använder hållbart trä och moderna konstruktioner som tål det svenska klimatet.",
    image: "/images/service-deck.jpg",
  },
  {
    tag: "Uppdatera & förbättra",
    title: "Fönsterbyten",
    desc: "Nya fönster förbättrar energieffektiviteten och komforten i ditt hem. Vi installerar moderna, energisnåla fönster av högsta kvalitet.",
    image: "/images/service-construction.jpg",
  },
  {
    tag: "Lägg nytt eller byt",
    title: "Golvläggning",
    desc: "Vi lägger alla typer av golv – parkett, laminat, klinker och mer. Resultatet blir alltid jämnt, hållbart och vackert med ett öga för detaljer.",
    image: "/images/service-flooring.jpg",
  },
]

export default function ServicesSection() {
  const scrollToContact = () => {
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="tjanster" className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
            Vad vi erbjuder
          </span>
          <h2
            id="services-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mt-3 mb-5 text-balance"
          >
            Våra byggtjänster
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            Oavsett om du behöver hjälp med ett litet renoveringsprojekt eller en fullständig nybyggnation
            har vi expertisen och engagemanget för att leverera ett resultat du kan vara stolt över.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
                  aria-label={`Begär offert för ${service.title}`}
                >
                  <span className="group-hover/btn:underline">Begär offert</span>
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
