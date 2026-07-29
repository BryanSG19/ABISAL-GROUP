import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — ABISAL GROUP",
  description:
    "How ABISAL GROUP uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="July 14, 2026">
      <p>
        This Cookie Policy explains how ABISAL GROUP (&ldquo;ABISAL,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses
        cookies and similar technologies on abisalgroup.com (the
        &ldquo;Site&rdquo;), and the choices available to you.
      </p>

      <div>
        <h2 className="text-xl font-medium text-bone">1. What Are Cookies</h2>
        <p className="mt-3">
          Cookies are small text files placed on your device when you visit
          a website. They are widely used to make websites work efficiently,
          as well as to provide information to the site owner.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          2. How We Use Cookies
        </h2>
        <p className="mt-3">
          We use cookies to operate the Site reliably, remember your
          preferences, and understand how visitors interact with our content
          so we can improve it over time.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          3. Types of Cookies We Use
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-bone">
              Essential cookies
            </strong>{" "}
            — required for the Site to function properly and cannot be
            switched off in our systems.
          </li>
          <li>
            <strong className="font-medium text-bone">
              Analytics cookies
            </strong>{" "}
            — help us understand how visitors use the Site so we can measure
            and improve performance.
          </li>
          <li>
            <strong className="font-medium text-bone">
              Functional cookies
            </strong>{" "}
            — enable enhanced features and remember choices you make while
            browsing.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">4. Managing Cookies</h2>
        <p className="mt-3">
          Most web browsers allow you to control cookies through their
          settings, including blocking or deleting them. Please note that
          disabling certain cookies may affect the functionality of the
          Site.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          5. Changes to This Policy
        </h2>
        <p className="mt-3">
          We may update this Cookie Policy from time to time. The &ldquo;Last
          updated&rdquo; date at the top of this page indicates when this
          Policy was last revised.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">6. Contact Us</h2>
        <p className="mt-3">
          If you have questions about this Cookie Policy, contact us at{" "}
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
