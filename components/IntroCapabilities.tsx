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
    highlight: "Profundiza",
    heading: "Estrategia, inteligencia aplicada y capacidades para el crecimiento.",
    paragraph:
      "ABISAL GROUP diseña marcos de trabajo a la medida que transforman la toma de decisiones y las formas de trabajar, integrando la inteligencia artificial para impulsar operaciones más inteligentes, un desempeño superior y resultados tangibles y medibles.",
    cards: [
      {
        number: "01",
        title: "Formación práctica en IA",
        description:
          "Fortalecemos la confianza y las capacidades de los equipos para apropiarse de la IA.",
        image: "/capabilities/card-01-ai-literacy-es.webp",
      },
      {
        number: "02",
        title: "Laboratorios de IA aplicada",
        description:
          "Convertimos desafíos empresariales en soluciones concretas y resultados medibles.",
        image: "/capabilities/card-02-applied-ai-sprints-es.webp",
      },
      {
        number: "03",
        title: "Estrategia y adopción de IA",
        description: "Pasamos de la experimentación a la generación de valor.",
        image: "/capabilities/card-03-ai-strategy-adoption-es.webp",
      },
      {
        number: "04",
        title: "Aplicaciones y agentes personalizados",
        description:
          "Creamos flujos de trabajo automatizados a la medida para necesidades empresariales en constante evolución.",
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
