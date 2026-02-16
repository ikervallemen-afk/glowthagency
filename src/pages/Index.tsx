import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import InsightSection from "@/components/landing/InsightSection";
import ServiceSection from "@/components/landing/ServiceSection";
import BonusSection from "@/components/landing/BonusSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PriceSection from "@/components/landing/PriceSection";
import RiskSection from "@/components/landing/RiskSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ClosingSection from "@/components/landing/ClosingSection";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <ProblemSection />
    <InsightSection />
    <ServiceSection />
    <BonusSection />
    <TestimonialsSection />
    <PriceSection />
    <RiskSection />
    <ProcessSection />
    <ClosingSection />
  </div>
);

export default Index;
