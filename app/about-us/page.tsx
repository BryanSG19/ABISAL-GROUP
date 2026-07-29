import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nosotros — ABISAL GROUP",
  description:
    "ABISAL es una empresa de estrategia e implementación de inteligencia artificial aplicada para organizaciones que buscan ir más allá de la experimentación y la búsqueda de eficiencias, avanzando hacia la creación de valor.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <AboutUs locale="es" />
      </main>
      <Footer />
    </>
  );
}
