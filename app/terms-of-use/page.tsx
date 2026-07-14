import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — ABISAL GROUP",
  description: "The terms and conditions governing use of abisalgroup.com.",
};

const LAST_UPDATED = "July 14, 2026";

export default function TermsOfUsePage() {
  return (
    <LegalPage
      titleEn="Terms of Use"
      titleEs="Términos de Uso"
      lastUpdated={LAST_UPDATED}
      introEn="These Terms of Use (“Terms”) govern your access to and use of abisalgroup.com (the “Site”), operated by ABISAL GROUP (“ABISAL,” “we,” “us,” or “our”). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site."
      introEs="Estos Términos de Uso (“Términos”) rigen tu acceso y uso de abisalgroup.com (el “Sitio”), operado por ABISAL GROUP (“ABISAL”, “nosotros” o “nuestro”). Al acceder o usar el Sitio, aceptás quedar sujeto a estos Términos. Si no estás de acuerdo, por favor no uses el Sitio."
      sectionsEn={[
        {
          heading: "1. Use of the Site",
          paragraphs: [
            "You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site in any way that could damage, disable, or impair the Site, or interfere with any other party's use of it.",
          ],
        },
        {
          heading: "2. Intellectual Property",
          paragraphs: [
            "All content on the Site, including text, graphics, logos, images, and software, is the property of ABISAL GROUP or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the Site without our prior written consent.",
          ],
        },
        {
          heading: "3. Third-Party Links",
          paragraphs: [
            "The Site may contain links to third-party websites that are not owned or controlled by ABISAL. We are not responsible for the content, privacy policies, or practices of any third-party websites.",
          ],
        },
        {
          heading: "4. Disclaimer of Warranties",
          paragraphs: [
            "The Site and its content are provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
          ],
        },
        {
          heading: "5. Limitation of Liability",
          paragraphs: [
            "To the fullest extent permitted by law, ABISAL GROUP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site.",
          ],
        },
        {
          heading: "6. Indemnification",
          paragraphs: [
            "You agree to indemnify and hold ABISAL GROUP harmless from any claims, losses, liabilities, and expenses (including reasonable legal fees) arising out of your use of the Site or your violation of these Terms.",
          ],
        },
        {
          heading: "7. Governing Law",
          paragraphs: [
            "These Terms shall be governed by and construed in accordance with applicable law, without regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts.",
          ],
        },
        {
          heading: "8. Changes to These Terms",
          paragraphs: [
            "We may revise these Terms at any time. The “Last updated” date at the top of this page reflects the date of the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the revised Terms.",
          ],
        },
        {
          heading: "9. Contact Us",
          paragraphs: [
            "If you have questions about these Terms, contact us at contacto@abisalgroup.com.",
          ],
        },
      ]}
      sectionsEs={[
        {
          heading: "1. Uso del Sitio",
          paragraphs: [
            "Podés usar el Sitio únicamente con fines lícitos y de acuerdo con estos Términos. Te comprometés a no usar el Sitio de ninguna manera que pueda dañar, deshabilitar o perjudicar el Sitio, o interferir con el uso que otros hagan de él.",
          ],
        },
        {
          heading: "2. Propiedad Intelectual",
          paragraphs: [
            "Todo el contenido del Sitio, incluyendo textos, gráficos, logos, imágenes y software, es propiedad de ABISAL GROUP o de sus licenciantes y está protegido por las leyes de propiedad intelectual. No podés reproducir, distribuir, modificar ni crear obras derivadas de ningún contenido del Sitio sin nuestro consentimiento previo por escrito.",
          ],
        },
        {
          heading: "3. Enlaces a Terceros",
          paragraphs: [
            "El Sitio puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por ABISAL. No somos responsables del contenido, las políticas de privacidad ni las prácticas de dichos sitios.",
          ],
        },
        {
          heading: "4. Exclusión de Garantías",
          paragraphs: [
            "El Sitio y su contenido se proporcionan “tal cual” y “según disponibilidad”, sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo, entre otras, garantías de comerciabilidad, idoneidad para un fin particular o no infracción.",
          ],
        },
        {
          heading: "5. Limitación de Responsabilidad",
          paragraphs: [
            "En la máxima medida permitida por la ley, ABISAL GROUP no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos que surjan de o estén relacionados con el uso o la imposibilidad de uso del Sitio.",
          ],
        },
        {
          heading: "6. Indemnización",
          paragraphs: [
            "Aceptás indemnizar y mantener indemne a ABISAL GROUP frente a cualquier reclamo, pérdida, responsabilidad y gasto (incluyendo honorarios legales razonables) que surja de tu uso del Sitio o de tu incumplimiento de estos Términos.",
          ],
        },
        {
          heading: "7. Ley Aplicable",
          paragraphs: [
            "Estos Términos se regirán e interpretarán de acuerdo con la ley aplicable, sin tener en cuenta sus principios de conflicto de leyes. Cualquier disputa que surja en relación con estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales competentes.",
          ],
        },
        {
          heading: "8. Cambios a estos Términos",
          paragraphs: [
            "Podemos revisar estos Términos en cualquier momento. La fecha de “Última actualización” en la parte superior de esta página refleja la fecha de la revisión más reciente. El uso continuado del Sitio después de que los cambios entren en vigor implica la aceptación de los Términos revisados.",
          ],
        },
        {
          heading: "9. Contacto",
          paragraphs: [
            "Si tenés preguntas sobre estos Términos, escribinos a contacto@abisalgroup.com.",
          ],
        },
      ]}
    />
  );
}
