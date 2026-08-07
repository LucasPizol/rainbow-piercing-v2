"use client";

import { animate, utils } from "animejs";
import { useEffect, useRef } from "react";

import { useReducedMotion } from "./useReducedMotion";

type CountUpProps = {
  to: number;
  /** Casas decimais — 1 para "5,0", 0 para "100". */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

const formatter = (decimals: number) =>
  new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/**
 * Número que sobe de 0 até o valor quando a seção entra na tela.
 *
 * O valor final já vai renderizado no HTML: quem não roda JS, ou pediu menos
 * movimento, lê o número certo direto.
 */
export const CountUp = ({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
  className,
}: CountUpProps) => {
  const node = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = node.current;
    if (!element || reduced) return;

    const format = formatter(decimals);
    const counter = { value: 0 };
    const render = () => {
      element.textContent = `${prefix}${format.format(counter.value)}${suffix}`;
    };

    render();

    const animation = animate(counter, {
      value: to,
      duration,
      ease: "out(4)",
      modifier: (value: number) => utils.round(value, decimals),
      onUpdate: render,
      autoplay: false,
    });

    // Mesmo motivo do Reveal: um salto de rolagem não pode deixar o número em 0.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        animation.play();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      animation.revert();
      counter.value = to;
      render();
    };
  }, [to, decimals, prefix, suffix, duration, reduced]);

  return (
    <span ref={node} className={className}>
      {prefix}
      {formatter(decimals).format(to)}
      {suffix}
    </span>
  );
};
