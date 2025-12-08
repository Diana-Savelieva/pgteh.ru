import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProblemsSection from "@/components/ProblemsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <FeaturesSection />
      <ProblemsSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
