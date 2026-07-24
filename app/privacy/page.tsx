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
          <a href="/cookies" className="text-acid hover:underline">
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

      <hr className="border-white/10" />

      <div>
        <h2 className="text-2xl font-thin text-bone">Política de Privacidad</h2>
        <p className="mt-2 text-sm text-mutedgray">
          <strong className="font-medium text-bone">ABISAL GROUP</strong> —
          Última actualización: 14 de julio de 2026
        </p>
        <p className="mt-6">
          ABISAL GROUP (&ldquo;ABISAL&rdquo;, &ldquo;nosotros&rdquo; o
          &ldquo;nuestro&rdquo;) respeta tu privacidad y se compromete a
          proteger la información personal que compartís con nosotros. Esta
          Política de Privacidad explica qué información recopilamos, cómo la
          usamos y las opciones que tenés al visitar abisalgroup.com (el
          &ldquo;Sitio&rdquo;) o al interactuar con nosotros de otra manera.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          1. Información que Recopilamos
        </h2>
        <p className="mt-3">
          Recopilamos la información que nos proporcionás directamente, como
          tu nombre, correo electrónico, empresa y el contenido de tu mensaje
          cuando nos contactás, te suscribís a novedades o solicitás una
          consultoría.
        </p>
        <p className="mt-3">
          También recopilamos cierta información de forma automática cuando
          usás el Sitio, incluyendo tu dirección IP, tipo de navegador,
          información del dispositivo, páginas visitadas y URL de
          referencia, generalmente mediante cookies y tecnologías similares.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          2. Cómo Usamos tu Información
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Para responder consultas y brindar los servicios que solicitás.
          </li>
          <li>
            Para enviarte novedades, boletines o comunicaciones de marketing
            que hayas aceptado recibir.
          </li>
          <li>
            Para mejorar y mantener el Sitio, y entender cómo lo usan los
            visitantes.
          </li>
          <li>
            Para cumplir con obligaciones legales y hacer valer nuestros
            acuerdos.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          3. Cookies y Tecnologías de Seguimiento
        </h2>
        <p className="mt-3">
          El Sitio utiliza cookies y tecnologías similares para funcionar
          correctamente y analizar el tráfico. Para más detalles sobre las
          categorías de cookies que usamos y cómo gestionar tus preferencias,
          consultá nuestra{" "}
          <a href="/cookies" className="text-acid hover:underline">
            Política de Cookies
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          4. Compartir Información
        </h2>
        <p className="mt-3">
          No vendemos tu información personal. Podemos compartir información
          con proveedores de confianza que nos ayudan a operar el Sitio y
          nuestro negocio (por ejemplo, proveedores de hosting o de envío de
          correo electrónico), y cuando la ley lo exija o para proteger
          nuestros derechos.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          5. Retención de Datos
        </h2>
        <p className="mt-3">
          Conservamos la información personal durante el tiempo necesario
          para cumplir con los fines descritos en esta Política, salvo que la
          ley exija o permita un período de retención mayor.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">6. Tus Derechos</h2>
        <p className="mt-3">
          Según tu ubicación, es posible que tengas derecho a acceder,
          corregir, eliminar o restringir el uso de tu información personal,
          y a retirar tu consentimiento cuando el tratamiento se base en él.
          Para ejercer estos derechos, contactanos con los datos que figuran
          abajo.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          7. Seguridad de los Datos
        </h2>
        <p className="mt-3">
          Implementamos medidas técnicas y organizativas razonables
          diseñadas para proteger la información personal contra accesos no
          autorizados, pérdida o uso indebido. Ningún método de transmisión o
          almacenamiento es completamente seguro, y no podemos garantizar una
          seguridad absoluta.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          8. Transferencias Internacionales de Datos
        </h2>
        <p className="mt-3">
          Tu información puede procesarse en países distintos al tuyo.
          Cuando corresponda, tomamos medidas para asegurar que dichas
          transferencias cumplan con las leyes de protección de datos
          aplicables.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          9. Privacidad de Menores
        </h2>
        <p className="mt-3">
          El Sitio no está dirigido a personas menores de 16 años, y no
          recopilamos conscientemente información personal de menores.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          10. Cambios a esta Política
        </h2>
        <p className="mt-3">
          Podemos actualizar esta Política de Privacidad periódicamente. La
          fecha de &ldquo;Última actualización&rdquo; en la parte superior de
          esta página indica cuándo se revisó por última vez. El uso
          continuado del Sitio después de que los cambios entren en vigor
          implica la aceptación de la Política revisada.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">11. Contacto</h2>
        <p className="mt-3">
          Si tenés preguntas sobre esta Política de Privacidad o sobre cómo
          manejamos tu información, escribinos a{" "}
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
