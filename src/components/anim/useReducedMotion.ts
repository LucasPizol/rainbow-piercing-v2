"use client";

import { useEffect, useState } from "react";

/**
 * Quem pediu menos movimento no sistema recebe a página inteira parada.
 * Todos os componentes de animação consultam isto antes de tocar no DOM.
 */
export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
};
