"use client";

import { motion } from "framer-motion";

// Continuous crossfade cycle, no dead pause:
// Line "A" (primary) is fully visible for HOLD_DUR, then crossfades out
// while the other line crossfades in over CROSS_DUR, holds, then they
// crossfade back. Total cycle = HOLD_DUR*2 + CROSS_DUR*2 = 8.5s.
const HOLD_DUR = 2.75;
const CROSS_DUR = 1.5;
const FADE_DUR = 0.6;

const T1 = HOLD_DUR;
const T2 = T1 + CROSS_DUR;
const T3 = T2 + HOLD_DUR;
const T4 = T3 + CROSS_DUR;
const CYCLE_SECONDS = T4;

export default function StaggeredWords({
  text,
  direction = "ltr",
  className = "",
  role = "primary",
}: {
  text: string;
  direction?: "ltr" | "rtl";
  className?: string;
  /** "primary" starts fully visible each cycle; "secondary" starts hidden. */
  role?: "primary" | "secondary";
}) {
  const words = text.split(" ");
  const n = words.length;
  const offset = direction === "rtl" ? 28 : -28;
  const stagger = n > 1 ? (CROSS_DUR - FADE_DUR - 0.01) / (n - 1) : 0;

  return (
    <span className={className}>
      {words.map((w, i) => {
        const order = direction === "rtl" ? n - 1 - i : i;
        const windowAStart = T1 + order * stagger;
        const windowAEnd = windowAStart + FADE_DUR;
        const windowBStart = T3 + order * stagger;
        const windowBEnd = windowBStart + FADE_DUR;
        const times = [0, windowAStart, windowAEnd, windowBStart, windowBEnd, CYCLE_SECONDS].map(
          (t) => t / CYCLE_SECONDS
        );

        const opacity =
          role === "primary" ? [1, 1, 0, 0, 1, 1] : [0, 0, 1, 1, 0, 0];
        const x =
          role === "primary"
            ? [0, 0, offset, offset, 0, 0]
            : [offset, offset, 0, 0, offset, offset];

        return (
          <span key={i}>
            <motion.span
              animate={{ opacity, x }}
              transition={{
                duration: CYCLE_SECONDS,
                repeat: Infinity,
                repeatType: "loop",
                times,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {w}
            </motion.span>
            {i < n - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}
