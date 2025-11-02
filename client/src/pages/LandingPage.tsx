import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TimelineSection from "@/components/TimelineSection";
import TechStackSection from "@/components/TechStackSection";
import SolutionsSection from "@/components/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import OutcomesSection from "@/components/OutcomesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LegalSection from "@/components/LegalSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <TimelineSection />
        <TechStackSection />
        <SolutionsSection />
        <PricingSection />
        <OutcomesSection />
        <FAQSection />
        <ContactSection />
        <LegalSection />
      </main>
      <Footer />
    </div>
  );
}
