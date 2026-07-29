import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — ABISAL GROUP",
  description:
    "Let's talk about your organization's future. Get in touch with ABISAL GROUP to discuss applied AI strategy and implementation.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection locale="en" />
      </main>
      <Footer />
    </>
  );
}
