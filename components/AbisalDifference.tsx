"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Locale = "es" | "en";

const COPY = {
  es: {
    eyebrow: "La diferencia Abisal",
    heading: "La diferencia Abisal",
    paragraph:
      "Vamos más allá del desafío evidente para entender qué es lo que realmente mueve al negocio. Luego diseñamos los marcos de trabajo, capacidades y aplicaciones inteligentes necesarias para convertir la estrategia en un desempeño medible.",
    pillars: [
      {
        number: "01",
        title: "Comprensión profunda del negocio",
        description: "Partimos del contexto real del negocio, no de una herramienta.",
      },
      {
        number: "02",
        title: "Inteligencia aplicada",
        description: "Usamos IA donde genera valor, claridad y apalancamiento.",
      },
      {
        number: "03",
        title: "Marcos a la medida",
        description:
          "Cada empresa tiene sus propios procesos, cultura, datos y desafíos de crecimiento.",
      },
      {
        number: "04",
        title: "De la experimentación al valor",
        description:
          "Vamos más allá de los pilotos hacia capacidades que mejoran cómo deciden y operan los equipos.",
      },
      {
        number: "05",
        title: "Ejecución estratégica",
        description:
          "Conectamos ideas, herramientas, personas y procesos en desempeño de negocio.",
      },
    ],
  },
  en: {
    eyebrow: "Abisal Difference",
    heading: "Abisal Difference",
    paragraph:
      "We go beneath the obvious challenge to understand what truly moves the business. Then we design the frameworks, capabilities, and intelligent applications needed to turn strategy into measurable performance.",
    pillars: [
      {
        number: "01",
        title: "Deep Business Understanding",
        description: "We start with the real business context, not with a tool.",
      },
      {
        number: "02",
        title: "Applied Intelligence",
        description: "We use AI where it creates value, clarity, and leverage.",
      },
      {
        number: "03",
        title: "Tailored Frameworks",
        description:
          "Every company has its own processes, culture, data, and growth challenges.",
      },
      {
        number: "04",
        title: "From Experimentation to Value",
        description:
          "We move beyond pilots into capabilities that improve how teams decide and operate.",
      },
      {
        number: "05",
        title: "Strategic Execution",
        description:
          "We connect ideas, tools, people, and processes into business performance.",
      },
    ],
  },
};

export default function AbisalDifference({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = COPY[locale];

  return (
    <section
      id="abisal-difference"
      className="relative overflow-hidden bg-deepblue section-pad"
    >
      <Image
        src="/brand/texture-dark-dots-mark.jpg"
        alt=""
        fill
        className="object-cover object-right opacity-20"
        aria-hidden="true"
      />
      <div className="container-content relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="text-3xl font-thin leading-tight text-bone md:text-4xl">
              {t.heading}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-coolgray">
              {t.paragraph}
            </p>
          </motion.div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {t.pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group bg-deepblue p-7 transition-colors duration-300 hover:bg-white/[0.03] ${
                    i === t.pillars.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-acid">
                    {pillar.number}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-bone md:text-lg">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-mutedgray">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
