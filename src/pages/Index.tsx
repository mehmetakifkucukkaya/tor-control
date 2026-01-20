import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import PortfolioSection from "@/components/PortfolioSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="testimonials">
          <SocialProofSection />
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
