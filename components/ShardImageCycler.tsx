"use client";

import { useEffect, useRef } from "react";

const SECTION_COUNT = 5;
const DELAY_STEP = 100;
const DURATION_MS = 1500;
const HOLD_MS = 3200;
const EASING = "cubic-bezier(.14,1,.34,1)";

function generateNormalizedArray(n: number) {
  if (!n) return [1];
  const arr: number[] = [];
  let total = 0;
  for (let i = 0; i < n; i++) {
    const v = 2 * Math.random() + 1;
    arr.push(v);
    total += v;
  }
  return arr.map((v) => v / total);
}

function getIntervals(width: number, count: number) {
  const weights = generateNormalizedArray(count - 1);
  const acc: [number, number][] = weights.reduce((list, w, idx) => {
    const prev = (list[idx - 1] || [0, 0])[1] || 0;
    list.push([prev - 2, prev + width * w + 2]);
    return list;
  }, [] as [number, number][]);
  acc.push([acc[acc.length - 1][1] - 2, 2000]);
  return acc;
}

function shuffle<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function drawCover(ctx: CanvasRenderingContext2D, media: CanvasImageSource, w: number, h: number) {
  const mw = (media as HTMLImageElement).naturalWidth;
  const mh = (media as HTMLImageElement).naturalHeight;
  const scale = Math.max(w / mw, h / mh);
  const x = w / 2 - (mw / 2) * scale;
  const y = h / 2 - (mh / 2) * scale;
  ctx.drawImage(media, x, y, mw * scale, mh * scale);
}

function drawDiagonalMask(
  ctx: CanvasRenderingContext2D,
  interval: [number, number],
  height: number,
  angle = 37
) {
  const [t, l] = interval;
  ctx.save();
  ctx.rotate((Math.PI * angle) / 180);
  ctx.fillStyle = "#000";
  ctx.fillRect(t, -2000, l - t, height + 4000);
  ctx.restore();
}

export default function ShardImageCycler({
  images,
  className = "",
}: {
  images: string[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseCanvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const baseCanvas = baseCanvasRef.current;
    if (!container || !baseCanvas) return;

    let cancelled = false;
    let index = 0;
    let timers: ReturnType<typeof setTimeout>[] = [];
    const loaded: HTMLImageElement[] = [];

    const clearTimers = () => {
      timers.forEach((t) => clearTimeout(t));
      timers = [];
    };

    const sizeCanvas = (canvas: HTMLCanvasElement, w: number, h: number, dpr: number) => {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBase = (imgIndex: number) => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeCanvas(baseCanvas, rect.width, rect.height, dpr);
      const ctx = baseCanvas.getContext("2d");
      if (!ctx || !loaded[imgIndex]) return;
      ctx.clearRect(0, 0, rect.width, rect.height);
      drawCover(ctx, loaded[imgIndex], rect.width, rect.height);
    };

    const runTransition = (nextIndex: number) => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = rect.width;
      const h = rect.height;
      const intervals = getIntervals(w, SECTION_COUNT);
      const delays = shuffle(
        Array.from({ length: SECTION_COUNT }, (_, i) => i * DELAY_STEP)
      );

      overlayRefs.current.forEach((canvas, i) => {
        if (!canvas || !loaded[nextIndex]) return;
        sizeCanvas(canvas, w, h, dpr);
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, w, h);
        drawCover(ctx, loaded[nextIndex], w, h);
        ctx.globalCompositeOperation = "destination-in";
        drawDiagonalMask(ctx, intervals[i], h);
        ctx.globalCompositeOperation = "source-over";

        canvas.style.transitionProperty = "none";
        canvas.style.clipPath = `inset(${h}px 0 0 0)`;
        canvas.style.translate = "-14px 18px";
        canvas.style.opacity = "1";
        canvas.style.animation = "none";
        void canvas.offsetWidth;
        canvas.style.animationName = "shardCyclerReveal";
        canvas.style.animationDuration = `${DURATION_MS}ms`;
        canvas.style.animationTimingFunction = EASING;
        canvas.style.animationFillMode = "forwards";
        canvas.style.animationDelay = `${delays[i]}ms`;
        canvas.style.setProperty("--shard-h", `${h}px`);
      });

      const t = setTimeout(() => {
        if (cancelled) return;
        drawBase(nextIndex);
        overlayRefs.current.forEach((canvas) => {
          if (!canvas) return;
          canvas.style.animation = "none";
          canvas.style.clipPath = `inset(${h}px 0 0 0)`;
          canvas.style.translate = "-14px 18px";
        });
        index = nextIndex;
        scheduleNext();
      }, DURATION_MS + Math.max(...delays) + 120);
      timers.push(t);
    };

    const scheduleNext = () => {
      const t = setTimeout(() => {
        if (cancelled) return;
        const next = (index + 1) % images.length;
        runTransition(next);
      }, HOLD_MS);
      timers.push(t);
    };

    const init = async () => {
      await Promise.all(
        images.map(
          (src, i) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                loaded[i] = img;
                resolve();
              };
              img.onerror = () => resolve();
            })
        )
      );
      if (cancelled) return;
      drawBase(0);
      scheduleNext();
    };

    init();

    const handleResize = () => {
      drawBase(index);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      clearTimers();
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <style>{`
        @keyframes shardCyclerReveal {
          from { clip-path: inset(var(--shard-h) 0 0 0); translate: -14px 18px; }
          to { clip-path: inset(0 0 0 0); translate: 0 0; }
        }
      `}</style>
      <canvas ref={baseCanvasRef} className="absolute inset-0 block h-full w-full" />
      {Array.from({ length: SECTION_COUNT }).map((_, i) => (
        <canvas
          key={i}
          ref={(el) => {
            overlayRefs.current[i] = el;
          }}
          className="absolute inset-0 block h-full w-full"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
