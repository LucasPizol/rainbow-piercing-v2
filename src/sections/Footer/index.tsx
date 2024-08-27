import { SVG } from "@/components/svg";
import styles from "./styles.module.css";

import logoRainbow from "@/assets/logo-rainbow.jpg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        width={100}
        height={100}
        src={logoRainbow.src}
        alt="Imagem logo Rainbow Piercing"
      />

      <nav>
        <a>Início</a>
        <a>Qualidades</a>
        <a>Catálogo</a>
        <a>Aplicações</a>
        <a>Feedbacks</a>
      </nav>

      <div>
        <SVG.Whatsapp
          style={{
            width: 30,
            height: 30,
            fill: "#fff",
            marginRight: 10,
            cursor: "pointer",
          }}
        />

        <SVG.Instagram
          style={{
            width: 30,
            height: 30,
            fill: "#fff",
            marginRight: 10,
            cursor: "pointer",
          }}
        />
      </div>

      <div
        style={{
          color: "#fff",
          fontSize: 12,
          fontWeight: 300,
        }}
      >
        <p>© 2024 Todos os direitos reservados</p>
        <p>Feito com ❤️ por Lucas Pizol</p>
      </div>
    </footer>
  );
};
