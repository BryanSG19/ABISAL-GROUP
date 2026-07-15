import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ABISAL GROUP",
  description:
    "How ABISAL GROUP collects, uses, and protects information when you interact with our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        ABISAL GROUP (&ldquo;ABISAL,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
        or &ldquo;our&rdquo;) respects your privacy and is committed to
        protecting the personal information you share with us. This Privacy
        Policy explains what information we collect, how we use it, and the
        choices you have.
      </p>

      <div>
        <h2 className="text-xl font-medium text-bone">
          Information We Collect
        </h2>
        <p className="mt-3">
          We collect information you provide directly to us, such as your
          name and email address when you contact us or subscribe to updates
          through our website. We may also automatically collect limited
          technical information, including browser type, device information,
          and general usage data, to help us understand how our site is used
          and to improve it.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          How We Use Information
        </h2>
        <p className="mt-3">
          We use the information we collect to respond to inquiries, provide
          and improve our services, communicate updates about ABISAL GROUP,
          and maintain the security and functionality of our website. We do
          not sell your personal information to third parties.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">Data Sharing</h2>
        <p className="mt-3">
          We may share information with trusted service providers who help us
          operate our website and business (for example, hosting or email
          delivery providers), and only to the extent necessary for them to
          perform those services on our behalf. We may also disclose
          information if required to do so by law.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">Your Choices</h2>
        <p className="mt-3">
          You may unsubscribe from our communications at any time using the
          link provided in our emails, or by contacting us directly. You may
          also request access to, correction of, or deletion of your personal
          information by reaching out to us.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">Contact</h2>
        <p className="mt-3">
          If you have questions about this Privacy Policy or how we handle
          your information, please contact us through the form on our
          website.
        </p>
      </div>
    </LegalPage>
  );
}
