"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const PRINCIPLES = [
  {
    lines: ["INTEGR.", "ACIÓN"],
    image: "/showcase/showcase-3-office.jpg",
    description:
      "Creemos que la inteligencia artificial no genera valor por sí sola. El verdadero impacto ocurre cuando se integra con la estrategia, las personas y la forma en que una organización toma decisiones y ejecuta su trabajo.",
  },
  {
    lines: ["ALINE.", "ACIÓN"],
    image: "/showcase/showcase-1-boardroom.jpg",
    description:
      "Creemos que la adopción de la inteligencia artificial debe responder a un propósito claro, estar alineada con los objetivos del negocio y traducirse en capacidades que permanezcan en el tiempo.",
  },
  {
    lines: ["VENT.", "AJAS"],
    image: "/showcase/showcase-4-port.jpg",
    description:
      "Creemos que la tecnología es un habilitador, no el fin. Por eso nuestro trabajo no consiste únicamente en implementar soluciones, sino en ayudar a las organizaciones a desarrollar la capacidad de utilizarlas con criterio, confianza y autonomía.",
  },
  {
    lines: ["CAPACI.", "DADES"],
    image: "/showcase/showcase-2-warehouse.jpg",
    description:
      "Creemos que las organizaciones que liderarán el futuro no serán necesariamente las que adopten más inteligencia artificial, sino aquellas que sepan convertirla en una ventaja competitiva sostenible.",
  },
];

const CARD_VW = 70;
const GAP_VW = 5;
const SLOT_VW = CARD_VW + GAP_VW;
const N = PRINCIPLES.length;
const START_X = 5;
const END_X = START_X - (N - 1) * SLOT_VW;

export default function PrincipiosSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${START_X}vw`, `${END_X}vw`]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-bone"
      style={{ height: `${(N + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background watermark words */}
        <div
          className="pointer-events-none absolute inset-0 flex select-none flex-col justify-center"
          aria-hidden="true"
          style={{ lineHeight: 0.88 }}
        >
          <span
            className="block whitespace-nowrap font-black uppercase tracking-tighter text-slate"
            style={{ fontSize: "22vw", opacity: 0.05 }}
          >
            inteligencia
          </span>
          <span
            className="block whitespace-nowrap font-black uppercase tracking-tighter text-slate"
            style={{ fontSize: "22vw", opacity: 0.05 }}
          >
            artificial
          </span>
        </div>

        {/* Section header */}
        <div className="container-content relative z-10 pt-16 pb-6">
          <motion.p
            className="eyebrow mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Nuestros principios
          </motion.p>
          <motion.h2
            className="text-3xl font-thin text-abyss md:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            En qué creemos
          </motion.h2>
        </div>

        {/* Horizontal sliding cards track */}
        <motion.div
          className="absolute top-[148px] bottom-0 flex items-start"
          style={{ x }}
        >
          {PRINCIPLES.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `${CARD_VW}vw`, paddingRight: `${GAP_VW}vw` }}
            >
              {/* Image with word overlay */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ height: "calc(100vh - 300px)", minHeight: "260px" }}
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes={`${CARD_VW}vw`}
                  priority={i === 0}
                  aria-hidden="true"
                />
                {/* Gradient scrim so word is readable */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Word overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                  {p.lines.map((line, li) => (
                    <div
                      key={li}
                      className="font-black uppercase leading-none tracking-tight text-white"
                      style={{
                        fontSize: "min(16vw, 190px)",
                        opacity: li === 0 ? 0.25 : 0.2,
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description below card */}
              <p
                className="mt-4 text-sm leading-relaxed text-slate/70 md:text-base"
                style={{ maxWidth: `calc(${CARD_VW - GAP_VW}vw)` }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
