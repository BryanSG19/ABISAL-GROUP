import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — ABISAL GROUP",
  description:
    "How ABISAL GROUP uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="July 2026">
      <p>
        This Cookie Policy explains how ABISAL GROUP uses cookies and similar
        technologies when you visit our website.
      </p>

      <div>
        <h2 className="text-xl font-medium text-bone">What Are Cookies</h2>
        <p className="mt-3">
          Cookies are small text files placed on your device when you visit a
          website. They are widely used to make websites work efficiently
          and to provide information to the site owner.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">How We Use Cookies</h2>
        <p className="mt-3">
          We use essential cookies that are necessary for our website to
          function properly, as well as analytics-related technologies that
          help us understand how visitors use our site so we can improve it
          over time. We do not use cookies to sell your personal information.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">Managing Cookies</h2>
        <p className="mt-3">
          Most web browsers allow you to control cookies through their
          settings, including blocking or deleting them. Please note that
          disabling certain cookies may affect the functionality of this
          website.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">Contact</h2>
        <p className="mt-3">
          If you have questions about this Cookie Policy, please contact us
          through the form on our website.
        </p>
      </div>
    </LegalPage>
  );
}
