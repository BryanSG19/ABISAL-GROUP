"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Locale = "es" | "en";

const VIDEOS = [
  "/videos/what-we-do-01.mp4",
  "/videos/what-we-do-02.mp4",
  "/videos/what-we-do-03.mp4",
  "/videos/what-we-do-04.mp4",
];

const SHARD_COUNT = 5;
const SHARD_WIDTH = 100 / SHARD_COUNT;
const SHARD_SKEW = 16;
const SHARD_OVERLAP = 16;

function shardClipPath(i: number) {
  const topLeft = i * SHARD_WIDTH - SHARD_OVERLAP;
  const topRight = (i + 1) * SHARD_WIDTH + SHARD_OVERLAP;
  const bottomLeft = topLeft - SHARD_SKEW;
  const bottomRight = topRight - SHARD_SKEW;
  return `polygon(${topLeft}% 0, ${topRight}% 0, ${bottomRight}% 100%, ${bottomLeft}% 100%)`;
}

function shuffledDelays(count: number) {
  const delays = Array.from({ length: count }, (_, i) => i * 110);
  for (let i = delays.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [delays[i], delays[j]] = [delays[j], delays[i]];
  }
  return delays;
}

const COPY = {
  es: {
    eyebrow: "Conoce",
    heading: "Lo que hacemos",
    paragraph:
      "Trabajamos con organizaciones en distintos niveles de madurez: desde formación ejecutiva y laboratorios de IA aplicada enfocados en retos específicos, pasando por el desarrollo de aplicaciones a la medida que responden a necesidades reales del negocio, hasta la definición de estrategias y hojas de ruta para su adopción e implementación.",
    services: [
      {
        number: "01",
        title: "Formación práctica en IA",
        description:
          "Talleres, sesiones ejecutivas y formación práctica que ayudan a los equipos a superar las barreras de adopción de la IA, comprender su estado actual, dimensionar su impacto y aplicarla en su contexto diario de negocio, no solo para generar eficiencias, sino también para crear valor.",
      },
      {
        number: "02",
        title: "Laboratorios de IA aplicada",
        description:
          "Proyectos enfocados que resuelven desafíos empresariales específicos en un plazo definido, con entregables y resultados tangibles que demuestran el valor de la aplicación de la IA, con miras a transformar la toma de decisiones, mejorar la ejecución y desarrollar nuevas capacidades.",
      },
      {
        number: "03",
        title: "Estrategia y adopción de IA",
        description:
          "Diagnósticos, priorización de casos de uso, desarrollo de estrategias y hojas de ruta para su implementación, que ayudan a las empresas a pasar de una adopción basada en la experimentación individual, dispersa y desestructurada a una adopción orientada a objetivos estratégicos y a la creación de valor.",
      },
      {
        number: "04",
        title: "Aplicaciones y agentes personalizados",
        description:
          "Desarrollo de aplicaciones y agentes a la medida, diseñados en torno a los equipos, procesos y necesidades particulares de cada empresa, con capacidad para evolucionar junto con el negocio.",
      },
    ],
  },
  en: {
    eyebrow: "What We Do",
    heading: "What We Do",
    paragraph:
      "We work with organizations at different levels of maturity — from executive education and focused AI sprints to strategic adoption roadmaps and tailored engines built around real business needs.",
    services: [
      {
        number: "01",
        title: "AI Literacy",
        description:
          "Workshops, executive sessions, and practical training that help teams understand, adopt, and apply AI in their daily business context.",
      },
      {
        number: "02",
        title: "Applied AI Sprints",
        description:
          "Focused projects that solve specific business challenges with clear timelines, practical deliverables, and tangible outcomes.",
      },
      {
        number: "03",
        title: "AI Strategy & Adoption",
        description:
          "Diagnostics, prioritization, and roadmaps that help companies move from scattered experimentation to organized value creation.",
      },
      {
        number: "04",
        title: "Custom Engines & Agents",
        description:
          "Tailored engines and agents designed around the company's data, processes, and evolving business needs.",
      },
    ],
  },
};

export default function WhatWeDo({ locale = "en" }: { locale?: Locale }) {
  const t = COPY[locale];
  const [active, setActive] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delays = useMemo(() => shuffledDelays(SHARD_COUNT), [active]);

  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-warm section-pad"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,14,25,0.08) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4 text-[#8a9a1f]">{t.eyebrow}</p>
          <h2 className="text-3xl font-thin leading-tight text-abyss md:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-6 max-w-none text-base leading-relaxed text-slate/80">
            {t.paragraph}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            {t.services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setActive(i)}
                className="group grid cursor-default grid-cols-[3rem_1fr] gap-6 border-t border-abyss/10 py-8 first:border-t-0 md:grid-cols-[4rem_1fr] md:first:border-t"
              >
                <span className="relative mt-1 inline-flex w-fit items-start overflow-hidden rounded px-1.5 py-0.5">
                  {active === i && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 origin-left bg-deepblue"
                    />
                  )}
                  <span className="relative text-sm font-medium text-acid">
                    {service.number}
                  </span>
                </span>
                <div>
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      active === i ? "text-abyss" : "text-abyss/80"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate/80 md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-abyss shadow-[16px_16px_40px_-12px_rgba(0,14,25,0.35)] md:aspect-[3/4]">
              <video
                key={active}
                className="absolute inset-0 h-full w-full object-cover"
                src={VIDEOS[active]}
                autoPlay
                loop
                muted
                playsInline
              />
              <div key={`shards-${active}`} className="pointer-events-none absolute inset-0 z-10">
                {Array.from({ length: SHARD_COUNT }, (_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: "-3%", y: "4%" }}
                    animate={{ x: "0%", y: "-115%" }}
                    transition={{
                      duration: 0.85,
                      delay: delays[idx] / 1000,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 bg-deepblue"
                    style={{ clipPath: shardClipPath(idx) }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
