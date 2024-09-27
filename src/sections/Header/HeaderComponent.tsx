"use client";

import { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.css";

export const HeaderComponent = ({ children }: { children: ReactNode }) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsFilled(true);
      } else {
        setIsFilled(false);
      }
    });
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: isFilled ? "#fff" : "transparent",
        boxShadow: isFilled ? "0 4px 10px 0px rgba(0, 0, 0, 0.146)" : "none",
        padding: isFilled ? "10px 0" : "20px 0",
        transition: "all 0.3s",
      }}
    >
      {children}
    </header>
  );
};
