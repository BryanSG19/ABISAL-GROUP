"use client";

import { motion } from "framer-motion";

const CASES = [
  {
    category: "Applied AI Sprint",
    title: "AI Sprint for Market Validation",
    description:
      "From claims and consumer language to evidence-backed business decisions.",
    state: "Coming soon",
  },
  {
    category: "Custom Engines & Agents",
    title: "Competitive Intelligence Engine",
    description:
      "A tailored benchmark engine for monitoring competitors, claims, pricing, and market signals.",
    state: "Coming soon",
  },
  {
    category: "AI Strategy & Adoption",
    title: "AI Adoption Roadmap",
    description:
      "A prioritized roadmap to move from scattered AI usage to measurable business value.",
    state: "Coming soon",
  },
];

export default function OurWork() {
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
          <p className="eyebrow mb-4">Our Work</p>
          <h2 className="text-3xl font-thin leading-tight text-bone md:text-4xl">
            Our Work
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASES.map((item, i) => (
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
              className="group flex flex-col justify-between rounded-2xl bg-bone p-8 transition-transform duration-500 ease-abisal hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a9a1f]">
                    {item.category}
                  </span>
                  <span className="shrink-0 rounded-full bg-abyss/5 px-3 py-1 text-[11px] font-medium text-slate">
                    {item.state}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug text-abyss">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate/75">
                  {item.description}
                </p>
              </div>
              <span className="mt-8 h-px w-8 bg-abyss/15 transition-all duration-500 ease-abisal group-hover:w-14 group-hover:bg-[#8a9a1f]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
