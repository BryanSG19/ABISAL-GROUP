"use client";

import { motion } from "framer-motion";
import AbyssParticles from "./AbyssParticles";
import StaggeredWords from "./StaggeredWords";

type Locale = "es" | "en";

const COPY = {
  es: {
    line1: "Despliega una nueva inteligencia dentro de tu empresa.",
    line2: "Ve más allá.",
    cta: "Hablemos",
    ctaHref: "/#get-in-touch",
  },
  en: {
    line1: "Unlock new intelligence within your business.",
    line2: "Move beyond.",
    cta: "Get in Touch",
    ctaHref: "/en/#get-in-touch",
  },
} satisfies Record<
  Locale,
  { line1: string; line2: string; cta: string; ctaHref: string }
>;

export default function PreFooterCTA({ locale = "en" }: { locale?: Locale }) {
  const t = COPY[locale];

  return (
    <section
      id="get-in-touch"
      className="relative flex items-center overflow-hidden bg-ultradark py-32 md:py-44"
    >
      <AbyssParticles
        className="absolute inset-0 h-full w-full opacity-70"
        density={30}
      />
      <div className="container-content relative text-center">
        <h2 className="mx-auto max-w-4xl font-sans text-4xl font-thin leading-[1.1] tracking-tight text-bone sm:text-5xl md:text-6xl">
          <StaggeredWords
            text={t.line1}
            direction="ltr"
            role="primary"
          />
          <br />
          <StaggeredWords
            text={t.line2}
            direction="ltr"
            role="secondary"
            className="text-acid"
          />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <a
            href={t.ctaHref}
            className="group inline-flex items-center gap-2 rounded-full bg-acid px-9 py-4 text-sm font-medium text-abyss transition-all duration-300 hover:bg-acid-bright"
          >
            {t.cta}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
