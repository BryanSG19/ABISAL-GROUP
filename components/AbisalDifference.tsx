"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PILLARS = [
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
];

export default function AbisalDifference() {
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
            <p className="eyebrow mb-4">Abisal Difference</p>
            <h2 className="text-3xl font-thin leading-tight text-bone md:text-4xl">
              Abisal Difference
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-coolgray">
              We go beneath the obvious challenge to understand what truly
              moves the business. Then we design the frameworks,
              capabilities, and intelligent applications needed to turn
              strategy into measurable performance.
            </p>
          </motion.div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
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
                    i === PILLARS.length - 1 ? "sm:col-span-2" : ""
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
