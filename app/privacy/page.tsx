import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad — ABISAL GROUP",
  description:
    "Cómo ABISAL GROUP recopila, usa y protege la información cuando interactuás con nuestro sitio web y servicios.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      updated="14 de julio de 2026"
      locale="es"
    >
      <p>
        ABISAL GROUP (&ldquo;ABISAL&rdquo;, &ldquo;nosotros&rdquo; o
        &ldquo;nuestro&rdquo;) respeta tu privacidad y se compromete a
        proteger la información personal que compartís con nosotros. Esta
        Política de Privacidad explica qué información recopilamos, cómo la
        usamos y las opciones que tenés al visitar abisalgroup.com (el
        &ldquo;Sitio&rdquo;) o al interactuar con nosotros de otra manera.
      </p>

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
