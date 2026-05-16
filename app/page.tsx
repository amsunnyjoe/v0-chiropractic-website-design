import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import TestimonialsSection from "@/components/testimonials-section";
import GallerySection from "@/components/gallery-section";
import AppointmentSection from "@/components/appointment-section";
import ContactSection from "@/components/contact-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <GallerySection />
        <AppointmentSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
