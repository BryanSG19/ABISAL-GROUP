"use client";

import { motion } from "framer-motion";
import ShardImageCycler from "./ShardImageCycler";
import CapabilitiesCarousel from "./CapabilitiesCarousel";

const SHOWCASE_IMAGES = [
  "/showcase/showcase-1-boardroom.jpg",
  "/showcase/showcase-2-warehouse.jpg",
  "/showcase/showcase-3-office.jpg",
  "/showcase/showcase-4-port.jpg",
];

const CARDS = [
  {
    number: "01",
    title: "AI Literacy",
    description: "Build confidence across teams.",
    image: "/capabilities/card-01-ai-literacy-v4.jpg",
  },
  {
    number: "02",
    title: "Applied AI Sprints",
    description: "Turn business challenges into tangible outcomes.",
    image: "/capabilities/card-02-applied-ai-sprints-v4.jpg",
  },
  {
    number: "03",
    title: "AI Strategy & Adoption",
    description: "Move from experimentation to value.",
    image: "/capabilities/card-03-ai-strategy-adoption-v4.jpg",
  },
  {
    number: "04",
    title: "Custom Engines & Agents",
    description: "Create tailored intelligence for evolving business needs.",
    image: "/capabilities/card-04-custom-engines-agents-v4.jpg",
  },
];

export default function IntroCapabilities() {
  return (
    <section className="relative overflow-hidden bg-abyss section-pad">
      <div className="container-content">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-3xl font-thin leading-tight text-bone md:text-4xl"
            >
              Strategy, applied intelligence, and growth capabilities.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-coolgray md:text-lg"
            >
              ABISAL GROUP designs tailored frameworks that turn AI and new
              ways of working into high-confidence decisions, smarter
              operations, and measurable business performance.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ShardImageCycler
              images={SHOWCASE_IMAGES}
              className="aspect-[4/3] w-full rounded-2xl border border-white/10 md:aspect-[16/11]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-64"
        >
          <CapabilitiesCarousel items={CARDS} />
        </motion.div>
      </div>
    </section>
  );
}
