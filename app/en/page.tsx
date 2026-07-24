import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroCapabilities from "@/components/IntroCapabilities";
import AboutUs from "@/components/AboutUs";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ABISAL GROUP — Intelligence beneath tomorrow's business growth",
  description:
    "ABISAL GROUP designs tailored frameworks that turn AI and new ways of working into high-confidence decisions, smarter operations, and measurable business performance.",
};

export default function HomeEn() {
  return (
    <>
      <Header />
      <main>
        <Hero locale="en" />
        <IntroCapabilities locale="en" />
        <AboutUs locale="en" />
        <PreFooterCTA locale="en" />
      </main>
      <Footer />
    </>
  );
}
