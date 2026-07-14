import type { Metadata } from "next";
import Header from "@/components/Header";
import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — ABISAL GROUP",
  description:
    "The terms and conditions that govern your use of the ABISAL GROUP website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <LegalContent
          eyebrow="Legal"
          title="Terms & Conditions"
          updated="July 14, 2026"
          intro="These Terms & Conditions (“Terms”) govern your access to and use of the abisalgroup.com website and any services provided by ABISAL GROUP (“Abisal”, “we”, “us”, or “our”). By accessing or using our website, you agree to be bound by these Terms."
          sections={[
            {
              heading: "1. Use of Our Website",
              body: [
                "You may use our website for lawful purposes only. You agree not to misuse the site, attempt to gain unauthorized access to our systems, or interfere with its normal operation.",
              ],
            },
            {
              heading: "2. Intellectual Property",
              body: [
                "All content on this website, including text, graphics, logos, and design, is the property of ABISAL GROUP or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written consent.",
              ],
            },
            {
              heading: "3. Services",
              body: [
                "Any consulting, advisory, or other services described on this website are subject to separate agreements between ABISAL GROUP and the relevant client. Nothing on this website constitutes a binding offer to provide services absent a signed agreement.",
              ],
            },
            {
              heading: "4. No Warranties",
              body: [
                "This website and its content are provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied. We do not guarantee that the website will be uninterrupted, error-free, or free of harmful components.",
              ],
            },
            {
              heading: "5. Limitation of Liability",
              body: [
                "To the fullest extent permitted by law, ABISAL GROUP shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.",
              ],
            },
            {
              heading: "6. Third-Party Links",
              body: [
                "Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any third-party site.",
              ],
            },
            {
              heading: "7. Changes to These Terms",
              body: [
                "We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
              ],
            },
            {
              heading: "8. Governing Law",
              body: [
                "These Terms are governed by and construed in accordance with applicable law, without regard to conflict-of-law principles.",
              ],
            },
            {
              heading: "9. Contact Us",
              body: [
                "If you have questions about these Terms, contact us at hello@abisalgroup.com.",
              ],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
