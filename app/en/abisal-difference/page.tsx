import type { Metadata } from "next";
import Header from "@/components/Header";
import AbisalDifference from "@/components/AbisalDifference";
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
        <AbisalDifference locale="en" />
      </main>
      <Footer />
    </>
  );
}
