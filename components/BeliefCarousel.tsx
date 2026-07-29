"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type ComponentType } from "react";

export type BeliefCarouselCard = {
  image: string;
  title: string;
  text: string;
  icon: ComponentType<{ className?: string }>;
};

const AUTOPLAY_MS = 4500;
const TRANSITION = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

function slideVariants(visibleCount: number): Variants {
  return {
    enter: (dir: 1 | -1) => ({
      x: dir === 1 ? `${visibleCount * 100}%` : "-100%",
      opacity: 0,
    }),
    exit: (dir: 1 | -1) => ({
      x: dir === 1 ? "-100%" : `${visibleCount * 100}%`,
      opacity: 0,
    }),
  };
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)");
    const tablet = window.matchMedia("(max-width: 1023px)");
    const update = () => {
      setVisibleCount(mobile.matches ? 1 : tablet.matches ? 2 : 4);
    };
    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return visibleCount;
}

export default function BeliefCarousel({
  cards,
}: {
  cards: BeliefCarouselCard[];
}) {
  const visibleCount = useVisibleCount();
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const hovering = useRef(false);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setStartIndex((s) => s + dir);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) go(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slots = Array.from({ length: visibleCount }, (_, i) => i);
  const visible = slots.map((slot) => {
    const instanceId = startIndex + slot;
    return { instanceId, slot, card: cards[mod(instanceId, cards.length)] };
  });
  const variants = slideVariants(visibleCount);
  const slotWidth = `${100 / visibleCount}%`;
  // Image is aspect-[4/5] (height = 1.25x width). The up/down offset is ±12.5%
  // of that height, so we reserve 1.25x extra height (1.5625x width total) for
  // the image zone, split 10% / 80% / 10% (top buffer / image / bottom buffer)
  // so neither the "up" nor "down" position ever gets clipped.
  const CAPTION_RESERVE_PX = 200;

  return (
    <div
      className="relative"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          style={{ paddingTop: `${(1.5625 / visibleCount) * 100}%` }}
        />
        <div aria-hidden="true" style={{ height: CAPTION_RESERVE_PX }} />

        <AnimatePresence initial={false} custom={direction}>
          {visible.map(({ instanceId, slot, card }) => {
            const Icon = card.icon;
            const isDown = slot % 2 === 0;
            return (
              <motion.div
                key={instanceId}
                custom={direction}
                variants={variants}
                initial="enter"
                animate={{ x: `${slot * 100}%`, opacity: 1 }}
                exit="exit"
                transition={TRANSITION}
                className="absolute inset-y-0 left-0 px-2.5"
                style={{ width: slotWidth }}
              >
                <div className="relative" style={{ paddingTop: "156.25%" }}>
                  <motion.div
                    animate={{ y: isDown ? "12.5%" : "-12.5%" }}
                    transition={TRANSITION}
                    className="absolute inset-x-0 overflow-hidden rounded-2xl"
                    style={{ top: "10%", height: "80%" }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-start justify-between p-7">
                      <Icon className="h-6 w-6 text-bone drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
                    </div>
                  </motion.div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-bold leading-snug text-abyss">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-abyss/70">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => go(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-abyss/15 text-abyss transition-colors duration-300 hover:border-abyss hover:bg-abyss hover:text-bone"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => go(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-abyss/15 text-abyss transition-colors duration-300 hover:border-abyss hover:bg-abyss hover:text-bone"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
