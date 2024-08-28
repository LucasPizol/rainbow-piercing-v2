"use client";

import { useEffect, useState } from "react";
import imgLogo from "@/assets/logo-rainbow.jpg";
import styles from "./styles.module.css";
import Image from "next/image";

export const Header = () => {
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
      <Image
        src={imgLogo.src}
        alt="Imagem logo Rainbow Piercing"
        width={60}
        height={60}
      />
      <nav>
        <a href="#inicio">Início</a>
        <a href="#qualidades">Qualidades</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#aplicacoes">Aplicações</a>
        <a href="#feedbacks">Feedbacks</a>
      </nav>
    </header>
  );
};
