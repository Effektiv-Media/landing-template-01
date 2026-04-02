"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-(--brand-navy)/95 backdrop-blur-md shadow-xl shadow-black/20 border-b border-white/5"
          : "bg-(--brand-navy)/80 backdrop-blur-sm"
      }`}
    >
      {/* Top contact bar */}
      <div className={`border-b border-white/10 hidden md:block transition-all duration-300 ${scrolled ? "opacity-0 h-0 overflow-hidden py-0" : "opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-end gap-6">
          <a
            href="tel:{{ phone_number }}"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-(--brand-amber) transition-colors"
          >
            <Phone size={14} />
            <span>{"{{ phone_number }}"}</span>
          </a>
          <a
            href="mailto:{{ email_address }}"
            className="text-sm text-white/70 hover:text-(--brand-amber) transition-colors"
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
          aria-label="{{ nav_home_aria_label }}"
        >
          {/* Replace with your logo image, e.g. <Image src="/logo.svg" alt="Logo" width={120} height={40} /> */}
          <div className="h-10 w-32 rounded-md bg-white/15 flex items-center justify-center text-white/40 text-xs font-sans tracking-wider">
            LOGO
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="{{ nav_aria_label }}">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-(--brand-amber) group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#section-5"
            onClick={(e) => { e.preventDefault(); handleNavClick("#section-5") }}
            className="ml-2 px-5 py-2.5 bg-(--brand-amber) text-(--brand-navy) text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-(--brand-amber-light) hover:shadow-lg hover:shadow-(--brand-amber)/30 transition-all hover:scale-105 active:scale-95"
          >
            {"{{ nav_cta_label }}"}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-expanded={isOpen}
          aria-label="{{ mobile_menu_toggle_label }}"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-(--brand-navy-dark) border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="{{ mobile_nav_aria_label }}">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-white/80 hover:text-(--brand-amber) py-3 text-base font-medium border-b border-white/10 last:border-0 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#section-5"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                onClick={(e) => { e.preventDefault(); handleNavClick("#section-5") }}
                className="mt-3 text-center px-5 py-3 bg-(--brand-amber) text-(--brand-navy) font-bold uppercase tracking-wider rounded-lg hover:bg-(--brand-amber-light) transition-colors"
              >
                {"{{ nav_cta_label }}"}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
