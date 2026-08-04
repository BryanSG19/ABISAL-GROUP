"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrainCircuit, Compass, Target, TrendingUp } from "lucide-react";
import BeliefCarousel from "./BeliefCarousel";

const BELIEVE_ICONS = [BrainCircuit, Target, Compass, TrendingUp];

type Locale = "es" | "en";

const COPY = {
  es: {
    eyebrow: "Nosotros",
    para1:
      "ABISAL es una empresa de estrategia e implementación de inteligencia artificial aplicada para organizaciones que buscan ir más allá de la experimentación y la búsqueda de eficiencias, para convertir la IA en una herramienta de creación de valor.",
    para1Highlight: "creación de valor",
    para2:
      "Trabajamos en la intersección de la inteligencia artificial, la estrategia empresarial y las nuevas formas de trabajo para desarrollar capacidades que mejoren la toma de decisiones, optimicen las operaciones y produzcan resultados tangibles en el desempeño de las organizaciones.",
    whyTitle: "Nuestra razón de ser",
    whyPara1:
      "La inteligencia artificial y las nuevas tecnologías representan una de las mayores oportunidades de transformación para las organizaciones. Sin embargo, su verdadero potencial no está en incorporar más herramientas, sino en desarrollar las capacidades necesarias para tomar mejores decisiones, transformar las formas de trabajo y construir ventajas competitivas sostenibles.",
    whyPara2:
      "ABISAL ayuda a las organizaciones a convertir ese potencial en resultados concretos, acompañándolas desde la definición de la estrategia hasta su implementación.",
    believeLabel: "Nuestros principios",
    believeTitle: "En qué creemos",
    believeCards: [
      {
        image: "/about-us/belief-integracion.webp",
        title: "Integración, no solo adopción",
        text: "Creemos que la inteligencia artificial no genera valor por sí sola. El verdadero impacto ocurre cuando se integra con la estrategia, las personas y la forma en que una organización toma decisiones y ejecuta su trabajo.",
      },
      {
        image: "/about-us/belief-alineacion.webp",
        title: "Propósito y alineación",
        text: "Creemos que la adopción de la inteligencia artificial debe responder a un propósito claro, estar alineada con los objetivos del negocio y traducirse en capacidades que permanezcan en el tiempo.",
      },
      {
        image: "/about-us/belief-ventajas.webp",
        title: "Un habilitador, no el fin",
        text: "Creemos que la tecnología es un habilitador, no el fin. Por eso nuestro trabajo no consiste únicamente en implementar soluciones, sino en ayudar a las organizaciones a desarrollar la capacidad de utilizarlas con criterio, confianza y autonomía.",
      },
      {
        image: "/about-us/belief-capacidades.webp",
        title: "Ventaja competitiva sostenible",
        text: "Creemos que las organizaciones que liderarán el futuro no serán necesariamente las que adopten más inteligencia artificial, sino aquellas que sepan convertirla en una ventaja competitiva sostenible.",
      },
    ],
    teamTitle: "Equipo fundador",
    teamPara1:
      "ABISAL fue fundada por un equipo interdisciplinario, con capacidades complementarias en estrategia, tecnología, diseño, transformación y crecimiento organizacional.",
    teamPara2:
      "Creemos que los desafíos más complejos requieren perspectivas diversas. Por eso, integramos distintas capacidades para desarrollar soluciones que conecten la estrategia empresarial con el potencial de la inteligencia artificial y las personas que la utilizan.",
    teamPara3:
      "Además, nuestros fundadores participan directamente en la investigación, el análisis y el desarrollo de cada proyecto, acompañando a las organizaciones desde la comprensión de sus desafíos hasta la implementación de las soluciones.",
  },
  en: {
    eyebrow: "About Us",
    para1:
      "ABISAL is an applied AI strategy and implementation firm for organizations ready to move beyond experimentation and efficiency gains and turn AI into a driver of value creation.",
    para1Highlight: "value creation",
    para2:
      "We work at the intersection of artificial intelligence, business strategy, and new ways of working to build capabilities that improve decision-making, optimize operations, and deliver tangible improvements in organizational performance.",
    whyTitle: "Our Purpose",
    whyPara1:
      "Artificial intelligence and emerging technologies represent one of the greatest opportunities for organizational transformation. Yet their true potential does not lie in adopting more tools, but in building the capabilities needed to make better decisions, transform ways of working, and create sustainable competitive advantage.",
    whyPara2:
      "ABISAL helps organizations turn that potential into tangible results, working alongside them from strategy development through implementation.",
    believeLabel: "Our Principles",
    believeTitle: "What We Believe",
    believeCards: [
      {
        image: "/about-us/belief-integracion.webp",
        title: "Integration, Not Just Adoption",
        text: "We believe AI does not create value on its own. Meaningful results emerge when it is integrated with strategy, people, and the way an organization makes decisions and gets work done.",
      },
      {
        image: "/about-us/belief-alineacion.webp",
        title: "Purpose and Alignment",
        text: "We believe AI adoption should serve a clear purpose, align with business objectives, and translate into lasting organizational capabilities.",
      },
      {
        image: "/about-us/belief-ventajas.webp",
        title: "An Enabler, Not the Goal",
        text: "We believe technology is an enabler, not the goal. That is why our work goes beyond implementing solutions. We help organizations develop the capabilities to use them with sound judgment, confidence, and autonomy.",
      },
      {
        image: "/about-us/belief-capacidades.webp",
        title: "Sustainable Competitive Advantage",
        text: "We believe the organizations that lead the future will not necessarily be those that adopt the most AI, but those that know how to turn it into a sustainable competitive advantage.",
      },
    ],
    teamTitle: "Founding Team",
    teamPara1:
      "ABISAL was founded by an interdisciplinary team with complementary capabilities in strategy, technology, design, transformation, and organizational growth.",
    teamPara2:
      "We believe the most complex challenges require diverse perspectives. That's why we bring together different capabilities to develop solutions that connect business strategy with the potential of artificial intelligence and the people who use it.",
    teamPara3:
      "Our founders are also directly involved in the research, analysis, and development of every project, guiding organizations from understanding their challenges through the implementation of solutions.",
  },
};

function HighlightedStatement({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  const idx = text.indexOf(highlight);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="bg-acid px-2 text-abyss">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export default function AboutUs({ locale = "en" }: { locale?: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <section
        id="about-us"
        className="relative overflow-hidden bg-bone section-pad"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,14,25,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="container-content relative pt-16 md:pt-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <p className="mb-8 text-4xl font-thin uppercase tracking-[0.15em] text-abyss md:text-5xl">
                {t.eyebrow}
              </p>
              <p className="text-3xl font-extrabold leading-[1.15] tracking-tight text-abyss sm:text-4xl">
                <HighlightedStatement text={t.para1} highlight={t.para1Highlight} />
              </p>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-slate/80">
                {t.para2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[16/9] w-full lg:origin-left lg:scale-150">
                <Image
                  src="/about-us/hero-team.webp"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-bone py-24 md:py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,14,25,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,14,25,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-[22rem] -rotate-6 select-none text-[6rem] font-extrabold uppercase leading-none text-abyss/[0.05] sm:top-72 sm:text-[9rem]"
        >
          {locale === "es" ? "Inteligencia" : "Artificial"}
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 bottom-8 rotate-6 select-none text-[6rem] font-extrabold uppercase leading-none text-abyss/[0.05] sm:text-[9rem]"
        >
          {locale === "es" ? "Artificial" : "Intelligence"}
        </span>

        <div className="container-content relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-abyss/70 md:text-sm">
                {t.believeLabel}
              </span>
              <span className="h-px w-16 bg-abyss/30 md:w-24" />
            </div>
            <h2 className="mt-6 text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-abyss sm:text-5xl md:text-6xl">
              {t.believeTitle}
            </h2>
          </motion.div>

          <div className="mt-14">
            <BeliefCarousel
              cards={t.believeCards.map((card, i) => ({
                image: card.image,
                title: card.title,
                text: card.text,
                icon: BELIEVE_ICONS[i % BELIEVE_ICONS.length],
              }))}
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-24 md:py-32">
        <div className="container-content relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/about-us/razon-de-ser.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <h2 className="text-3xl font-extrabold leading-tight text-abyss md:text-4xl">
                {t.whyTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate/80 md:text-lg">
                {t.whyPara1}
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate/80 md:text-lg">
                {t.whyPara2}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-bone py-24 md:py-32"
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
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold leading-tight text-abyss md:text-4xl">
              {t.teamTitle}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate/80 md:text-lg">
              {t.teamPara1}
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate/80 md:text-lg">
              {t.teamPara2}
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate/80 md:text-lg">
              {t.teamPara3}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
