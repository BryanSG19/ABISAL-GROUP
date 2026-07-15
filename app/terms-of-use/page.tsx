import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — ABISAL GROUP",
  description:
    "The terms and conditions that govern your use of the ABISAL GROUP website.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" updated="July 2026">
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and
        use of the ABISAL GROUP website. By accessing or using this website,
        you agree to be bound by these Terms. If you do not agree, please do
        not use this website.
      </p>

      <div>
        <h2 className="text-xl font-medium text-bone">Use of the Website</h2>
        <p className="mt-3">
          This website and its content are provided for general
          informational purposes about ABISAL GROUP and our services. You
          agree to use this website only for lawful purposes and in a manner
          that does not infringe the rights of, or restrict or inhibit the
          use of, this website by any third party.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">Intellectual Property</h2>
        <p className="mt-3">
          All content on this website, including text, graphics, logos, and
          images, is the property of ABISAL GROUP or its licensors and is
          protected by applicable intellectual property laws. You may not
          reproduce, distribute, or create derivative works from this content
          without our prior written consent.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">No Warranty</h2>
        <p className="mt-3">
          This website and its content are provided &ldquo;as is&rdquo;
          without warranties of any kind, express or implied. ABISAL GROUP
          does not guarantee that the website will be uninterrupted,
          error-free, or free of harmful components.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          Limitation of Liability
        </h2>
        <p className="mt-3">
          To the fullest extent permitted by law, ABISAL GROUP shall not be
          liable for any indirect, incidental, or consequential damages
          arising out of your use of, or inability to use, this website.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">Changes to These Terms</h2>
        <p className="mt-3">
          We may update these Terms from time to time. Continued use of the
          website after any changes constitutes acceptance of the revised
          Terms.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">Contact</h2>
        <p className="mt-3">
          If you have questions about these Terms, please contact us through
          the form on our website.
        </p>
      </div>
    </LegalPage>
  );
}
