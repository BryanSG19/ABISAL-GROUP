import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroCapabilities from "@/components/IntroCapabilities";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ABISAL GROUP — Intelligence beneath tomorrow's business growth",
  description:
    "ABISAL GROUP designs tailored frameworks that transform decision-making and ways of working, embedding artificial intelligence to enable smarter operations, stronger performance, and tangible, measurable results.",
};

export default function HomeEn() {
  return (
    <>
      <Header />
      <main>
        <Hero locale="en" />
        <IntroCapabilities locale="en" />
        <PreFooterCTA locale="en" />
      </main>
      <Footer />
    </>
  );
}
