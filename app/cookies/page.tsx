import type { Metadata } from "next";
import Header from "@/components/Header";
import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy — ABISAL GROUP",
  description:
    "How ABISAL GROUP uses cookies and similar technologies on abisalgroup.com.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main>
        <LegalContent
          eyebrow="Legal"
          title="Cookie Policy"
          updated="July 14, 2026"
          intro="This Cookie Policy explains how ABISAL GROUP (“Abisal”, “we”, “us”, or “our”) uses cookies and similar technologies on abisalgroup.com, and the choices available to you."
          sections={[
            {
              heading: "1. What Are Cookies",
              body: [
                "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, improve the browsing experience, and provide information to site owners.",
              ],
            },
            {
              heading: "2. Types of Cookies We Use",
              body: [
                "Essential cookies: necessary for the website to function properly, such as remembering your preferences and enabling core features.",
                "Analytics cookies: help us understand how visitors interact with our website so we can improve its content and performance.",
                "Functional cookies: allow us to remember choices you make and provide enhanced, personalized features.",
              ],
            },
            {
              heading: "3. Third-Party Cookies",
              body: [
                "Some cookies may be placed by third-party services we use, such as analytics providers. These third parties may use cookies in accordance with their own privacy policies.",
              ],
            },
            {
              heading: "4. Managing Cookies",
              body: [
                "Most browsers allow you to control cookies through their settings, including blocking or deleting them. Please note that disabling certain cookies may affect the functionality of our website.",
              ],
            },
            {
              heading: "5. Changes to This Policy",
              body: [
                "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons.",
              ],
            },
            {
              heading: "6. Contact Us",
              body: [
                "If you have questions about this Cookie Policy, contact us at hello@abisalgroup.com.",
              ],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
