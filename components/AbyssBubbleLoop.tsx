"use client";

import { useEffect, useRef } from "react";

type Glint = {
  baseX: number;
  baseY: number;
  ax: number;
  ay: number;
  phase: number;
  r: number;
  accent: boolean;
  shine: boolean;
  shineSpeed: number;
  shinePhase: number;
};

type Orb = {
  baseX: number;
  baseY: number;
  ax: number;
  ay: number;
  phase: number;
  r: number;
};

const BASE_PERIOD_SECONDS = 20;
const SPEED_MULTIPLIER = 1.4;

export default function AbyssBubbleLoop({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let glints: Glint[] = [];
    let orbs: Orb[] = [];
    let animationFrame = 0;
    let cancelled = false;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const buildScene = () => {
      glints = Array.from({ length: 126 }, () => ({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        ax: Math.random() * 34 + 10,
        ay: Math.random() * 34 + 10,
        phase: Math.random() * Math.PI * 2,
        r: Math.random() * 1.3 + 0.6,
        accent: Math.random() < 0.1,
        shine: Math.random() < 0.2,
        shineSpeed: Math.random() * 0.6 + 0.3,
        shinePhase: Math.random() * Math.PI * 2,
      }));

      orbs = Array.from({ length: 13 }, () => ({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        ax: Math.random() * 55 + 25,
        ay: Math.random() * 55 + 25,
        phase: Math.random() * Math.PI * 2,
        r: Math.random() * 80 + 60,
      }));
    };

    const drawBackground = () => {
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "#031522");
      g.addColorStop(0.55, "#010b16");
      g.addColorStop(1, "#000E19");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    };

    const step = (now: number) => {
      if (cancelled) return;
      // No modulo wrap here: each particle's own sine/cosine is already
      // perfectly periodic forever, so this stays seamless while letting
      // the angle grow past a fixed "loop" boundary. SPEED_MULTIPLIER
      // scales how fast that angle advances (i.e. how fast bubbles move).
      const t = (now / 1000) * SPEED_MULTIPLIER;
      const angle = (2 * Math.PI * t) / BASE_PERIOD_SECONDS;

      drawBackground();

      ctx.filter = "blur(26px)";
      for (const o of orbs) {
        const x = o.baseX + o.ax * Math.sin(angle + o.phase);
        const y = o.baseY + o.ay * Math.cos(angle * 1.2 + o.phase * 1.2);
        ctx.beginPath();
        ctx.fillStyle = "rgba(60, 130, 150, 0.035)";
        ctx.arc(x, y, o.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.filter = "none";

      for (const p of glints) {
        const x = p.baseX + p.ax * Math.sin(angle + p.phase);
        const y = p.baseY + p.ay * Math.cos(angle * 1.3 + p.phase * 1.3);

        let alpha = p.accent ? 0.09 : 0.1;
        if (p.shine) {
          const twinkle =
            0.5 + 0.5 * Math.sin(t * p.shineSpeed * 2 * Math.PI + p.shinePhase);
          alpha = alpha + twinkle * 0.35;
        }

        ctx.beginPath();
        ctx.fillStyle = p.accent
          ? `rgba(174, 235, 22, ${alpha})`
          : `rgba(226, 240, 242, ${alpha})`;
        ctx.arc(x, y, p.shine ? p.r + 0.4 : p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    resize();
    buildScene();
    if (prefersReducedMotion) {
      drawBackground();
      for (const p of glints) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(210, 232, 235, 0.1)";
        ctx.arc(p.baseX, p.baseY, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      animationFrame = requestAnimationFrame(step);
    }

    const handleResize = () => {
      resize();
      buildScene();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block ${className}`}
    />
  );
}
