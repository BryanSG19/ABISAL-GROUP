import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import PrincipiosSlider from "@/components/PrincipiosSlider";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — ABISAL GROUP",
  description:
    "Creemos que la inteligencia artificial no genera valor por sí sola. El verdadero impacto ocurre cuando se integra con la estrategia, las personas y la forma en que una organización toma decisiones.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <PrincipiosSlider />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
