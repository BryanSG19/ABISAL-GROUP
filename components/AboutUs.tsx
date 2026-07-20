"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Locale = "es" | "en";

const COPY = {
  es: {
    eyebrow: "Nosotros",
    para1:
      "ABISAL es una empresa de estrategia e implementación de inteligencia artificial aplicada para organizaciones que buscan ir más allá de la experimentación y la búsqueda de eficiencias, avanzando hacia la creación de valor.",
    para2:
      "Trabajamos en la intersección de la inteligencia artificial, la estrategia empresarial, y las nuevas formas de trabajo para desarrollar capacidades que mejoren la toma de decisiones, optimicen las operaciones y produzcan resultados tangibles en el desempeño empresarial.",
  },
  en: {
    eyebrow: "About Us",
    para1:
      "ABISAL GROUP is a strategy and applied intelligence firm built for organizations that want to move beyond experimentation.",
    para2:
      "We work at the intersection of AI, business strategy, optimization, and new ways of working to design capabilities that improve decisions, operations, and measurable performance.",
  },
} satisfies Record<Locale, { eyebrow: string; para1: string; para2: string }>;

export default function AboutUs({ locale = "en" }: { locale?: Locale }) {
  const t = COPY[locale];

  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-bone section-pad"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,14,25,0.08) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <Image
        src="/brand/logo-mark-black.png"
        alt=""
        width={620}
        height={520}
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.04] md:block"
        aria-hidden="true"
      />
      <div className="container-content relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4"
          >
            <p className="mb-4 inline-block bg-acid px-3 py-1.5 text-2xl font-semibold uppercase tracking-[0.15em] text-abyss md:text-3xl">
              {t.eyebrow}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 md:col-start-6"
          >
            <p className="text-xl leading-relaxed text-abyss md:text-2xl">
              {t.para1}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate/80">
              {t.para2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
