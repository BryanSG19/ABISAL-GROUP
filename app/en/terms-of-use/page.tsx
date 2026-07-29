import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — ABISAL GROUP",
  description:
    "The terms and conditions that govern your use of the ABISAL GROUP website.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" updated="July 14, 2026">
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and
        use of abisalgroup.com (the &ldquo;Site&rdquo;), operated by ABISAL
        GROUP (&ldquo;ABISAL,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;). By accessing or using the Site, you agree to be
        bound by these Terms. If you do not agree, please do not use the
        Site.
      </p>

      <div>
        <h2 className="text-xl font-medium text-bone">1. Use of the Site</h2>
        <p className="mt-3">
          You may use the Site only for lawful purposes and in accordance
          with these Terms. You agree not to use the Site in any way that
          could damage, disable, or impair the Site, or interfere with any
          other party&rsquo;s use of it.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          2. Intellectual Property
        </h2>
        <p className="mt-3">
          All content on the Site, including text, graphics, logos, images,
          and software, is the property of ABISAL GROUP or its licensors and
          is protected by intellectual property laws. You may not reproduce,
          distribute, modify, or create derivative works from any content on
          the Site without our prior written consent.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          3. Third-Party Links
        </h2>
        <p className="mt-3">
          The Site may contain links to third-party websites that are not
          owned or controlled by ABISAL. We are not responsible for the
          content, privacy policies, or practices of any third-party
          websites.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          4. Disclaimer of Warranties
        </h2>
        <p className="mt-3">
          The Site and its content are provided on an &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; basis, without warranties of any kind,
          whether express or implied, including but not limited to
          warranties of merchantability, fitness for a particular purpose,
          or non-infringement.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          5. Limitation of Liability
        </h2>
        <p className="mt-3">
          To the fullest extent permitted by law, ABISAL GROUP shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or related to your use of, or
          inability to use, the Site.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">6. Indemnification</h2>
        <p className="mt-3">
          You agree to indemnify and hold ABISAL GROUP harmless from any
          claims, losses, liabilities, and expenses (including reasonable
          legal fees) arising out of your use of the Site or your violation
          of these Terms.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">7. Governing Law</h2>
        <p className="mt-3">
          These Terms shall be governed by and construed in accordance with
          applicable law, without regard to its conflict of law principles.
          Any disputes arising under these Terms shall be subject to the
          exclusive jurisdiction of the competent courts.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          8. Changes to These Terms
        </h2>
        <p className="mt-3">
          We may revise these Terms at any time. The &ldquo;Last
          updated&rdquo; date at the top of this page reflects the date of
          the most recent revision. Continued use of the Site after changes
          take effect constitutes acceptance of the revised Terms.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">9. Contact Us</h2>
        <p className="mt-3">
          If you have questions about these Terms, contact us at{" "}
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
