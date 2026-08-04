"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
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
              About Us
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
              ABISAL es una empresa de estrategia e innovación que utiliza la
              inteligencia artificial para identificar, diseñar e implementar
              nuevas formas de crear valor en procesos, canales, experiencias,
              modelos de negocio, alianzas y formas de trabajo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
