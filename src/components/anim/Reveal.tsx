"use client";

import { animate, stagger, utils } from "animejs";
import { useEffect, useRef, type ElementType, type ReactNode } from "react";

import { useReducedMotion } from "./useReducedMotion";

type RevealProps = {
  children: ReactNode;
  /** Quando informado, anima os filhos que casam com este seletor, em cascata. */
  selector?: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Distância de entrada em px. Negativo entra de cima. */
  distance?: number;
  duration?: number;
  staggerBy?: number;
  id?: string;
};

/**
 * Entrada de conteúdo amarrada ao scroll: o elemento anima ao entrar na
 * viewport, uma única vez.
 *
 * O gatilho é um IntersectionObserver, não o onScroll do anime.js: um salto
 * grande de rolagem — clique numa âncora do menu, Ctrl+End, restauração de
 * posição ao recarregar — pode cruzar as duas bordas do observador de scroll
 * no mesmo frame e deixar a seção presa em opacity 0. O IntersectionObserver
 * responde ao estado final, então isso não acontece. A animação em si continua
 * sendo do anime.js.
 *
 * O estado inicial é aplicado por JS, nunca por CSS — assim, se o bundle
 * falhar, o conteúdo continua visível em vez de sumir para sempre.
 */
export const Reveal = ({
  children,
  selector,
  as: Tag = "div",
  className,
  delay = 0,
  distance = 28,
  duration = 780,
  staggerBy = 90,
  id,
}: RevealProps) => {
  const container = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = container.current;
    if (!root || reduced) return;

    const targets = selector
      ? Array.from(root.querySelectorAll<HTMLElement>(selector))
      : [root];

    if (!targets.length) return;

    const show = () => utils.set(targets, { opacity: 1, translateY: 0 });

    utils.set(targets, { opacity: 0, translateY: distance });

    const animation = animate(targets, {
      opacity: 1,
      translateY: 0,
      duration,
      delay: selector ? stagger(staggerBy, { start: delay }) : delay,
      ease: "out(3)",
      autoplay: false,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        animation.play();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      animation.revert();
      show();
    };
  }, [reduced, selector, delay, distance, duration, staggerBy]);

  return (
    <Tag ref={container as never} className={className} id={id}>
      {children}
    </Tag>
  );
};
