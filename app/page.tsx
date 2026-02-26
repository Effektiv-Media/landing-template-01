import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhyUsSection from "@/components/why-us-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import CtaBanner from "@/components/cta-banner"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <AboutSection />
      <CtaBanner />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
