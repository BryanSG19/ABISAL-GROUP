import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Cookies — ABISAL GROUP",
  description:
    "Cómo ABISAL GROUP usa cookies y tecnologías similares en nuestro sitio web.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Política de cookies"
      updated="14 de julio de 2026"
      locale="es"
    >
      <p>
        Esta Política de Cookies explica cómo ABISAL GROUP
        (&ldquo;ABISAL&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;)
        utiliza cookies y tecnologías similares en abisalgroup.com (el
        &ldquo;Sitio&rdquo;), y las opciones disponibles para vos.
      </p>

      <div>
        <h2 className="text-xl font-medium text-bone">
          1. Qué son las Cookies
        </h2>
        <p className="mt-3">
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitás un sitio web. Se utilizan ampliamente
          para que los sitios web funcionen de manera eficiente, así como
          para brindar información al propietario del sitio.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          2. Cómo Usamos las Cookies
        </h2>
        <p className="mt-3">
          Usamos cookies para que el Sitio funcione de manera confiable,
          recordar tus preferencias y entender cómo los visitantes
          interactúan con nuestro contenido para poder mejorarlo con el
          tiempo.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          3. Tipos de Cookies que Usamos
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-bone">
              Cookies esenciales
            </strong>{" "}
            — necesarias para que el Sitio funcione correctamente y no
            pueden desactivarse en nuestros sistemas.
          </li>
          <li>
            <strong className="font-medium text-bone">
              Cookies analíticas
            </strong>{" "}
            — nos ayudan a entender cómo los visitantes usan el Sitio para
            poder medir y mejorar su rendimiento.
          </li>
          <li>
            <strong className="font-medium text-bone">
              Cookies funcionales
            </strong>{" "}
            — habilitan funciones mejoradas y recuerdan las elecciones que
            hacés durante la navegación.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">4. Gestión de Cookies</h2>
        <p className="mt-3">
          La mayoría de los navegadores web te permiten controlar las
          cookies desde su configuración, incluyendo bloquearlas o
          eliminarlas. Tené en cuenta que desactivar ciertas cookies puede
          afectar el funcionamiento del Sitio.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          5. Cambios a esta Política
        </h2>
        <p className="mt-3">
          Podemos actualizar esta Política de Cookies periódicamente. La
          fecha de &ldquo;Última actualización&rdquo; en la parte superior de
          esta página indica cuándo se revisó por última vez.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">6. Contacto</h2>
        <p className="mt-3">
          Si tenés preguntas sobre esta Política de Cookies, escribinos a{" "}
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
