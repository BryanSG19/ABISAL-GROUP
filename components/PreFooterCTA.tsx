"use client";

import { motion } from "framer-motion";
import AbyssParticles from "./AbyssParticles";
import StaggeredWords from "./StaggeredWords";

export default function PreFooterCTA() {
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
            text="Unlock new intelligence within your business."
            direction="ltr"
            role="primary"
          />
          <br />
          <StaggeredWords
            text="Move beyond."
            direction="rtl"
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
            href="#connect"
            className="group inline-flex items-center gap-2 rounded-full bg-acid px-9 py-4 text-sm font-medium text-abyss transition-all duration-300 hover:bg-acid-bright"
          >
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
