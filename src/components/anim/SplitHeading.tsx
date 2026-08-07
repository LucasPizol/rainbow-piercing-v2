"use client";

import { animate, stagger, text, utils } from "animejs";
import { useEffect, useRef, type ReactNode } from "react";

import { useReducedMotion } from "./useReducedMotion";

/**
 * Título do hero entrando palavra por palavra.
 *
 * O texto vai completo no HTML do servidor — o splitText só entra depois da
 * hidratação, então busca e leitor de tela leem a frase inteira do mesmo jeito.
 */
export const SplitHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const heading = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = heading.current;
    if (!element || reduced) return;

    const splitter = text.splitText(element, {
      words: { wrap: "clip" },
      chars: false,
      accessible: true,
    });

    utils.set(splitter.words, { opacity: 0, translateY: "100%" });

    const animation = animate(splitter.words, {
      opacity: 1,
      translateY: "0%",
      duration: 900,
      delay: stagger(70),
      ease: "out(3)",
    });

    return () => {
      animation.revert();
      splitter.revert();
    };
  }, [reduced]);

  return (
    <h1 ref={heading} className={className}>
      {children}
    </h1>
  );
};
