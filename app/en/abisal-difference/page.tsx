import type { Metadata } from "next";
import Header from "@/components/Header";
import AbyssalDescent from "@/components/AbyssalDescent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abisal Difference — ABISAL GROUP",
  description:
    "We go beneath the obvious challenge to understand what truly moves the business, then design the frameworks and capabilities to turn strategy into measurable performance.",
};

export default function AbisalDifferencePageEn() {
  return (
    <>
      <Header />
      <main>
        <AbyssalDescent locale="en" />
      </main>
      <Footer />
    </>
  );
}
