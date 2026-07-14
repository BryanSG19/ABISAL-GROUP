import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — ABISAL GROUP",
  description: "How ABISAL GROUP uses cookies on abisalgroup.com.",
};

const LAST_UPDATED = "July 14, 2026";

export default function CookiePolicyPage() {
  return (
    <LegalPage
      titleEn="Cookie Policy"
      titleEs="Política de Cookies"
      lastUpdated={LAST_UPDATED}
      introEn="This Cookie Policy explains how ABISAL GROUP (“ABISAL,” “we,” “us,” or “our”) uses cookies and similar technologies on abisalgroup.com (the “Site”), and the choices available to you."
      introEs="Esta Política de Cookies explica cómo ABISAL GROUP (“ABISAL”, “nosotros” o “nuestro”) utiliza cookies y tecnologías similares en abisalgroup.com (el “Sitio”), y las opciones disponibles para vos."
      sectionsEn={[
        {
          heading: "1. What Are Cookies",
          paragraphs: [
            "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, as well as to provide information to the site owner.",
          ],
        },
        {
          heading: "2. How We Use Cookies",
          paragraphs: [
            "We use cookies to operate the Site reliably, remember your preferences, and understand how visitors interact with our content so we can improve it over time.",
          ],
        },
        {
          heading: "3. Types of Cookies We Use",
          list: [
            "Essential cookies — required for the Site to function properly and cannot be switched off in our systems.",
            "Analytics cookies — help us understand how visitors use the Site so we can measure and improve performance.",
            "Functional cookies — enable enhanced features and remember choices you make while browsing.",
          ],
        },
        {
          heading: "4. Managing Cookies",
          paragraphs: [
            "Most web browsers allow you to control cookies through their settings, including blocking or deleting them. Please note that disabling certain cookies may affect the functionality of the Site.",
          ],
        },
        {
          heading: "5. Changes to This Policy",
          paragraphs: [
            "We may update this Cookie Policy from time to time. The “Last updated” date at the top of this page indicates when this Policy was last revised.",
          ],
        },
        {
          heading: "6. Contact Us",
          paragraphs: [
            "If you have questions about this Cookie Policy, contact us at privacy@abisalgroup.com.",
          ],
        },
      ]}
      sectionsEs={[
        {
          heading: "1. Qué son las Cookies",
          paragraphs: [
            "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitás un sitio web. Se utilizan ampliamente para que los sitios web funcionen de manera eficiente, así como para brindar información al propietario del sitio.",
          ],
        },
        {
          heading: "2. Cómo Usamos las Cookies",
          paragraphs: [
            "Usamos cookies para que el Sitio funcione de manera confiable, recordar tus preferencias y entender cómo los visitantes interactúan con nuestro contenido para poder mejorarlo con el tiempo.",
          ],
        },
        {
          heading: "3. Tipos de Cookies que Usamos",
          list: [
            "Cookies esenciales — necesarias para que el Sitio funcione correctamente y no pueden desactivarse en nuestros sistemas.",
            "Cookies analíticas — nos ayudan a entender cómo los visitantes usan el Sitio para poder medir y mejorar su rendimiento.",
            "Cookies funcionales — habilitan funciones mejoradas y recuerdan las elecciones que hacés durante la navegación.",
          ],
        },
        {
          heading: "4. Gestión de Cookies",
          paragraphs: [
            "La mayoría de los navegadores web te permiten controlar las cookies desde su configuración, incluyendo bloquearlas o eliminarlas. Tené en cuenta que desactivar ciertas cookies puede afectar el funcionamiento del Sitio.",
          ],
        },
        {
          heading: "5. Cambios a esta Política",
          paragraphs: [
            "Podemos actualizar esta Política de Cookies periódicamente. La fecha de “Última actualización” en la parte superior de esta página indica cuándo se revisó por última vez.",
          ],
        },
        {
          heading: "6. Contacto",
          paragraphs: [
            "Si tenés preguntas sobre esta Política de Cookies, escribinos a privacy@abisalgroup.com.",
          ],
        },
      ]}
    />
  );
}
