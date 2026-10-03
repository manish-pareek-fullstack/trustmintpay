import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import StatsStrip from "@/components/sections/StatsStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import Partners from "@/components/sections/Partners";
import WhyTrustMint from "@/components/sections/WhyTrustMint";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <Services />
      <HowItWorks />
      <Partners />
      <WhyTrustMint />
      <ContactSection />
    </main>
  );
}
