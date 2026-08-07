"use client";

import { animate, stagger, utils } from "animejs";
import { useEffect, useRef, type ReactNode } from "react";

import { useReducedMotion } from "./useReducedMotion";

/**
 * Entrada do hero no carregamento: os elementos marcados com [data-hero-item]
 * sobem em cascata, logo depois do título.
 *
 * Anima no mount, não no scroll — o hero já está na tela quando a página abre.
 */
export const HeroIntro = ({
  children,
  className,
  delay = 260,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = container.current;
    if (!root || reduced) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>("[data-hero-item]")
    );
    if (!items.length) return;

    utils.set(items, { opacity: 0, translateY: 22 });

    const animation = animate(items, {
      opacity: 1,
      translateY: 0,
      duration: 820,
      delay: stagger(120, { start: delay }),
      ease: "out(3)",
    });

    return () => {
      animation.revert();
      utils.set(items, { opacity: 1, translateY: 0 });
    };
  }, [reduced, delay]);

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};
