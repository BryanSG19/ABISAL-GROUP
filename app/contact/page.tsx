import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contáctanos — ABISAL GROUP",
  description:
    "Hablemos sobre el futuro de tu organización. Contactá a ABISAL GROUP para conversar sobre estrategia e implementación de inteligencia artificial.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection locale="es" />
      </main>
      <Footer />
    </>
  );
}
