"use client";

import { motion } from "framer-motion";
import ShardImageCycler from "./ShardImageCycler";
import CapabilitiesCarousel from "./CapabilitiesCarousel";

type Locale = "es" | "en";

const SHOWCASE_IMAGES = [
  "/showcase/showcase-1-boardroom.jpg",
  "/showcase/showcase-2-warehouse.jpg",
  "/showcase/showcase-3-office.jpg",
  "/showcase/showcase-4-port.jpg",
];

const COPY = {
  es: {
    heading: "Estrategia, inteligencia aplicada y capacidades para el crecimiento.",
    paragraph:
      "ABISAL impulsa la transformación de las organizaciones ampliando el campo de la innovación más allá del producto.",
    paragraph2:
      "Utilizamos la inteligencia artificial para repensar cómo las empresas toman decisiones, diseñan sus procesos, operan, se relacionan con sus clientes y desarrollan sus capacidades. Esto mediante rutas adaptadas a la escala, madurez y realidad de cada una de ellas, orientadas a lograr operaciones más inteligentes, un desempeño superior y resultados medibles.",
    cards: [
      {
        number: "01",
        title: "Profundiza en la realidad del negocio",
        description:
          "Partimos de la realidad, la escala y las prioridades de cada organización, y profundizamos en el ecosistema en el que opera y las señales de cambio que pueden redefinir su futuro para identificar oportunidades que no siempre son evidentes.",
        image: "/capabilities/card-01-ai-literacy-es.webp",
      },
      {
        number: "02",
        title: "Amplía el campo de la innovación",
        description:
          "Utilizamos la IA para llevar la innovación más allá del producto y explorar nuevas posibilidades en el modelo de negocio, los procesos, la experiencia del cliente y la forma en que la organización trabaja.",
        image: "/capabilities/card-02-applied-ai-sprints-es.webp",
      },
      {
        number: "03",
        title: "Rediseña antes de automatizar",
        description:
          "Replanteamos procesos, decisiones y formas de trabajo a partir de las posibilidades que abre la IA. La transformación no comienza incorporando IA al proceso existente, sino reconsiderando el proceso desde sus fundamentos.",
        image: "/capabilities/card-03-ai-strategy-adoption-es.webp",
      },
      {
        number: "04",
        title: "Evoluciona para sostener el cambio.",
        description:
          "Desarrollamos capacidades de transformación mediante la integración de las estructuras y formas de trabajo necesarias para que la organización pueda implementar, adaptarse, aprender y evolucionar de manera continua.",
        image: "/capabilities/card-04-custom-engines-agents-es.webp",
      },
    ],
  },
  en: {
    highlight: "Discover",
    heading: "Strategy, applied intelligence, and growth capabilities.",
    paragraph:
      "ABISAL GROUP designs tailored frameworks that transform decision-making and ways of working, embedding artificial intelligence to enable smarter operations, stronger performance, and tangible, measurable results.",
    cards: [
      {
        number: "01",
        title: "AI Literacy",
        description:
          "Build the confidence and capabilities teams need to adopt AI and put it into practice.",
        image: "/capabilities/card-01-ai-literacy-es.webp",
      },
      {
        number: "02",
        title: "Applied AI Labs",
        description:
          "Turn business challenges into practical solutions and measurable outcomes.",
        image: "/capabilities/card-02-applied-ai-sprints-es.webp",
      },
      {
        number: "03",
        title: "AI Strategy and Adoption",
        description: "Move from AI experimentation to tangible results.",
        image: "/capabilities/card-03-ai-strategy-adoption-es.webp",
      },
      {
        number: "04",
        title: "Custom AI Applications and Agents",
        description:
          "Create tailored intelligence and automated workflows for evolving business needs.",
        image: "/capabilities/card-04-custom-engines-agents-es.webp",
      },
    ],
  },
};

export default function IntroCapabilities({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = COPY[locale];

  return (
    <section className="relative overflow-hidden bg-abyss section-pad">
      <div className="container-content">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            {"highlight" in t && t.highlight && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-acid md:text-sm"
              >
                {t.highlight}
              </motion.p>
            )}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-3xl font-thin leading-tight text-bone md:text-4xl"
            >
              {t.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-coolgray md:text-lg"
            >
              {t.paragraph}
            </motion.p>
            {"paragraph2" in t && t.paragraph2 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 max-w-xl text-base leading-relaxed text-coolgray md:text-lg"
              >
                {t.paragraph2}
              </motion.p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ShardImageCycler
              images={SHOWCASE_IMAGES}
              className="aspect-[4/3] w-full rounded-2xl border border-white/10 md:aspect-[16/11]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-32"
        >
          <CapabilitiesCarousel items={t.cards} locale={locale} />
        </motion.div>
      </div>
    </section>
  );
}
