"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  animate as animateValue,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import {
  Compass,
  Globe2,
  BrainCircuit,
  ShieldCheck,
  Blocks,
  Target,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

type Locale = "es" | "en";
type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;

type Pillar = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
};

const COPY: Record<
  Locale,
  { eyebrow: string; heading: string; paragraph: string; pillars: Pillar[] }
> = {
  es: {
    eyebrow: "Desarrolla",
    heading: "La diferencia Abisal",
    paragraph:
      "Vamos más allá del desafío aparente para comprender de forma integral el negocio y el entorno en el que opera. Desde esa perspectiva, diseñamos marcos de trabajo y aplicaciones inteligentes adaptadas a las necesidades reales de cada organización, orientadas al desarrollo de capacidades sostenibles, repetibles y escalables que se traduzcan en creación de valor, crecimiento y resultados medibles.",
    pillars: [
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
        title: "Aplicación inteligente de la IA",
        description:
          "Integramos la IA donde puede generar mayor valor y apalancamiento para el negocio, trascendiendo la eficiencia, el ahorro y la optimización del desempeño.",
        icon: BrainCircuit,
      },
      {
        number: "04",
        title: "Aplicación responsable de la IA",
        description:
          "Incorporamos criterios éticos, de transparencia y supervisión humana para asegurar una aplicación responsable y alineada con la realidad de cada organización.",
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
          "Superamos la experimentación para desarrollar capacidades y nuevas formas de trabajo sostenibles, repetibles y escalables.",
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
  },
  en: {
    eyebrow: "Build smarter",
    heading: "The Abisal Difference",
    paragraph:
      "We look beneath the surface of each challenge to understand the business and its operating environment as a whole. From that perspective, we design tailored frameworks and intelligent applications around each organization's real needs building sustainable, repeatable, and scalable capabilities that drive value creation, growth, and measurable results.",
    pillars: [
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
  },
};

const GAP_DEG = 4;
const INNER_R = 30;
const OUTER_R = 47;
const NUMBER_R = INNER_R + (OUTER_R - INNER_R) * 0.5;
const TRAIL_R = OUTER_R + 7;

function polarToPercent(radiusPct: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: 50 + radiusPct * Math.cos(rad),
    y: 50 + radiusPct * Math.sin(rad),
  };
}

function donutSegmentPath(
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number,
  fillet = 0
) {
  const toXY = (r: number, a: number) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return { x: 50 + r * Math.cos(rad), y: 50 + r * Math.sin(rad) };
  };
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

  if (!fillet) {
    const p1 = toXY(outerR, endAngle);
    const p2 = toXY(outerR, startAngle);
    const p3 = toXY(innerR, startAngle);
    const p4 = toXY(innerR, endAngle);
    return [
      `M ${p1.x} ${p1.y}`,
      `A ${outerR} ${outerR} 0 ${largeArc} 0 ${p2.x} ${p2.y}`,
      `L ${p3.x} ${p3.y}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 1 ${p4.x} ${p4.y}`,
      "Z",
    ].join(" ");
  }

  // Rounded-outer-corner variant: the two outer corners get a filleted curve
  // (the two inner corners stay sharp since they sit behind the center hub).
  const maxFillet = Math.max((endAngle - startAngle) / 2 - 0.6, 0);
  const filletDeg = Math.min((fillet / outerR) * (180 / Math.PI), maxFillet);

  const cornerEnd = toXY(outerR, endAngle);
  const cornerStart = toXY(outerR, startAngle);
  const arcBeginNearEnd = toXY(outerR, endAngle - filletDeg);
  const arcBeginNearStart = toXY(outerR, startAngle + filletDeg);
  const insetNearEnd = toXY(outerR - fillet, endAngle);
  const insetNearStart = toXY(outerR - fillet, startAngle);
  const p3 = toXY(innerR, startAngle);
  const p4 = toXY(innerR, endAngle);

  return [
    `M ${arcBeginNearEnd.x} ${arcBeginNearEnd.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${arcBeginNearStart.x} ${arcBeginNearStart.y}`,
    `Q ${cornerStart.x} ${cornerStart.y} ${insetNearStart.x} ${insetNearStart.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${p4.x} ${p4.y}`,
    `L ${insetNearEnd.x} ${insetNearEnd.y}`,
    `Q ${cornerEnd.x} ${cornerEnd.y} ${arcBeginNearEnd.x} ${arcBeginNearEnd.y}`,
    "Z",
  ].join(" ");
}

// Always-forward (clockwise) angular delta from a to b, even if that means
// nearly a full turn.
function clockwiseDelta(a: number, b: number) {
  const d = (b - a) % 360;
  return d < 0 ? d + 360 : d;
}

// Open arc (no fill) between two angles at a given radius, for the comet trail.
function arcPath(radius: number, a1: number, a2: number) {
  const toXY = (a: number) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
  };
  const p1 = toXY(a1);
  const p2 = toXY(a2);
  const largeArc = Math.abs(a2 - a1) > 180 ? 1 : 0;
  const sweep = a2 >= a1 ? 1 : 0;
  return `M ${p1.x} ${p1.y} A ${radius} ${radius} 0 ${largeArc} ${sweep} ${p2.x} ${p2.y}`;
}

function splitWords(text: string) {
  return text.split(" ");
}

const panelVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
  exit: {},
};
const numberFade = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
};
const lineDraw = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { scaleX: 0, transition: { duration: 0.15 } },
};
const titleContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.02 } },
};
const wordReveal = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: "-110%", transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};
const paraFade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export default function AbisalDifference({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = COPY[locale];
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [pointerFine, setPointerFine] = useState(false);
  const [trail, setTrail] = useState<{ from: number; angle: number; visible: boolean }>({
    from: 0,
    angle: 0,
    visible: false,
  });
  const activeAngleRef = useRef(0);
  const reduceMotion = useReducedMotion();

  const n = t.pillars.length;
  const segment = 360 / n;
  const ActiveIcon = t.pillars[active].icon;

  const angles = (i: number) => {
    const start = i * segment + GAP_DEG / 2;
    const end = (i + 1) * segment - GAP_DEG / 2;
    return { start, end, mid: (start + end) / 2 };
  };

  useEffect(() => {
    activeAngleRef.current = angles(0).mid;
    if (typeof window !== "undefined" && window.matchMedia) {
      setPointerFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectSegment = (i: number) => {
    if (i === active) return;
    const fromAngle = activeAngleRef.current;
    const toAngle = angles(i).mid;
    setActive(i);
    activeAngleRef.current = toAngle;

    if (reduceMotion) return;

    const delta = clockwiseDelta(fromAngle, toAngle);
    setTrail({ from: fromAngle, angle: fromAngle, visible: true });
    animateValue(fromAngle, fromAngle + delta, {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setTrail({ from: fromAngle, angle: v, visible: true }),
      onComplete: () => setTrail((s) => ({ ...s, visible: false })),
    });
  };

  useEffect(() => {
    if (reduceMotion) return;
    if (hovered !== null) return;
    const id = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % n;
        const fromAngle = activeAngleRef.current;
        const toAngle = angles(next).mid;
        activeAngleRef.current = toAngle;
        const delta = clockwiseDelta(fromAngle, toAngle);
        setTrail({ from: fromAngle, angle: fromAngle, visible: true });
        animateValue(fromAngle, fromAngle + delta, {
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setTrail({ from: fromAngle, angle: v, visible: true }),
          onComplete: () => setTrail((s) => ({ ...s, visible: false })),
        });
        return next;
      });
    }, 10000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered, reduceMotion, n]);

  const handleKeyDown = (e: KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectSegment(i);
    }
  };

  const handleMouseMove = (e: MouseEvent<SVGPathElement>) => {
    if (!pointerFine || reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -ny * 5, ry: nx * 5 });
  };

  const trailPos = polarToPercent(TRAIL_R, trail.angle);

  return (
    <section
      id="abisal-difference"
      className="relative overflow-hidden bg-deepblue section-pad"
    >
      <Image
        src="/brand/texture-dark-dots-mark.jpg"
        alt=""
        fill
        className="object-cover object-right opacity-20"
        aria-hidden="true"
      />
      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-3xl font-thin leading-tight text-bone md:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-6 max-w-none text-base leading-relaxed text-coolgray">
            {t.paragraph}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6"
          >
            <div
              className="relative mx-auto aspect-square w-full max-w-md"
              style={{ perspective: 900 }}
            >
              {!reduceMotion && (
                <motion.div
                  key={`pulse-${active}`}
                  initial={{ opacity: 0.35, scale: 0.85 }}
                  animate={{ opacity: 0, scale: 1.25 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(174,235,22,0.18) 0%, rgba(174,235,22,0) 70%)",
                  }}
                />
              )}

              {!reduceMotion && (
                <div className="absolute inset-0 hidden rounded-full border border-dashed border-white/[0.07] motion-safe:animate-[spin_200s_linear_infinite] sm:block" />
              )}

              <svg viewBox="0 0 100 100" className="relative h-full w-full overflow-visible">
                <defs>
                  <linearGradient id="abisalActiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6f9410" />
                    <stop offset="100%" stopColor="#AEEB16" />
                  </linearGradient>
                  <linearGradient id="abisalIdleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.09)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
                  </linearGradient>
                  <filter id="abisalGlowSoft" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {t.pillars.map((pillar, i) => {
                  const { start, end, mid } = angles(i);
                  const isActive = active === i;
                  const isHovered = hovered === i;
                  const dim = hovered !== null && !isHovered && !isActive;
                  const liftDist = isHovered && !reduceMotion ? 1.6 : 0;
                  const rad = ((mid - 90) * Math.PI) / 180;
                  const dx = Math.cos(rad) * liftDist;
                  const dy = Math.sin(rad) * liftDist;
                  const scale = isHovered && !reduceMotion ? 1.045 : isActive ? 1.012 : 1;

                  return (
                    <path
                      key={pillar.number}
                      d={donutSegmentPath(INNER_R, OUTER_R, start, end, 3)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${pillar.number}. ${pillar.title}`}
                      aria-pressed={isActive}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => {
                        setHovered(null);
                        setTilt({ rx: 0, ry: 0 });
                      }}
                      onMouseMove={handleMouseMove}
                      onFocus={() => setHovered(i)}
                      onBlur={() => setHovered(null)}
                      onClick={() => selectSegment(i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      className={`cursor-pointer outline-none transition-[transform,opacity,filter,stroke] duration-500 ease-out focus-visible:stroke-acid focus-visible:stroke-[1.5] ${
                        isActive && !reduceMotion ? "animate-pulse" : ""
                      }`}
                      style={{
                        transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
                        transformOrigin: "center",
                        transformBox: "fill-box",
                        opacity: dim ? 0.65 : 1,
                        fill: isActive ? "url(#abisalActiveGrad)" : "url(#abisalIdleGrad)",
                        stroke: isActive
                          ? "rgba(174,235,22,0.9)"
                          : isHovered
                          ? "rgba(174,235,22,0.45)"
                          : "rgba(148,180,200,0.14)",
                        strokeWidth: isActive ? 0.6 : 0.5,
                        filter: isActive
                          ? "url(#abisalGlowSoft) drop-shadow(0 0 9px rgba(174,235,22,0.55))"
                          : isHovered
                          ? "drop-shadow(0 0 5px rgba(174,235,22,0.3))"
                          : undefined,
                      }}
                    />
                  );
                })}

                {trail.visible && (
                  <>
                    <path
                      d={arcPath(TRAIL_R, trail.from, trail.angle)}
                      fill="none"
                      stroke="#AEEB16"
                      strokeWidth={0.6}
                      strokeLinecap="round"
                      className="pointer-events-none"
                      style={{
                        opacity: 0.55,
                        filter: "drop-shadow(0 0 3px rgba(174,235,22,0.6))",
                      }}
                    />
                    <circle
                      cx={trailPos.x}
                      cy={trailPos.y}
                      r={1.3}
                      className="pointer-events-none fill-acid"
                      style={{ filter: "drop-shadow(0 0 4px rgba(174,235,22,0.9))" }}
                    />
                  </>
                )}
              </svg>

              {t.pillars.map((pillar, i) => {
                const { mid } = angles(i);
                const numberPos = polarToPercent(NUMBER_R, mid);
                const isActive = active === i;
                const isHovered = hovered === i && pointerFine && !reduceMotion;
                const rx = isHovered ? tilt.rx : 0;
                const ry = isHovered ? tilt.ry : 0;
                return (
                  <div key={pillar.number} className="pointer-events-none absolute inset-0">
                    <span
                      className={`absolute -translate-x-1/2 -translate-y-1/2 text-sm font-semibold transition-colors duration-300 md:text-base ${
                        isActive ? "text-abyss" : "text-bone/55"
                      }`}
                      style={{
                        left: `${numberPos.x}%`,
                        top: `${numberPos.y}%`,
                        transform: `translate(-50%, -50%) translateY(${
                          hovered === i ? -1 : 0
                        }px) rotateX(${rx}deg) rotateY(${ry}deg)`,
                        transformStyle: "preserve-3d",
                        transition: "transform 300ms ease-out, color 300ms ease-out",
                      }}
                    >
                      {pillar.number}
                    </span>
                  </div>
                );
              })}

              <div
                className="absolute inset-0 m-auto flex h-[58%] w-[58%] items-center justify-center rounded-full bg-abyss transition-shadow duration-500"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(174,235,22,0.3), 0 0 24px 4px rgba(174,235,22,0.12)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ActiveIcon className="h-10 w-10 animate-pulse text-acid md:h-12 md:w-12" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-6" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={panelVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.span
                  variants={numberFade}
                  className="block text-sm font-medium text-acid"
                >
                  {t.pillars[active].number}
                </motion.span>
                <motion.span
                  variants={lineDraw}
                  className="mt-2 block h-px w-10 origin-left bg-acid"
                />
                <motion.h3
                  variants={titleContainer}
                  className="mt-4 flex flex-wrap gap-x-[0.35em] text-2xl font-medium text-bone md:text-3xl"
                >
                  {splitWords(t.pillars[active].title).map((word, wi) => (
                    <span key={wi} className="overflow-hidden">
                      <motion.span variants={wordReveal} className="inline-block">
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </motion.h3>
                <motion.p
                  variants={paraFade}
                  className="mt-4 max-w-lg text-base leading-relaxed text-mutedgray"
                >
                  {t.pillars[active].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
