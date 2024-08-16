import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { WhySection } from "@/components/landing/why-section";
import PageContainer from "@/components/layout/page-container";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/constants/data";

export default function Page() {
  return (
    <PageContainer scrollable={false}>
      <div className="space-y-4">
        <HeroSection />
        <HeroParallax products={products} />
        <WhySection />
        <HowItWorksSection />
      </div>
    </PageContainer>
  );
}
