"use client";

import { useEffect, useRef } from "react";
import {
  Compass,
  Globe2,
  BrainCircuit,
  ShieldCheck,
  Blocks,
  Target,
  TrendingUp,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

type Locale = "es" | "en";

type Pillar = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const INTRO: Record<Locale, { eyebrow: string; heading: string; paragraph: string }> = {
  es: {
    eyebrow: "Desarrolla",
    heading: "La diferencia Abisal",
    paragraph:
      "Vamos más allá del desafío aparente para comprender de forma integral el negocio y el entorno en el que opera. Desde esa perspectiva, diseñamos marcos de trabajo y aplicaciones inteligentes adaptadas a las necesidades reales de cada organización, orientadas al desarrollo de capacidades sostenibles, repetibles y escalables que se traduzcan en creación de valor, crecimiento y resultados medibles.",
  },
  en: {
    eyebrow: "Build smarter",
    heading: "The Abisal Difference",
    paragraph:
      "We look beneath the surface of each challenge to understand the business and its operating environment as a whole. From that perspective, we design tailored frameworks and intelligent applications around each organization's real needs building sustainable, repeatable, and scalable capabilities that drive value creation, growth, and measurable results.",
  },
};

const PILLARS: Record<Locale, Pillar[]> = {
  es: [
    {
      number: "01",
      title: "Comprensión profunda del negocio",
      description:
        "Comenzamos por la realidad y el contexto de cada organización como punto de partida, antes de definir metodologías, herramientas o soluciones.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Visión integrada y multisectorial",
      description:
        "Ampliamos la mirada más allá de la empresa como unidad para comprender el ecosistema en el que opera, sus interdependencias y las dinámicas que conectan distintos sectores.",
      icon: Globe2,
    },
    {
      number: "03",
      title: "Perspectiva de futuro y anticipación estratégica",
      description:
        "Abordamos los desafíos del presente interpretando las señales emergentes, tendencias y cambios en el entorno para anticipar sus implicaciones y preparar a la organización con la mirada puesta en el futuro.",
      icon: BrainCircuit,
    },
    {
      number: "04",
      title: "Aplicación inteligente y responsable de la IA",
      description:
        "Integramos la IA donde puede generar mayor valor y apalancamiento para el negocio, incorporando criterios éticos, de transparencia y supervisión humana que aseguren una aplicación responsable y alineada con la realidad de cada organización.",
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: "Arquitectura metodológica a la medida",
      description:
        "Diseñamos marcos de trabajo y metodologías adaptados a las necesidades de cada organización, reconociendo que cada una tiene un ADN propio, definido por su estrategia, procesos, cultura y desafíos de crecimiento.",
      icon: Blocks,
    },
    {
      number: "06",
      title: "Ejecución estratégica",
      description:
        "De la teoría a la acción, nuestro enfoque está en una ejecución alineada con objetivos claros. Conectamos ideas, herramientas y procesos con la estrategia de la empresa para la creación de valor.",
      icon: Target,
    },
    {
      number: "07",
      title: "Desarrollo de capacidades",
      description:
        "Vamos más allá de la experimentación, enfocados en desarrollar capacidades y nuevas formas de trabajo sostenibles, repetibles y escalables.",
      icon: TrendingUp,
    },
    {
      number: "08",
      title: "Evolución continua",
      description:
        "Ninguna solución es definitiva. Implementamos, aprendemos y ajustamos continuamente a partir de la experiencia y la retroalimentación.",
      icon: RefreshCw,
    },
  ],
  en: [
    {
      number: "01",
      title: "Deep Business Understanding",
      description:
        "We start with each organization's operating reality and context before defining methodologies, tools, or solutions.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Integrated, Cross-Sector Perspective",
      description:
        "We look beyond the organization as a standalone entity to understand the ecosystem in which it operates, its interdependencies, and the dynamics connecting different sectors.",
      icon: Globe2,
    },
    {
      number: "03",
      title: "Strategic Application of AI",
      description:
        "We integrate AI where it can create the greatest value and strategic leverage for the business, going beyond efficiency, cost savings, and performance optimization.",
      icon: BrainCircuit,
    },
    {
      number: "04",
      title: "Responsible Application of AI",
      description:
        "We embed ethical principles, transparency, and human oversight to ensure AI is applied responsibly and aligned with each organization's reality.",
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: "Tailored Methodological Architecture",
      description:
        "We design frameworks and methodologies around each organization's specific needs, recognizing that every organization has its own DNA shaped by its strategy, processes, culture, and growth challenges.",
      icon: Blocks,
    },
    {
      number: "06",
      title: "Strategic Execution",
      description:
        "From theory to action, our approach centers on execution aligned with clear objectives. We connect ideas, tools, and processes to business strategy to deliver tangible value.",
      icon: Target,
    },
    {
      number: "07",
      title: "Capability Building",
      description:
        "We move beyond experimentation to build sustainable, repeatable, and scalable capabilities and new ways of working.",
      icon: TrendingUp,
    },
    {
      number: "08",
      title: "Continuous Evolution",
      description:
        "No solution is ever final. We implement, learn, and continuously refine based on experience and feedback.",
      icon: RefreshCw,
    },
  ],
};

const MAX_DEPTH = 6000;

const DISPLAY_MAX_DEPTH: Record<Locale, number> = { es: 6000, en: 20000 };
const DEPTH_UNIT: Record<Locale, string> = { es: "m", en: "ft" };

// Depth-keyed color ramp: begins at the mid-water blue previously seen
// around 1,600m, deepening to near-black abyssal blue at 6,000m.
const COLOR_STOPS: { p: number; c: [number, number, number] }[] = [
  { p: 0, c: [78, 164, 189] },
  { p: 0.305, c: [23, 88, 122] },
  { p: 0.611, c: [8, 44, 68] },
  { p: 0.833, c: [3, 20, 36] },
  { p: 1, c: [2, 8, 16] },
];

// Depth (as a fraction of MAX_DEPTH) below which faint bioluminescent
// creature lights begin to appear.
const CREATURE_DEPTH_START = 4000 / MAX_DEPTH;

// Depth (as a fraction of MAX_DEPTH) beyond which the surface caustics
// have fully faded out.
const CAUSTIC_FADE_END = 1264 / MAX_DEPTH;

const STARFISH_LEG_ANGLES = [-90, -18, 54, 126, 198];
const STARFISH_LEG_LENGTHS = [1, 0.6, 0.5, 0.5, 0.6];

function drawStarfishLight(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  angleOffset: number,
  alpha: number
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angleOffset);
  ctx.fillStyle = `rgba(255,255,255,${alpha})`;

  // Center point.
  ctx.beginPath();
  ctx.arc(0, 0, 1.3, 0, Math.PI * 2);
  ctx.fill();

  // One point at the midpoint and one at the tip of each of the 5 arms.
  STARFISH_LEG_ANGLES.forEach((deg, i) => {
    const rad = (deg * Math.PI) / 180;
    const len = r * STARFISH_LEG_LENGTHS[i];
    const midX = Math.cos(rad) * len * 0.5;
    const midY = Math.sin(rad) * len * 0.5;
    const tipX = Math.cos(rad) * len;
    const tipY = Math.sin(rad) * len;
    ctx.beginPath();
    ctx.arc(midX, midY, 0.9, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(tipX, tipY, 1.1, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function colorAt(p: number): [number, number, number] {
  for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
    const a = COLOR_STOPS[i];
    const b = COLOR_STOPS[i + 1];
    if (p >= a.p && p <= b.p) {
      const t = (p - a.p) / (b.p - a.p || 1);
      return [0, 1, 2].map((k) =>
        Math.round(a.c[k] + (b.c[k] - a.c[k]) * t)
      ) as [number, number, number];
    }
  }
  return COLOR_STOPS[COLOR_STOPS.length - 1].c;
}

export default function AbyssalDescent({ locale = "en" }: { locale?: Locale }) {
  const pillars = PILLARS[locale];
  const intro = INTRO[locale];
  const totalSections = pillars.length + 1;
  const numberFormat = locale === "es" ? "es-ES" : "en-US";

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const depthLabelRef = useRef<HTMLSpanElement>(null);
  const depthLabelMobileRef = useRef<HTMLSpanElement>(null);
  const depthLineRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let progress = 0;

    type Bubble = {
      x: number;
      y: number;
      r: number;
      speed: number;
      driftPhase: number;
      driftAmp: number;
    };
    type Creature = {
      type: "angler" | "linefish" | "jelly" | "starfish" | "chain";
      x: number;
      y: number;
      vx: number;
      vy: number;
      wobble: number;
      cyclePeriod: number;
      cycleOffset: number;
      angleOffset: number;
      size: number;
      chainSizes: number[];
    };
    type CausticCell = {
      x: number;
      y: number;
      r: number;
      phase: number;
      driftAmp: number;
      rotation: number;
      aspect: number;
    };
    type CausticVein = { a: number; b: number; phase: number };

    let bubbles: Bubble[] = [];
    let creatures: Creature[] = [];
    let causticCells: CausticCell[] = [];
    let causticVeins: CausticVein[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      bubbles = Array.from({ length: 80 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        speed: Math.random() * 0.22 + 0.05,
        driftPhase: Math.random() * Math.PI * 2,
        driftAmp: Math.random() * 10 + 4,
      }));
      const creatureTypes: Creature["type"][] = [
        "angler",
        "angler",
        "linefish",
        "linefish",
        "jelly",
        "jelly",
        "starfish",
        "starfish",
        "chain",
        "chain",
      ];
      creatures = creatureTypes.map((type) => ({
        type,
        x: Math.random() * width,
        y: Math.random() * height,
        vx:
          type === "jelly" || type === "chain"
            ? (Math.random() - 0.5) * 0.08
            : type === "starfish"
              ? (Math.random() - 0.5) * 0.05
              : (Math.random() - 0.5) * 0.18,
        vy:
          type === "jelly"
            ? -(Math.random() * 0.05 + 0.02)
            : type === "chain"
              ? (Math.random() - 0.5) * 0.06
              : type === "starfish"
                ? (Math.random() - 0.5) * 0.05
                : (Math.random() - 0.5) * 0.12,
        wobble: Math.random() * Math.PI * 2,
        cyclePeriod:
          type === "starfish" || type === "chain"
            ? 9000 + Math.random() * 5000
            : 7000 + Math.random() * 6000,
        cycleOffset: Math.random() * 10000,
        angleOffset: Math.random() * Math.PI * 2,
        size: Math.random() * 6 + 14,
        chainSizes: Array.from({ length: 6 }, () => Math.random() * 1.3 + 0.5),
      }));
      causticCells = Array.from({ length: 20 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 60 + 40,
        phase: Math.random() * Math.PI * 2,
        driftAmp: Math.random() * 12 + 5,
        rotation: Math.random() * Math.PI,
        aspect: Math.random() * 0.35 + 0.55,
      }));
      causticVeins = [];
      const veinSet = new Set<string>();
      causticCells.forEach((cell, i) => {
        const nearest = causticCells
          .map((other, j) => ({
            j,
            d: j === i ? Infinity : Math.hypot(other.x - cell.x, other.y - cell.y),
          }))
          .sort((a, b) => a.d - b.d)
          .slice(0, 2);
        nearest.forEach(({ j }) => {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!veinSet.has(key)) {
            veinSet.add(key);
            causticVeins.push({ a: i, b: j, phase: Math.random() * Math.PI * 2 });
          }
        });
      });
    };

    const updateProgress = () => {
      const rect = container.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const raw = -rect.top / Math.max(total, 1);
      progress = Math.min(Math.max(raw, 0), 1);
    };

    const applyDomUpdates = () => {
      const depth = Math.round(progress * DISPLAY_MAX_DEPTH[locale]);
      const label = `${depth.toLocaleString(numberFormat)} ${DEPTH_UNIT[locale]}`;
      if (depthLabelRef.current) depthLabelRef.current.textContent = label;
      if (depthLabelMobileRef.current) depthLabelMobileRef.current.textContent = label;
      if (depthLineRef.current) {
        depthLineRef.current.style.transform = `scaleY(${progress})`;
      }
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const sectionProgress =
          totalSections <= 1 ? 0 : i / (totalSections - 1);
        const dist = Math.abs(progress - sectionProgress);
        const opacity = Math.max(0, 1 - dist * totalSections * 1.4);
        el.style.opacity = String(opacity);
        el.style.transform = `translateY(${(1 - opacity) * 18}px)`;
      });
    };

    const draw = (time: number) => {
      const [r, g, b] = colorAt(progress);
      const [r2, g2, b2] = colorAt(Math.min(progress + 0.16, 1));
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, `rgb(${r}, ${g}, ${b})`);
      grad.addColorStop(1, `rgb(${r2}, ${g2}, ${b2})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Water-surface caustics: a faint interlocking mesh of light — soft
      // irregular cell shadows laced with thin bright veins — confined to
      // the shallow zone near the surface. Kept deliberately subtle.
      const causticEnvelope = Math.max(0, 1 - progress / CAUSTIC_FADE_END);
      if (causticEnvelope > 0.01) {
        ctx.save();
        ctx.globalAlpha = 0.16 * causticEnvelope;

        for (const cell of causticCells) {
          const wobbleX = Math.sin(time / 2600 + cell.phase) * cell.driftAmp;
          const wobbleY =
            Math.cos(time / 3100 + cell.phase * 1.3) * cell.driftAmp * 0.6;
          const shimmer = 0.5 + 0.5 * Math.sin(time / 1400 + cell.phase * 2);
          const cx = cell.x + wobbleX;
          const cy = cell.y + wobbleY;

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(cell.rotation);
          const pool = ctx.createRadialGradient(0, 0, 0, 0, 0, cell.r);
          pool.addColorStop(0, `rgba(3,20,36,${0.55 * shimmer})`);
          pool.addColorStop(1, "rgba(3,20,36,0)");
          ctx.fillStyle = pool;
          ctx.beginPath();
          ctx.ellipse(0, 0, cell.r, cell.r * cell.aspect, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.lineCap = "round";
        for (const vein of causticVeins) {
          const va = causticCells[vein.a];
          const vb = causticCells[vein.b];
          const shimmer = 0.5 + 0.5 * Math.sin(time / 1100 + vein.phase * 2);
          const midX = (va.x + vb.x) / 2 + Math.sin(time / 2600 + vein.phase) * 6;
          const midY = (va.y + vb.y) / 2 + Math.cos(time / 3100 + vein.phase) * 6;
          const vein_grad = ctx.createLinearGradient(va.x, va.y, vb.x, vb.y);
          vein_grad.addColorStop(0, "rgba(255,255,255,0)");
          vein_grad.addColorStop(0.5, `rgba(255,255,255,${0.55 * shimmer})`);
          vein_grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.strokeStyle = vein_grad;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(va.x, va.y);
          ctx.quadraticCurveTo(midX, midY, vb.x, vb.y);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Suspended particles / microbubbles, denser near the surface.
      const bubbleVisibility = 1 - progress * 0.55;
      for (const p of bubbles) {
        if (!prefersReducedMotion) {
          p.y -= p.speed * (1 + progress * 0.25);
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
        }
        const x =
          p.x + (prefersReducedMotion ? 0 : Math.sin(time / 3200 + p.driftPhase) * p.driftAmp * 0.05);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${0.14 * bubbleVisibility})`;
        ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Bioluminescent creature lights: never the creature itself, only
      // the brief flicker of light it gives off, appearing only in the
      // deep zone.
      const creatureAlpha = Math.max(
        0,
        Math.min(1, (progress - CREATURE_DEPTH_START) / 0.06)
      );
      if (creatureAlpha > 0.01) {
        for (const c of creatures) {
          if (!prefersReducedMotion) {
            c.x += c.vx;
            c.y += c.vy;
            if (c.x < -40) c.x = width + 40;
            if (c.x > width + 40) c.x = -40;
            if (c.y < -40) c.y = height + 40;
            if (c.y > height + 40) c.y = -40;
          }
          const cycleT = prefersReducedMotion
            ? 0.5
            : ((time + c.cycleOffset) % c.cyclePeriod) / c.cyclePeriod;
          const visibility = prefersReducedMotion
            ? 0.5
            : Math.max(0, Math.sin(cycleT * Math.PI * 2)) ** 3;
          const a = visibility * creatureAlpha;
          if (a < 0.02) continue;

          if (c.type === "angler") {
            ctx.save();
            ctx.filter = "blur(3px)";
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${0.45 * a})`;
            ctx.arc(c.x, c.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${0.9 * a})`;
            ctx.arc(c.x, c.y, 1.1, 0, Math.PI * 2);
            ctx.fill();
          } else if (c.type === "linefish") {
            const ang = Math.atan2(c.vy, c.vx);
            for (let i = 0; i < 4; i++) {
              const off = (i - 1.5) * 5;
              const lx = c.x + Math.cos(ang) * off;
              const ly = c.y + Math.sin(ang) * off;
              ctx.beginPath();
              ctx.fillStyle = `rgba(255,255,255,${0.7 * a})`;
              ctx.arc(lx, ly, 0.9, 0, Math.PI * 2);
              ctx.fill();
            }
          } else if (c.type === "jelly") {
            const n = 8;
            for (let i = 0; i < n; i++) {
              const ang2 = (i / n) * Math.PI * 2 + c.wobble;
              const rr = 6 + Math.sin(time / 1400 + i) * 1.4;
              const lx = c.x + Math.cos(ang2) * rr;
              const ly = c.y + Math.sin(ang2) * rr * 0.6;
              ctx.beginPath();
              ctx.fillStyle = `rgba(255,255,255,${0.5 * a})`;
              ctx.arc(lx, ly, 0.75, 0, Math.PI * 2);
              ctx.fill();
            }
          } else if (c.type === "starfish") {
            const bobX = prefersReducedMotion
              ? 0
              : Math.sin(time / 1700 + c.wobble) * 4;
            const bobY = prefersReducedMotion
              ? 0
              : Math.cos(time / 2100 + c.wobble * 1.3) * 3;
            const bobRotate = prefersReducedMotion
              ? 0
              : Math.sin(time / 2600 + c.wobble) * 0.15;
            ctx.save();
            ctx.filter = "blur(2px)";
            drawStarfishLight(
              ctx,
              c.x + bobX,
              c.y + bobY,
              c.size,
              c.angleOffset + bobRotate,
              0.4 * a
            );
            ctx.restore();
            drawStarfishLight(
              ctx,
              c.x + bobX,
              c.y + bobY,
              c.size,
              c.angleOffset + bobRotate,
              0.8 * a
            );
          } else {
            // A short chain of bioluminescent lights (fewer, sparser than
            // a typical siphonophore string), each point a different
            // size and brightness, drifting gently as a loose arc with a
            // slow wave running along it.
            const ang = Math.atan2(c.vy, c.vx) || c.wobble;
            const n = c.chainSizes.length;
            const spacing = c.size * 1.1;
            for (let i = 0; i < n; i++) {
              const t = i - (n - 1) / 2;
              const wave = prefersReducedMotion
                ? 0
                : Math.sin(time / 1500 + c.wobble + i * 0.7) * c.size * 0.12;
              const arcBulge =
                Math.sin((i / (n - 1)) * Math.PI) * c.size * 0.4 + wave;
              const px = c.x + Math.cos(ang) * t * spacing - Math.sin(ang) * arcBulge;
              const py = c.y + Math.sin(ang) * t * spacing + Math.cos(ang) * arcBulge;
              const mul = c.chainSizes[i];
              const dotAlpha = a * (0.3 + 0.45 * ((mul - 0.5) / 1.3));
              if (mul > 1.2) {
                ctx.save();
                ctx.filter = "blur(2.5px)";
                ctx.beginPath();
                ctx.fillStyle = `rgba(255,255,255,${0.4 * dotAlpha})`;
                ctx.arc(px, py, mul * 2.6, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
              }
              ctx.beginPath();
              ctx.fillStyle = `rgba(255,255,255,${dotAlpha})`;
              ctx.arc(px, py, mul * 0.9, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Tethered exploration light: faint cable hint + flickering glow.
      const lightX = width * 0.5;
      const lightY = height * 0.4;
      const flicker = prefersReducedMotion
        ? 1
        : 0.72 + 0.28 * Math.sin(time / 900) * (0.55 + 0.45 * Math.sin(time / 260));
      const intensity = (0.55 + progress * 0.5) * flicker;

      const cableStartY = lightY * 0.4;
      const cable = ctx.createLinearGradient(lightX, cableStartY, lightX, lightY);
      cable.addColorStop(0, "rgba(205,222,225,0)");
      cable.addColorStop(0.75, `rgba(205,222,225,${0.04 + progress * 0.05})`);
      cable.addColorStop(1, `rgba(205,222,225,${0.09 + progress * 0.08})`);
      ctx.strokeStyle = cable;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(lightX, cableStartY);
      ctx.lineTo(lightX, lightY);
      ctx.stroke();

      ctx.save();
      ctx.filter = "blur(7px)";
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${0.55 * intensity})`;
      ctx.arc(lightX, lightY, 11 + progress * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${0.95 * intensity})`;
      ctx.arc(lightX, lightY, 2.3, 0, Math.PI * 2);
      ctx.fill();

      applyDomUpdates();
    };

    const loop = (time: number) => {
      updateProgress();
      draw(time);
      raf = requestAnimationFrame(loop);
    };

    const staticRedraw = () => {
      updateProgress();
      draw(0);
    };

    resize();
    seed();

    if (prefersReducedMotion) {
      staticRedraw();
      window.addEventListener("scroll", staticRedraw, { passive: true });
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      seed();
      if (prefersReducedMotion) staticRedraw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", staticRedraw);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <div
      ref={containerRef}
      style={{ height: `${totalSections * 100}vh` }}
      className="relative bg-abyss"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 block h-full w-full" />

        <div className="pointer-events-none absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-3 md:right-12 md:flex">
          <div className="relative h-44 w-px overflow-hidden bg-white/15">
            <div
              ref={depthLineRef}
              className="absolute inset-x-0 top-0 h-full origin-top bg-acid"
              style={{ transform: "scaleY(0)" }}
            />
          </div>
          <span ref={depthLabelRef} className="text-sm tracking-wide text-bone/80">
            {`0 ${DEPTH_UNIT[locale]}`}
          </span>
        </div>
        <div className="pointer-events-none absolute right-4 top-4 z-20 md:hidden">
          <span ref={depthLabelMobileRef} className="text-xs tracking-wide text-bone/70">
            {`0 ${DEPTH_UNIT[locale]}`}
          </span>
        </div>

        <div
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
        >
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 !text-[0.9375rem] md:!text-[1.09375rem]">{intro.eyebrow}</p>
            <h2 className="text-[2.34375rem] font-thin leading-tight text-white md:text-6xl">
              {intro.heading}
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-white md:text-[1.40625rem]">
              {intro.paragraph}
            </p>
          </div>
        </div>

        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              ref={(el) => {
                sectionRefs.current[i + 1] = el;
              }}
              className="pointer-events-none absolute inset-0 z-10 flex items-center px-6 md:px-16"
            >
              <div className="mx-auto max-w-2xl md:mx-0">
                <div className="flex items-center gap-3 text-acid">
                  <Icon className="h-[1.875rem] w-[1.875rem]" />
                  <span className="text-[1.09375rem] font-medium">{pillar.number}</span>
                </div>
                <h3 className="mt-4 text-3xl font-thin leading-[1.5] text-white md:text-[2.8125rem]">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-lg text-xl leading-relaxed text-white md:text-[1.40625rem]">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
