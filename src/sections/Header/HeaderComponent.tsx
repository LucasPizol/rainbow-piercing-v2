"use client";

import { useEffect, useState, type ReactNode } from "react";

import { ScrollProgress } from "@/components/anim/ScrollProgress";

import styles from "./styles.module.css";

export const HeaderComponent = ({ children }: { children: ReactNode }) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsFilled(window.scrollY > 50);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={styles.headerBar}
      style={{
        backgroundColor: isFilled ? "rgba(255, 255, 255, 0.92)" : "transparent",
        backdropFilter: isFilled ? "blur(10px)" : "none",
        boxShadow: isFilled ? "0 4px 20px 0 rgba(36, 26, 61, 0.1)" : "none",
        paddingBlock: isFilled ? 8 : 18,
      }}
    >
      <header className={styles.header}>{children}</header>
      <ScrollProgress className={styles.progress} />
    </div>
  );
};
