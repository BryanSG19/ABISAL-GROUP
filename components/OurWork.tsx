"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, type KeyboardEvent } from "react";

type Locale = "es" | "en";

type WorkCase = {
  category: string;
  title: string;
  description: string;
  image: string | null;
};

function WorkCard({ item }: { item: WorkCase }) {
  const [flipped, setFlipped] = useState(false);

  const detail = (
    <>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a9a1f]">
        {item.category}
      </span>
      <h3 className="mt-6 text-xl font-semibold leading-snug text-abyss">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate/75">
        {item.description}
      </p>
    </>
  );

  if (!item.image) {
    return (
      <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-bone p-8 transition-transform duration-500 ease-abisal hover:-translate-y-1.5">
        <div>{detail}</div>
        <span className="mt-8 h-px w-8 bg-abyss/15 transition-all duration-500 ease-abisal group-hover:w-14 group-hover:bg-[#8a9a1f]" />
      </div>
    );
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((v) => !v);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onKeyDown={handleKeyDown}
      className="h-[26rem] w-full cursor-pointer [perspective:1500px]"
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-abisal [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
          <Image src={item.image} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-abyss/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-acid">
              {item.category}
            </span>
            <h3 className="mt-2 text-lg font-semibold leading-snug text-bone">
              {item.title}
            </h3>
          </div>
        </div>
        <div
          className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-bone p-8 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>{detail}</div>
          <span className="mt-8 h-px w-8 bg-[#8a9a1f]/60" />
        </div>
      </div>
    </div>
  );
}

const COPY = {
  es: {
    eyebrow: "Ejecuta",
    heading: "Nuestro Trabajo",
    cases: [
      {
        category: "Laboratorio de IA aplicada",
        title: "Laboratorio de IA para la validación de productos, servicios y mercado",
        description:
          "De hipótesis y señales de mercado a decisiones respaldadas por evidencia antes de invertir, lanzar o escalar.",
        image: "/our-work/card-01-validacion-mercado.webp",
      },
      {
        category: "Aplicaciones y agentes personalizados",
        title: "Aplicación de inteligencia competitiva",
        description:
          "Una aplicación a la medida para transformar información del mercado y la competencia en hallazgos estratégicos.",
        image: "/our-work/card-02-inteligencia-competitiva.webp",
      },
      {
        category: "Estrategia y adopción de IA",
        title: "Hoja de ruta para la adopción e implementación de IA",
        description:
          "Una hoja de ruta priorizada para pasar de un uso disperso de la IA a una implementación estratégica y sostenible.",
        image: "/our-work/card-03-hoja-de-ruta.webp",
      },
      {
        category: "Laboratorio de IA aplicada",
        title: "Laboratorio de IA para la innovación",
        description:
          "De retos reales a conceptos y prototipos con potencial de aplicación y creación de valor.",
        image: "/our-work/card-04-innovacion.webp",
      },
      {
        category: "Formación práctica en IA",
        title: "Taller de IA aplicada para prospectiva sectorial",
        description:
          "De señales y cambios emergentes a escenarios futuros y nuevas oportunidades para el sector.",
        image: "/our-work/card-05-prospectiva-sectorial.webp",
      },
      {
        category: "Estrategia e inteligencia aplicada",
        title: "Análisis de señales y tendencias",
        description:
          "De cambios relevantes en el entorno a hallazgos que orientan decisiones y prioridades estratégicas.",
        image: "/our-work/card-06-senales-tendencias.webp",
      },
      {
        category: "Estrategia y adopción de IA",
        title: "Diseño de modelo operativo para IA",
        description:
          "De iniciativas aisladas a roles, procesos y mecanismos claros para integrar y operar la IA.",
        image: "/our-work/card-07-modelo-operativo.webp",
      },
    ],
  },
  en: {
    eyebrow: "Carry out",
    heading: "Our Work",
    cases: [
      {
        category: "Applied AI Lab",
        title: "Applied AI Lab for Product, Service, and Market Validation",
        description:
          "From hypotheses and market signals to evidence-backed decisions before investing, launching, or scaling.",
        image: "/our-work/card-01-validacion-mercado.webp",
      },
      {
        category: "Custom Applications and Agents",
        title: "Competitive Intelligence Application",
        description:
          "A tailored application that turns market and competitor information into strategic insights.",
        image: "/our-work/card-02-inteligencia-competitiva.webp",
      },
      {
        category: "AI Strategy and Adoption",
        title: "AI Adoption and Implementation Roadmap",
        description:
          "A prioritized roadmap to move from scattered AI use to a strategic and sustainable implementation.",
        image: "/our-work/card-03-hoja-de-ruta.webp",
      },
      {
        category: "Applied AI Lab",
        title: "Applied AI Lab for Innovation",
        description:
          "From real challenges to concepts and prototypes with the potential for application and value creation.",
        image: "/our-work/card-04-innovacion.webp",
      },
      {
        category: "AI Literacy",
        title: "Applied AI Workshop for Sector Foresight",
        description:
          "From emerging signals and shifts to future scenarios and new opportunities for the sector.",
        image: "/our-work/card-05-prospectiva-sectorial.webp",
      },
      {
        category: "Strategy and Applied Intelligence",
        title: "Signals and Trends Analysis",
        description:
          "From relevant shifts in the environment to insights that guide strategic decisions and priorities.",
        image: "/our-work/card-06-senales-tendencias.webp",
      },
      {
        category: "AI Strategy and Adoption",
        title: "AI Operating Model Design",
        description:
          "From isolated initiatives to clear roles, processes, and mechanisms for integrating and operating AI.",
        image: "/our-work/card-07-modelo-operativo.webp",
      },
    ],
  },
};

export default function OurWork({ locale = "en" }: { locale?: Locale }) {
  const t = COPY[locale];

  return (
    <section id="our-work" className="relative bg-abyss section-pad">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-3xl font-thin leading-tight text-bone md:text-4xl">
            {t.heading}
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <WorkCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
