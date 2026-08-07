"use client";

import { animate, onScroll } from "animejs";
import { useEffect, useRef } from "react";

import { useReducedMotion } from "./useReducedMotion";

/**
 * Fio de progresso na base do header.
 *
 * Usa onScroll com sync: true — em vez de disparar e rodar sozinha, a animação
 * fica amarrada à posição da rolagem, então a barra acompanha o dedo do
 * visitante nos dois sentidos.
 */
export const ScrollProgress = ({ className }: { className?: string }) => {
  const bar = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = bar.current;
    if (!element || reduced) return;

    const animation = animate(element, {
      scaleX: [0, 1],
      ease: "linear",
      autoplay: onScroll({
        target: document.body,
        enter: "top top",
        leave: "bottom bottom",
        sync: true,
      }),
    });

    return () => {
      animation.revert();
    };
  }, [reduced]);

  return <div ref={bar} className={className} aria-hidden />;
};
