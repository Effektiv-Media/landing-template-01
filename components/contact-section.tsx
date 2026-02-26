"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend API
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-24 bg-[var(--brand-surface)]" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--brand-amber)] text-sm uppercase tracking-[0.2em] font-medium font-sans">
            Kom igång idag
          </span>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mt-3 mb-5 text-balance"
          >
            Begär en kostnadsfri offert
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans text-pretty">
            Fyll i formuläret nedan så återkommer vi med en offert inom 24 timmar – utan förpliktelser
            eller dolda kostnader.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info panel */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--brand-navy)] rounded-xl p-8 h-full text-white">
              <h3 className="font-serif text-2xl font-bold mb-2">Kontaktuppgifter</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 font-sans">
                Du kan också kontakta oss direkt via telefon eller e-post. Vi är tillgängliga vardagar
                kl. 07:00–17:00.
              </p>

              <ul className="space-y-6" role="list">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-amber)]/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[var(--brand-amber)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1 font-sans">Telefon</div>
                    <a href="tel:+46701234567" className="text-white font-medium hover:text-[var(--brand-amber)] transition-colors">
                      070-123 45 67
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-amber)]/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[var(--brand-amber)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1 font-sans">E-post</div>
                    <a href="mailto:info@lucasbygger.se" className="text-white font-medium hover:text-[var(--brand-amber)] transition-colors">
                      info@lucasbygger.se
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-amber)]/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[var(--brand-amber)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1 font-sans">Verksamhetsområde</div>
                    <span className="text-white font-medium">Stockholmsregionen & omnejd</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-amber)]/20 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[var(--brand-amber)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1 font-sans">Öppettider</div>
                    <span className="text-white font-medium">Mån–Fre: 07:00–17:00</span>
                  </div>
                </li>
              </ul>

              {/* ROT badge */}
              <div className="mt-10 p-4 rounded-lg bg-[var(--brand-amber)]/10 border border-[var(--brand-amber)]/30">
                <div className="text-[var(--brand-amber)] font-bold text-sm uppercase tracking-wider mb-1 font-sans">
                  ROT-avdrag
                </div>
                <p className="text-white/70 text-xs leading-relaxed font-sans">
                  Spara upp till 30% på arbetskostnaden – vi hanterar allt administrativt åt dig.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-background rounded-xl border border-border p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle2 size={56} className="text-[var(--brand-amber)]" aria-hidden="true" />
                  <h3 className="font-serif text-2xl font-bold text-[var(--brand-navy)]">
                    Tack för ditt meddelande!
                  </h3>
                  <p className="text-muted-foreground font-sans max-w-sm leading-relaxed">
                    Vi har tagit emot din förfrågan och återkommer med en offert inom 24 timmar.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", address: "", message: "" }) }}
                    className="mt-4 px-6 py-3 bg-[var(--brand-navy)] text-white font-semibold text-sm rounded hover:bg-[var(--brand-navy-light)] transition-colors"
                  >
                    Skicka ny förfrågan
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Offertformulär">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[var(--brand-navy)] mb-2 font-sans">
                        Namn & Efternamn <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Anna Andersson"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-amber)] focus:border-transparent transition-all text-sm font-sans"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[var(--brand-navy)] mb-2 font-sans">
                        Telefonnummer <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="070-123 45 67"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-amber)] focus:border-transparent transition-all text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[var(--brand-navy)] mb-2 font-sans">
                        E-postadress <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="anna@exempel.se"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-amber)] focus:border-transparent transition-all text-sm font-sans"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-[var(--brand-navy)] mb-2 font-sans">
                        Adress
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Storgatan 1, Stockholm"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-amber)] focus:border-transparent transition-all text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--brand-navy)] mb-2 font-sans">
                      Beskriv ditt projekt <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Beskriv vad du behöver hjälp med, storlek på projekt, önskad tidsram, etc..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-amber)] focus:border-transparent transition-all resize-none text-sm font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[var(--brand-navy)] text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-[var(--brand-navy-light)] transition-all flex items-center justify-center gap-3 group"
                  >
                    <Send size={16} aria-hidden="true" />
                    Skicka förfrågan – Svar inom 24h
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-4 font-sans">
                    Kostnadsfri offert utan förpliktelser. Vi behandlar dina uppgifter konfidentiellt.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
