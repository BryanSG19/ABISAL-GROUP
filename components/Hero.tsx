"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AbyssBubbleLoop from "./AbyssBubbleLoop";

type Locale = "es" | "en";

const COPY = {
  es: {
    title: "La inteligencia detrás del crecimiento del mañana.",
    subline: ["Profundiza", "Desarrolla", "Ejecuta", "Llega más lejos"],
    cta: "Hablemos",
    ctaHref: "/contact/",
  },
  en: {
    title: "Intelligence beneath tomorrow’s business growth.",
    subline: ["Go deeper", "Build smarter", "Carry out", "Move forward"],
    cta: "Connect with us",
    ctaHref: "/en/contact/",
  },
} satisfies Record<
  Locale,
  { title: string; subline: string[]; cta: string; ctaHref: string }
>;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = COPY[locale];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-abyss"
    >
      <div className="absolute inset-0">
        <AbyssBubbleLoop className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/25 to-transparent" />
      </div>

      <div className="container-content relative z-10 pt-28 pb-20 md:pt-32">
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="max-w-4xl font-sans text-[2.5rem] font-thin leading-[1.08] tracking-tight text-bone sm:text-6xl md:text-7xl"
        >
          {t.title}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.25}
          variants={fadeUp}
          className="mt-8 flex flex-col gap-1 text-lg font-medium text-acid sm:flex-row sm:items-center sm:gap-3 md:text-xl"
        >
          {t.subline.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              {i > 0 && <span className="hidden text-coolgray sm:inline">|</span>}
              <span>{word}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.55}
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          <Link
            href={t.ctaHref}
            className="group inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3.5 text-sm font-medium text-abyss transition-all duration-300 hover:bg-acid-bright"
          >
            {t.cta}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
