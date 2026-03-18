import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Work from "@/components/Work";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Work />
      <WhoWeWorkWith />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
