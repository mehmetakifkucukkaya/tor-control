import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import EcosystemSection from "@/components/EcosystemSection";
import SocialProofSection from "@/components/SocialProofSection";
import PerformanceShowcase from "@/components/PerformanceShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
        <section id="ecosystem">
          <EcosystemSection />
        </section>
        <section id="testimonials">
          <SocialProofSection />
        </section>
        <PerformanceShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
