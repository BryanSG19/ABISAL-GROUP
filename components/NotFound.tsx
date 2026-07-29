"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Locale = "es" | "en";

const COPY = {
  es: {
    badge: "Error 404",
    heading: "Esta página no existe",
    paragraph:
      "Puede que el enlace esté roto o que la página haya sido movida.",
    cta: "Volver al inicio",
    href: "/",
  },
  en: {
    badge: "Error 404",
    heading: "This page doesn't exist",
    paragraph: "The link may be broken, or the page may have been moved.",
    cta: "Back to home",
    href: "/en/",
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "es";
  const t = COPY[locale];

  return (
    <section
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-bone"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,14,25,0.08) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="mb-8 inline-block -rotate-2 bg-acid px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.15em] text-abyss shadow-[6px_6px_0_0_rgba(0,14,25,0.12)]">
            {t.badge}
          </p>
          <p className="text-8xl font-extrabold leading-none tracking-tight text-abyss sm:text-9xl">
            404
          </p>
          <h1 className="mt-8 text-2xl font-extrabold text-abyss sm:text-3xl">
            {t.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-slate/80">
            {t.paragraph}
          </p>
          <Link
            href={t.href}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-abyss px-9 py-4 text-sm font-medium text-bone transition-all duration-300 hover:bg-deepblue"
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
