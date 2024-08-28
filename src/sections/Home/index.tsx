import { TypographySubtitle, TypographyTitle } from "@/components/typography";
import imgPercingArgola from "@/assets/piercing-argola.png";
import imgPercingArgola2 from "@/assets/piercing-argola-2.png";
import imgPiercingTransversal from "@/assets/piercing-transversal.png";
import { motion } from "framer-motion";
import { Button } from "@/components/button";

import styles from "./styles.module.css";
import { Motion } from "@/components/motion";
import Image from "next/image";

export const HomeSection = () => {
  return (
    <section className={styles.homeSection}>
      <Motion
        initial={{ scale: 0 }}
        animate={{ rotate: 270, scale: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={styles.imgPiercingArgolaMotion}
      >
        <Image
          width={300}
          height={200}
          src={imgPercingArgola.src}
          alt="Piercing Argola"
        />
      </Motion>

      <Motion
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
        className={styles.imgPiercingArgola2Motion}
      >
        <Image
          width={300}
          height={200}
          src={imgPercingArgola2.src}
          alt="Piercing Argola"
        />
      </Motion>

      <Motion
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        className={styles.imgPiercingTransversalMotion}
      >
        <Image
          width={300}
          height={200}
          src={imgPiercingTransversal.src}
          alt="Piercing Argola"
        />
      </Motion>

      <div className={styles.content}>
        <TypographyTitle>RAINBOW PIERCING</TypographyTitle>
        <TypographySubtitle
          style={{
            fontWeight: 300,
            fontSize: 30,
            maxWidth: 600,
          }}
        >
          Há mais de 4 anos no mercado, a Rainbow Piercing é referência em
          qualidade e atendimento
        </TypographySubtitle>
        <div>
          <Button
            variant="primary"
            size="lg"
            href="https://instagram.com/rainbowpiercing04"
          >
            ENTRAR EM CONTATO
          </Button>
          <Button variant="secondary" size="lg">
            ACESSAR CATÁLOGO
          </Button>
        </div>
      </div>
    </section>
  );
};
