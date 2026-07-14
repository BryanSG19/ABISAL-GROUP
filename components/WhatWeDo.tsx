"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES = [
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
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-warm section-pad"
    >
      <Image
        src="/brand/texture-light-mist.jpg"
        alt=""
        fill
        className="object-cover opacity-30"
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
            <p className="eyebrow mb-4 text-[#8a9a1f]">What We Do</p>
            <h2 className="text-3xl font-thin leading-tight text-abyss md:text-4xl">
              What We Do
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate/80">
              We work with organizations at different levels of maturity —
              from executive education and focused AI sprints to strategic
              adoption roadmaps and tailored engines built around real
              business needs.
            </p>
          </motion.div>

          <div className="md:col-span-7">
            {SERVICES.map((service, i) => (
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
                className="group grid grid-cols-[3rem_1fr] gap-6 border-t border-abyss/10 py-8 first:border-t-0 md:grid-cols-[4rem_1fr] md:first:border-t"
              >
                <span className="pt-1 text-sm font-medium text-[#8a9a1f]">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-abyss">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate/80 md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
