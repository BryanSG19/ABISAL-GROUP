import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Términos de Uso — ABISAL GROUP",
  description:
    "Los términos y condiciones que rigen el uso del sitio web de ABISAL GROUP.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Términos de uso"
      updated="14 de julio de 2026"
      locale="es"
    >
      <p>
        Estos Términos de Uso (&ldquo;Términos&rdquo;) rigen tu acceso y
        uso de abisalgroup.com (el &ldquo;Sitio&rdquo;), operado por
        ABISAL GROUP (&ldquo;ABISAL&rdquo;, &ldquo;nosotros&rdquo; o
        &ldquo;nuestro&rdquo;). Al acceder o usar el Sitio, aceptás quedar
        sujeto a estos Términos. Si no estás de acuerdo, por favor no uses
        el Sitio.
      </p>

      <div>
        <h2 className="text-xl font-medium text-bone">1. Uso del Sitio</h2>
        <p className="mt-3">
          Podés usar el Sitio únicamente con fines lícitos y de acuerdo con
          estos Términos. Te comprometés a no usar el Sitio de ninguna
          manera que pueda dañar, deshabilitar o perjudicar el Sitio, o
          interferir con el uso que otros hagan de él.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          2. Propiedad Intelectual
        </h2>
        <p className="mt-3">
          Todo el contenido del Sitio, incluyendo textos, gráficos, logos,
          imágenes y software, es propiedad de ABISAL GROUP o de sus
          licenciantes y está protegido por las leyes de propiedad
          intelectual. No podés reproducir, distribuir, modificar ni crear
          obras derivadas de ningún contenido del Sitio sin nuestro
          consentimiento previo por escrito.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          3. Enlaces a Terceros
        </h2>
        <p className="mt-3">
          El Sitio puede contener enlaces a sitios web de terceros que no
          son propiedad ni están controlados por ABISAL. No somos
          responsables del contenido, las políticas de privacidad ni las
          prácticas de dichos sitios.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          4. Exclusión de Garantías
        </h2>
        <p className="mt-3">
          El Sitio y su contenido se proporcionan &ldquo;tal cual&rdquo; y
          &ldquo;según disponibilidad&rdquo;, sin garantías de ningún tipo,
          ya sean expresas o implícitas, incluyendo, entre otras, garantías
          de comerciabilidad, idoneidad para un fin particular o no
          infracción.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          5. Limitación de Responsabilidad
        </h2>
        <p className="mt-3">
          En la máxima medida permitida por la ley, ABISAL GROUP no será
          responsable por daños indirectos, incidentales, especiales,
          consecuentes o punitivos que surjan de o estén relacionados con el
          uso o la imposibilidad de uso del Sitio.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">6. Indemnización</h2>
        <p className="mt-3">
          Aceptás indemnizar y mantener indemne a ABISAL GROUP frente a
          cualquier reclamo, pérdida, responsabilidad y gasto (incluyendo
          honorarios legales razonables) que surja de tu uso del Sitio o de
          tu incumplimiento de estos Términos.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">7. Ley Aplicable</h2>
        <p className="mt-3">
          Estos Términos se regirán e interpretarán de acuerdo con la ley
          aplicable, sin tener en cuenta sus principios de conflicto de
          leyes. Cualquier disputa que surja en relación con estos Términos
          estará sujeta a la jurisdicción exclusiva de los tribunales
          competentes.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">
          8. Cambios a estos Términos
        </h2>
        <p className="mt-3">
          Podemos revisar estos Términos en cualquier momento. La fecha de
          &ldquo;Última actualización&rdquo; en la parte superior de esta
          página refleja la fecha de la revisión más reciente. El uso
          continuado del Sitio después de que los cambios entren en vigor
          implica la aceptación de los Términos revisados.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-bone">9. Contacto</h2>
        <p className="mt-3">
          Si tenés preguntas sobre estos Términos, escribinos a{" "}
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
