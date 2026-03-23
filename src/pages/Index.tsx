import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
