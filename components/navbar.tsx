"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "{{ nav_link_1 }}", href: "#section-1" },
  { label: "{{ nav_link_2 }}", href: "#section-2" },
  { label: "{{ nav_link_3 }}", href: "#section-3" },
  { label: "{{ nav_link_4 }}", href: "#section-4" },
  { label: "{{ nav_link_5 }}", href: "#section-5" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-navy)] shadow-lg shadow-black/20"
          : "bg-[var(--brand-navy)]/90 backdrop-blur-sm"
      }`}
    >
      {/* Top contact bar */}
      <div className="border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-end gap-6">
          <a
            href="tel:{{ phone_number }}"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-[var(--brand-amber)] transition-colors"
          >
            <Phone size={14} />
            <span>{"{{ phone_number }}"}</span>
          </a>
          <a
            href="mailto:{{ email_address }}"
            className="text-sm text-white/70 hover:text-[var(--brand-amber)] transition-colors"
          >
            {"{{ email_address }}"}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / brand */}
        <a
          href="#section-1"
          onClick={(e) => { e.preventDefault(); handleNavClick("#section-1") }}
          className="flex flex-col"
          aria-label="{{ company_name }} – {{ nav_home_aria_label }}"
        >
          <span className="font-serif text-xl font-bold text-white leading-tight tracking-tight">
            {"{{ company_name }}"}
          </span>
          <span className="text-[var(--brand-amber)] text-xs uppercase tracking-widest font-sans">
            {"{{ company_tagline }}"}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="{{ nav_aria_label }}">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="text-sm font-medium text-white/80 hover:text-[var(--brand-amber)] transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#section-5"
            onClick={(e) => { e.preventDefault(); handleNavClick("#section-5") }}
            className="ml-2 px-5 py-2.5 bg-[var(--brand-amber)] text-[var(--brand-navy)] text-sm font-bold uppercase tracking-wider rounded hover:bg-[var(--brand-amber-light)] transition-colors"
          >
            {"{{ nav_cta_label }}"}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
          aria-expanded={isOpen}
          aria-label="{{ mobile_menu_toggle_label }}"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--brand-navy)] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4" aria-label="{{ mobile_nav_aria_label }}">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-white/80 hover:text-[var(--brand-amber)] py-2 text-base font-medium border-b border-white/10 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#section-5"
              onClick={(e) => { e.preventDefault(); handleNavClick("#section-5") }}
              className="mt-2 text-center px-5 py-3 bg-[var(--brand-amber)] text-[var(--brand-navy)] font-bold uppercase tracking-wider rounded hover:bg-[var(--brand-amber-light)] transition-colors"
            >
              {"{{ nav_cta_label }}"}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
