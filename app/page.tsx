import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroCapabilities from "@/components/IntroCapabilities";
import AboutUs from "@/components/AboutUs";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ABISAL GROUP — La inteligencia detrás del crecimiento del mañana",
  description:
    "ABISAL GROUP diseña marcos de trabajo a la medida que convierten la inteligencia artificial y las nuevas formas de trabajar en decisiones más confiables, operaciones más inteligentes y un desempeño empresarial medible.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero locale="es" />
        <IntroCapabilities locale="es" />
        <AboutUs locale="es" />
        <PreFooterCTA locale="es" />
      </main>
      <Footer />
    </>
  );
}
