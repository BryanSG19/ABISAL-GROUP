import type { Metadata } from "next";
import Header from "@/components/Header";
import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — ABISAL GROUP",
  description:
    "How ABISAL GROUP collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalContent
          eyebrow="Legal"
          title="Privacy Policy"
          updated="July 14, 2026"
          intro="ABISAL GROUP (“Abisal”, “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have."
          sections={[
            {
              heading: "1. Information We Collect",
              body: [
                "We may collect information you provide directly to us, such as your name, email address, company, and any details you share when you contact us, subscribe to our newsletter, or request our services.",
                "We may also automatically collect certain technical information when you visit abisalgroup.com, including your IP address, browser type, device information, pages visited, and referring URLs, typically through cookies and similar technologies.",
              ],
            },
            {
              heading: "2. How We Use Your Information",
              body: [
                "We use the information we collect to operate and improve our website, respond to inquiries, provide our consulting and AI advisory services, send updates or marketing communications you have opted into, and comply with legal obligations.",
                "We do not sell your personal information to third parties.",
              ],
            },
            {
              heading: "3. Sharing of Information",
              body: [
                "We may share information with service providers who help us operate our website and business (such as hosting, analytics, and email delivery providers), and with authorities when required by law.",
                "Any third party we work with is required to handle your information in a manner consistent with this Policy.",
              ],
            },
            {
              heading: "4. Cookies",
              body: [
                "We use cookies and similar technologies to operate our website and understand how it is used. For details, please see our Cookie Policy.",
              ],
            },
            {
              heading: "5. Data Retention",
              body: [
                "We retain personal information for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required or permitted by law.",
              ],
            },
            {
              heading: "6. Your Rights",
              body: [
                "Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal information, and to object to or withdraw consent for certain processing. To exercise these rights, contact us at hello@abisalgroup.com.",
              ],
            },
            {
              heading: "7. Security",
              body: [
                "We implement reasonable technical and organizational measures designed to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
              ],
            },
            {
              heading: "8. Changes to This Policy",
              body: [
                "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Last updated” date.",
              ],
            },
            {
              heading: "9. Contact Us",
              body: [
                "If you have questions about this Privacy Policy or how we handle your information, contact us at hello@abisalgroup.com.",
              ],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
