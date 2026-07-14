import type { Metadata } from "next";
import Header from "@/components/Header";
import OurWork from "@/components/OurWork";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work — ABISAL GROUP",
  description:
    "Case studies, experiments, and applied business challenges from ABISAL GROUP.",
};

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <main>
        <OurWork />
      </main>
      <Footer />
    </>
  );
}
