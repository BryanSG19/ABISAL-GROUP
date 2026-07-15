"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CarouselItem = {
  number: string;
  title: string;
  description: string;
  image: string;
};

type Locale = "es" | "en";

const LABELS: Record<Locale, { previous: string; next: string; goTo: (title: string) => string }> = {
  es: {
    previous: "Anterior",
    next: "Siguiente",
    goTo: (title) => `Ir a ${title}`,
  },
  en: {
    previous: "Previous",
    next: "Next",
    goTo: (title) => `Go to ${title}`,
  },
};

const AUTOPLAY_MS = 4000;

// Position of each card relative to the active one, keyed by circular
// distance d = 0 (active/front), 1 (next/right), 2 (opposite/back), 3
// (previous/left). Arranged along a shallow arc, like the front of a wheel.
const LAYOUT = [
  { xRatio: 0, y: 0, scale: 1, rotate: 0, opacity: 1, z: 40 },
  { xRatio: 0.27, y: 44, scale: 0.82, rotate: 8, opacity: 0.85, z: 30 },
  { xRatio: 0, y: 83, scale: 0.6, rotate: 0, opacity: 0.32, z: 10 },
  { xRatio: -0.27, y: 44, scale: 0.82, rotate: -8, opacity: 0.85, z: 30 },
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
  const [hovered, setHovered] = useState<number | null>(null);
  const [width, setWidth] = useState(900);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = items.length;

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

  const handleEnter = (i: number) => {
    setHovered(i);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleLeave = () => {
    setHovered(null);
    restartTimer();
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative h-[390px] w-full sm:h-[442px] md:h-[494px]"
      >
        {items.map((item, i) => {
          const d = ((i - active) % n + n) % n;
          const layout = LAYOUT[d] ?? LAYOUT[LAYOUT.length - 1];
          const isActive = d === 0;
          const isHovered = hovered === i;
          const x = layout.xRatio * width;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => goTo(i)}
              onMouseEnter={isActive ? () => handleEnter(i) : undefined}
              onMouseLeave={isActive ? handleLeave : undefined}
              aria-current={isActive}
              aria-label={item.title}
              className={`absolute left-1/2 top-0 w-[260px] transition-[transform,opacity] duration-700 ease-abisal sm:w-[300px] md:w-[325px] ${
                isActive ? "cursor-default" : "cursor-pointer"
              }`}
              style={{
                transform: `translateX(calc(-50% + ${x}px)) translateY(${layout.y}px) scale(${layout.scale}) rotate(${layout.rotate}deg)`,
                opacity: layout.opacity,
                zIndex: isHovered ? 50 : layout.z,
                pointerEvents: "auto",
                perspective: "1200px",
              }}
            >
              <div
                className="relative aspect-square w-full"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s cubic-bezier(.16,1,.3,1)",
                  transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div
                  className="absolute inset-0 bg-white/15"
                  style={{
                    backfaceVisibility: "hidden",
                    clipPath:
                      "polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)",
                  }}
                >
                  <div
                    className="absolute inset-[1px] overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={700}
                      height={704}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className="absolute inset-0 bg-white/15"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    clipPath:
                      "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)",
                  }}
                >
                <div
                  className="absolute inset-[1px] flex flex-col justify-between bg-abyss p-6 text-left"
                  style={{
                    clipPath:
                      "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)",
                  }}
                >
                  <span className="text-[28px] font-medium text-acid">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-bone sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mutedgray">
                      {item.description}
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label={labels.previous}
          onClick={() => goTo(active - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition-colors duration-300 hover:border-acid hover:text-acid"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={labels.goTo(item.title)}
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition-colors duration-300 hover:border-acid hover:text-acid"
        >
          →
        </button>
      </div>
    </div>
  );
}
