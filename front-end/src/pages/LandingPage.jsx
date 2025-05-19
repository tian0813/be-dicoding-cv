import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/Features";
import { HowItWorksSection } from "../components/HowItWorks";
import { CTASection } from "../components/CTA";
import { Footer } from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default LandingPage;
