import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroCapabilities from "@/components/IntroCapabilities";
import AboutUs from "@/components/AboutUs";
import PrincipiosSlider from "@/components/PrincipiosSlider";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroCapabilities />
        <AboutUs />
        <PrincipiosSlider />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
