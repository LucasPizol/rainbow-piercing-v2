"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

const PiercingScene = dynamic(
  () => import("./PiercingScene").then((mod) => mod.PiercingScene),
  { ssr: false, loading: () => null }
);

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

/**
 * Só carrega o bundle 3D quando o aparelho dá conta e o visitante não pediu
 * menos movimento. Fora isso, entrega o `fallback` — as imagens originais.
 */
export const HeroCanvas = ({ fallback }: { fallback: ReactNode }) => {
  const [mode, setMode] = useState<"pending" | "webgl" | "fallback">("pending");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isNarrow = window.matchMedia("(max-width: 640px)").matches;
    const hasWeakCPU = (navigator.hardwareConcurrency ?? 8) <= 2;

    setMode(
      !prefersReducedMotion && !isNarrow && !hasWeakCPU && supportsWebGL()
        ? "webgl"
        : "fallback"
    );
  }, []);

  if (mode === "pending") return null;
  if (mode === "fallback") return <>{fallback}</>;

  return <PiercingScene />;
};
