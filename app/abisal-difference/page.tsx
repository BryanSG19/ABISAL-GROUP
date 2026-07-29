import type { Metadata } from "next";
import Header from "@/components/Header";
import AbyssalDescent from "@/components/AbyssalDescent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "La diferencia Abisal — ABISAL GROUP",
  description:
    "Vamos más allá del desafío evidente para entender qué es lo que realmente mueve al negocio, y diseñamos los marcos de trabajo y capacidades necesarias para convertir la estrategia en un desempeño medible.",
};

export default function AbisalDifferencePage() {
  return (
    <>
      <Header />
      <main>
        <AbyssalDescent locale="es" />
      </main>
      <Footer />
    </>
  );
}
