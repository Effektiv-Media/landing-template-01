import { Wrench, Users, Leaf, Award, BadgePercent, Layers } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Moderna tekniker",
    desc: "Vi arbetar med de senaste metoderna och verktygen för att säkerställa effektiva och hållbara lösningar i varje projekt.",
  },
  {
    icon: Users,
    title: "Kundfokus",
    desc: "Dina önskemål är vår prioritet. Vi lyssnar, kommunicerar tydligt och anpassar varje uppdrag efter dina specifika behov.",
  },
  {
    icon: Leaf,
    title: "Kvalitativa material",
    desc: "Vi väljer noggrant ut material av högsta kvalitet för att garantera ett resultat som håller i många år framöver.",
  },
  {
    icon: Award,
    title: "Garanterad hållbarhet",
    desc: "Alla våra projekt genomförs med ett starkt fokus på hållbarhet, och vi följer noggrant alla säkerhetsföreskrifter.",
  },
  {
    icon: BadgePercent,
    title: "ROT-avdrag",
    desc: "Spara upp till 30% på arbetskostnaden. Vi hjälper dig att utnyttja ROT-avdraget och erbjuder transparent prissättning.",
  },
  {
    icon: Layers,
    title: "Stora & små projekt",
    desc: "Från mindre reparationer till fullständiga nybyggnationer – vi hanterar projekt av alla storlekar med samma engagemang.",
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[var(--brand-surface)]" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
            Välj ett proffs
          </span>
          <h2
            id="why-us-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mt-3 mb-5 text-balance"
          >
            Varför välja Lucas Bygger AB?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            Vi erbjuder ett komplett utbud av byggtjänster och snickeriarbeten för både privatpersoner
            och företag. Vår erfarenhet, kombinerat med engagemang för hållbarhet och kvalitet, gör oss
            till det självklara valet när du söker en pålitlig byggfirma.
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
              Redo att starta ditt projekt?
            </h3>
            <p className="text-white/70 font-sans leading-relaxed">
              Kontakta oss idag för en kostnadsfri offert – vi återkommer inom 24 timmar.
            </p>
          </div>
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="shrink-0 px-8 py-4 bg-[var(--brand-amber)] text-[var(--brand-navy)] font-bold uppercase tracking-wider text-sm rounded hover:bg-[var(--brand-amber-light)] transition-all whitespace-nowrap"
          >
            Begär offert
          </a>
        </div>
      </div>
    </section>
  )
}
