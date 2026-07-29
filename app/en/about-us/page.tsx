import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — ABISAL GROUP",
  description:
    "ABISAL GROUP is a strategy and applied intelligence firm built for organizations that want to move beyond experimentation.",
};

export default function AboutUsPageEn() {
  return (
    <>
      <Header />
      <main>
        <AboutUs locale="en" />
      </main>
      <Footer />
    </>
  );
}
