import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

const services = [
  "Renovering",
  "Nybyggnation",
  "Köksrenovering",
  "Altanbyggen",
  "Fönsterbyten",
  "Golvläggning",
]

const navLinks = [
  { label: "Hem", href: "#hem" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-[var(--brand-navy)] text-white" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="font-serif text-xl font-bold text-white block leading-tight">
                Lucas Bygger AB
              </span>
              <span className="text-[var(--brand-amber)] text-xs uppercase tracking-widest font-sans">
                Byggfirma & Snickare
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
              En pålitlig byggfirma som erbjuder professionella bygg- och snickeritjänster med fokus
              på kvalitet och personlig service.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Följ oss på Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--brand-amber)] hover:text-[var(--brand-navy)] transition-colors text-white"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Följ oss på Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--brand-amber)] hover:text-[var(--brand-navy)] transition-colors text-white"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-white/60 text-sm hover:text-[var(--brand-amber)] transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              Tjänster
            </h3>
            <ul className="space-y-3" role="list">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#tjanster"
                    onClick={(e) => { e.preventDefault(); scrollTo("#tjanster") }}
                    className="text-white/60 text-sm hover:text-[var(--brand-amber)] transition-colors font-sans"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              Kontakt
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[var(--brand-amber)] shrink-0 mt-0.5" aria-hidden="true" />
                <a href="tel:+46701234567" className="text-white/60 text-sm hover:text-[var(--brand-amber)] transition-colors font-sans">
                  070-123 45 67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[var(--brand-amber)] shrink-0 mt-0.5" aria-hidden="true" />
                <a href="mailto:info@lucasbygger.se" className="text-white/60 text-sm hover:text-[var(--brand-amber)] transition-colors font-sans">
                  info@lucasbygger.se
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--brand-amber)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-white/60 text-sm font-sans">Stockholmsregionen & omnejd</span>
              </li>
            </ul>

            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); scrollTo("#kontakt") }}
              className="mt-6 inline-block px-5 py-2.5 bg-[var(--brand-amber)] text-[var(--brand-navy)] text-xs font-bold uppercase tracking-wider rounded hover:bg-[var(--brand-amber-light)] transition-colors"
            >
              Kostnadsfri offert
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-sans">
            © {new Date().getFullYear()} Lucas Bygger AB. Alla rättigheter förbehållna.
          </p>
          <p className="text-white/40 text-xs font-sans">
            Org.nr: 556XXX-XXXX | F-skattsedel | Fullt försäkrad
          </p>
        </div>
      </div>
    </footer>
  )
}
