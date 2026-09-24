import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import DiscoverySection from "@/components/DiscoverySection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(40,33%,99%)]">
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <DiscoverySection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
