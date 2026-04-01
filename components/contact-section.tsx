"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

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
    setSent(true)
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-(--brand-amber)/50 focus:border-(--brand-amber) transition-all duration-200 text-sm font-sans"

  return (
    <section id="section-5" className="py-24 bg-(--brand-surface)" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-heading-eyebrow">{"{{ contact_eyebrow }}"}</span>
          <h2 id="contact-heading" className="section-heading">
            {"{{ contact_heading }}"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans text-pretty">
            {"{{ contact_subheading }}"}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info panel */}
          <AnimateOnScroll direction="left" className="lg:col-span-2">
            <div className="bg-linear-to-br from-(--brand-navy) to-(--brand-navy-dark) rounded-2xl p-8 h-full text-white shadow-2xl shadow-black/20 border border-white/5">
              <h3 className="font-serif text-2xl font-bold mb-2">{"{{ contact_info_heading }}"}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-8 font-sans">
                {"{{ contact_info_subtext }}"}
              </p>

              <ul className="space-y-6" role="list">
                {[
                  { icon: Phone, label: "{{ contact_phone_label }}", value: "{{ phone_number }}", href: "tel:{{ phone_number }}" },
                  { icon: Mail, label: "{{ contact_email_label }}", value: "{{ email_address }}", href: "mailto:{{ email_address }}" },
                  { icon: MapPin, label: "{{ contact_area_label }}", value: "{{ service_area }}", href: null },
                  { icon: Clock, label: "{{ contact_hours_label }}", value: "{{ opening_hours }}", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-(--brand-amber)/15 flex items-center justify-center shrink-0 border border-(--brand-amber)/20">
                      <Icon size={17} className="text-(--brand-amber)" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white/45 text-xs uppercase tracking-wider mb-1 font-sans">{label}</div>
                      {href ? (
                        <a href={href} className="text-white font-medium hover:text-(--brand-amber) transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <span className="text-white font-medium text-sm">{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Info badge */}
              <div className="mt-10 p-4 rounded-xl bg-(--brand-amber)/10 border border-(--brand-amber)/25">
                <div className="text-(--brand-amber) font-bold text-sm uppercase tracking-wider mb-1 font-sans">
                  {"{{ contact_badge_title }}"}
                </div>
                <p className="text-white/65 text-xs leading-relaxed font-sans">
                  {"{{ contact_badge_text }}"}
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Quote request form */}
          <AnimateOnScroll direction="right" delay={0.1} className="lg:col-span-3">
            <div className="bg-background rounded-2xl border border-border p-8 shadow-xl shadow-black/5">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-(--brand-amber)/15 flex items-center justify-center">
                    <CheckCircle2 size={44} className="text-(--brand-amber)" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-(--brand-navy)">
                    {"{{ form_success_heading }}"}
                  </h3>
                  <p className="text-muted-foreground font-sans max-w-sm leading-relaxed">
                    {"{{ form_success_message }}"}
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", address: "", message: "" }) }}
                    className="mt-4 px-6 py-3 bg-(--brand-navy) text-white font-semibold text-sm rounded-xl hover:bg-(--brand-navy-light) transition-colors duration-200"
                  >
                    {"{{ form_reset_button }}"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="{{ form_aria_label }}">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-(--brand-navy) mb-2 font-sans">
                        {"{{ form_name_label }}"} <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="{{ form_name_placeholder }}" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-(--brand-navy) mb-2 font-sans">
                        {"{{ form_phone_label }}"} <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="{{ form_phone_placeholder }}" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-(--brand-navy) mb-2 font-sans">
                        {"{{ form_email_label }}"} <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="{{ form_email_placeholder }}" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-(--brand-navy) mb-2 font-sans">
                        {"{{ form_address_label }}"}
                      </label>
                      <input id="address" name="address" type="text" value={form.address} onChange={handleChange} placeholder="{{ form_address_placeholder }}" className={inputClass} />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-(--brand-navy) mb-2 font-sans">
                      {"{{ form_message_label }}"} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="{{ form_message_placeholder }}"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-(--brand-navy) text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-(--brand-navy-light) hover:shadow-xl hover:shadow-black/20 transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Send size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                    {"{{ form_submit_button }}"}
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-4 font-sans">
                    {"{{ form_disclaimer }}"}
                  </p>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
