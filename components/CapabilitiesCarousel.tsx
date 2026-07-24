"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CarouselItem = {
  number: string;
  title: string;
  description: string;
  image: string;
};

type Locale = "es" | "en";

const LABELS: Record<
  Locale,
  { previous: string; next: string; goTo: (title: string) => string; explore: string; exploreHref: string }
> = {
  es: {
    previous: "Anterior",
    next: "Siguiente",
    goTo: (title) => `Ir a ${title}`,
    explore: "Explora",
    exploreHref: "/what-we-do/",
  },
  en: {
    previous: "Previous",
    next: "Next",
    goTo: (title) => `Go to ${title}`,
    explore: "Explore",
    exploreHref: "/en/what-we-do/",
  },
};

const AUTOPLAY_MS = 5000;

// Position of each card relative to the active one, keyed by circular
// distance d = 0 (active/front), 1 (next), 2 (opposite/back), 3 (previous).
const STAGE_LAYOUT = [
  { xRatio: 0, y: 0, scale: 1, rotate: 0, opacity: 1, z: 40, blur: false },
  { xRatio: 0.5, y: 10, scale: 0.82, rotate: 10, opacity: 0.55, z: 20, blur: true },
  { xRatio: 0, y: -18, scale: 0.68, rotate: 0, opacity: 0.28, z: 10, blur: true },
  { xRatio: -0.5, y: 10, scale: 0.82, rotate: -10, opacity: 0.55, z: 20, blur: true },
];

export default function CapabilitiesCarousel({
  items,
  locale = "en",
}: {
  items: CarouselItem[];
  locale?: Locale;
}) {
  const labels = LABELS[locale];
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(600);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = items.length;
  const item = items[active];

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % n);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = (index: number) => {
    setActive(((index % n) + n) % n);
    restartTimer();
  };

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-6xl font-bold text-acid md:text-7xl">
              {item.number}
            </span>
            <h3 className="mt-6 text-2xl font-thin leading-snug text-bone md:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-coolgray">
              {item.description}
            </p>
            <Link
              href={labels.exploreHref}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-sm font-medium text-abyss transition-all duration-300 hover:bg-acid-bright"
            >
              {labels.explore}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="lg:col-span-7">
        <div
          ref={containerRef}
          className="relative mx-auto h-[380px] w-full max-w-md sm:h-[440px] md:h-[500px]"
        >
          {items.map((card, i) => {
            const d = ((i - active) % n + n) % n;
            const layout = STAGE_LAYOUT[d] ?? STAGE_LAYOUT[STAGE_LAYOUT.length - 1];
            const isActive = d === 0;
            const x = layout.xRatio * width;
            return (
              <button
                key={card.title}
                type="button"
                onClick={() => goTo(i)}
                aria-current={isActive}
                aria-label={card.title}
                className={`absolute left-1/2 top-1/2 w-[190px] transition-[transform,opacity] duration-700 ease-abisal sm:w-[220px] md:w-[250px] ${
                  isActive ? "cursor-default" : "cursor-pointer"
                }`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${x}px) translateY(${layout.y}px) scale(${layout.scale}) rotate(${layout.rotate}deg)`,
                  opacity: layout.opacity,
                  zIndex: layout.z,
                }}
              >
                <div
                  className={`relative aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] border shadow-2xl ${
                    isActive ? "border-white/25" : "border-white/10"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 via-transparent to-abyss/30" />
                  {layout.blur && (
                    <div className="absolute inset-0 bg-sky-400/15 backdrop-blur-md" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-12 mt-2 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label={labels.previous}
          onClick={() => goTo(active - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-colors duration-300 hover:border-acid hover:text-acid"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {items.map((card, i) => (
            <button
              key={card.title}
              type="button"
              aria-label={labels.goTo(card.title)}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-acid" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label={labels.next}
          onClick={() => goTo(active + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-colors duration-300 hover:border-acid hover:text-acid"
        >
          →
        </button>
      </div>
    </div>
  );
}
