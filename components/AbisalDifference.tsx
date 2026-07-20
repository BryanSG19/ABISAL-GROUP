"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, type ComponentType } from "react";
import {
  Compass,
  Globe2,
  BrainCircuit,
  ShieldCheck,
  Blocks,
  Target,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

type Locale = "es" | "en";
type IconType = ComponentType<{ className?: string }>;

type Pillar = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
};

const COPY: Record<
  Locale,
  { eyebrow: string; heading: string; paragraph: string; pillars: Pillar[] }
> = {
  es: {
    eyebrow: "Distingue",
    heading: "La diferencia Abisal",
    paragraph:
      "Vamos más allá del desafío aparente para comprender de forma integral el negocio y el entorno en el que opera. Desde esa perspectiva, diseñamos marcos de trabajo y aplicaciones inteligentes adaptadas a las necesidades reales de cada organización, orientadas al desarrollo de capacidades sostenibles, repetibles y escalables que se traduzcan en creación de valor, crecimiento y resultados medibles.",
    pillars: [
      {
        number: "01",
        title: "Comprensión profunda del negocio",
        description:
          "Comenzamos por la realidad y el contexto de cada organización como punto de partida, antes de definir metodologías, herramientas o soluciones.",
        icon: Compass,
      },
      {
        number: "02",
        title: "Visión integrada y multisectorial",
        description:
          "Ampliamos la mirada más allá de la empresa como unidad para comprender el ecosistema en el que opera, sus interdependencias y las dinámicas que conectan distintos sectores.",
        icon: Globe2,
      },
      {
        number: "03",
        title: "Aplicación inteligente de la IA",
        description:
          "Integramos la IA donde puede generar mayor valor y apalancamiento para el negocio, trascendiendo la eficiencia, el ahorro y la optimización del desempeño.",
        icon: BrainCircuit,
      },
      {
        number: "04",
        title: "Aplicación responsable de la IA",
        description:
          "Incorporamos criterios éticos, de transparencia y supervisión humana para asegurar una aplicación responsable y alineada con la realidad de cada organización.",
        icon: ShieldCheck,
      },
      {
        number: "05",
        title: "Arquitectura metodológica a la medida",
        description:
          "Diseñamos marcos de trabajo y metodologías adaptados a las necesidades de cada organización, reconociendo que cada una tiene un ADN propio, definido por su estrategia, procesos, cultura y desafíos de crecimiento.",
        icon: Blocks,
      },
      {
        number: "06",
        title: "Ejecución estratégica",
        description:
          "De la teoría a la acción, nuestro enfoque está en una ejecución alineada con objetivos claros. Conectamos ideas, herramientas y procesos con la estrategia de la empresa para la creación de valor.",
        icon: Target,
      },
      {
        number: "07",
        title: "Desarrollo de capacidades",
        description:
          "Superamos la experimentación para desarrollar capacidades y nuevas formas de trabajo sostenibles, repetibles y escalables.",
        icon: TrendingUp,
      },
      {
        number: "08",
        title: "Evolución continua",
        description:
          "Ninguna solución es definitiva. Implementamos, aprendemos y ajustamos continuamente a partir de la experiencia y la retroalimentación.",
        icon: RefreshCw,
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
        icon: Compass,
      },
      {
        number: "02",
        title: "Applied Intelligence",
        description: "We use AI where it creates value, clarity, and leverage.",
        icon: BrainCircuit,
      },
      {
        number: "03",
        title: "Tailored Frameworks",
        description:
          "Every company has its own processes, culture, data, and growth challenges.",
        icon: Blocks,
      },
      {
        number: "04",
        title: "From Experimentation to Value",
        description:
          "We move beyond pilots into capabilities that improve how teams decide and operate.",
        icon: TrendingUp,
      },
      {
        number: "05",
        title: "Strategic Execution",
        description:
          "We connect ideas, tools, people, and processes into business performance.",
        icon: Target,
      },
    ],
  },
};

const GAP_DEG = 4;

function polarToPercent(radiusPct: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: 50 + radiusPct * Math.cos(rad),
    y: 50 + radiusPct * Math.sin(rad),
  };
}

function donutSegmentPath(
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
) {
  const toXY = (r: number, a: number) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return { x: 50 + r * Math.cos(rad), y: 50 + r * Math.sin(rad) };
  };
  const p1 = toXY(outerR, endAngle);
  const p2 = toXY(outerR, startAngle);
  const p3 = toXY(innerR, startAngle);
  const p4 = toXY(innerR, endAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

const INNER_R = 30;
const OUTER_R = 47;
const LABEL_R = (INNER_R + OUTER_R) / 2;

export default function AbisalDifference({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = COPY[locale];
  const [active, setActive] = useState(0);
  const n = t.pillars.length;
  const segment = 360 / n;
  const ActiveIcon = t.pillars[active].icon;

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-3xl font-thin leading-tight text-bone md:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-coolgray">
            {t.paragraph}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                {t.pillars.map((pillar, i) => {
                  const start = i * segment + GAP_DEG / 2;
                  const end = (i + 1) * segment - GAP_DEG / 2;
                  const mid = (start + end) / 2;
                  const label = polarToPercent(LABEL_R, mid);
                  const isActive = active === i;
                  return (
                    <g key={pillar.number}>
                      <path
                        d={donutSegmentPath(INNER_R, OUTER_R, start, end)}
                        className={`cursor-pointer transition-all duration-300 ${
                          isActive ? "fill-acid" : "fill-white/[0.08] hover:fill-white/[0.14]"
                        }`}
                        onMouseEnter={() => setActive(i)}
                      />
                      <text
                        x={label.x}
                        y={label.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`pointer-events-none select-none text-[5px] font-semibold transition-colors duration-300 ${
                          isActive ? "fill-abyss" : "fill-bone"
                        }`}
                      >
                        {pillar.number}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div className="absolute inset-0 m-auto flex h-[58%] w-[58%] items-center justify-center rounded-full bg-abyss">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ActiveIcon className="h-10 w-10 animate-pulse text-acid md:h-12 md:w-12" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-sm font-medium text-acid">
                  {t.pillars[active].number}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-bone md:text-3xl">
                  {t.pillars[active].title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-mutedgray">
                  {t.pillars[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
