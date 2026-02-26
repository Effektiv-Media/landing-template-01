"use client"

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

const footerServices = [
  "{{ footer_service_1 }}",
  "{{ footer_service_2 }}",
  "{{ footer_service_3 }}",
  "{{ footer_service_4 }}",
  "{{ footer_service_5 }}",
  "{{ footer_service_6 }}",
]

const navLinks = [
  { label: "{{ nav_link_1 }}", href: "#section-1" },
  { label: "{{ nav_link_2 }}", href: "#section-2" },
  { label: "{{ nav_link_3 }}", href: "#section-3" },
  { label: "{{ nav_link_4 }}", href: "#section-4" },
  { label: "{{ nav_link_5 }}", href: "#section-5" },
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
                {"{{ company_name }}"}
              </span>
              <span className="text-[var(--brand-amber)] text-xs uppercase tracking-widest font-sans">
                {"{{ company_tagline }}"}
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
              {"{{ footer_brand_description }}"}
            </p>
            <div className="flex gap-3">
              <a
                href="{{ facebook_url }}"
                aria-label="{{ footer_facebook_aria_label }}"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--brand-amber)] hover:text-[var(--brand-navy)] transition-colors text-white"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a
                href="{{ instagram_url }}"
                aria-label="{{ footer_instagram_aria_label }}"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--brand-amber)] hover:text-[var(--brand-navy)] transition-colors text-white"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              {"{{ footer_nav_heading }}"}
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

          {/* Services column */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              {"{{ footer_services_heading }}"}
            </h3>
            <ul className="space-y-3" role="list">
              {footerServices.map((s) => (
                <li key={s}>
                  <a
                    href="#section-3"
                    onClick={(e) => { e.preventDefault(); scrollTo("#section-3") }}
                    className="text-white/60 text-sm hover:text-[var(--brand-amber)] transition-colors font-sans"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              {"{{ footer_contact_heading }}"}
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[var(--brand-amber)] shrink-0 mt-0.5" aria-hidden="true" />
                <a href="tel:{{ phone_number }}" className="text-white/60 text-sm hover:text-[var(--brand-amber)] transition-colors font-sans">
                  {"{{ phone_number }}"}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[var(--brand-amber)] shrink-0 mt-0.5" aria-hidden="true" />
                <a href="mailto:{{ email_address }}" className="text-white/60 text-sm hover:text-[var(--brand-amber)] transition-colors font-sans">
                  {"{{ email_address }}"}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--brand-amber)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-white/60 text-sm font-sans">{"{{ service_area }}"}</span>
              </li>
            </ul>

            <a
              href="#section-5"
              onClick={(e) => { e.preventDefault(); scrollTo("#section-5") }}
              className="mt-6 inline-block px-5 py-2.5 bg-[var(--brand-amber)] text-[var(--brand-navy)] text-xs font-bold uppercase tracking-wider rounded hover:bg-[var(--brand-amber-light)] transition-colors"
            >
              {"{{ footer_cta_button }}"}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-sans">
            {"{{ footer_copyright }}"}
          </p>
          <p className="text-white/40 text-xs font-sans">
            {"{{ footer_org_info }}"}
          </p>
        </div>
      </div>
    </footer>
  )
}
