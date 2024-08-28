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
        <a
          href="https://api.whatsapp.com/send?phone=5535999422529&text=Ol%C3%A1!%20Gostaria%20de%20ver%20seu%20cat%C3%A1logo%20de%20piercings!"
          target="_blank"
        >
          <SVG.Whatsapp
            style={{
              width: 30,
              height: 30,
              fill: "#fff",
              marginRight: 10,
              cursor: "pointer",
            }}
          />
        </a>

        <a href="https://instagram.com/rainbowpiercing04" target="_blank">
          <SVG.Instagram
            style={{
              width: 30,
              height: 30,
              fill: "#fff",
              marginRight: 10,
              cursor: "pointer",
            }}
          />
        </a>
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
