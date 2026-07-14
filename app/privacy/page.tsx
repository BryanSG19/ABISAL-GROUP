import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ABISAL GROUP",
  description:
    "How ABISAL GROUP collects, uses, and protects personal information.",
};

const LAST_UPDATED = "July 14, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      titleEn="Privacy Policy"
      titleEs="Política de Privacidad"
      lastUpdated={LAST_UPDATED}
      introEn="ABISAL GROUP (“ABISAL,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you visit abisalgroup.com (the “Site”) or otherwise interact with us."
      introEs="ABISAL GROUP (“ABISAL”, “nosotros” o “nuestro”) respeta tu privacidad y se compromete a proteger la información personal que compartís con nosotros. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos y las opciones que tenés al visitar abisalgroup.com (el “Sitio”) o al interactuar con nosotros de otra manera."
      sectionsEn={[
        {
          heading: "1. Information We Collect",
          paragraphs: [
            "We collect information you provide directly to us, such as your name, email address, company, and any message details when you contact us, subscribe to updates, or request a consultation.",
            "We also collect certain information automatically when you use the Site, including your IP address, browser type, device information, pages visited, and referring URLs, typically through cookies and similar technologies.",
          ],
        },
        {
          heading: "2. How We Use Your Information",
          list: [
            "To respond to inquiries and provide the services you request.",
            "To send updates, newsletters, or marketing communications you have opted into.",
            "To improve and maintain the Site, and to understand how visitors use it.",
            "To comply with legal obligations and enforce our agreements.",
          ],
        },
        {
          heading: "3. Cookies and Tracking Technologies",
          paragraphs: [
            "The Site uses cookies and similar technologies to operate correctly and to analyze traffic. For details on the categories of cookies we use and how to manage your preferences, please see our Cookie Policy.",
          ],
        },
        {
          heading: "4. Sharing of Information",
          paragraphs: [
            "We do not sell your personal information. We may share information with trusted service providers who assist us in operating the Site and conducting our business (for example, hosting or email delivery providers), and where required by law or to protect our rights.",
          ],
        },
        {
          heading: "5. Data Retention",
          paragraphs: [
            "We retain personal information for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required or permitted by law.",
          ],
        },
        {
          heading: "6. Your Rights",
          paragraphs: [
            "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, and to withdraw consent where processing is based on consent. To exercise these rights, contact us using the details below.",
          ],
        },
        {
          heading: "7. Data Security",
          paragraphs: [
            "We implement reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, or misuse. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "8. International Data Transfers",
          paragraphs: [
            "Your information may be processed in countries other than your own. Where required, we take steps to ensure that such transfers comply with applicable data protection laws.",
          ],
        },
        {
          heading: "9. Children's Privacy",
          paragraphs: [
            "The Site is not directed to individuals under the age of 16, and we do not knowingly collect personal information from children.",
          ],
        },
        {
          heading: "10. Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page indicates when this Policy was last revised. Continued use of the Site after changes take effect constitutes acceptance of the revised Policy.",
          ],
        },
        {
          heading: "11. Contact Us",
          paragraphs: [
            "If you have questions about this Privacy Policy or how we handle your information, contact us at privacy@abisalgroup.com.",
          ],
        },
      ]}
      sectionsEs={[
        {
          heading: "1. Información que Recopilamos",
          paragraphs: [
            "Recopilamos la información que nos proporcionás directamente, como tu nombre, correo electrónico, empresa y el contenido de tu mensaje cuando nos contactás, te suscribís a novedades o solicitás una consultoría.",
            "También recopilamos cierta información de forma automática cuando usás el Sitio, incluyendo tu dirección IP, tipo de navegador, información del dispositivo, páginas visitadas y URL de referencia, generalmente mediante cookies y tecnologías similares.",
          ],
        },
        {
          heading: "2. Cómo Usamos tu Información",
          list: [
            "Para responder consultas y brindar los servicios que solicitás.",
            "Para enviarte novedades, boletines o comunicaciones de marketing que hayas aceptado recibir.",
            "Para mejorar y mantener el Sitio, y entender cómo lo usan los visitantes.",
            "Para cumplir con obligaciones legales y hacer valer nuestros acuerdos.",
          ],
        },
        {
          heading: "3. Cookies y Tecnologías de Seguimiento",
          paragraphs: [
            "El Sitio utiliza cookies y tecnologías similares para funcionar correctamente y analizar el tráfico. Para más detalles sobre las categorías de cookies que usamos y cómo gestionar tus preferencias, consultá nuestra Política de Cookies.",
          ],
        },
        {
          heading: "4. Compartir Información",
          paragraphs: [
            "No vendemos tu información personal. Podemos compartir información con proveedores de confianza que nos ayudan a operar el Sitio y nuestro negocio (por ejemplo, proveedores de hosting o de envío de correo electrónico), y cuando la ley lo exija o para proteger nuestros derechos.",
          ],
        },
        {
          heading: "5. Retención de Datos",
          paragraphs: [
            "Conservamos la información personal durante el tiempo necesario para cumplir con los fines descritos en esta Política, salvo que la ley exija o permita un período de retención mayor.",
          ],
        },
        {
          heading: "6. Tus Derechos",
          paragraphs: [
            "Según tu ubicación, es posible que tengas derecho a acceder, corregir, eliminar o restringir el uso de tu información personal, y a retirar tu consentimiento cuando el tratamiento se base en él. Para ejercer estos derechos, contactanos con los datos que figuran abajo.",
          ],
        },
        {
          heading: "7. Seguridad de los Datos",
          paragraphs: [
            "Implementamos medidas técnicas y organizativas razonables diseñadas para proteger la información personal contra accesos no autorizados, pérdida o uso indebido. Ningún método de transmisión o almacenamiento es completamente seguro, y no podemos garantizar una seguridad absoluta.",
          ],
        },
        {
          heading: "8. Transferencias Internacionales de Datos",
          paragraphs: [
            "Tu información puede procesarse en países distintos al tuyo. Cuando corresponda, tomamos medidas para asegurar que dichas transferencias cumplan con las leyes de protección de datos aplicables.",
          ],
        },
        {
          heading: "9. Privacidad de Menores",
          paragraphs: [
            "El Sitio no está dirigido a personas menores de 16 años, y no recopilamos conscientemente información personal de menores.",
          ],
        },
        {
          heading: "10. Cambios a esta Política",
          paragraphs: [
            "Podemos actualizar esta Política de Privacidad periódicamente. La fecha de “Última actualización” en la parte superior de esta página indica cuándo se revisó por última vez. El uso continuado del Sitio después de que los cambios entren en vigor implica la aceptación de la Política revisada.",
          ],
        },
        {
          heading: "11. Contacto",
          paragraphs: [
            "Si tenés preguntas sobre esta Política de Privacidad o sobre cómo manejamos tu información, escribinos a privacy@abisalgroup.com.",
          ],
        },
      ]}
    />
  );
}
