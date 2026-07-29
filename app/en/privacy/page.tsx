import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ABISAL GROUP",
  description:
    "How ABISAL GROUP collects, uses, and protects information when you interact with our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 14, 2026">
      <p>
        ABISAL GROUP (&ldquo;ABISAL,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
        or &ldquo;our&rdquo;) respects your privacy and is committed to
        protecting the personal information you share with us. This Privacy
        Policy explains what information we collect, how we use it, and the
        choices you have when you visit abisalgroup.com (the &ldquo;Site&rdquo;)
        or otherwise interact with us.
      </p>

      <div>
        <h2 className="text-xl font-medium text-bone">
          1. Information We Collect
        </h2>
        <p className="mt-3">
          We collect information you provide directly to us, such as your
          name, email address, company, and any message details when you
          contact us, subscribe to updates, or request a consultation.
        </p>
        <p className="mt-3">
          We also collect certain information automatically when you use the
          Site, including your IP address, browser type, device information,
          pages visited, and referring URLs, typically through cookies and
          similar technologies.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          2. How We Use Your Information
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>To respond to inquiries and provide the services you request.</li>
          <li>
            To send updates, newsletters, or marketing communications you
            have opted into.
          </li>
          <li>
            To improve and maintain the Site, and to understand how visitors
            use it.
          </li>
          <li>To comply with legal obligations and enforce our agreements.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          3. Cookies and Tracking Technologies
        </h2>
        <p className="mt-3">
          The Site uses cookies and similar technologies to operate correctly
          and to analyze traffic. For details on the categories of cookies we
          use and how to manage your preferences, please see our{" "}
          <a href="/en/cookies" className="text-acid hover:underline">
            Cookie Policy
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          4. Sharing of Information
        </h2>
        <p className="mt-3">
          We do not sell your personal information. We may share information
          with trusted service providers who assist us in operating the Site
          and conducting our business (for example, hosting or email
          delivery providers), and where required by law or to protect our
          rights.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">5. Data Retention</h2>
        <p className="mt-3">
          We retain personal information for as long as necessary to fulfill
          the purposes described in this Policy, unless a longer retention
          period is required or permitted by law.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">6. Your Rights</h2>
        <p className="mt-3">
          Depending on your location, you may have the right to access,
          correct, delete, or restrict the use of your personal information,
          and to withdraw consent where processing is based on consent. To
          exercise these rights, contact us using the details below.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">7. Data Security</h2>
        <p className="mt-3">
          We implement reasonable technical and organizational measures
          designed to protect personal information against unauthorized
          access, loss, or misuse. No method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          8. International Data Transfers
        </h2>
        <p className="mt-3">
          Your information may be processed in countries other than your
          own. Where required, we take steps to ensure that such transfers
          comply with applicable data protection laws.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          9. Children&rsquo;s Privacy
        </h2>
        <p className="mt-3">
          The Site is not directed to individuals under the age of 16, and we
          do not knowingly collect personal information from children.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          10. Changes to This Policy
        </h2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. The
          &ldquo;Last updated&rdquo; date at the top of this page indicates
          when this Policy was last revised. Continued use of the Site after
          changes take effect constitutes acceptance of the revised Policy.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">11. Contact Us</h2>
        <p className="mt-3">
          If you have questions about this Privacy Policy or how we handle
          your information, contact us at{" "}
          <a
            href="mailto:contacto@abisalgroup.com"
            className="text-acid hover:underline"
          >
            contacto@abisalgroup.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
