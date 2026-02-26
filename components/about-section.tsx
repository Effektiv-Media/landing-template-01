import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Lång erfarenhet av bygg- och snickeriarbeten",
  "Transparent prissättning utan dolda kostnader",
  "ROT-avdrag – vi hanterar allt åt dig",
  "Miljövänliga och hållbara material",
  "Tydlig kommunikation genom hela projektet",
  "Certifierade och försäkrade hantverkare",
]

export default function AboutSection() {
  return (
    <section id="om-oss" className="py-24 bg-[var(--brand-surface)]" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/about-bg.jpg"
                alt="Lucas Bygger AB – erfarna hantverkare i arbete"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[var(--brand-amber)] rounded-xl p-6 shadow-xl max-w-[200px]">
              <div className="font-serif text-4xl font-bold text-[var(--brand-navy)]">10+</div>
              <div className="text-[var(--brand-navy)] font-semibold text-sm mt-1 leading-tight">
                Års erfarenhet inom byggbranschen
              </div>
            </div>
            {/* Amber accent bar */}
            <div className="absolute top-6 -left-4 w-2 h-24 bg-[var(--brand-amber)] rounded-full" aria-hidden="true" />
          </div>

          {/* Text side */}
          <div>
            <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
              Om oss
            </span>
            <h2
              id="about-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mt-3 mb-6 text-balance"
            >
              En snickare med öga för detaljer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 font-sans text-pretty">
              Lucas Bygger AB är ett passionerat byggföretag med lång erfarenhet av professionella
              bygg- och snickeritjänster. Vi strävar alltid efter att leverera högkvalitativa resultat
              som uppfyller kundernas specifika behov och önskemål.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-sans text-pretty">
              Vår vision är att skapa ett byggföretag där personlig service och kundnöjdhet alltid är
              i fokus. Vi är dedikerade till att hjälpa våra kunder förverkliga sina byggdrömmar med
              högsta kvalitet i varje steg av processen – från första kontakt till färdigt resultat.
            </p>

            {/* Highlights list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[var(--brand-amber)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-foreground text-sm font-medium font-sans">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-navy)] text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-[var(--brand-navy-light)] transition-all"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
