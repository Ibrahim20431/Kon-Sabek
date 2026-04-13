"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { ValuesSection } from "@/components/values-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <FeaturesSection />
          <ValuesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
