import type { Metadata } from "next";
import Header from "@/components/Header";
import WhatWeDo from "@/components/WhatWeDo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What We Do — ABISAL GROUP",
  description:
    "Workshops, applied AI sprints, strategy and adoption roadmaps, and custom engines and agents — designed around real business needs.",
};

export default function WhatWeDoPageEn() {
  return (
    <>
      <Header />
      <main>
        <WhatWeDo locale="en" />
      </main>
      <Footer />
    </>
  );
}
