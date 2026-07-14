import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroCapabilities from "@/components/IntroCapabilities";
import AboutUs from "@/components/AboutUs";
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
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
